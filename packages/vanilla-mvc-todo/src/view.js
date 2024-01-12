import { createRoot } from 'vanilla-v-dom';

export default class View {
  constructor(template) {
    this.template = template;
    this.rootNode = document.getElementById('root');
    this.root = createRoot(this.rootNode);
  }

  /**
   * @param {object[]} todos
   */
  render(data) {
    this.root.render(
      this.template(data),
    );
  }

  // Observer Update!
  update(data) {
    this.render(data);
  }

  /**
   * 컨트롤러(Controller)로 부터 전달받은 이벤트 리스너를 등록한다.
   * 이후 뷰(View)에서 발생한 이벤트를 컨트롤러(Controller)에서 처리한다.
   * @param {function} listener - Listen to click event
   */
  delegate(listener) {
    this.rootNode.addEventListener('click', (event) => {
      const actionType = event.target.dataset?.action;

      if (actionType === 'toggle') {
        event.target.setAttribute('checked', event.target.checked.toString());
      }

      if (actionType) {
        if (actionType === 'regist') {
          const inputEl = document.querySelector('#new-todo-form input');
          const { value } = inputEl;

          listener(actionType, inputEl.value);
          inputEl.value = '';
        } else {
          const { id, completed } = event.target.parentNode.dataset;
          listener(actionType, { id, completed });
        }
      }
    });
  }
}
