import { ReactElement } from "react";
import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { GetServerSideProps } from "next";
import { RoomDetail } from "@/feature/room/page/RoomDetail";
import { MansionRoomWithRentalHouse } from "@/feature/room/type/room";


export const getServerSideProps: GetServerSideProps = async () => {
  // TODO:  apiができたらデータフェッチする。
  
  const mansionRoomWithRentalHouse: MansionRoomWithRentalHouse = {
    room: {
      id: 1,
      name: '1DK Apartment',
      layout: '1DK',
      thanksMoney: 10000,
      securityDeposit: 50000,
      floorDeposit: 5,
      availableDates: [
        new Date('2023-09-10').toISOString(),
        new Date('2023-09-20').toISOString(),
      ],
      rent: 80000,
      contractDuration: '1年',
      stayFee: 15000,
      image: {
        id: '4',
        image: '/exapmleHouse.jpg',
      },
    },
    rentalHouse: {
      id: 1,
      name: 'サンプルハウス1',
      address: '東京都渋谷区',
      nearestStation: '渋谷駅',
      maxFloorNumber: '10',
      buildingAge: 5,
      rentalHousePhoto: {
        id: '1',
        image: '/exapmleHouse.jpg',
      },
    },
  };
  
  return {
    props: { mansionRoomWithRentalHouse },
  };
};

type Props = {
  mansionRoomWithRentalHouse: MansionRoomWithRentalHouse;
};

const RoomWithHouseDetailPage = ({ mansionRoomWithRentalHouse }: Props): ReactElement => (
  <RoomDetail roomWithRentalHouse={mansionRoomWithRentalHouse} />
);

RoomWithHouseDetailPage .getLayout = (page: ReactElement) => <UserLayout>{page}</UserLayout>;

export default RoomWithHouseDetailPage ;
