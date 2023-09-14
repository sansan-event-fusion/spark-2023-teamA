import { MansionRoom } from "@/feature/room/type/room";
import { Photo } from "@/type/photo";


export type RentalHouse = {
  id: number;
  name: string;
  address: string;
  nearest_station: string;
  max_floor_number: number;
  building_age: number;
  rental_house_photos: Photo[];
  structure_type_id: number;
  structure_type?: any;
  // structure_type: StructureType;
  // mansion_room?: MansionRoom[];
  mansion?: Mansion //rentalHouseとmansion_roomの中間テーブル
  // apartmentRoom?: ApartmentRoom[];
  // otherRoom?: OtherRoom[];
}

 export type Mansion = {
  id: number, //mansion_roomをcreateする時はこの値が必要
  rental_house_id: number,
  mansion_room?: MansionRoom[]
}

interface StructureObject {
  [key: number]: string;
}

export const Structure: StructureObject = {
  1: "木造",
  2: "S造・鉄骨造",
  3: "RC造・鉄筋コンクリート造"
};
