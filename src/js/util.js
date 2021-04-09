const TodoLS = "todo";

export function init() {
    const todoOBJ = {
        todolist: [{id: 0, text: '11', check: true}],
        todolistLastIDX: 1
    }
    
    localStorage.setItem(TodoLS, JSON.stringify(todoOBJ));
}
export function loadLocalStorageTodoList() {
    /* Local Storage 에서 데이터 꺼내오기 */
    let todos = localStorage.getItem(TodoLS);
    const parsedTodos = JSON.parse(todos);
  
    return parsedTodos;
}