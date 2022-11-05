// TodoServiceInterface
// get(): Promise<todo[]>
// create(todo:string): todo
//
export class TodoService {
  #httpClient;

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  get() {
    return this.#httpClient.fetch("todos");
  }

  create(todo) {
    return this.#httpClient.fetch("todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });
  }
}
