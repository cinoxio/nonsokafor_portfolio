"use server";

import { db } from "@/database/drizzle";
import { suscribe } from "@/database/schema";
import { eq } from "drizzle-orm";


export const suscribeMail = async (params: SuscribeMailParams) => {
  const { userId, email, name} = params;

  try {
    const suscribe = await db
        .insert(email)
      .values({
        ...params,
      })
      .returning();


    if (!email.length) {
      return {
        success: false,
        error: "Book is not available for borrowing",
      };
    }

     return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "An error occurred while creating the book",
    };
  }
};


