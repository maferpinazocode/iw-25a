let colors = ["black", "green", "red"];
let index = 0;

setInterval(() => {
    document.querySelector("h1").style.color = colors[index];
    index = (index + 1) % colors.length; // Alterna entre los colores
}, 2000);
