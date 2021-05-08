const addTask = (input) => {
    const task = input.value
    input.value = ''
    taskList.push(task)
    saveTask(taskList)
}

const clearTask = (index) => {
    taskList.splice(index, 1)
    showTasks(listElement)   
    saveTask(taskList) 
}

const showTasks = (listElement) => { 
    listElement.innerHTML = ''
    taskList.forEach((task, index) => {
        const liElement = document.createElement('li')
        liElement.innerHTML = `<p>${task} <button onclick="clearTask(${index})">Apagar</button></p>`
        listElement.appendChild(liElement)
    })
}

const saveTask = (tasks) => {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)  
}

const getTasks = () => {
    const tasks = localStorage.getItem('tasks')
    const taskStoraged = JSON.parse(tasks)
    return taskStoraged
}

const taskList = getTasks()
const input = document.querySelector(".input")
const addTaskBtn = document.querySelector(".add-task")
const listElement = document.querySelector("ul")

addTaskBtn.addEventListener('click', () => {
    addTask(input)
    showTasks(listElement)
})

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
      if (!input.value) return;
        addTask(input)
        showTasks(listElement)
    }
})

const App = {
    init() {
        showTasks(listElement)
    }
}
App.init()
