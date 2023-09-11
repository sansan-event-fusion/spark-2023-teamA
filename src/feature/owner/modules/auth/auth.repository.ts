import { axiosInstance } from "@/lib/axios";
import { Owner } from "../../type/owner";
import { AuthRepository } from "../../type/auth.repository";
import { ToastResult } from "@/type/toast";
import { FAIL_TO_SIGNUP, SUCCESS_TO_SIGNUP } from "@/constants/messages";

export const authRepository: AuthRepository = {
  async signUp(createData): Promise<ToastResult<Omit<Owner, 'id'>>> {
    try {
      const res = await axiosInstance.post('/v1/owner/signup', createData);
      return {
        style: 'success',
        message: SUCCESS_TO_SIGNUP,
        data: res.data
      }
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;
      return {
        style: 'failed',
        message: `${FAIL_TO_SIGNUP}\n${
          isTypeSafeError ? error.message : ""
        }`,
      };
    }
  }
}