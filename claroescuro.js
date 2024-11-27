
const botaoAlternar = document.getElementById("botaoAlternar");

botaoAlternar.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
