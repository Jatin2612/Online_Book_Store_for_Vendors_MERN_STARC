import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {

  const {user} = useContext(AuthContext)


    return(
        <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
      <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Bookli logo" className="w-16 h-16 rounded">
       <p>
        {
          user?.displayName || "Demo User"
        }
       </p>
      </Sidebar.Logo>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiUser}>
            Edit Profile
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    )
}

export default SideBar