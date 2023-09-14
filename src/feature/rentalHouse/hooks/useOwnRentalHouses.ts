import { useLoading } from "@/hooks/useLoading";
import { useEffect, useState } from "react";
import { RentalHouse } from "../type/rentalHouse";
import { rentalHoseRepository } from "../modules/rentalHouse.repository";
import { axiosInstance } from "@/lib/axios";

export const useOwnRentalHouses = () => {
  const { showLoading, hideLoading } = useLoading();
  const [ myRentalHouses, setMyRentalHouses ] = useState<RentalHouse[]>([]);
  useEffect(() => {
    (async () => {
      showLoading();
      // リファクタ: 毎回checkを待ってから返す必要がある。
      if (!axiosInstance.defaults.headers.common["Authorization"]) return
      const fetchedMyRentalHouses = await rentalHoseRepository.getAllOwn();
      setMyRentalHouses(fetchedMyRentalHouses)
      hideLoading();
    })()
  }, [])
  return { myRentalHouses }
}