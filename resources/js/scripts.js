window.onload = function () {

    let skillsInfo = document.querySelectorAll('#pagina main #skills .contenido_seccion .skill');

    
    for(let i = 0;i < skillsInfo.length;i++) {
        skillsInfo[i].onclick = function() {
            toggleSkillInfo(this);
        }
    }

    function toggleSkillInfo(skillClicked) {
        let infoSkill = skillClicked.children[1];
        let estado = infoSkill.children[0];
        if (estado.value == 0) {
            estado.value = 1;
            infoSkill.style.maxHeight = "500px";            
            infoSkill.style.padding = "10px 15px";
        } else {
            estado.value = 0;
            infoSkill.style.maxHeight = "0px";       
            infoSkill.style.padding = "0px 15px";
        }
    }

}