import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from "./SatateProvider";

function Sidebar() {
  const[{user},dispatch]=useStateValue();


  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID -19 Information Center"
      />
      <SidebarRow title="pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="MarketPlace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={SwitchVideoIcon} />
      <SidebarRow title="MarketPlace" Icon={ExpandMoreIcon} />
    </div>
  );
}

export default Sidebar;
