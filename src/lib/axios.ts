import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true
});

//apiリクエストを投げる際にヘッダーにsession(ownerId)を追加する
export const setAuthCookie = (ownerId: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${ownerId}`;
};