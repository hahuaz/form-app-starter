import { useTodo, useUpdateTodo } from "../../hooks";

import { useParams } from "react-router-dom";

import { useForm } from "react-hook-form";

export function TodoDetailForm() {
  const { todoId } = useParams<{ todoId: string }>();

  const { data } = useTodo(Number(todoId));

  const updateTodoMutation = useUpdateTodo();

  // default values should be controlled by the useForm hook, don't directly pass them to the element. otherwise, untouched fields will be empty string in handler even though user sees the default value in the element.
  const { register, handleSubmit, reset } = useForm({
    values: {
      title: data?.title,
      description: data?.description,
      checked: data?.checked,
    },
  });

  const handleUpdateTodo = async (e: any) => {
    try {
      await updateTodoMutation.mutateAsync({
        id: Number(todoId),
        ...e,
      });
      reset();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleUpdateTodo)}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>

        <input type="text" id="description" {...register("description")} />
        <input type="checkbox" id="checked" {...register("checked")} />
      </div>
      <button type="submit">Update Todo</button>
    </form>
  );
}
