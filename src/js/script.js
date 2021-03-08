//Waiting while page will be loaded...

window.addEventListener('DOMContentLoaded', () => {

let taskList = document.querySelector('.task-list'),
    taskTextInput = document.querySelector('.task-list-item-input'),
    checkbox = document.querySelectorAll('.task-list-item-checkbox');

let addedTask, 
    checkboxContainerNew,
    checkboxNew,
    checkboxLabelNew, 
    taskTextSpan,
    deleteBtn;

// Check if the LocalStorage has user tasks.

window.addEventListener('load', () => {
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if(localStorage.length > 0){

            addedTask = document.createElement('li');
            addedTask.classList.add('task-list-item');

            checkboxContainerNew = document.createElement('div');
            checkboxContainerNew.classList.add('checkbox-container');

            checkbox = document.querySelectorAll('.task-list-item-checkbox');

            let checkboxLength = checkbox.length;

            checkboxNew = document.createElement('input');
            checkboxNew.classList.add('task-list-item-checkbox');
            checkboxNew.setAttribute('type', 'checkbox');
            checkboxNew.setAttribute('id', `checkbox${checkboxLength + 1}`);

            checkboxLabelNew = document.createElement('label');
            checkboxLabelNew.classList.add('checkbox-label');
            checkboxLabelNew.setAttribute('for', `checkbox${checkboxLength + 1}`);

            taskTextSpan = document.createElement('span');
            taskTextSpan.classList.add('task-list-item-text');

            deleteBtn = document.createElement('img');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.setAttribute('src', "src/img/icon/delete.png");

            let idSpan = `taskText${checkboxLength + 1}`;
            taskTextSpan.setAttribute('id', idSpan);
    
            let textSpan = value;
            taskTextSpan.textContent = textSpan;

            //  This code is for new tasks to be added to the beginning
            //  If on the page is just one input for adding new tasks, then will work this code
            if(taskList.childNodes.length = 1){
                taskList.appendChild(addedTask);
                addedTask.appendChild(checkboxContainerNew);
                addedTask.appendChild(taskTextSpan);
                addedTask.appendChild(deleteBtn);
                checkboxContainerNew.appendChild(checkboxNew);
                checkboxContainerNew.appendChild(checkboxLabelNew);
            }
            
            //  If on the page are some user tasks, then will work this code
            if(taskList.childNodes.length > 1){
                taskList.insertBefore(addedTask, taskList.childNodes[2]);
                addedTask.appendChild(checkboxContainerNew);
                addedTask.appendChild(taskTextSpan);
                addedTask.appendChild(deleteBtn);
                checkboxContainerNew.appendChild(checkboxNew);
                checkboxContainerNew.appendChild(checkboxLabelNew);
            }
        }
    }
});

//  Clear a placeholder when input has focus 

taskTextInput.addEventListener('focus', () => {
    taskTextInput.setAttribute('placeholder', '');
})

//  if input lose focus and it isn't empty - add user task

taskTextInput.addEventListener('focusout', () => {
    if(taskTextInput.value != ''){

    addedTask = document.createElement('li');
    addedTask.classList.add('task-list-item');

    checkboxContainerNew = document.createElement('div');
    checkboxContainerNew.classList.add('checkbox-container');

    checkbox = document.querySelectorAll('.task-list-item-checkbox');

    let checkboxLength = checkbox.length;

    checkboxNew = document.createElement('input');
    checkboxNew.classList.add('task-list-item-checkbox');
    checkboxNew.setAttribute('type', 'checkbox');
    checkboxNew.setAttribute('id', `checkbox${checkboxLength + 1}`);

    checkboxLabelNew = document.createElement('label');
    checkboxLabelNew.classList.add('checkbox-label');
    checkboxLabelNew.setAttribute('for', `checkbox${checkboxLength + 1}`);

    taskTextSpan = document.createElement('span');
    taskTextSpan.classList.add('task-list-item-text');

    deleteBtn = document.createElement('img');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.setAttribute('src', "src/img/icon/delete.png");

    let idSpan = `taskText${checkboxLength + 1}`;
    taskTextSpan.setAttribute('id', idSpan);
    
    let textSpan = taskTextInput.value;
    taskTextSpan.textContent = textSpan;
    
    let lsText = localStorage.setItem(idSpan, textSpan);

    //  This code is for new tasks to be added to the beginning
    //  If on the page is just one input for adding new tasks, then will work this code
    if(taskList.childNodes.length = 1){
        taskList.appendChild(addedTask);
        addedTask.appendChild(checkboxContainerNew);
        addedTask.appendChild(taskTextSpan);
        addedTask.appendChild(deleteBtn);
        checkboxContainerNew.appendChild(checkboxNew);
        checkboxContainerNew.appendChild(checkboxLabelNew);
    }

    //  If on the page are some user tasks, then will work this code
    if(taskList.childNodes.length > 1){
        taskList.insertBefore(addedTask, taskList.childNodes[2]);
        addedTask.appendChild(checkboxContainerNew);
        addedTask.appendChild(taskTextSpan);
        addedTask.appendChild(deleteBtn);
        checkboxContainerNew.appendChild(checkboxNew);
        checkboxContainerNew.appendChild(checkboxLabelNew);
    }

    taskTextInput.value = '';
    taskTextInput.setAttribute('placeholder', 'Enter new task here...');
    } else {
        taskTextInput.setAttribute('placeholder', 'Enter new task here...');
    }
})    

//  if "Enter" key is pressed and input isn't empty - add user task

taskTextInput.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        if(taskTextInput.value != ''){

        addedTask = document.createElement('li');
        addedTask.classList.add('task-list-item');

        checkboxContainerNew = document.createElement('div');
        checkboxContainerNew.classList.add('checkbox-container');

        checkbox = document.querySelectorAll('.task-list-item-checkbox');

        let checkboxLength = checkbox.length;

        checkboxNew = document.createElement('input');
        checkboxNew.classList.add('task-list-item-checkbox');
        checkboxNew.setAttribute('type', 'checkbox');
        checkboxNew.setAttribute('id', `checkbox${checkboxLength + 1}`);

        checkboxLabelNew = document.createElement('label');
        checkboxLabelNew.classList.add('checkbox-label');
        checkboxLabelNew.setAttribute('for', `checkbox${checkboxLength + 1}`);

        taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-list-item-text');
        
        let idSpan = `taskText${checkboxLength + 1}`;
        taskTextSpan.setAttribute('id', idSpan);
    
        let textSpan = taskTextInput.value;
        taskTextSpan.textContent = textSpan;

        deleteBtn = document.createElement('img');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.setAttribute('src', "src/img/icon/delete.png");
    
        let lsText = localStorage.setItem(idSpan, textSpan);

        //  This code is for new tasks to be added to the beginning
        //  If on the page is just one input for adding new tasks, then will work this code
        if(taskList.childNodes.length = 1){
            taskList.appendChild(addedTask);
            addedTask.appendChild(checkboxContainerNew);
            addedTask.appendChild(taskTextSpan);
            addedTask.appendChild(deleteBtn);
            checkboxContainerNew.appendChild(checkboxNew);
            checkboxContainerNew.appendChild(checkboxLabelNew);
        }

        //  If on the page are some user tasks, then will work this code
        if(taskList.childNodes.length > 1){
            taskList.insertBefore(addedTask, taskList.childNodes[2]);
            addedTask.appendChild(checkboxContainerNew);
            addedTask.appendChild(taskTextSpan);
            addedTask.appendChild(deleteBtn);
            checkboxContainerNew.appendChild(checkboxNew);
            checkboxContainerNew.appendChild(checkboxLabelNew);
        }
        taskTextInput.value = '';
        taskTextInput.setAttribute('placeholder', 'Enter new task here...');
        }
    }
});

