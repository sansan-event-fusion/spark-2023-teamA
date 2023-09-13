import { axiosInstance } from "@/lib/axios";
import { AuthRepository } from "../../type/auth.repository";
import { FAIL_TO_SIGNUP, SUCCESS_TO_SIGNIN, SUCCESS_TO_SIGNUP } from "@/constants/messages";
import { Owner } from "../../type/owner";

export const ownerRepository = {
  //一意のユーザーをfirebaseUidで取得
  async findUserByFirebaseUID(): Promise<Owner> {
    const owner = (
      // TODO: ルートを作成して欲しいです。
      await axiosInstance.get("/user/find-by-firebase-uid").catch((err) => {
        throw new Error(`owner not found | error: ${err}`);
      })
    ).data;
    return owner;
  },

}