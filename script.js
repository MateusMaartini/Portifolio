window.onload = function () {
  const lines = [
    'console.log("Bem-vindo ao meu portfólio!");',
    'let skills = ["Red Team | ", "Pentesting ", "Cybersecurity", "Developer Software"];',
    'document.getElementById("inicio").style.display = "block";', // Corrigido
  ];

  lines.forEach((line, index) => {
    setTimeout(() => {
      const codeLine = document.createElement("div");
      codeLine.className = "code-line";
      codeLine.textContent = line;
      document.querySelector(".code-container").appendChild(codeLine);
    }, index * 2000);
  });
};
//HABILIDADES
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

//Terminal
const hour = new Date().getHours();
document.body.className = hour >= 18 || hour < 6 ? "dark-mode" : "light-mode";
