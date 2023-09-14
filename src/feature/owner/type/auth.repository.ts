import { ToastResult } from "@/type/toast";
import { Owner } from "./owner"

export type AuthRepository = {
  signUp: (createData: Omit<Owner, 'id'>) => Promise<ToastResult<Omit<Owner, 'id'>>>;
  signIn: (signInData: Pick<Owner, 'email' | 'password'>) => Promise<ToastResult<Owner>>;
}