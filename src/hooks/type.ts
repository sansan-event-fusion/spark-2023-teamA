
export type Route = {
  id: keyof RoutingType;
  path: string; 
}

type RoutingWithParams<T> = {
  buildRoute: (params: T) => Route;
  pathName: string;
}

type RoutingWithNoParams = {
  buildRoute: () => Route;
  pathName: string;
}

export type RoutingType = {
  room: RoutingWithParams<{ roomId: number }>;
  rentalHouses: RoutingWithNoParams;
  rentalHousesByHouseName: RoutingWithParams<{ houseName: string }>;
}