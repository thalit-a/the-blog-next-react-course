'use server'

import { PublicPost } from "@/dto/post/dto";

type createPostActionState = {
  formState: PublicPost,
  errors: string[],
};

export async function createPostAction(
  prevState: createPostActionState,
  formData: FormData,
): Promise<createPostActionState> {

  if(!(formData instanceof FormData)) {
    return {
    formState: prevState.formState,
    errors: ['Dados inválidos'],
    };
  }

  const formDataToObj = Object.fromEntries(formData.entries());
  console.log(formDataToObj);
  console.log(formData.get('published'));

  return {
    formState: prevState.formState,
    errors: [],
  };
}
