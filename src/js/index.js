const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    removerEadicionarSelecaoPersonagem(personagem);

    alterarImagemGrande(personagem);

    alterarNomePersonagem(personagem);

    alterarDescricaoPersonagem(personagem);
    alterarBolhaPersonagem(personagem);

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

function removerEadicionarSelecaoPersonagem(personagem) {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
  personagem.classList.add("selecionado");
}

function alterarImagemGrande(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}2.png`;
}
function alterarNomePersonagem(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}
function alterarDescricaoPersonagem(personagem) {
  const descricao = document.getElementById("descricao-personagem");
  descricao.innerText = personagem.getAttribute("data-description");
}

function alterarBolhaPersonagem(personagem) {
  const bolhasRiley = document.querySelector(".bolhas-riley");
  const bolhasRaiva = document.querySelector(".bolhas-raiva");
  const bolhasAlegria = document.querySelector(".bolhas-alegria");
  const bolhasNojinho = document.querySelector(".bolhas-nojinho");
  const bolhasMedo = document.querySelector(".bolhas-medo");
  const bolhasTristeza = document.querySelector(".bolhas-tristeza");

  const riley = document.getElementById("riley");
  riley.addEventListener("mouseenter", () => {
    bolhasMedo.style.display = "none";
    bolhasTristeza.style.display = "none";
    bolhasNojinho.style.display = "none";
    bolhasAlegria.style.display = "none";
    bolhasRaiva.style.display = "none";
    bolhasRiley.style.display = "flex";
  });
  const raiva = document.getElementById("raiva");
  raiva.addEventListener("mouseenter", () => {
    bolhasMedo.style.display = "none";
    bolhasTristeza.style.display = "none";
    bolhasNojinho.style.display = "none";
    bolhasRiley.style.display = "none";
    bolhasAlegria.style.display = "none";
    bolhasRaiva.style.display = "flex";
  });
  const alegria = document.getElementById("alegria");
  alegria.addEventListener("mouseenter", () => {
    bolhasMedo.style.display = "none";
    bolhasTristeza.style.display = "none";
    bolhasNojinho.style.display = "none";
    bolhasRiley.style.display = "none";
    bolhasRaiva.style.display = "none";
    bolhasAlegria.style.display = "flex";
  });
  const nojinho = document.getElementById("nojinho");
  nojinho.addEventListener("mouseenter", () => {
    bolhasMedo.style.display = "none";
    bolhasTristeza.style.display = "none";
    bolhasRiley.style.display = "none";
    bolhasRaiva.style.display = "none";
    bolhasAlegria.style.display = "none";
    bolhasNojinho.style.display = "flex";
  });
  const tristeza = document.getElementById("tristeza");
  tristeza.addEventListener("mouseenter", () => {
    bolhasMedo.style.display = "none";
    bolhasRiley.style.display = "none";
    bolhasRaiva.style.display = "none";
    bolhasAlegria.style.display = "none";
    bolhasNojinho.style.display = "none";
    bolhasTristeza.style.display = "flex";
  });
  const medo = document.getElementById("medo");
  medo.addEventListener("mouseenter", () => {
    bolhasRiley.style.display = "none";
    bolhasRaiva.style.display = "none";
    bolhasAlegria.style.display = "none";
    bolhasNojinho.style.display = "none";
    bolhasTristeza.style.display = "none";
    bolhasMedo.style.display = "flex";
  });
}
