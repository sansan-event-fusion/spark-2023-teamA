import { Routing } from "@/hooks/routing";
import Link from "next/link";

export const AdminHeading = (): JSX.Element => (
  <h1 className="font-bold text-xl">
    {/* TODO: まだpathが決まってないので後で変更する */}
    <Link href={'/'}>
      Fill Home(Admin)
    </Link>
  </h1>
)