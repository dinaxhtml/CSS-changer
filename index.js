const inputs= document.querySelectorAll(".css-controls input");

inputs.forEach((input)=>input.addEventListener("change",update));

function update() {
    const dataSizing= this.dataset.sizing || "";
    //change the :root values
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + dataSizing
    );
}