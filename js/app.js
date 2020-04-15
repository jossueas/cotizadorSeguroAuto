//constructor quote

function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;



}

//Everyting  that  show
function Interfaz(){

}

//EventListerner
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
//read brand selected 
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

//Read year selected    

    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    console.log('presionado');
    console.log(anioSeleccionado);

    //Read radio button value

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    console.log(tipo);

});


const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value= i;
    option.innerHTML = i;
    selectAnios.appendChild(option);


}