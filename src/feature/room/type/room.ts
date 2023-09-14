import { RentalHouse } from "@/feature/rentalHouse/type/rentalHouse";
import { Photo } from "@/type/photo";

export type MansionRoom = BaseRoom;

// MVPでは不要
// export type ApartmentRoom = BaseRoom;
// export type OtherRoom = BaseRoom;

export type MansionRoomsWithRentalHouse = {
  mansionRoom: MansionRoom[]; 
  rentalHouse: RentalHouse; 
};
export type MansionRoomWithRentalHouse = {
  mansionRoom: MansionRoom; 
  rentalHouse: RentalHouse; 
};


//Roomタイプの共通カラム
export type BaseRoom = {
  id: number;
  name: string; //ここが何に当たるか？
  layout: Layout;
  thanks_money: number;  // 礼金
  security_deposit: number; // 敷金
  floor_number: number; // 階層
  stay_fee: number;
  rent: number; // 賃金
  maintenance_fee: number;
  contract_duration: string; // 契約期間
  mansion_room_photos: Photo[];
  availableDates?: string[];
  reserve_url: string
}

export type Layout = 
  '1R' | '1K' |'1DK' | '1LDK' | '2K' | '2DK' | '2LDK' | '3DK' 
  | '3LDK' | '4DK' | '4LDK' | 'その他';
