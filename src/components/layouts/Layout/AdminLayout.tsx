import { ReactNode } from "react"
import { AdminSidebar } from "../SideBar/AdminSideBar"

type Props = {
  children: ReactNode
}

export const AdminLayout = ({ children }: Props) => {

  // MVP: AdminのRecoilStateが空の時はSignInに飛ぶ。

  return (
    <div className="flex flex-row">
      <AdminSidebar />
      <main className="flex w-auto">{children}</main>
    </div>
  )
}