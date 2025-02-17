const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".agregado");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim(); 

    if (value === "") return; // Evita agregar elementos vacíos

    const newTask = document.createElement("li");
    newTask.classList.add("task");

    // Contenedor para el texto de la tarea
    const taskText = document.createElement("span");
    taskText.textContent = `- ${value}`;

    // Contenedor para los botones (✅ y 🗑️)
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Botón para completar tarea (✅)
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";
    completeBtn.classList.add("action-btn");

    // Evento para marcar como completada
    completeBtn.addEventListener("click", () => {
        newTask.classList.toggle("completed");
    });

    // Botón para eliminar tarea
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("action-btn");

    // Evento para eliminar la tarea
    deleteBtn.addEventListener("click", () => {
        newTask.remove();
    });

    // Agrega los botones al contenedor
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    // Agregar elementos a la tarea
    newTask.appendChild(taskText);
    newTask.appendChild(buttonContainer);

    // Agregar la tarea a la lista
    list.appendChild(newTask);

    input.value = "";
});






