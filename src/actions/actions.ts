"use server"

import { signIn, signOut } from "@/auth"
import { revalidatePath } from "next/cache";

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/" });
}



export async function doLogout() {
    await signOut({ redirectTo: "/" });
  }
  
  export async function doCredentialLogin(formData: FormData) {
    console.log("formData", formData);
  
    try {
      const response = await signIn("credentials", {
        username: formData.get("username"),
        password: formData.get("password"),
        redirect: false,
      });
      revalidatePath("/");
      return response;
    } catch (err) {
      throw err;
    }
  }
