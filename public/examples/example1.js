function example1 () {
    console.log('start of example1');
    
    setTimeout(() => {
        console.log('timer');
    }, 0);

    Promise.resolve().then(function() {
        console.log('promise');
    });

    console.log('end of example1');
}

function executeExample1() {
    const next = this.id === 'execute_next';
    if (next) {
        stepCounter++;
    } else {
        if (stepCounter === 0) {
            return;
        } else {
            stepCounter--
        }
    }
    switch (stepCounter) {
        case 0:
            if (!next) {
                removeitemFromQue(taskQueNode);
            }
            break;
        case 1:
            if (next) {
                addItemToQue(taskQueNode, 'example1()');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 2:
            if (next) {
                addItemToStack(callStackNode, 'example1');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 3:
            if (next) {
                addItemToStack(callStackNode, 'start of example1');
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 4:
            if (next) {
                addItemToLogs(logsNode, 'start of example1');
            } else {
                addItemToStack(callStackNode, 'start of example1');
            }
            break;
        case 5:
            popItemFromStack(callStackNode);
            break;
        case 6:
            if (next) {
                addItemToStack(callStackNode, 'setTimeout(cb, t)');
            }
            if (!next) {
                popItemFromApi(apiNode);
            }
            break;
        case 7: {
            addItemToApi(apiNode, 'setTimeout - t');
            if (!next) {
                removeitemFromQue(taskQueNode);
                addItemToStack(callStackNode, 'setTimeout(cb, t)');
            }
            break;
        }
        case 8:
            if (next) {
                popItemFromApi(apiNode);
                popItemFromStack(callStackNode);
                addItemToQue(taskQueNode, 'setTimeout - cb');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 9:
            if (next) {
                addItemToStack(callStackNode, 'Promise(cb)');
            } else {
                popItemFromApi(apiNode);
            }
            break;
        case 10:
            addItemToApi(apiNode, 'Promise - resolver');
            if (!next) {
                addItemToStack(callStackNode, 'Promise(cb)');
                removeitemFromQue(microtaskQueNode);
            }
            break;
        case 11:
            if(next) {
                popItemFromApi(apiNode);
                popItemFromStack(callStackNode);
                addItemToQue(microtaskQueNode, 'Promise - cb');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 12:
            if (next) {
                addItemToStack(callStackNode, 'end of example1');
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 13:
            if (next) {
                addItemToLogs(logsNode, 'end of example1');
            } else {
                addItemToStack(callStackNode, 'end of example1');
            }
            break;
        case 14:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                addItemToStack(callStackNode, 'example1');
                addIitemAsFirstQue(taskQueNode, 'example1()');
            }
            break;
        case 15:
            if (next) {
                popItemFromStack(callStackNode);
                popItemFromQue(taskQueNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 16:
            if (next) {
                addItemToStack(callStackNode, 'Promise - cb');
                rotateEventLoop();
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 17:
            if (next) {
                addItemToLogs(logsNode, 'promise');
            } else {
                addItemToStack(callStackNode, 'Promise - cb');
                addItemToQue(microtaskQueNode, 'Promise - cb');
            }
            break;
        case 18:
            if (next) {
                popItemFromStack(callStackNode);
                popItemFromQue(microtaskQueNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 19:
            if (next) {
                addItemToStack(callStackNode, 'setTimeout - cb');
                rotateEventLoop();
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 20:
            if (next) {
                addItemToLogs(logsNode, 'timer');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb');
                addItemToQue(taskQueNode, 'setTimeout - cb');
            }
            break;
        case 21: 
            if (next) {
                popItemFromStack(callStackNode);
                popItemFromQue(taskQueNode);
            }
            break;
        default:
            stepCounter = 0;
            clearNodeContainer([logsNode]);
            break;
    }

}