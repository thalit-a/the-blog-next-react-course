'use server';

import { revalidateTag } from "next/cache";

export async function revalidateExempleAction(formData: FormData) {
  const path = formData.get('path') || '';
  console.log('Estou em uma server action', path);

  // revalidatePath(`${path}`);
  revalidateTag('posts'); // home
  revalidateTag('post-rotina-matinal-de-pessoas-altamente-eficazes'); // single
}
