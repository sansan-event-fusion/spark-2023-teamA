import { MansionRoom } from "@/feature/room/type/room";
import { Photo } from "@/type/photo";


export type RentalHouse = {
  id: number;
  name: string;
  address: string;
  nearestStation: string;
  maxFloorNumber: number | string;
  buildingAge: number | string;
  rentalHousePhoto: Photo;
  mansionRoom?: MansionRoom[];
  // apartmentRoom?: ApartmentRoom[];
  // otherRoom?: OtherRoom[];
}


