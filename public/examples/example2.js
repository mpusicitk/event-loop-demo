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
                popItemFromStack(callStackNode);
            }
            break;
        case 1:
            if (next) {
                addItemToStack(callStackNode, 'example2');
                addItemToQue(taskQueNode, 'example2()');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 2:
            if (!next) {
                removeItemFromLogs(logsNode);
            }
            addItemToStack(callStackNode, 'start of example2');
            break;
        case 3:
            popItemFromStack(callStackNode);
            if (next) {
                addItemToLogs(logsNode, 'start of example2')
            }
            break;
        case 4:
            addItemToStack(callStackNode, 'setTimeout(cb, t) - 3s');
            if (!next) {
                popItemFromApi(apiNode);
            }
            break;
        case 5:
            if (next) {
                addItemToApi(apiNode, 'setTimeout - t - 3s');
            }
            popItemFromStack(callStackNode);
            break;
        case 6:
            if (next) {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 0s');
            } else {
                addItemToStack(callStackNode, 'setTimeout(cb, t) - 0s');
                popItemFromApi(apiNode);
            }
            break;
        case 7:
            if (next) {
                addItemToApi(apiNode, 'setTimeout - t - 0s');
                popItemFromStack(callStackNode);
            } else {
                popItemFromQue(taskQueNode);
                addItemToApi(apiNode, 'setTimeout - t - 0s');
            }
            break;
        case 8:
            if(next) {
                addItemToQue(taskQueNode, 'setTimeout - cb - 0s');
                popItemFromApi(apiNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 9:
            if (!next) {
                removeItemFromLogs(logsNode);
            }
            addItemToStack(callStackNode, 'end of example2');
            break;
        case 10:
            if (next) {
                popItemFromStack(callStackNode);
                addItemToLogs(logsNode, 'end of example2');
            } else {
                addItemToStack(callStackNode, 'example2()');
            }
            break;
        case 11:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromQue(taskQueNode);
                addItemToApi(apiNode, 'setTimeout - t - 3s');
                addItemToQue(taskQueNode, 'setTimeout - cb - 0s');
                popItemFromStack(callStackNode);
            }
            break;
        case 12:
            if (next) {
                popItemFromApi(apiNode);
                popItemFromQue(taskQueNode);
                rotateEventLoop();
                addItemToQue(taskQueNode, 'setTimeout - cb - 3s');
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
                removeItemFromLogs(logsNode);
            }
            break;
        case 13:
            if (next) {
                popItemFromStack(callStackNode);
                addItemToLogs(logsNode, 'timer2');
            } else {
                addItemToQue(taskQueNode, 'setTimeout - cb - 3s');
                popItemFromStack(callStackNode);
            }
            break;
        case 14:
            if (next) {
                popItemFromQue(taskQueNode);
                rotateEventLoop();
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
                removeItemFromLogs(logsNode);
            }
            break;
        case 15:
            if (next) {
                popItemFromStack(callStackNode);
                addItemToLogs(logsNode, 'timer1');
            }
            break;
        default:
            stepCounter = 0;
            clearNodeContainer([logsNode]);
            break;
    }

}