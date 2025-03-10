import {
  useGetTodoIdsQuery,
  useGetTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} from "./store/slices/todos/todosApiSlice";

export const Todos = () => {
  const { data: todoIds, isLoading: isLoadingIds } = useGetTodoIdsQuery();
  const { data: todo, isLoading: isLoadingTodo } = useGetTodoQuery("1"); // Example ID
  console.log("todoids", todoIds);

  const [createTodo] = useCreateTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const handleCreateTodo = async () => {
    await createTodo({
      id: String(Date.now()),
      title: "New Todo",
      description: "my description",
      checked: false,
    });
  };

  const handleUpdateTodo = async () => {
    await updateTodo({
      id: "1",
      title: "Updated Todo",
      description: "my description",
      checked: true,
    });
  };

  if (isLoadingIds || isLoadingTodo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={handleCreateTodo}>Create Todo</button>
      <button onClick={handleUpdateTodo}>Update Todo</button>
      <div>Todo ID 1: {todo?.title}</div>
      <div>Todo IDs: {todoIds?.join(", ")}</div>
    </div>
  );
};
