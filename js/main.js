var tasks =[]
if (localStorage.getItem('tasks')==null){
    tasks=[]
}else{
    tasks =JSON.parse(localStorage.getItem('tasks'))
    display()
    console.log(tasks);
}
function getdata() {
    var taskName =document.getElementById('taskName').value
    var task = {
        name:taskName,
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    display()
    clearInputs() 
}
function display(){
    var copaya =""
    for (var i=0; i<tasks.length; i++) {
        copaya += `<div class="col-md-12 text-center mt-5 card p-2">
        ${tasks[i].name}
        <i class="fas fa-times" onclick="Delete(${i})"></i>
    </div>`
    }
    document.getElementById('demo').innerHTML=copaya
    }
 function clearInputs() {
     taskName.value =""
 }
function Delete(){
      products.splice(index,1)
      local storage.setItem('products',JSON.stringify(products))
      display()
}
