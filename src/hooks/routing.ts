import { RoutingType } from "./type";

export const roomPath = '/room'
export const rentalHouse = '/rentalHouse'

// pathをここに追加していく。　
export const Routing: RoutingType = {
  room: {
    buildRoute: ({ roomId }) => {
      return {
        id: 'room', 
        path: `${roomPath}/${roomId}`
      }
    },
    pathName: 'room詳細',
  },
  rentalHouses: {
    buildRoute: () => {
      return {
        id: 'rentalHouses',
        path: `${rentalHouse}`
      }
    },
    pathName: 'rentalHouseの一覧'
  },
  rentalHousesByHouseName: {
    buildRoute: ({ houseName }) => {
      return {
        id: 'rentalHousesByHouseName',
        path: `${rentalHouse}?houseName=${houseName}`
      }
    },
    pathName: 'rentalHouseをhotelNameで条件検索'
  },

}