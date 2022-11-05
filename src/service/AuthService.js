// interface
// signup(email, password): void
// signin(email, password): void
// logout(): void

export class AuthSerivceImpl {
  #tokenRepository;
  #httpClient;

  constructor(httpClient, tokenRepository) {
    this.#httpClient = httpClient;
    this.#tokenRepository = tokenRepository;
  }

  async signup(email, password) {
    const token = await this.#httpClient.fetch("auth/signup", {
      body: JSON.stringify({ email, password }),
    });
    this.#tokenRepository.save(token);
  }

  async signin(email, password) {
    const token = await this.#httpClient.fetch("auth/signin", {
      body: JSON.stringify({ email, password }),
    });
    this.#tokenRepository.save(token);
  }

  logout() {
    this.#tokenRepository.remove();
  }
}
