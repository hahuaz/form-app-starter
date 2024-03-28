import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getTodoIds, getTodo, createTodo, updateTodo } from "../services/api";

import type { Todo } from "../types";

// QUERY HOOKS
// useQuery is aware of the type of the data returned by the queryFn
export function useTodosId() {
  return useQuery({
    queryKey: ["useTodosId"],
    queryFn: getTodoIds,
  });
}

// get single todo by id
export function useTodo(id: number) {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
  });
}

// MUTATION HOOKS
export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onSuccess: async () => {
      // invalidation is async
      await queryClient.invalidateQueries({ queryKey: ["useTodosId"] });
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Todo) => updateTodo(data),
    onSuccess: async (_, data) => {
      // invalidate the todo query with the id
      await queryClient.invalidateQueries({ queryKey: ["todo", data.id] });
    },
  });
}
