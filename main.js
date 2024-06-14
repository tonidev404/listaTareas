//Boton de añadir tarea
let button = document.getElementById('add-button');
//Dialog donde se introducen los datos de la tarea
let dialog =  document.querySelector('.dialog');
//Sección html donde se muestran las tareas
let tareas = document.getElementById('tareas-ul');
//Boton "Añadir" del dialog
let aceptar = document.getElementById('add');
//Botón "Cancelar" del dialog
let cancelar = document.getElementById('cancelar');
//Contador que incrementa el valor de las etiquetas conforme se van creando
let i = 0;

//Funcion que abre el dialog cuando se pulsa el botón de añadir
button.addEventListener('click', ()=>{
    dialog.showModal()
})
//Función que cierra el dialog cuando se pulsa el boton de cancelar
cancelar.addEventListener('click', ()=>{
    dialog.close()
    //Estas dos ultimas lineas reestablecen los valores del dialog
    let title = document.getElementById('input-title').value = "";
    let descripcion = document.getElementById('input-descripcion').value = "";
})

//Función que añade la tarea cuando se pulsa el botón de añadir
aceptar.addEventListener('click',()=>{
    //Esto añade las tareas al documento
    tareas.innerHTML += makeElement();
    //incrementa el contador de los valores, los cuales sirven para saber que elemento se borra después
    i++;
    //Se cierra la etiqueta dialog
    dialog.close();
    //Se reestablecen los valores de los formularios
    let title = document.getElementById('input-title').value = "";
    let descripcion = document.getElementById('input-descripcion').value = "";
    //Se actualiza la lista de tareas que hay en el documento
    let remove = document.querySelectorAll('.remove');
    //Un forEach que añade un eventListener a cada elemento
    remove.forEach(element=>{
        element.addEventListener('click', ()=>{
            parent = element.parentElement;
            parent.remove();
        })
    })
})






function makeElement(){
    let title = document.getElementById('input-title').value;
    let descripcion = document.getElementById('input-descripcion').value;
    return `<li class="tarea" value="element${i}">
                <div class="content-tarea">
                    <span class="title-tarea-text">${title}</span> 
                    <span class="descripcion-tarea-text">${descripcion}</span> 
                </div>    
                <button class="remove" value="remove${i}">
                    <i class="fa-solid fa-xmark borrar-tarea"></i>
                </button>
            </li> `
}