import { ReactElement } from "react";
import { UserLayout } from "@/components/layouts/Layout/UserLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ISR_REVALIDATE } from "@/constants/constants";
import { SearchableRentalHouseList } from "@/feature/rentalHouse/page";
import { BelongToOwnerRentalHouses } from "@/mock";


export const getStaticProps: GetStaticProps = async () => {
  // TODO:  apiができたらデータフェッチする。
  // const fetchedRentalHouses

  const rentalHouses = BelongToOwnerRentalHouses

  return {
    props: { rentalHouses },
    revalidate: ISR_REVALIDATE,
  };
};

type Props = {
  rentalHouses: InferGetStaticPropsType<typeof getStaticProps>;
};

const RentalHousesPage = ({ rentalHouses }: Props): ReactElement => (
  <SearchableRentalHouseList rentalHouses={rentalHouses} />
);

RentalHousesPage.getLayout = (page: ReactElement) => <UserLayout>{page}</UserLayout>;

export default RentalHousesPage;
