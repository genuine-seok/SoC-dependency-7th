// httpClientInterface
// fetch
//
// baseURL
// Authorization

export class HttpClient {
  #baseURL;
  #tokenRepository;

  constructor(baseURL, tokenRepository) {
    this.#baseURL = baseURL;
    this.#tokenRepository = tokenRepository;
  }

  fetch(endPoint, options = {}) {
    return fetch(this.#baseURL + endPoint, {
      ...options,
      headers: {
        Authorization: this.#tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}
