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
  structure_type: StructureType;
  mansionRoom?: MansionRoom[];
  // apartmentRoom?: ApartmentRoom[];
  // otherRoom?: OtherRoom[];
}

enum StructureType  {
  "木造" = 1,
  "S造・鉄骨造" = 2,
  "RC造・鉄筋コンクリート造" = 3
}

export const Structure = {
  1: "木造",
  2: "S造・鉄骨造",
  3: "RC造・鉄筋コンクリート造"
};
