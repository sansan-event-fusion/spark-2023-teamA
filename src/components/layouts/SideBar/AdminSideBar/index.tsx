import { AdminHeading } from "@/components/atoms/Heading/admin";
import { Heading } from "@/components/atoms/Heading/user"

export const AdminSidebar = () => {

  //SideBarに必要なリンクの配列
  const menuLink = [
    { 

    },
  ];
  
  return (
    <div className="flex flex-col w-52 min-h-screen h-full bg-gray-800 text-white">
      <AdminHeading />

    </div>
  )
}