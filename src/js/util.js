export const TodoLS = 'todo';

export function init() {
  const todoOBJ = {
    todolist: [
      { id: 0, text: '11', check: true },
      { id: 1, text: '22', check: false },
      { id: 2, text: '33', check: false },
    ],
    todolistLastIDX: 3,
  };

  localStorage.setItem(TodoLS, JSON.stringify(todoOBJ));
}
// Deep Clone Object
export function clone(source) {
  const target = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in source) {
    if (source[key] != null && typeof source[key] === 'object') {
      if (Array.isArray(source[key])) {
        target[key] = Array.from(source[key]);

        // eslint-disable-next-line no-continue
        continue;
      }
      target[key] = clone(source[key]); // resursion
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
export function loadLocalStorageTodoList() {
  /* Local Storage 에서 데이터 꺼내오기 */
  const todos = localStorage.getItem(TodoLS);
  const parsedTodos = JSON.parse(todos);

  return parsedTodos;
}

// LocalStorage에서 todos data's 들을 가지고 있으면 true 아니면 false를 반환
export function hasLsTodos() {
  if (localStorage.getItem(TodoLS)) {
    return true;
  }

  return false;
}
