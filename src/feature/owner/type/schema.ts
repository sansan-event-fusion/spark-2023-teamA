import { INVALID_EMAIL_FORMAT_MESSAGE, REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

export const signUpInputSchema = z.object({
  email: z.string().email(INVALID_EMAIL_FORMAT_MESSAGE),
  password: z.string().min(8, "8文字以上で入力してください"),
  first_name: z.string().min(1, REQUIRE_FIELD),
  last_name: z.string().min(1, REQUIRE_FIELD),
  phone_number: z.string().regex(/^\d{11}$/, '「-」無しで携帯番号をお願いします。')
});
export type SignUpInput = z.infer<typeof signUpInputSchema>;
