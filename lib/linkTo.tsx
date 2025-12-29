export const scrollToContact = (link: string) => {
    const element = document.querySelector(`#${link}`)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}