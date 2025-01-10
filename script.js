// It ensures that DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("tasks");  // accessing form
    const taskList = document.getElementById("taskList");   //accessing the ui

    form.addEventListener("submit", function (event) {  // handling form

        event.preventDefault(); //prevent default refresh

        const li = document.createElement('li'); //creating the list
        const taskInput = document.getElementById("taskInput"); // accessing the INPUT

        const taskValue = taskInput.value.trim();
        if (taskValue === "") { //ensuring there is no empty tasks
            alert("Please enter a task");
            return
        }

        li.textContent = taskValue;
        li.classList.add = ("tasklist");

        const button = document.createElement('button'); // creating complete button
        button.classList.add = ("compbtn");
        // styling of button
        button.textContent = "Complete";
        button.style.backgroundColor = "green";
        button.style.color = "white";
        button.style.marginLeft = "10px";
        // handling of button
        button.addEventListener("click", function () {
            if (button.textContent === "Complete") {
                button.textContent = "Completed"
            }
            li.style.textDecoration = "line-through";
            button.disabled = true; // Disable the button after marking as completed
        });

        //combining li and button to main document
        li.appendChild(button);
        taskList.appendChild(li);
        taskInput.value = "";
    });

});