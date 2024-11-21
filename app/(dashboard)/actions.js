'use server';

import { deleteProductById } from '@/lib/data';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(formData) {
  let id = Number(formData.get('id'));
  await deleteProductById(id);
  revalidatePath('/');
}
