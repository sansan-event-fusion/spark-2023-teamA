import Image from "next/image";
import { RentalHouse, Structure } from "../../type/rentalHouse";

type Props = {
  rentalHouse: RentalHouse
}

export const AdminRentalHouseInfo = ({
  rentalHouse: {rentalHousePhoto, name, address, nearestStation, structure_type, maxFloorNumber, buildingAge, }
}: Props) => (
  <>
    <div className="w-sm md:w-md lg:w-lg h-[320px] lg:h-[400px] relative">
      <Image
        className="rounded-2xl"
        src={rentalHousePhoto.image} 
        alt="家の写真です。"
        objectFit="cover"
        layout="fill"
      />
    </div>
    <div className="w-sm md:w-md lg:w-lg ">
      <h3 className="font-semibold text-xl">{name}</h3>
      <div className="flex-col space-y-2 bg-gray-100 rounded-lg px-4 py-5 my-6">
        <div>
          <p className="text-xs">住所</p>
          <p>&nbsp;{address}</p>
        </div>
        <div>
          <p className="text-xs">最寄駅</p>
          <p>&nbsp;{nearestStation}</p>
        </div>
        <div className="flex justify-between">
          <div className="w-1/3">
            <p className="text-xs">構造</p>
            <p>{Structure[structure_type]}</p>
          </div>
          <div className="w-1/3">
            <p className="text-xs">階数</p>
            <p>&nbsp;{maxFloorNumber}建</p>
          </div>
          <div className="w-1/3">
            <p className="text-xs">築年数</p>
            <p>&nbsp;{buildingAge}年</p>
          </div>
        </div>
      </div>
    </div>
  </>
)