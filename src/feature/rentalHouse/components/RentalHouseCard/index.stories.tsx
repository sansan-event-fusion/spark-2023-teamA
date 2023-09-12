import { StoryObj } from "@storybook/react";
import { RentalHouseCard } from ".";
import { BaseRoom } from "@/feature/room/type/room";

const meta = {
  title: 'feature/property/components/list/components/RentalHotelCard',
  component: RentalHouseCard,
}

export default meta;

type Story = StoryObj<typeof RentalHouseCard>;

const baseRentalCardArgs = {
  houseName: 'テストテストテストテストテストテストテスト',
  img: '/exapmleHouse.jpg',
  address: 'テストテストテストテストテストテストテスト'
}

const room: BaseRoom[] = [{
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
}]

//対応するroom無しの場合
export const RentalHouseCardWithOutRoomCard: Story = {
  args: {
    ...baseRentalCardArgs
  },
  render: ({ houseName, img, address }) => (
    <RentalHouseCard 
      houseName={houseName}
      img={img}
      address={address}
    />
  )
}

//対応するroom有りの場合
export const RentalHotelCardWithRoomCard: Story = {
  args: {
    ...baseRentalCardArgs,
    rooms: room
  },
  render: ({ houseName, img, address, rooms }) => (
    <RentalHouseCard
      houseName={houseName}
      img={img}
      address={address}
      rooms={rooms}
    />
  )
}