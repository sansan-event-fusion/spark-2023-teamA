import Image from "next/image";
import { MansionRoom } from "../../type/room"
import { ErrorText } from "@/components/atoms/ErrorText";
import Link from "next/link";
import { Routing } from "@/hooks/routing";

type Props = {
  room: MansionRoom;
}

export const OneRoomCard = (
  { room: { id, stayFee, layout, image } }: Props
): JSX.Element => (
  <Link href={Routing.room.buildRoute({roomId: id}).path} className="flex w-full space-x-4 rounded-lg shadow-md">
    <div className=" w-[80px] h-[80px] relative">
      <Image 
        className="rounded-lg"
        src={image?.image!} 
        objectFit="cover"
        layout="fill"
        alt="各部屋の写真"
      />
    </div>
    <div className="flex flex-col justify-center text-sm">
      <div className="flex flex-col">
        <p>一泊料金: ¥{stayFee}</p>
        <ErrorText errorText="*契約しなかった場合のみ" />
      </div>
      <p>間取り: {layout}</p>
    </div>
  </Link>
)
