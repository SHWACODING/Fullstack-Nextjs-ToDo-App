"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { todoFormSchema, todoFormValues } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTodoAction, updateTodoAction } from "@/actions/todo.actions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Spinner from "./Spinner";
import { ITodo } from "@/interfaces";

const EditTodoForm = ({todo}: {todo: ITodo}) => {

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // This can come from your database or API.
  const defaultValues: Partial<todoFormValues> = {
    title: todo.title,
    body: todo.body as string,
    completed: todo.completed,
  }

  const form = useForm<todoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const onSubmit = async (data: todoFormValues) => {

    setLoading(true);

    await updateTodoAction({id: todo.id, title: data.title, body: data.body as string, completed: data.completed});

    setLoading(false);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>
          <Pen size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit This ToDo</DialogTitle>
          <DialogDescription>
            Make changes to this ToDo here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Complete QAI" {...field} />
                  </FormControl>
                  <FormDescription>
                    You Can Write The Title Of ToDo 💙
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a bit about What You Want To Do ?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You Can Write A Short Description About Your ToDo 💙
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="completed"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        name={field.name}
                        ref={field.ref}
                        disabled={field.disabled}
                        // {...field}
                      />
                    </FormControl>
                    <FormLabel>Completed OR Not</FormLabel>
                  </div>
                  <FormDescription>
                    Your ToDo item Will Be Uncompleted By Default, Unless You Checked It 🔲
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading}>
              {loading ? (<> <Spinner />  Saving </> ) : ("Save Changes")}
            </Button>

          </form>
        </Form>

        </div>
      </DialogContent>
      </Dialog>
  )
}

export default EditTodoForm
