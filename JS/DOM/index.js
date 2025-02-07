let x=document.getElementById("fbutton");
x.addEventListener("click",changename);
function changename(){
  document.getElementById("para1").textContent="Hello jee kaise hoo ";
  document.getElementById("para1").style.color="blue";
}



document.getElementById("myLink").addEventListener("click", function(event) {
  // event.preventDefault();  // Prevents the default navigation action
  alert("Link click prevented!");
});