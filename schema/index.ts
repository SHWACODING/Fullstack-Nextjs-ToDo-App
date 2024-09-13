import { z } from "zod"

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(7, {
      message: "Title must be at least 7 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  body: z
    .string()
    .max(70, {
      message: "Short Decsription must not be longer than 70 characters.",
    }).optional(),
  completed: z.boolean()
})

export type todoFormValues = z.infer<typeof todoFormSchema>