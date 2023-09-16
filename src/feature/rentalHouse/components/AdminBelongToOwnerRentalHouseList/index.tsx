import { RentalHouseCard } from "../RentalHouseCard"
import { useOwnRentalHouses } from "../../hooks/useOwnRentalHouses";

export const BelongToOwnerRentalHouseList = (): JSX.Element => {
  const { myRentalHouses } = useOwnRentalHouses(); 
  
  return (
    <div className="flex flex-col  w-full min-h-screen h-full space-y-10">
      <div className="my-8 mx-6 font-semibold text-lg">
        所持している物件一覧
      </div>
      <div className="grid gap-y-8 md:grid-cols-2 xl:grid-cols-3 ">
        { myRentalHouses.length === 0 ? (
          <p className="text-center font-bold text-red-400">まだ作成していません。</p>
        ) : (
          myRentalHouses.map((house) => {
            return (
              <RentalHouseCard
                key={house.id}
                id={house.id}
                houseName={house.name}
                img={house.rental_house_photos[0]?.image}
                address={house.address}
              />
            )
          })
        )}
      </div>
    </div>
  )
}