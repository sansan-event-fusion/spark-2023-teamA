import { RoutingType } from "./type";

// admin
export const baseAdminPath = '/admin'
export const adminOwnerPath = `${baseAdminPath}/owner`

// user
export const roomPath = '/room';
export const rentalHousePath = '/rentalHouse';

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
        path: `${rentalHousePath}`
      }
    },
    pathName: 'rentalHouseの一覧'
  },
  rentalHousesByHouseName: {
    buildRoute: ({ houseName }) => {
      return {
        id: 'rentalHousesByHouseName',
        path: `${rentalHousePath}?houseName=${houseName}`
      }
    },
    pathName: 'rentalHouseをhotelNameで条件検索'
  },

  ownerSignUp: {
    buildRoute: () => {
      return {
        id: 'ownerSignUp',
        path: `${adminOwnerPath}/signUp`
      }
    },
    pathName: 'ownerのサインアップ'
  },
  ownerSignIn: {
    buildRoute: () => {
      return {
        id: 'ownerSignUp',
        path: `${adminOwnerPath}/signIn`
      }
    },
    pathName: 'ownerのサインイン'
  },
}