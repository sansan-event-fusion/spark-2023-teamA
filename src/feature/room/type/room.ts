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
  thanksMoney: number;  // 礼金
  securityDeposit: number; // 敷金
  floorDeposit: number; // 階層
  availableDates?: string[];
  rent: number; // 賃金
  contractDuration: string; // 契約期間
  stayFee: number; // 宿泊費
  image?: Photo;
}

export type Layout = 
  '1R' | '1K' |'1DK' | '1LDK' | '2K' | '2DK' | '2LDK' | '3DK' 
  | '3LDK' | '4DK' | '4LDK' | 'その他';
