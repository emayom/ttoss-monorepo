import { multi, method } from '@arrows/multimethod';

export default class Controller {
  /**
   * @param {Model} model a "Model" instance
   * @param {View} view a "View" instance
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.active = '';

    this.model.addObserver(this.view);
    this.view.delegate(
      multi(
        (type, value) => type,
        method('delete', (type, value) => this.removeTodo(value)),
        method('toggle', (type, value) => this.updateTodo(value)),
        method('regist', (type, value) => this.addTodo(value)),
      ),
    );
  }

  /**
   * 모델(Model) 데이터를 바탕으로 뷰(View)를 보여준다.
   * @param {string} hash - window.location.hash
   * @void
   */
  setView(hash = window.location.hash) {
    const filter = {};

    if (hash !== '') {
      const [, capture] = hash.match(/(?:#)(\w*)/);

      if (capture === 'todo') {
        filter.completed = false;
      } else if (capture === 'completed') {
        filter.completed = true;
      }

      this.active = capture;
    }

    this.model
      .getTodos(filter)
      .then((todos) => this.view.render({
        todos,
        active: this.active,
        count: this.model.count,
      }));
  }

  /**
   * 할일 등록한다.
   * @param {string} todo
   * @void
   */
  addTodo(todo) {
    if (!todo) {
      return;
    }
    this.model.addTodo(todo);
  }

  /**
   * 할 일을 삭제한다.
   * @param {object} data
   */
  removeTodo({ id, completed }) {
    this.model.removeTodo(id);
  }

  /**
   * 할 일의 완료 여부를 업데이트한다.
   * @param {string} id
   * @param {boolean} completed - 기존 완료 여부
   */
  updateTodo({ id, completed }) {
    this.model.updateTodo(id, { completed: !/true/.test(completed) });
  }
}
