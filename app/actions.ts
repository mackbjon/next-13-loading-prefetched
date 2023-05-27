'use server'
import { revalidatePath } from 'next/cache'

export const refreshAbout = async () => {
  revalidatePath('/wick')
}
