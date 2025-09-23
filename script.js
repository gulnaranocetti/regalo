// reinicio limpio: genera 3 regalos usando imágenes en /img
const premios = [
  "Vale por una merienda aesthetic☕🍰",
  "Vale por unas hamburguesitas🍔🍟",
  "🎬Vale por una película en el cine🍿",
];

// mezcla premios
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } }
shuffle(premios);

const regalosDiv = document.getElementById("regalos");
premios.forEach((texto, idx) => {
    const regalo = document.createElement("div");
    regalo.className = "regalo";
    regalo.tabIndex = 0;
    regalo.innerHTML = `
        <div class="box" data-index="${idx}">
        <div class="lid my-5"><img src="img/regalo.png" alt="lid"></div>
        <div class="premio">${texto}</div></div>
  `;
  regalosDiv.appendChild(regalo);

  const openGift = () => {
    // cerrar otros
    document.querySelectorAll(".regalo").forEach(r => {
      if (r !== regalo) r.classList.remove("abierto");
    });
    const abierto = regalo.classList.toggle("abierto");
    regalo.style.zIndex = abierto ? 1000 : 1;

    // aplicar clase global al contenedor
    const contenedor = document.body;
    if (abierto) {
      contenedor.classList.add("modo-foco");
      contenedor.getElementsByTagName("h1")[0].innerText = "Feliz cumpleaños❤️🎉";
    } else {
      contenedor.classList.remove("modo-foco");
      contenedor.getElementsByTagName("h1")[0].innerText = "¡Elige tu regalo!🎁✨";
  }
  };

  regalo.addEventListener("click", openGift);
  regalo.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGift(); }
  });
});
