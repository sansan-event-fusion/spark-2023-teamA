import Image from "next/image"
import { Mansion } from "@/feature/rentalHouse/type/rentalHouse"

type Props = {
  mansionRooms: Mansion | undefined
}

export const AdminRoomListBelongToRentalHose = ({ mansionRooms }: Props) => (
  <div className="w-full px-4 grid gap-x-4 gap-y-8  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
    { !mansionRooms?.mansion_room?.length ? (
      <p className="text-center font-bold text-red-400">まだ作成していません。</p>
    ) : (
      mansionRooms?.mansion_room?.map(({ id, name, image, stayFee }) => {
        return (
          // Linkにしてroom詳細に飛べるようにする
          <section key={id} className="flex items-center space-x-4 bg-gray-100 rounded-xl">    
            <div className="w-[200px] h-[200px] md:w-[160px] md:h-[160px] lg:w-[220px] lg:h-[220px] xl:w-[200px] xl:h-[200px] relative">
              <Image
                className="rounded-l-xl"
                src={image?.image!} 
                alt="家の写真です。"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center items-center w-auto text-sm">
              <p>{name}</p>
              <p>宿泊費:&nbsp;¥{stayFee}</p>
            </div>
          </section>   
        )
      })
    )}
  </div>
)