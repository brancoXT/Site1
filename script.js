document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");
    const words = ["Programador", "Desenvolvedor Web", "Criador de Bots", "Freelancer"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentText = "";
    let deleting = false;

    function typeEffect() {
        if (!deleting && letterIndex <= words[wordIndex].length) {
            currentText = words[wordIndex].substring(0, letterIndex);
            letterIndex++;
        } else if (deleting && letterIndex >= 0) {
            currentText = words[wordIndex].substring(0, letterIndex);
            letterIndex--;
        }

        textElement.textContent = currentText;

        if (!deleting && letterIndex === words[wordIndex].length) {
            setTimeout(() => (deleting = true), 1000);
        } else if (deleting && letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
});

// Função para exibir os botões de navegação ao clicar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}
