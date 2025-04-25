import * as z from 'zod';
import { object, string } from "zod"

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"), password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
})


export const profileSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: 'Product Name must be at least 3 characters' }),
  lastname: z
    .string()
    .min(3, { message: 'Product Name must be at least 3 characters' }),
  email: z
    .string()
    .email({ message: 'Product Name must be at least 3 characters' }),
  contactno: z.coerce.number(),
  country: z.string().min(1, { message: 'Please select a category' }),
  city: z.string().min(1, { message: 'Please select a category' }),
  // jobs array is for the dynamic fields
  jobs: z.array(
    z.object({
      jobcountry: z.string().min(1, { message: 'Please select a category' }),
      jobcity: z.string().min(1, { message: 'Please select a category' }),
      jobtitle: z
        .string()
        .min(3, { message: 'Product Name must be at least 3 characters' }),
      employer: z
        .string()
        .min(3, { message: 'Product Name must be at least 3 characters' }),
      startdate: z
        .string()
        .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
          message: 'Start date should be in the format YYYY-MM-DD'
        }),
      enddate: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
        message: 'End date should be in the format YYYY-MM-DD'
      })
    })
  )
});

export type ProfileFormValues = z.infer<typeof profileSchema>;


M0 5025175 272 500 272s500 230 500 230V0H0Z

M0, 10055175, 995, 500, 995s500,5,500,5V0H0Z--power4.inOut
