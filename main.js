const Pizzas = [
    {
        id: 1,
        nombre: "Fugazzeta",
        ingredientes: ["Salsa de tomate", "Queso", "Cebolla"],
        precio: 550,
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso", "Rodajas de tomate", "Orégano", "Ajo"],
        precio: 500,
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Jamón", "Queso", "Orégano", "Huevo", "Pimientos"],
        precio: 500,
    },
    {
        id: 4,
        nombre: "Jamón y queso",
        ingredientes: ["Salsa de tomate", "Orégano", "Jamón", "Queso"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "Cantimpalo",
        ingredientes: ["Salsa de tomate", "Cantimpalo", "Queso", "Orégano", "Aceitunas"],
        precio: 550,
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Salsa de tomate", "Queso", "Rúcula", "Jamón crudo"],
        precio: 650,
    },
    {
        id: 7,
        nombre: "Panceta",
        ingredientes: ["Queso", "Orégano", "Panceta", "Aceitunas"],
        precio: 700,
    },
];

/* Definimos las constantes */
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

//Traemos elementos del LS si existen
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Grabamos en LS
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

const thisPizza = Pizzas.filter (Pizza => Pizza.id == tasks)


//Crear el elemento a renderizar 
const createHTML = (task) => {
    list.innerHTML = task.map (task =>{
    `
    <li class="card blue">
        <h2>${task.nombre}hola</h2>
        <h3>$${task.precio}</h3>
    </li>
    `}).join('');
    }

const wrongTask = (task) =>{
`
    <li class="card red">
        <h2>El id ${task} no coincide con ninguna pizza</h2>
    </li>
`};

const init = () => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const task = input.value;
        input.value = '';
        tasks = [...tasks, task];
        saveLocalStorage(tasks);
        createHTML(tasks, Pizzas);
    })
    document.addEventListener('DomContentLoaded', createHTML(tasks));
}
init();
