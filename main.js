const Pizzas = [
  {
    nombre: "mozzarella",
    id: 1,
    ingredientes: ["tomate", "mozzarella"],
    precio: 550,
  },
  {
    nombre: "cuatroQuesos",
    id: 2,
    ingredientes: ["mozzarella", "gorgonzola", "fontina", "parmesano"],
    precio: 800,
  },
  {
    nombre: "napolitana",
    id: 3,
    ingredientes: ["tomate", "mozzarella"],
    precio: 750,
  },
  {
    nombre: "margarita",
    id: 4,
    ingredientes: ["tomate", "mozzarella", "albahacafresca", "sal", "aceite"],
    precio: 610,
  },
  {
    nombre: "pepperoni",
    id: 5,
    ingredientes: ["tomate", "mozzarella", "pepperoni"],
    precio: 860,
  },
  {
    nombre: "marinera",
    id: 6,
    ingredientes: ["tomate", "ajo", "orégano", "aceite", "queso", "mozzarella"],
    precio: 680,
  },
  {
    id: 7,
    nombre: "Panceta",
    ingredientes: ["Queso", "Orégano", "Panceta", "Aceitunas"],
    precio: 700,
  },
];


const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
let tasks = [];


const createTask = (task) =>
  `
    <li class="card blue">
        <h2>🍕${task.nombre}</h2>
        <h3>$${task.precio}</h3>
    </li>
`;

const wrongId = (pizza) =>
  `
    <li class="card red">
        <h2>El Id ${pizza.id} no coincide con ninguna pizza</h2>
    </li>
`;

const noNumber = () =>
  `
    <li class="card red">
        <h2>Ingrese un numero por favor</h2>
    </li>
`;


const decider = (pizza) => {
  
  if (pizza == undefined) {
    return noNumber();
  } else if (pizza.id < 0 || pizza.id > 7) {
    return wrongId(pizza);
  } else {
    return createTask(pizza);
  }
};


renderTask = (TodoList) => {
  list.innerHTML = TodoList.map((pizza) => decider(pizza)).join("");
};


const nuevoObjeto = (n) => {
  if (Number(n) < 0 || Number(n) > 7) {
    return Pizzas.push({ id: Number(n), nombre: "n" });
  } else {
    return;
  }
};

const init = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;
    input.value = "";
   
    nuevoObjeto(task);

  
    const thisPizza = Pizzas.filter((Pizza) => Pizza.id == task);
    tasks = [...tasks, thisPizza[0]];
    renderTask(tasks);
  });
};
init();
