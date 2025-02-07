document.addEventListener("DOMContentLoaded", function () {
  const addbutton=document.getElementById('add');
  const deletebutton=document.getElementById('delete');
  const deleteallbutton=document.getElementById('deleteall');
  const taskidinput=document.getElementById("taskid");
  const taskareainput=document.getElementById("taskarea");
  const displayall = document.getElementById('storageDisplay'); 
  //adding a task and saving into local storage
  addbutton.addEventListener('click',function(){
    const taskidcontent=taskidinput.value;
    const taskareacontent=taskareainput.value;
    localStorage.setItem(taskidcontent, taskareacontent);
    displayTasks();
  })
  //deleting a particular task
  deletebutton.addEventListener('click',function(){
    const taskidcontent=taskidinput.value;
    localStorage.removeItem(taskidcontent);
    displayTasks();
  })
//showing all task
function displayTasks() {
const keys = Object.keys(localStorage);
  displayall.textContent = '';
  keys.forEach(key => {
    displayall.textContent += `${key}: ${localStorage.getItem(key)}\n`;
  });
};
displayTasks();
//delete all task
deleteallbutton.addEventListener('click',function(){
  localStorage.clear();
  displayTasks();
})

});