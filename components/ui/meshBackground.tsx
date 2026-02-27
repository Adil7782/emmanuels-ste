"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = ({ id = "tsparticles" }: { id?: string }) => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Watch for theme changes via class attribute on html element
  useEffect(() => {
    // Initial check
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkTheme();

    // Create observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          checkTheme();
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => {
      // Set particle and link colors based on the detected theme
      const particleColor = isDarkMode ? "#ffffff" : "#000000";

      return {
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: particleColor,
          },
          links: {
            color: particleColor,
            distance: 140,
            enable: true,
            opacity: 0.25,   // softer
            width: 1,
          },
          move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: { default: OutMode.out },
            speed: 1.5,      // slower, more elegant
          },
          number: {
            density: {
              enable: true,
              area: 1000,    // spread them out more
            },
            value: 35,       // reduced from 80 → 35
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }, // smaller particles
        },
        detectRetina: true,
      };
    },
    [isDarkMode],
  );

  if (init) {
    return (
      <Particles
        id={id}
        key={isDarkMode ? "dark" : "light"}
        particlesLoaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    );
  }

  return <></>;
};