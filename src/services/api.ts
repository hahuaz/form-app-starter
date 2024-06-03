import axios from "axios";
import type { Todo } from "../types";

const BASE_URL = "http://localhost:3001";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodoIds = async () => {
  return (await axiosInstance.get<Todo[]>("todos")).data.map((item) => item.id);
};

export const getTodo = async (id: number) => {
  return (await axiosInstance.get<Todo>(`todos/${id}`)).data;
};

export const createTodo = async (data: Todo) => {
  await axiosInstance.post("todos", data);
};

export const updateTodo = async (data: Todo) => {
  await axiosInstance.put(`todos/${data.id}`, data);
};

export const deleteTodo = async (id: number | undefined) => {
  await axiosInstance.delete(`todos/${id}`);
};
