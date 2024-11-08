function typeText(element, text, delay = 100) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(interval);
  }, delay);
}
const codeContainer = document.querySelector(".code-container");
typeText(codeContainer, 'console.log("Bem-vindo ao meu portfólio!");');

// Seleciona a seção de habilidades

document.addEventListener("scroll", function () {
  const habilidadesSection = document.getElementById("habilidades");
  const sectionPosition = habilidadesSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  // Verifica se a seção está visível na tela
  if (sectionPosition < screenPosition) {
    habilidadesSection.classList.add("visible"); // Adiciona a classe visible
    habilidadesSection.classList.remove("hidden"); // Remove a classe hidden
  }
});

//Projetos

document.addEventListener("scroll", function () {
  const projetosSection = document.getElementById("projetos");
  const sectionPosition = projetosSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  // Verifica se a seção está visível na tela
  if (sectionPosition < screenPosition) {
    projetosSection.classList.add("visible"); // Adiciona a classe visible
    projetosSection.classList.remove("hidden"); // Remove a classe hidden
  }
});

const radioButtons = document.querySelectorAll("input[type=radio]");

const slideShow = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    setInterval(() => {
      console.log(i);
    }, 3000);
  }
};

slideShow();

console.log("Hello");

//Footer
