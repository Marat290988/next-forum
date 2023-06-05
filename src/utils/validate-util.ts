import { z } from "zod";

export const minLength = (length: number, value: string): boolean => {
  const schema = z.object({
    value: z.string().min(length),
  });
  
  const data = { value };
  const result = schema.safeParse(data);
  
  if (result.success) {
    return true;
  } else {
    return false;
  }
}

export const maxLength = (length: number, value: string): boolean => {
  const schema = z.object({
    value: z.string().max(length),
  });
  
  const data = { value };
  const result = schema.safeParse(data);
  if (result.success) {
    return true;
  } else {
    return false;
  }
}