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
                popItemFromStack(callStackNode);
            }
            break;
        case 1:
            if (next) {
                addItemToStack(callStackNode, 'example1()');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 2:
            addItemToStack(callStackNode, 'start of example1');
            break;
        case 3:
            popItemFromStack(callStackNode);
            break;
        case 4:
            addItemToStack(callStackNode, 'setTimeout(cb, t)');
            if (!next) {
                popItemFromApi(apiNode);
            }
            break;
        case 5:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromTaskQue(taskQueNode);
            }
            addItemToApi(apiNode, 'setTimeout - t');
            break;
        case 6:
            if (next) {
                popItemFromApi(apiNode);
                addItemToTaskQue(taskQueNode, 'setTimeout - cb');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 7:
            if (!next) {
                popItemFromApi(apiNode);
            }
            addItemToStack(callStackNode, 'Promise(cb)');
            break;
        case 8:
            if(next) {
                popItemFromStack(callStackNode);
            } else {
                popItemFromMicrotaskQue(microtaskQueNode);
            }
            addItemToApi(apiNode, 'Promise - resolver');
            break;
        case 9:
            if (next) {
                popItemFromApi(apiNode);
                addItemToMicrotaskQue(microtaskQueNode, 'Promise - cb');
            } else {
                popItemFromStack(callStackNode);
            }
            break;
        case 10:
            addItemToStack(callStackNode, 'end of example1');
            break;
        case 11:
            if (next) {
                popItemFromStack(callStackNode);
            } else {
                addItemToStack(callStackNode, 'example1()');
            }
            break;
        case 12:
            if (!next) {
                addItemToMicrotaskQue(microtaskQueNode, 'Promise - cb');
            }
            popItemFromStack(callStackNode);
            break;
        case 13:
            if (next) {
                popItemFromMicrotaskQue(microtaskQueNode);
                rotateEventLoop();
            }
            addItemToStack(callStackNode, 'Promise - cb');
            break;
        case 14:
            if (!next) {
                addItemToTaskQue(taskQueNode, 'setTimeout - cb');
            }
            popItemFromStack(callStackNode);
            break;
        case 15:
            if (next) {
                popItemFromTaskQue(taskQueNode);
                rotateEventLoop();
            }
            addItemToStack(callStackNode, 'setTimeout - cb');
            break;
        case 16:
            popItemFromStack(callStackNode);
            break;
        default:
            stepCounter = 0;
            break;
    }

}