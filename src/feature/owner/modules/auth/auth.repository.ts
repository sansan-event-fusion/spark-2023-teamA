import { axiosInstance } from "@/lib/axios";
import { AuthRepository } from "../../type/auth.repository";
import { FAIL_TO_SIGNIN, FAIL_TO_SIGNUP, SUCCESS_TO_SIGNIN, SUCCESS_TO_SIGNUP } from "@/constants/messages";

export const authRepository: AuthRepository = {
  async signUp(createData) {
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
  },
  async signIn(signInData) {
    try {
      const res = await axiosInstance.post('/v1/owner/login', signInData);
      return {
        style: 'success',
        message: SUCCESS_TO_SIGNIN,
        data: res.data
      }
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;
      return {
        style: 'failed',
        message: `${FAIL_TO_SIGNIN}\n${
          isTypeSafeError ? error.message : ""
        }`,
      };
    }
  }
}