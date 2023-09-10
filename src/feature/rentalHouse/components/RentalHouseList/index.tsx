import { useRouter } from "next/router"
import { RentalHouse } from "../../type/rentalHouse"
import { RentalHouseCard } from "../RentalHouseCard"


export type Props = {
  rentalHouses: RentalHouse[]
}

export const RentalHouseList = ({ rentalHouses }: Props): JSX.Element => {
  const { query } = useRouter();

  // queryの値と部分一致
  const filteredHouses = rentalHouses.filter((house) => {
     if (query.houseName) {
      return house.name.includes(query.houseName as string);
     } else {
      return rentalHouses
     }
  });

  return (
    <div className="mt-8 flex flex-col gap-8">
      {
        filteredHouses.map((house) => {
          return (
            <RentalHouseCard 
              key={house.id} 
              houseName={house.name}
              img={house.rentalHousePhoto.image}
              address={house.address}
              rooms={house.mansionRoom}
            />
          )
        })
      }
    </div>
  )
}