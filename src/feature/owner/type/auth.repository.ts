import { ToastResult } from "@/type/toast";
import { Owner } from "./owner"

export type AuthRepository = {
  signUp: (create: Omit<Owner, 'id'>) => Promise<ToastResult<Omit<Owner, 'id'>>>;
}