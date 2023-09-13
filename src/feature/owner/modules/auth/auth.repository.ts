import { axiosInstance, setAuthToken } from "@/lib/axios";
import { FAIL_TO_SIGNIN, FAIL_TO_SIGNUP, SUCCESS_TO_SIGNIN, SUCCESS_TO_SIGNUP } from "@/constants/messages";
import { Owner } from "../../type/owner";
import { ToastResult } from "@/type/toast";
import { auth } from "@/lib/firebase";
import { ownerRepository } from "../owner/owner.repository";
import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const authRepository = {
  //Firebaseを用いて認証
  async signUp(
    createData: Omit<Owner, 'id'>
  ): Promise<ToastResult> {
    try {
      const customToken = (
        await axiosInstance
          .post("/owner", { ...createData }) //ルート決まったら教えてください
          .catch((error) => {
            throw error.response.data;
          })
      ).data.token;

      // サーバーサイドから発行されたCustom Tokenを使ってFirebaseにサインイン
      const userCredential = await signInWithCustomToken(auth, customToken);

      // 上記でサインインした後、Firebase IDトークンを取得
      // ここにおけるidTokenとcustomTokenは別物
      const idToken = await userCredential.user.getIdToken();
      setAuthToken(idToken);

      return { style: 'success', message: SUCCESS_TO_SIGNUP };
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;

      return {
        style: 'failed',
        message: `${FAIL_TO_SIGNUP}\n${isTypeSafeError ? error.message : ""}`,
      };
    }
  },

  async signIn( 
    signInData: Pick<Owner, 'email' | 'password'>
  ): Promise<ToastResult<Owner>> {
    try {
      const ownerCredential = await signInWithEmailAndPassword(
        auth,
        signInData.email,
        signInData.password
      );

      const token = await ownerCredential.user.getIdToken();
      setAuthToken(token);

      //このメソッドの呼び出し先で現在のuserレコードにnameが登録されているかどうかを確認するために取得
      const owner = await ownerRepository.findUserByFirebaseUID();

      return { style: 'success', message: SUCCESS_TO_SIGNIN, data: owner};
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;

      return {
        style: 'failed',
        message: `${FAIL_TO_SIGNIN}\n${isTypeSafeError ? error.message : ""}`,
      };
    }
  }
}