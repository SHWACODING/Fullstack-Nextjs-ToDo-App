import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ITodo } from "@/interfaces"
import TodosTableActions from "./TodosTableActions";

export default function TodosTable({todos}: {todos: ITodo[]}) {
  return (
    <Table>
      <TableCaption>A list of your Tasks To Do 🕕✔</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo?.id}>
            <TableCell className="font-medium">{todo?.id}</TableCell>
            <TableCell>{todo?.title}</TableCell>
            <TableCell>{todo?.completed ? <Badge variant={"secondary"}>✅ Completed</Badge> : <Badge variant={"outline"}>❌ Uncompleted</Badge>}</TableCell>
            <TableCell className="flex items-center justify-end space-x-2">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">{!todos.length ? "You Donot Have Any ToDos Yet, Uou Can Create One 🙂" : todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
