const TodoLS = "todo";

export function init() {
    const todoOBJ = {
        todolist: [
            {id: 0, text: '11', check: true},
            {id: 1, text: '22', check: false},
            {id: 2, text: '33', check: false}
        ],
        todolistLastIDX: 1
    }
    
    localStorage.setItem(TodoLS, JSON.stringify(todoOBJ));
}
export function initTodolistLastIDX(lsData) {
    if(lsData) {
      // todolistLastIDX = lsData.todolistLastIDX;
      // debugger;
      return;
    }
}
export function loadLocalStorageTodoList() {
    /* Local Storage 에서 데이터 꺼내오기 */
    let todos = localStorage.getItem(TodoLS);
    const parsedTodos = JSON.parse(todos);
  
    return parsedTodos;
}