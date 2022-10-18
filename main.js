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
const input = document.getElementsByClassName('input-number');
const addform = document.getElementsByClassName('add-form');
const list = document.getElementsByClassName('list');

//Traemos elementos del LS si existen
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Grabamos en LS
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}
//Crear el elemento a renderizar 
const createTask = task => {
`
    <li class="card blue">
        <h2>${task.nombre}</h2>
        <h3>$${task.precio}</h3>
    </li>
`};

const wrongTask = () =>{
`
    <li class="card red">
        <h2>El id ${input} no coincide con ninguna pizza</h2>
    </li>
`};