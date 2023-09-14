import { axiosInstance } from "@/lib/axios";
import { FAIL_TO_GET_RENTALHOUSE, FAIL_TO_GET_ROOMS_WITH_RENTALHOUSE } from "@/constants/messages";
import { RentalHouse } from "../type/rentalHouse";
import { ToastResult } from "@/type/toast";

export const rentalHoseRepository = {
  //物件と物件に紐ずくmansionRoomを全件取得
  async getAll(): Promise<RentalHouse[] | ToastResult> {
    try {
      const res = await axiosInstance.get('/v1/rental_houses')
      return res.data;
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;
      return {
        style: 'failed',
        message: `${FAIL_TO_GET_RENTALHOUSE}\n${
          isTypeSafeError ? error.message : ""
        }`,
      };
    }
  },

  //オーナーの持っている物件全件取得
  //mansionRoomは帰ってきていなくて代わりに中間テーブル(mansion)が返ってくる
  async getAllOwn(): Promise<RentalHouse[]> {
    try {
      const res = await axiosInstance.get(`/v1/owner/rental_houses`)
      return res.data
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;

      throw new Error(`${FAIL_TO_GET_RENTALHOUSE}\n${
        isTypeSafeError ? error.message : ""
      }`)
    }
  },
  

  //物件と紐ずくroom一覧取得
  async getRoomsWithSpecificRentalHouse(houseId?: number | string) {
    try {
      const res = await axiosInstance.get(`/v1/owner/rental_houses/${houseId}/mansions/mansion_rooms`);
      return res.data; 
    } catch (error: unknown) {
      const isTypeSafeError = error instanceof Error;

      throw new Error(`${FAIL_TO_GET_ROOMS_WITH_RENTALHOUSE}\n${
        isTypeSafeError ? error.message : ""
      }`)
    }
  }
}