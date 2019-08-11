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
                addItemToStack(callStackNode, 'example2()');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 2:
            addItemToStack(callStackNode, 'start of example2');
            break;
        case 3:
            popItemFromStack(callStackNode);
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
                popItemFromTaskQue(taskQueNode);
                addItemToApi(apiNode, 'setTimeout - t - 0s');
            }
            break;
        case 8:
            if(next) {
                addItemToTaskQue(taskQueNode, 'setTimeout - cb - 0s');
                popItemFromApi(apiNode);
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 9:
            addItemToStack(callStackNode, 'end of example2');
            break;
        case 10:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                addItemToStack(callStackNode, 'example2()');
            }
            break;
        case 11:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromTaskQue(taskQueNode);
                addItemToApi(apiNode, 'setTimeout - t - 3s');
                addItemToTaskQue(taskQueNode, 'setTimeout - cb - 0s');
                popItemFromStack(callStackNode);
            }
            break;
        case 12:
            if (next) {
                popItemFromApi(apiNode);
                popItemFromTaskQue(taskQueNode);
                rotateEventLoop();
                addItemToTaskQue(taskQueNode, 'setTimeout - cb - 3s');
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 0s');
            }
            break;
        case 13:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                addItemToTaskQue(taskQueNode, 'setTimeout - cb - 3s');
                popItemFromStack(callStackNode);
            }
            break;
        case 14:
            if (next) {
                popItemFromTaskQue(taskQueNode);
                rotateEventLoop();
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
            } else {
                addItemToStack(callStackNode, 'setTimeout - cb - 3s');
            }
            break;
        case 15:
            if (next) {
                popItemFromStack(callStackNode);
            }
            break;
        default:
            stepCounter = 0;
            break;
    }

}