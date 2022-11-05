// TodoServiceInterface
// get(): Promise<todo[]>
// create(todo:string): Promise<todo>

export class LocalTodoService {
  constructor() {
    this.todos = [];
    this.id = 0;
  }

  get() {
    return Promise.resolve(this.todos);
  }

  create(newTodo) {
    const result = {
      id: this.id++,
      todo: newTodo,
    };
    this.todos.push(result);
    return Promise.resolve(result);
  }
}
