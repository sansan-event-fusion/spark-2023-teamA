import { MansionRoom } from "@/feature/room/type.ts/room";
import { Photo } from "@/type/photo";


export type RentalHouse = {
  id: number;
  name: string;
  address: string;
  nearestStation: string;
  maxFloorNumber: string;
  buildingAge: number;
  rentalHousePhoto: Photo;
  mansionRoom?: MansionRoom[];
  // apartmentRoom?: ApartmentRoom[];
  // otherRoom?: OtherRoom[];
}


