"use server"

import { db } from '@/app';
import { usersInfo } from '@/app/db/schema';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'نام را وارد کنید').regex(/^[a-zA-Z0-9\s]+$/, 'نام باید شامل حروف و اعداد انگلیسی باشد'),
  movies: z.string().min(1, 'فیلد را خالی نگذارید').max(4000, 'شما از تعداد کاراکتر های مجاز فراتر رفتید'),
  shows: z.string().min(1, 'فیلد را خالی نگذارید').max(4000, 'شما از تعداد کاراکتر های مجاز فراتر رفتید'),
  description: z.string().max(5000, 'توضیحات شما بیش از حد مجاز است').nullable()
});

export type FormState = {
  errors?: {
    name?: string[];
    movies?: string[];
    shows?: string[];
    description?: string[];
  };
  message?: string;
  success?: boolean;
};

export async function anniversaryAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get('name'),
    movies: formData.get('movies'),
    shows: formData.get('shows'),
    description: formData.get('description')
  };

  const validated = schema.safeParse(rawData);

  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await db.insert(usersInfo).values({
      movies: validated.data.movies,
      name: validated.data.name,
      shows: validated.data.shows,
      description: validated.data.description,
    });

    return { success: true, message: 'با موفقیت ثبت شد، منتظر تایید بمونید' };
  } catch (e) {
    return { success: false, message: 'مشکلی به وجود آمد' };
  }
}
