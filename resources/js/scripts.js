window.onload = function () {
    var botonMenu = document.querySelector('#pagina #cabecera #botonMenuLateral');
    var botonQuitMenu = document.querySelector('#pagina #menuDesplegable #quitMenu');
    var menuDesplegable = document.querySelector('#pagina #menuDesplegable');

    botonMenu.onclick = function() {
        menuDesplegable.classList.toggle("animateMenu");
    }
    botonQuitMenu.onclick = function() {
        menuDesplegable.classList.toggle("animateMenu");
    }
}