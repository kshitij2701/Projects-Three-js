import { MdManageAccounts} from "react-icons/md";
import { MdSpaceDashboard  } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiSolidComment } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const menu = [
  {
    title: "Dashboard",
    icon: <MdSpaceDashboard />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <AiOutlineAppstoreAdd />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <MdManageAccounts />,
    childrens: [
      {
        title: "Profile",
        icon: <RiAccountCircleFill size={23} />,
        path: "/profile",
      },
      {
        title: "Edit Profile",
        icon: <FaUserEdit size={22} />,
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <BiSolidComment />,
    path: "/contact-us",
  },
];

export default menu;