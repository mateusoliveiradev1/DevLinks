function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    //pegar a tag img
const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains("light")) {
    // Se tvier light mode, adicionar a imagem light    
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    //Se tiver light mode, mander a imagem original
    img.setAttribute("src", "./assets/avatar-1.png")
}


}



