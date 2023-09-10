import { RentalHouseSearchBox } from "../components/RentalHouseSearchBox";
import { RentalHouseList } from "../components/RentalHouseList";

type Props = {
  rentalHouses: any
}

export const SearchableRentalHouseList = ({ rentalHouses }: Props): JSX.Element => {
  return (
    <>
      <RentalHouseSearchBox />
      <RentalHouseList
        rentalHouses={rentalHouses}
      />
    </>
  )
};