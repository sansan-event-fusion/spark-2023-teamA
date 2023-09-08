import { Heading } from "@/components/atoms/Heading"

export const UserHeader = (): JSX.Element => {

  return (
    <header className="w-full p-1 border-b border-gray-300">
      <Heading />
      {/* 右端にアイコンを表示 -> ログインしている人は顔,していない人は認証に飛ばす。 */}
    </header>
  )
}