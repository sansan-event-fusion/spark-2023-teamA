import { StoryObj } from "@storybook/react";
import { RentalHouseCard } from ".";

const meta = {
  title: 'feature/property/components/list/components/RentalHotelCard',
  component: RentalHouseCard,
}

export default meta;

type Story = StoryObj<typeof RentalHouseCard>;

export const PlainRentalHouseCard: Story = {
  args: {
    houseName: 'テストテストテストテストテストテストテスト',
    img: '/exapmleHouse.jpg',
    address: 'テストテストテストテストテストテストテスト'
  },
  render: ({ houseName, img, address }) => (
    <RentalHouseCard 
      houseName={houseName}
      img={img}
      address={address}
    />
  )
}