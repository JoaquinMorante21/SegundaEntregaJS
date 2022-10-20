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

// Traer elementos del LS si existen
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// Grabar en LS
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
};

//Crear el elemento a renderizar en caso que el ID sea entre 1 y 7
const createTask = task =>
`
    <li class="card blue">
        <h2>${task.nombre}</h2>
        <h3>$${task.precio}</h3>
    </li>
`;
//Crear el elemento a renderizar en caso que el ID no este entre 1 y 7
const wrongTask = () =>
`
    <li class="card red">
        <h2>El id ingresado no coincide con ninguna pizza</h2>
    </li>
`;
//Crear el elemento a renderizar en caso que el usuario no escriba un numero
const noNumber = () =>
    `
    <li class="card red">
        <h2>Ingrese un numero por favor</h2>
    </li>
`;

// Funcion que decide si el numero dado pertenece a un id
const decider = (n) =>{
    if (n < 1 || n > 7){
        return wrongTask (n);
    }
    else if (n == null){
        return noNumber ();
    }
    else{
        return createTask (n);
    }
};

// Renderizar la o las tareas y corre la funcion que decide a que grupo pertenece el ID
renderTask = TodoList => {
    list.innerHTML = TodoList.map(task => decider(task)).join('');
    console.log(list.innerHTML)
};


const init = () => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const task = input.value;
        input.value = '';
        // Filtra que pizza es la que le pasaron el numero de id
        const thisPizza = Pizzas.filter ((Pizza) => Pizza.id == task);
        tasks = [...tasks, task];
        saveLocalStorage(tasks);
        renderTask(thisPizza);
    })
    document.addEventListener('DomContentLoaded', renderTask(tasks));
}
init();
