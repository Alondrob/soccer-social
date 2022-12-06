import {
  FaUserFriends,
  FaUserAlt,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { GiSoccerField, GiMoneyStack } from "react-icons/gi";
import { TbSoccerField } from "react-icons/tb";

const SideBarIcon = ({ icon, name }: any) => {
  return (
    <div>
      <div className="flex justify-center h-12  mb-6 rounded-lg hover:bg-pink-300 ">
        <button className="flex  ">
          <div className="absolute left-2">
            {name === "Friends" && <FaUserFriends size={30} />}
            {name === "Create Team" && <TbSoccerField size={36} />}
            {name === "Bet" && <GiMoneyStack size={30} />}
            {name === "Logout" && <FaSignOutAlt size={30} />}
            {name === "Login" && <FaUserCircle size={24} />}
            {name === "Sign In" && <FaUserAlt size={24} />}
          </div>
          <div className=" text-xl"> {name}</div>
        </button>
      </div>
      {/* ************************************* */}
    </div>
  );
};

export default SideBarIcon;
