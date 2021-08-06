document.querySelector('#push').addEventListener("click",function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task")
    } else{
        document.querySelector("#tasks").innerHTML += 
        `<div class = "tasks>
         <span id = "taskname">
          ${document.querySelector('#newtask input').value}
           </span> 
           <button class = "delete">
           <i class="fas fa-trash-alt">
           </i>
           </button>
           </div>`;

           var current_tasks = document.querySelectorAll("delete");
           for(var i = 0; i < current_tasks.length; i++){
               current_tasks[i].addEventListener ("click",function(){
                   this.parentNode.removeChild();
               })
           }

           var tasks = document.querySelectorAll(".tasks");
           for(var i = 0; i < tasks.length; i++){
               tasks[i].addEventListener("click", function(){
                   this.classList.toggle('completed');
               })
           }

           document.querySelector("#newtask input").value = "";
    }
})