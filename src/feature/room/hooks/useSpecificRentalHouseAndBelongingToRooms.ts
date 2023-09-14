import { useEffect, useState } from "react";
import { useLoading } from "@/hooks/useLoading";
import { axiosInstance } from "@/lib/axios";
import { rentalHoseRepository } from "@/feature/rentalHouse/modules/rentalHouse.repository";
import { RentalHouse } from "@/feature/rentalHouse/type/rentalHouse";

export const useSpecificRentalHouseAndBelongingToRooms = (houseId?: string) => {
  const { showLoading, hideLoading } = useLoading();
  const [ specificRentalHouseAndBelongingToRooms, setSpecificRentalHouseAndBelongingToRooms ] = useState<RentalHouse>();

  useEffect(() => {
    if(!houseId) return
    (async () => {
      showLoading();
      // リファクタ: 毎回checkを待ってから返す必要がある。
      if (!axiosInstance.defaults.headers.common["Authorization"]) return
      
      const fetchedRes = await rentalHoseRepository.getRoomsWithSpecificRentalHouse(houseId);
      setSpecificRentalHouseAndBelongingToRooms(fetchedRes)
      hideLoading();
    })()
  }, [houseId]);

  return { specificRentalHouseAndBelongingToRooms };
};
