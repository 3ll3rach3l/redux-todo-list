const {createStore } = require('redux');

const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const RESET_TASK_LIST = 'RESET_TASK_LIST';

/*
 1. You'll use the createStore method to generate your Redux store by invoking it
 with a reducer.
 2. you can think of the reducer as a function that helps manage the Redux store 
 by routing actions based on their type attribute.
 3. a reducer is a "reducing function that returns the next state tree,
  given the current state tree and an action to handle."
*/

const tasksReducer = (state = [], action) => { //'tasksReducer' conceptually routes action objects 
    // TODO: Set up switch statement to manage actions based on type
    switch (action.type){
        // TODO: Set up switch case for `createTask` action
        case CREATE_TASK:
            // TODO: Define what happens when a `createTask` action is dispatched
            const newTask = {
                message: action.taskMessage,
            }
            return [...state, newTask]
        // TODO: Set up switch case for `deleteTask` action
        case DELETE_TASK:
            // TODO: Define what happens when a `deleteTask` action is dispatched
        // TODO: Set up switch case for `resetTaskList` action
        case RESET_TASK_LIST:
            // TODO: Define what happens when a `resetTaskList` action is dispatched
        // TODO: Set up default switch case
        default:
            return state;
    }

}

const store = createStore(tasksReducer)

const createTask = taskMessage =>{
    // TODO: Return POJO with `type` property and function's argument (`taskMessage`)
    return{
        type: CREATE_TASK,
        taskMessage: taskMessage,

    }
};

const deleteTask = taskId =>{
    return{
        type: DELETE_TASK,
        taskId: taskId
    }
}

const resetTaskList = () =>{
    return{
        type: RESET_TASK_LIST,
        emptyTaskList: []
    }
}