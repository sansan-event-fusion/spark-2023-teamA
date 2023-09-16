import Image from "next/image"
import { RentalHouse, Structure } from "../../type/rentalHouse"

type Props = {
  rentalHouse: RentalHouse
}

export const RentalHouseInfo = ({
  rentalHouse: { name, address, nearest_station, max_floor_number, building_age, rental_house_photos, structure_type_id }
}: Props): JSX.Element => (
  <div className="flex flex-col space-y-8">
    <div className="w-full h-64 relative">
      <Image
        src={rental_house_photos[0]?.image!}
        objectFit="cover"
        layout="fill"
        alt="賃貸の写真"
      />
    </div>
    <div className="mx-6">
      <div>
        <h3 className="font-semibold text-xl">{name}</h3>
      </div>
      <div className="flex-col space-y-2 bg-gray-100 rounded-lg px-4 py-5 my-6">
        <div>
          <p className="text-xs">住所</p>
          <p>&nbsp;{address}</p>
        </div>
        <div>
          <p className="text-xs">最寄駅</p>
          <p>&nbsp;{nearest_station}</p>
        </div>
        <div>
          <p className="text-xs">階数</p>
          <p>&nbsp;{max_floor_number}建</p>
        </div>
        <div>
          <p className="text-xs">築年数</p>
          <p>&nbsp;{building_age}年</p>
        </div>
        <div>
          <p className="text-xs">賃貸タイプ</p>
          <p>&nbsp;{Structure[structure_type_id]}</p>
        </div>
      </div>
    </div>
  </div>
)