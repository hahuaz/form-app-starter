import { useEffect } from "react";
import { getRouteApi } from "@tanstack/react-router";

import { useTodo, useUpdateTodo } from "../hooks";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";

const route = getRouteApi("/todos-tsquery/$todoId");

export function TodoDetailForm() {
  const { todoId } = route.useParams();

  const { data } = useTodo(todoId);

  const updateTodoMutation = useUpdateTodo();

  const FormSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "description must be at least 2 characters.",
    }),
    checked: z.boolean(),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
      checked: false,
    },
  });

  // Update form values when `data` is available
  useEffect(() => {
    if (data) {
      form.reset({
        title: data.title || "",
        description: data.description || "",
        checked: data.checked || false,
      });
    }
  }, [data, form]);

  const handleUpdateTodo = async (formData) => {
    try {
      await updateTodoMutation.mutateAsync({
        id: Number(todoId),
        ...formData,
      });
      form.reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdateTodo)}
          className="space-y-6 mb-6"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="checked"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Checked</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={Boolean(field.value)}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit">Update Todo</Button>
        </form>
      </Form>
    </div>
  );
}
