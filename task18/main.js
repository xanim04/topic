const todosElem = document.querySelecto
const searchInput = document.getElementById("searchInput");
let globalData = [];
const buttons = document.querySelectorAll(".pag button");

fetch("https://dummyjson.com/todos")
    .then(res => {
        return res.json()
    })
    .then(data => {
        globalData = data.todos
        domRender(data.todos)
    })


searchInput.addEventListener("keyup", () => {
    let filteredList = globalData.filter(item => item.todo.toLowerCase()
        .includes(searchInput.value.trim().toLowerCase()))
    if (searchInput.value.trim() !== "") {
        domRender(filteredList, 0, filteredList.length)
    } else {
        domRender(filteredList, 0, 5)
    }
});

function domRender(param, start = 0, end = 5) {
    todosElem.innerHTML = ""
    param.forEach((item, index) => {
        if (index >= start && index < end) {
            todosElem.innerHTML += `
                <div class="${item.completed ? " todo completed" : "todo" }" >
                    <p>${item.todo}</p>
                   </div > `
    }
    });
}


buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        buttons.forEach(item => item.classList.remove("active"))
        this.classList.add("active");
        domRender(globalData, (+this.innerText1) * 5, +this.innerText *5)
    })
})