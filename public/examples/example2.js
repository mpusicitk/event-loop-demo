function example2 () {
    console.log('start of example2');
    
    setTimeout(() => {
        console.log('timer1');
    }, 3000);

    setTimeout(() => {
        console.log('timer2');
    }, 0);

    console.log('end of example2');
}

function executeExample2() {
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
                addItemToQue(taskQueNode, 'example2()');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 2:
            if (next) {
                addItemToStack(callStackNode, 'example2');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 3:
            if (next) {
                addItemToStack(callStackNode, 'start of example2');
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 4:
            if (next) {
                addItemToLogs(logsNode, 'start of example2');
            } else {
                addItemToStack(callStackNode, 'start of example2');
            }
            break;
        case 5:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 6:
            if (next) {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 3s');
            } else {
                popItemFromApi(apiNode)
            }
            break;
        case 7:
            if (next) {
                addItemToApi(apiNode, 'setTimeout - t - 3s');
            } else {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 3s');
            }
            break;
        case 8:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 9:
            if(next) {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 0s')
            } else {
                popItemFromApi(apiNode);
            }
            break;
        case 10:
            addItemToApi(apiNode, 'setTimeout - t - 0s');
            if (!next) {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 0s');
                removeitemFromQue(taskQueNode);
            }
            break;
        case 11:
            if (next) {
                popItemFromStack(callStackNode);
                popItemFromApi(apiNode);
                addItemToQue(taskQueNode, 'setTimeout - cb - 0s');
            } else {
                popItemFromStack(callStackNode);
                addItemToApi(apiNode, 'setTimeout - cb - 3s');
                removeitemFromQue(taskQueNode);
            }
            break;
        case 12:
            if (next) {
                addItemToStack(callStackNode, 'end of example2');
                popItemFromApi(apiNode);
                addItemToQue(taskQueNode, 'setTimeout - cb - 3s');
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 13:
            if (next) {
                addItemToLogs(logsNode, 'end of example2');
            } else {
                addItemToStack(callStackNode, 'end of example2');
            }
            break;
        case 14:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                addIitemAsFirstQue(taskQueNode, 'example2()');
                addItemToStack(callStackNode, 'example2')
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
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
                rotateEventLoop();
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 17:
            if (next) {
                addItemToLogs(logsNode, 'timer2');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
                addItemToQue(taskQueNode, 'setTimeout - cb - 0s');
            }
            break;
        case 18:
            if (next) {
                popItemFromStack(callStackNode);
                popItemFromQue(taskQueNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 19:
            if (next) {
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
                rotateEventLoop();
            } else {
                removeItemFromLogs(logsNode);
            }
            break;
        case 20:
            if (next) {
                addItemToLogs(logsNode, 'timer1');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
                addItemToQue(taskQueNode, 'setTimeout - cb - 3s');
            }
            break;
        case 21:
            popItemFromStack(callStackNode);
            popItemFromQue(taskQueNode);
            break;
        default:
            stepCounter = 0;
            clearNodeContainer([logsNode]);
            break;
    }

}