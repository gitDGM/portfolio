window.onload = function () {

    let skillsArray = document.querySelectorAll('#pagina main #skills .contenido_seccion .skill');

    let companyArray = document.querySelectorAll('#pagina main #experience .contenido_seccion .company');
    

    
    for(let i = 0;i < skillsArray.length;i++) {
        skillsArray[i].onclick = function() {
            toggleInfo(this);
        }
    }

    for(let i = 0;i < companyArray.length;i++) {
        companyArray[i].onclick = function() {
            toggleInfo(this);
        }
    }


    function toggleInfo(clicked) {
        let infoClicked = clicked.children[1];
        let estado = infoClicked.children[0];
        if (estado.value == 0) {
            estado.value = 1;
            infoClicked.style.maxHeight = "500px";            
            infoClicked.style.padding = "10px 15px";
        } else {
            estado.value = 0;
            infoClicked.style.maxHeight = "0px";       
            infoClicked.style.padding = "0px 15px";
        }
    }

}