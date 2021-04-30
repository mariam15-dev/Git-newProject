var tasks =[]
var x = document.getElementById('taskName');
var count;
if (localStorage.getItem('tasks')==null){
    tasks=[];
}else{
    tasks =JSON.parse(localStorage.getItem('tasks'));
    display();
    check2();
}
function check(){
    count = 0;
    for(var i = 0; i < tasks.length; i++)
    {
        if(x.value == tasks[i].name)
        {
            alert("This name already exists");
            count ++;
            break;
        }
    }
    if(x.value == "")
    {
        alert("Name is required");
        count ++;
    }
    return count;
}
function check2(){
    if(tasks.length < 5)
    {
        document.getElementById('btn').style.cssText = `position:fixed; left:85%; bottom:85px; padding:10px; color:green;`
        document.getElementById('taskName').style.cssText = `position:fixed; padding:15px; font-size:25px; bottom:70px; width:72.5%; height:50px;`;
    }
   else
   {
        document.getElementById('btn').style.cssText = `position:absolute; left:97.5%; bottom:23px`;
        document.getElementById('taskName').style.cssText =`position: relative;width: 100%;height: 50px; padding:15px; font-size:25px;`;
   }
}
function getdata() {
    if(check() == 0)
    {
        var taskName =document.getElementById('taskName').value;
        var task = {
            name:taskName,
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        display();
        clearInputs(); 
    }
    check2();
}
function display(){
    var copaya = "";
    for (var i=0; i<tasks.length; i++) {
        copaya += `<div class="col-md-12 text-center mt-5 card p-2">
        ${tasks[i].name}
        <i class="fas fa-times" onclick="Delete(${i})"></i>
    </div>`
    }
    document.getElementById('demo').innerHTML = copaya;
    }
 function clearInputs() {
     taskName.value = "";
 }
function Delete(index){
      tasks.splice(index,1);
      localStorage.setItem('tasks',JSON.stringify(tasks));
      display();
      check2();
}
