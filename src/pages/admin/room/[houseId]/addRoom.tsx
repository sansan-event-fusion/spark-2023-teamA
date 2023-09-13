import { AdminLayout } from "@/components/layouts/Layout/AdminLayout";
import { AdminAddRentalRoom } from "@/feature/room/page/AdminAddRoomBelongToRentalHouse";
import { ReactElement } from "react";

//rentalHouse一件に紐ずくroom一覧取得
const AddRoomBelongToRentalHousePage = (): JSX.Element => <AdminAddRentalRoom />;

AddRoomBelongToRentalHousePage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default AddRoomBelongToRentalHousePage;