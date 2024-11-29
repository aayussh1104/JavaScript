const store = {
    todos : [
        {
            id: "1",
            title: "Play Chess",
            completed : false
        },
        {
            id: "2",
            title: "Play Cricket",
            completed : true
        },
        {
            id: "3",
            title: "Eat Lunch",
            completed : false
        },
        {
            id: "4",
            title: "Sleep",
            completed : true
        }
    ]
};

const storeHandler = {
    get(target,property){
        // console.log("you are trying to get a property", property);
        return target[property];          // here target is store
    },
    set(target,property,value){
        // console.log(target, property,value);
        // console.log("you are trying to set value",property);
        target[property]=value;
        if(property=="todos"){
            window.dispatchEvent(new Event("todosChanged"));        // we can create our own new event in javascript
        }
        localStorage.setItem("store", JSON.stringify(store));
        return true;
    }
};

const storeProxy = new Proxy(store, storeHandler)                             // proxy only works with objects



function addTodo(newTodo){
    storeProxy.todos = [...storeProxy.todos, newTodo];      //  here we are copying and storing new element together
}

function deleteTodo(id){
    storeProxy.todos= storeProxy.todos.filter(todo=>todo.id !== id);       // filter() will filter and return a new array
}

function toggleCompleted(id, completed){
    storeProxy.todos= storeProxy.todos.map((todo) => {
        if(todo.id === id){
        return {...todo,completed: completed};
        }else{
            return todo;
        }
    })
}



export { addTodo, deleteTodo, toggleCompleted };
export default storeProxy;