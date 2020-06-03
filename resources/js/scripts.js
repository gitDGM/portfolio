window.onload = function () {

    let sliderLeftController = document.querySelectorAll('#pagina main #projects .contenido_seccion .project .project-header .project-header-controller .controller-left');

    for (let i = 0; i < sliderLeftController.length; i++) {
        sliderLeftController[i].onclick = function () {
            changeSliderImage(this, -1);
        }
    }

    let sliderRightController = document.querySelectorAll('#pagina main #projects .contenido_seccion .project .project-header .project-header-controller .controller-right');

    for (let i = 0; i < sliderRightController.length; i++) {
        sliderRightController[i].onclick = function () {
            changeSliderImage(this, 1);
        }
    }



    let skillsArray = document.querySelectorAll('#pagina main #skills .contenido_seccion .skill');

    for (let i = 0; i < skillsArray.length; i++) {
        skillsArray[i].onclick = function () {
            toggleInfo(this);
        }
    }

    let companyArray = document.querySelectorAll('#pagina main #experience .contenido_seccion .company');

    for (let i = 0; i < companyArray.length; i++) {
        companyArray[i].onclick = function () {
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

    function changeSliderImage(clicked, m) {
        let i;
        let n = parseInt(clicked.parentElement.parentElement.dataset.slider);
        n = n + m;
        let x = clicked.parentElement.parentElement.querySelectorAll("img");
        let l = clicked.parentElement.parentElement.lastElementChild.children[0].children;
        if (n >= x.length) { n = 0 }
        if (n < 0) { n = x.length - 1 };
        console.log(n);
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            l[i].style.backgroundColor = "#FFFFFF";
        }
        x[n].style.display = "block";
        l[n].style.backgroundColor = "#ff4c60";
        clicked.parentElement.parentElement.dataset.slider = n;
    }

}