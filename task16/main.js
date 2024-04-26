const textInput = document.getElementById('text-input');
const askBtn = document.getElementById('btn');
const taskList = document.getElementById('task-list');

const ToDoAdd = () => {
    const todoText = textInput.value.trim();
    if (todoText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = todoText;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        listItem.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        taskList.appendChild(listItem);

        textInput.value = "";
    } 
};

askBtn.addEventListener("click", ToDoAdd);
