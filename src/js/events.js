// 이벤트를 모아놓은 함수 이다.
export const dummy = true;
export const initTodoListEvents = (itemContainerElements) => {
  for (let i = 0; i < itemContainerElements.length; i += 1) {
    const todoElementsChildren = itemContainerElements[i].children;
    const todoElementOBJ = {
      checkbox: null,
      text: null,
      update: null,
      delete: null,
    };

    const todoObjectKeys = Object.keys(todoElementOBJ);

    for (let j = 0; j < todoObjectKeys.length; j += 1) {
      todoElementOBJ[todoObjectKeys[j]] = todoElementsChildren[j];
    }

    // todolist - element에 마우스를 올렸을때 발생하는 이벤트
    itemContainerElements[i].addEventListener('mouseover', () => {
      /* 체크박스에 체크가 되었다면 이벤트 무시 */

      if (todoElementOBJ.text.classList.contains('check')) {
        todoElementOBJ.update.style.display = 'none';

        return;
      }

      todoElementOBJ.update.style.display = 'inline-block';
    });

    // todolist - element에 마우스를 내렸을때 발생하는 이벤트
    itemContainerElements[i].addEventListener('mouseout', () => {
      if (todoElementOBJ.text.classList.contains('check')) return;

      todoElementOBJ.update.style.display = 'none';
    });

    // todolist - check box click event
    todoElementOBJ.checkbox.addEventListener('click', () => {
      // text안에 class name에 check가 있는지 확인
      if (todoElementOBJ.text.classList.contains('check')) {
        todoElementOBJ.text.classList.remove('check');
        todoElementOBJ.delete.style.display = 'none';

        return;
      }
      todoElementOBJ.text.classList.add('check');
      todoElementOBJ.delete.style.display = 'inline-block';
      todoElementOBJ.update.style.display = 'none';
    });
  }
};

// export default initTodoListEvents;
