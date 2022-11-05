// interface
// signup(email, password): void
// signin(email, password): void
// logout(): void
//
//
export class LocalAuthSerivceImpl {
  #tokenRepository;

  constructor(tokenRepository) {
    this.#tokenRepository = tokenRepository;
  }

  async signup(email, password) {
    this.#tokenRepository.save("ACCESS_TOKEN");
  }

  async signin(email, password) {
    this.#tokenRepository.save("ACCESS_TOKEN");
  }

  logout() {
    this.#tokenRepository.remove();
  }
}
