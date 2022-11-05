import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { HttpClient } from "./http/httpClient";
import { TokenRepository } from "./repository/tokenRepository";
import { AuthSerivceImpl } from "./service/AuthService";
import { LocalAuthSerivceImpl } from "./service/AuthService.local";
import { TodoService } from "./service/TodoService";
import { LocalTodoService } from "./service/TodoService.local";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tokenRepository = new TokenRepository();
const httpClient = new HttpClient(
  process.env.REACT_APP_BASE_URL,
  tokenRepository
);
const authService = new AuthSerivceImpl(httpClient, tokenRepository);
const localAuthSerivceImpl = new LocalAuthSerivceImpl(tokenRepository);
const todoService = new TodoService(httpClient);
const localTodoService = new LocalTodoService();

root.render(
  <AuthContextProvider authService={localAuthSerivceImpl}>
    <TodoProvider todoService={localTodoService}>
      <App />
    </TodoProvider>
  </AuthContextProvider>
);
