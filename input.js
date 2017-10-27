window.onload = function() {

    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');
    var showtask = document.getElementById('mylist');

    btn.onclick = function () {

        console.log("hiiiiiiiiiiii");
        var value = input.value;
        if(value.trim()!=""){
            addTask(value,true);
            input.value=null;
            console.log("calling display");
            displayTask();
        }
        else {
            alert("Provide an Input")
        }

    };
    function saveEditedTask(i){
        var new_paragraph=document.getElementById(i+"para");
        var new_message;
        if(new_paragraph.firstChild!=null) {
            new_message=new_paragraph.firstChild.textContent;
        }
        else{
            new_message="";
        }
        updateTask(new_message, i);
        displayTask();
    }

    function updateTaskHandler(i){

        if(allTask.status[i]===true ||(confirm("Task already complete,Want to edit ?")==true)) {

            var new_paragraph=document.getElementById(i+"para");
            new_paragraph.setAttribute("class","new-para update-para");
            new_paragraph.setAttribute("contenteditable","true");

            if(new_paragraph.getElementsByTagName("strike")){
                new_paragraph.setAttribute("style","text-decoration:none");
            }

            var new_divelement=document.getElementById(i+"divelement");
            var oldbtn=new_divelement.childNodes[2];
            var old_complete_btn=new_divelement.childNodes[1];
            var donebtn = document.createElement("BUTTON");
            var x=document.createTextNode("Save");
            donebtn.appendChild(x);
            donebtn.setAttribute("class", "button save-btn");
            donebtn.setAttribute('onclick','saveEditedTask("'+i+'")');
            new_divelement.replaceChild(donebtn,oldbtn);
            new_divelement.removeChild(old_complete_btn);
        }

    }

    function completeTaskHandler(i){

        if(allTask.status[i]===true) {
            complete(i);
            displayTask();
        }
        else
            alert("Task Already Complete");


    }
    function deleteTaskHandler(i){
        if(confirm("Delete the task")==true) {
            console.log(i);
            deleteTask(i);
            displayTask();
            console.log("hgtrr");
        }
    }

    var childiv;

    function displayTask(){
        showtask.innerHTML="";
        for(var i=0;i<allTask.task.length;i++){

            var listelem = document.createElement("li");
            childiv= document.createElement('div');
            childiv.id=i+"divelement";
            var hrelm=document.createElement("hr");
            var paragraph_element= document.createElement("p");
            paragraph_element.id=i+"para";
            paragraph_element.setAttribute("class", "new-para");
            paragraph_element.setAttribute('placeholder',"na ");
            newText = document.createTextNode(allTask.task[i]); //get task
            console.log(newText);
            paragraph_element.appendChild(newText);

            if(allTask.status[i]===false) {
                paragraph_element.setAttribute("class", "new-para completed-para");
            }
            // Create a complete button
            var completebtn = document.createElement("BUTTON");
            completebtn.id=i;
            completebtn.setAttribute('onclick','completeTaskHandler("'+i+'")');
            completebtn.setAttribute("class", "button complete-btn");
            var t1 = document.createTextNode("Complete");           // Create a text node name delete
            completebtn.appendChild(t1);

            // create a update button
            var updatebtn = document.createElement("BUTTON");        // Create a <button> element
            updatebtn.id=i;
            updatebtn.setAttribute("class", "button update-btn");
            updatebtn.setAttribute('onclick','updateTaskHandler("'+i+'")');
            var t3 = document.createTextNode("Update");             // Create a text node name update
            updatebtn.appendChild(t3);

            // create a delete button
            var delbtn = document.createElement("BUTTON");        // Create a <button> element
            delbtn.id=i;
            delbtn.setAttribute('onclick','deleteTaskHandler("'+i+'")');     //deletetask "i" function present in main.ts file
            delbtn.setAttribute("class", "button delete-btn");
            var t2 = document.createTextNode("Delete");         // Create a text node name delete
            delbtn.appendChild(t2);

            childiv.appendChild(paragraph_element);              // append paragraph with task name
            childiv.appendChild(completebtn);                   //append complete button

            childiv.appendChild(updatebtn);                     //append delete button
            childiv.appendChild(delbtn);                        //append delete button

            listelem.appendChild(childiv);                     //append div to list
            listelem.appendChild(hrelm);                        // a line
            showtask.appendChild(listelem);                     //append list to <ol>

        }
    }
    window.displayTask=displayTask;
    window.deleteTaskHandler=deleteTaskHandler;
    window.completeTaskHandler=completeTaskHandler;
    window.updateTaskHandler=updateTaskHandler;
    window.saveEditedTask=saveEditedTask;

}