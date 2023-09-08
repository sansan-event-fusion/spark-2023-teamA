import Link from "next/link";

export const Heading = (): JSX.Element => (
  <h1 className="font-bold text-xl">
    {/* TODO: 変更する */}
    <Link href={'/'}>
      Fill Home
    </Link>
  </h1>
)