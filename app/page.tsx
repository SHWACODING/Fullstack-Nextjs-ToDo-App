import AddTodoForm from "@/components/AddTodoForm";
import { getUserTodoListAction } from '@/actions/todo.actions';
import TodosTable from "@/components/TodoTable";
import { todo } from "node:test";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {

  const {userId} = auth();

  const todos = await getUserTodoListAction({userId});

  return (
    <main className="flex min-h-screen flex-col items-center p-24">

      <AddTodoForm userId={userId} />

      <br />

      <TodosTable todos={todos} />

    </main>
  );
}
