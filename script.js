let inp = document.getElementById("taskinp");
let list = document.getElementById("lists")

document.getElementById("add").addEventListener("click",()=>
{
  if(inp.value.length == 0){
 let para = document.getElementById("para");
 para.innerHTML = "Please enter the task"
  }
  else{
    let para = document.getElementById("para");
 para.innerHTML = ""
    list.innerHTML = list.innerHTML+`
    <div class="task">
     <span id="added">${inp.value}</span>   
   
    <button id="del">DEL</i></button>   
    
    </div>`
    let alllist = document.querySelectorAll("#del")
    for(let i =0; i< alllist.length; i++){
        alllist[i].onclick = function(){
            this.parentNode.remove()
        }
    }inp.value=""
  }
   

})
