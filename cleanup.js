const fs = require('fs');
const path = require('path');

const lockFile = path.join(__dirname, 'pnpm-lock.yaml');
const nodeModules = path.join(__dirname, 'node_modules');

try {
    if (fs.existsSync(lockFile)) {
        console.log('Deleting pnpm-lock.yaml...');
        fs.unlinkSync(lockFile);
        console.log('Deleted pnpm-lock.yaml');
    } else {
        console.log('pnpm-lock.yaml not found');
    }

    if (fs.existsSync(nodeModules)) {
        console.log('Deleting node_modules...');
        fs.rmSync(nodeModules, { recursive: true, force: true });
        console.log('Deleted node_modules');
    } else {
        console.log('node_modules not found');
    }
} catch (error) {
    console.error('Error during cleanup:', error);
    process.exit(1);
}
