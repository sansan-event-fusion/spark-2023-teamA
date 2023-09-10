import { ReactElement } from "react";
import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ISR_REVALIDATE } from "@/constants/constants";
import { SearchableRentalHouseList } from "@/feature/rentalHouse/page";
import { RentalHouse } from "@/feature/rentalHouse/type/rentalHouse";


export const getStaticProps: GetStaticProps = async () => {
  // TODO:  apiができたらデータフェッチする。
  // const fetchedRentalHouses

  const rentalHouses: RentalHouse[] = [
    {
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
      mansionRoom: [
        {
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
      ]
    },
    {
      id: 2,
      name: 'サンプルハウス2',
      address: '東京都新宿区',
      nearestStation: '新宿駅',
      maxFloorNumber: '15',
      buildingAge: 3,
      rentalHousePhoto: {
        id: '2',
        image: '/exapmleHouse.jpg',
      },
      mansionRoom: [
        {
          id: 2,
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
      ]
    },
    {
      id: 3,
      name: 'サンプルハウス3',
      address: '東京都中野区',
      nearestStation: '中野駅',
      maxFloorNumber: '5',
      buildingAge: 2,
      rentalHousePhoto: {
        id: '3',
        image: '/exapmleHouse.jpg',
      },
      mansionRoom: [
        {
          id: 3,
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
      ]
    },
    {
      id: 4,
      name: 'サンプルハウス4',
      address: '東京都品川区',
      nearestStation: '品川駅',
      maxFloorNumber: '12',
      buildingAge: 6,
      rentalHousePhoto: {
        id: '4',
        image: '/exapmleHouse.jpg',
      },
      mansionRoom: [
        {
          id: 4,
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
      ]
    },
    {
      id: 5,
      name: 'サンプルハウス5',
      address: '東京都豊島区',
      nearestStation: '池袋駅',
      maxFloorNumber: '8',
      buildingAge: 4,
      rentalHousePhoto: {
        id: '5',
        image: '/exapmleHouse.jpg',
      },
      mansionRoom: [
        {
          id: 5,
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
      ]
    },
  ];

  return {
    props: { rentalHouses },
    revalidate: ISR_REVALIDATE,
  };
};

type Props = {
  rentalHouses: InferGetStaticPropsType<typeof getStaticProps>;
};

const RentalHousesPage = ({ rentalHouses }: Props): ReactElement => (
  <SearchableRentalHouseList rentalHouses={rentalHouses} />
);

RentalHousesPage.getLayout = (page: ReactElement) => <UserLayout>{page}</UserLayout>;

export default RentalHousesPage;
