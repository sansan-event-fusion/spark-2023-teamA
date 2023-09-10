import { MansionRoomWithRentalHouse } from "../../type.ts/room"
import { RentalHouseInfo } from "@/feature/rentalHouse/share/RentalHouseInfo"
import { RoomInfo } from "../../components/RoomInfo"
import { BookingFooter } from "../../components/BookingFooter"

type Props = {
  roomWithRentalHouse: MansionRoomWithRentalHouse
}

export const RoomDetail = ({ roomWithRentalHouse: { room, rentalHouse } }: Props): JSX.Element => (  
  <div className="flex flex-col w-full min-h-screen h-full mb-24">
    {/* 全体に共通する情報(RentalHouse) */}
    <RentalHouseInfo rentalHouse={rentalHouse} />

    {/* 各部屋の情報 */}
    <RoomInfo room={room} />

    {/* 予約遷移フッター */}
    <BookingFooter stayFee={room.stayFee} />
  </div>
)