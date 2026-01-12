const url = "https://raw.githubusercontent.com/SEU_USUARIO/galeria-anime/main/personagens.json";

fetch(url)
.then(res => res.json())
.then(data => {
  const lista = document.getElementById("lista");

  data.personagens.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.capa}">
      <span>${p.nome}</span>
    `;

    card.onclick = () => {
      window.location.href = `galeria.html?id=${p.id}`;
    };

    lista.appendChild(card);
  });
});
