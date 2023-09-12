import { AdminLayout } from "@/components/layouts/Layout/AdminLayout";
import { AddRentalHouse } from "@/feature/rentalHouse/page/AddRentalHouse.tsx";
import { ReactElement } from "react";

const AddRentalHousePage = (): JSX.Element => <AddRentalHouse />;

AddRentalHousePage.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default AddRentalHousePage;