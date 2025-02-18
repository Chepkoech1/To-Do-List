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
