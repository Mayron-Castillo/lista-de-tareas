const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".agregado");

const errorTexto = document.createElement("p");
errorTexto.classList.add("error-message");
form.appendChild(errorTexto);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim(); 

    if (value === ""){
        errorTexto.textContent = "⚠️ Por favor, ingresa una tarea.";
        errorTexto.style.color = "red";
        return ; // Evita agregar elementos vacíos
    } 

    errorTexto.textContent = "";

    const newTask = document.createElement("li");
    newTask.classList.add("task");

    // texto de la tarea
    const taskText = document.createElement("span");
    taskText.textContent = `- ${value}`;

    // div para boton completar y eliminar
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // añade botón completar tarea
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";
    completeBtn.classList.add("action-btn");

    // Evento para marcar como completada
    completeBtn.addEventListener("click", () => {
        newTask.classList.toggle("completed");
    });

    // añade botón borrar tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("action-btn");

    //eliminar tarea
    deleteBtn.addEventListener("click", () => {
        newTask.remove();
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    newTask.appendChild(taskText);
    newTask.appendChild(buttonContainer);

    list.appendChild(newTask);

    input.value = "";
});