taskList.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('checkbox-label')){
            let parNode = target.parentNode.parentNode;
            if(target.previousElementSibling.checked != true){
                parNode.style.textDecoration = 'line-through';
            }
            if(target.previousElementSibling.checked != false){
                parNode.style.textDecoration = 'none';
            }
    }
});

//  Event Listener for Delete Button
//  Deleting nodes from the page and also deleting elements from LocalStorage

taskList.addEventListener('click', e => {
    let target = e.target;
    if(target.classList.contains('delete-btn')){
        let deletedKey = target.previousElementSibling.id;
        deleteItemFromLS(deletedKey);
        target.parentNode.remove();
        target.remove();
    }
});

// Function to delete Key/Value from LocalStorage

function deleteItemFromLS(key){
    if(localStorage.length > 0){
        for(let i = 0; i < localStorage.length; i++){
            localStorage.removeItem(key);
        }
    }
}

//  Work with Modal Block
let modal = document.querySelector('.modal');
let maxWidth = window.matchMedia("max-width: 900px");
console.log(maxWidth);

function modalFromRightToTop(){
    setTimeout(() => {
        modal.classList.add('animShow');
        modal.style.display = 'flex';
        modal.style.right = '2rem';
        setTimeout(() => {
            modal.classList.remove('animShow');
            modal.classList.add('animHide');
            modal.style.top = '-150px';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 8000)
        }, 6000)
    }, 2000)
}

function modalFromBottomToBottom(){
    setTimeout(() => {
        modal.classList.add('animShow');
        modal.style.display = 'flex';
        modal.style.bottom = '5px';
        setTimeout(() => {
            modal.classList.remove('animShow');
            modal.classList.add('animHide');
            modal.style.bottom = '-150px';
            setTimeout(() => {
            }, 8000)
        }, 6000)
    }, 2000)
}

window.addEventListener('load', () => {
    if(window.matchMedia("(max-width: 1100px)").matches){
        modalFromBottomToBottom();
        modal.style.right = '0';
    } else {
        modalFromRightToTop();
        modal.style.top = '2rem';
    }
});
});