import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getTodoIds, getTodo, createTodo, updateTodo } from "@/services/api";

import type { Todo } from "@/types";

// QUERY HOOKS
// useQuery is aware of type of data returned by the queryFn
export function useTodoIds() {
  return useQuery({
    queryKey: ["useTodoIds"],
    queryFn: getTodoIds,
  });
}

export function useTodo(id: string) {
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
      await queryClient.invalidateQueries({ queryKey: ["useTodoIds"] });
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
