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
      <div className="flex justify-center  mb-6 rounded-lg hover:bg-pink-300 ">
        <button className="flex  ">
          <div className=" mr-3">
            {name === "Your-Friends" && <FaUserFriends size={36} />}
            {name === "Create-Team" && <TbSoccerField size={36} />}
            {name === "Bet" && <GiMoneyStack size={36} />}
            {name === "Logout" && <FaSignOutAlt size={36} />}
            {name === "Login" && <FaUserAlt size={30} />}
            {name === "Sign In" && <FaUserAlt size={30} />}
          </div>
          <div className=" text-xl"> {name}</div>
        </button>
      </div>
      {/* ************************************* */}
    </div>
  );
};

export default SideBarIcon;
