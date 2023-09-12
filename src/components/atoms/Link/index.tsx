import Link from "next/link"

export type Props = {
  path: string,
  innerText: string
  className?: string,
}

export const PlainLink = ({ path, innerText, className }: Props): JSX.Element => 
    <Link href={path} className={`flex items-center bg-pink-color text-center py-3 px-6 rounded-xl text-white ${className}`}>{innerText}</Link>