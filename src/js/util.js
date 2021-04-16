export const TodoLS = 'todo';

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

export function getListIDX(lsTodoListData, idx) {
  // debugger;
  for (let i = 0; i < lsTodoListData.length; i += 1) {
    if (lsTodoListData[i].id === Number(idx)) {
      return i;
    }
  }
  return null;
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
