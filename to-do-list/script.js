let tasks= [];
function addTask(){
    const taskInput=document.getElementById("task-input")
    const taskName=taskInput.ariaValueMax.trim();

    if (taskName){
        const task={
            name:taskName,
            completed:false
        };
        task.push(task);
        taskInput.value='';
        renderTasks();
    }

}
function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}
function toggleTaskCompletion(index){
    tasks[index].completed=!tasks[index].completed;
    renderTasks();
}
function  renderTasks(){
    const taskList=document.getElementById('task-list');
    taskList.innerHTML='';

    tasks.forEach((task, index)=>{
        const li=document.createElement('li');

        if (task.completed) {
            li.classList.add('completed')
        }
        const taskText =document.createElement('span');
        taskText.textContent=task.name;
        li.appendChild(taskText);

        //added a delee button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);
        
        // Add Task Toggle Button
        li.onclick = () => toggleTaskCompletion(index);
        
        taskList.appendChild(li);

    });

    }

