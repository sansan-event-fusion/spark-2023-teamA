import { Routing } from "@/hooks/routing";
import Link from "next/link";

export const AdminHeading = (): JSX.Element => (
  <h1 className="font-bold text-xl">
    <Link href={Routing.adminRentalHouses.buildRoute().path}>
      Fill Home
    </Link>
  </h1>
)