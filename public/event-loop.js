var stepCounter = 0;
const exampleCodeContainer = document.getElementById('example-code');
const callStackNode = document.getElementById('call-stack');
const apiNode = document.getElementById('api');
const eventLoopImg = document.getElementById('event-loop-img');
const taskQueueNode = document.getElementById('task-queue');
const microtaskQueueNode = document.getElementById('microtask-queue');
const logsNode = document.getElementById('logs');

document.getElementById('example1').addEventListener('click', showFirstExample);
document.getElementById('example2').addEventListener('click', showSecondExample);

function showFirstExample() {
    commonExmpleActions(example1);
    example1();
    removeNextPrevButtonListeners([executeExample1, executeExample2]);
    addExecuteListener(1);
}

function showSecondExample() {
    commonExmpleActions(example2);
    example2();
    removeNextPrevButtonListeners([executeExample1, executeExample2]);
    addExecuteListener(2);
}

function removeNextPrevButtonListeners(array) {
    for (var i = 0; i < array.length; i++) {
        document.getElementById('execute_next').removeEventListener('click', array[i]);
        document.getElementById('execute_prev').removeEventListener('click', array[i]);
    }
}

function commonExmpleActions(example) {
    stepCounter = 0;
    exampleCodeContainer.innerHTML = example.toString();
    const executeNextBtn = document.getElementById('execute_next');
    executeNextBtn.classList.remove("d-none");
    const executePrevBtn = document.getElementById('execute_prev');
    executePrevBtn.classList.remove("d-none");
    clearNodeContainer([callStackNode, apiNode, taskQueueNode, microtaskQueueNode, logsNode]);
}

function clearNodeContainer(nodes) {
    for (var i = 0; i < nodes.length; i++) {
        while (nodes[i].lastElementChild) {
            nodes[i].removeChild(nodes[i].lastElementChild);
        }
    }
}

function addItemToStack(callStack, title) {
    const numberOfItems = document.querySelectorAll('.stack-item').length;
    const div = document.createElement('div');
    div.className = 'stack-item';
    div.innerHTML = title;
    div.style['margin-bottom'] = 5 + numberOfItems * 35 + 'px';
    callStack.appendChild(div);
};

function popItemFromStack(callStack) {
    callStack.lastElementChild.classList.add('stack-out');
    setTimeout(() => {
        callStack.removeChild(callStack.lastElementChild);
    }, 500);
};

function addItemToApi(api, title) {
    const numberOfItems = document.querySelectorAll('.api-item').length;
    const div = document.createElement('div');
    div.className = 'api-item';
    div.innerHTML = title;
    div.style['margin-bottom'] = 5 + numberOfItems * 35 + 'px';
    api.appendChild(div);
};

function popItemFromApi(api) {
    api.lastElementChild.classList.add('api-out');
    setTimeout(() => {
        api.removeChild(api.lastElementChild);
    }, 500);
};

function rotateEventLoop() {
    eventLoopImg.animate([
        {transform : 'rotate(0deg) scaleX(-1)'},
        {transform : 'rotate(180deg) scaleX(-1)'}
    ], {
        duration: 1000
    })
}

function addItemToQueue(queue, title) {
    const div = document.createElement('div');
    div.className = 'queue-item';
    div.innerHTML = title;
    queue.appendChild(div);
}

function addIitemAsFirstQueue(queue, title) {
    const div = document.createElement('div');
    div.className = 'queue-item';
    div.innerHTML = title;
    queue.prepend(div);
}

function popItemFromQueue(queue) {
    queue.firstElementChild.classList.add('queue-pop');
    setTimeout(() => {
        queue.removeChild(queue.firstElementChild);
    }, 500);
}

function removeitemFromQueue(queue) {
    queue.lastElementChild.classList.add('queue-out');
    setTimeout(() => {
        queue.removeChild(queue.lastElementChild);
    }, 500);
}

function addItemToLogs(logs, title) {
    const div = document.createElement('div');
    div.className = 'log-item';
    div.innerHTML = title;
    logs.appendChild(div);
}

function removeItemFromLogs(logs, title) {
    logs.removeChild(logs.lastElementChild);
}

function addExecuteListener(exampleNumber) {
    switch (exampleNumber) {
        case 1:
            document.getElementById('execute_next').addEventListener('click', executeExample1);
            document.getElementById('execute_prev').addEventListener('click', executeExample1);
            break;
        case 2:
            document.getElementById('execute_next').addEventListener('click', executeExample2);
            document.getElementById('execute_prev').addEventListener('click', executeExample2);
            break;
    }
    
}
