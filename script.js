//Script que permite detectar el click en el link del menú y agregar a las clases
//correspondientes para que luego con css se produzca el efecto dónde se mueve
//el indicador

const list= document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item)=>
    item.addEventListener('click',activeLink));