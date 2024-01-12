export default class Model {
  constructor() {
    this.todos = new Map();
    this.count = 0;
    this.observers = [];
    this.filter = {};

    // 임시 데이터 세팅 여부
    this.mockInit = false;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    const [, capture] = window.location.hash.match(/(?:#)(\w*)/);

    this.getTodos(this.filter)
      .then((data) => (
        this.observers.forEach(
          (observer) => observer.update({ todos: data, active: capture, count: this.count }),
        )
      ));
  }

  /**
   * 임시로 Mock 데이터를 세팅한다.
   *
   * @async
   * @function getMockData
   * @void
   */
  async getMockData() {
    const url = 'https://dummyjson.com/todos?limit=30&skip=10';

    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.todos = new Map(json.todos.map((todo) => [todo.id.toString(), todo]));
        this.count = json.todos.length;
        this.mockInit = true;
      })
      .catch((error) => {
        throw error;
      });
  }

  /**
   * 새로운 할 일 데이터를 생성한다.
   * @param {string} text
   * @returns
   */
  addTodo(text) {
    const data = {
      id: new Date().getTime(),
      todo: text,
      completed: false,
    };
    this.todos.set(data.id.toString(), data);

    this.notifyObservers();
  }

  /**
   * 할 일 데이터를 삭제한다.
   * @param {string} id
   */
  removeTodo(id) {
    if (this.todos.has(id)) {
      this.todos.delete(id);
      this.notifyObservers();
    } else {
      throw new Error(`Key '${id}' not found in the Map.`);
    }
  }

  /**
   * 할 일 데이터를 업데이트한다.
   * @param {string} id
   * @param {object} value
   */
  updateTodo(id, value) {
    if (this.todos.has(id)) {
      this.todos.set(id, Object.assign(this.todos.get(id), value));

      // 데이터가 업데이트될 경우
      this.notifyObservers();
    } else {
      throw new Error(`Key '${id}' not found in the Map.`);
    }
  }

  /**
   * 할 일 데이터를 필터링하여 가져온다.
   * @param {object} filter
   * @returns
   */
  async getTodos(filter) {
    console.log('filter LL ', filter);

    // Lazy?
    if (!this.mockInit) {
      await this.getMockData();
    }

    return new Promise((resolve) => {
      if (filter) {
        //
        this.filter = filter;

        const result = [];

        this.todos.forEach((data) => {
          if (Object.entries(filter).every(([k, v]) => data[k] === v)) {
            result.push(data);
          }
        });

        resolve(result);
      } else {
        resolve(Array.from(this.todos.values()));
      }
    });
  }
}
