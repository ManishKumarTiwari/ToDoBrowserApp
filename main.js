var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.task = [];
        this.status = [];
    }
    TodoApp.prototype.add = function (list) {
        this.task.push(list.task);
        this.status.push(list.status);
        /*console.log("in add");
        var parameters=getlocalstorage();
        console.log(parameters);
        console.log(parameters.myTaskList);
        console.log(parameters.myTaskstatus);


        parameters.myTaskList.push(list.task);
        this.task=parameters.myTaskList
        parameters.myTaskstatus.push(list.status);
        this.status=parameters.myTaskstatus;

        console.log("set local storage called from add");
        setlocalStorage();
        parameters=getlocalstorage();
        console.log("getting just after add");
        console.log(parameters.myTaskList);
        */
    };
    return TodoApp;
}());
var allTask = new TodoApp();
/*localStorage.setItem("allTask", JSON.stringify(allTask));
setlocalStorage();

function setlocalStorage(){
   // console.log("set local storage called");

    //console.log("task array "+allTask.task);
    var myobj=localStorage.getItem("allTask");
    var allTask=JSON.parse(myobj);
    localStorage.setItem("myListArray", JSON.stringify(allTask.task));
    localStorage.setItem("myStatusArray", JSON.stringify(allTask.status));
}
function getlocalstorage(){
    var retrievedstatus = localStorage.getItem("myStatusArray");
    var myTaskstatus=JSON.parse(retrievedstatus);
    var retrievedtasks = localStorage.getItem("myListArray");
    var myTaskList = JSON.parse(retrievedtasks);

    return {myTaskList,myTaskstatus};
}
*/
function addTask(task, status) {
    console.log("add task");
    allTask.add({
        task: task,
        status: status
    });
}
function deleteTask(tasknumber) {
    console.log("task number--" + tasknumber);
    allTask.task.splice(tasknumber, 1);
    allTask.status.splice(tasknumber, 1);
}
function complete(tasknumber) {
    allTask.status[tasknumber] = false;
}
function updateTask(new_task, position) {
    allTask.task[position] = new_task;
    allTask.status[position] = true;
}
