import { PlainLink } from "@/components/atoms/Link";
import { AdminRentalHouseInfo } from "@/feature/rentalHouse/share/AdminRentalHouseInfo";
import { fetchedRentalHousesWithRoom } from "@/mock"
import { AdminRoomListBelongToRentalHose } from "../../components/AdminRoomListBelongToRentalHose";
import { Routing } from "@/hooks/routing";

export const RoomListBelongToOwnerHose = () => {

  //カスタムフックでデータフェッチするロジック書く

  const rentalHousesWithRoom = fetchedRentalHousesWithRoom;

  return (
    <div className="flex flex-col items-center w-full min-h-screen h-full space-y-10 mb-8">
      <AdminRentalHouseInfo 
        rentalHouse={rentalHousesWithRoom.rentalHouse}
      />

      <div className="sm: w-1/2 md:w-1/3 lg:w-1/4 ">
        {/* TODO: createUI作る時にPath指定 */}
        <PlainLink
          innerText="ルームを作成する"
          path={Routing.adminAddRoomBelongToHouse.buildRoute({ houseId: rentalHousesWithRoom.rentalHouse.id }).path}
        />
      </div>

      <AdminRoomListBelongToRentalHose
        mansionRooms={rentalHousesWithRoom.mansionRoom}
      />
    </div>
  )
}