"use server";

import { redirect } from "next/navigation";
import { FormEvent } from "react";

export async function  onSubmit (event: FormEvent<HTMLFormElement>)  {


    const formData = new FormData(event.currentTarget);
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // // Handle response if necessary
    // const data = await response.json();
    // // ...
    const name = formData.get("name");
    if (!name) {
        return {
          errors: {
            name: "名前を入力してください",
          },
        };
      }

    redirect("/");
  };
