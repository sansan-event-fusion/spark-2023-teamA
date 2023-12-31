import { AdminLayout } from "@/components/layouts/Layout/AdminLayout";
import { AdminRentalHouseList } from "@/feature/rentalHouse/page/AdminRentalHotelList";
import { ReactElement } from "react";

const RentalHouseListPage = (): JSX.Element => <AdminRentalHouseList />;

RentalHouseListPage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default RentalHouseListPage;