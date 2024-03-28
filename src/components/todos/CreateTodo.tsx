import { useForm } from "react-hook-form";
import { useCreateTodo } from "../../hooks"; // Assuming the path to your hooks file

export function CreateTodo() {
  const { register, handleSubmit, reset } = useForm();
  const createTodoMutation = useCreateTodo();

  const handleFormSubmit = async (data) => {
    try {
      await createTodoMutation.mutateAsync(data);
      reset(); // Reset form fields after successful submission
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <textarea id="description" {...register("description")} />
        </div>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}
