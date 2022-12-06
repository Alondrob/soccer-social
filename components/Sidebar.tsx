import Link from "next/link";
import SideBarIcon from "./shared-components/SideBarIcon";

const Sidebar = () => {

  // const handleClick = () => {
  //   switch (stateName) {
  //     case "friends":
        
  //   }
  // }
  return (
    <div className=" mt-8  text-center text-white font-bold">
      <Link href="/friends">
        <div className="mr-12">
          <SideBarIcon className="mt-6" name={"Friends"} />
        </div>
      </Link>

      <Link href="/createTeam">
        <div className="mr-12">
          {" "}
          <SideBarIcon name={"Create Team"} />
        </div>
      </Link>

      <div className="mr-12">
        {" "}
        <SideBarIcon name={"Bet"} />
      </div>
      <div className="mr-12">
        <SideBarIcon name={"Login"} />
      </div>
      <div className="mr-12">
        <SideBarIcon name={"Sign In"} />
      </div>
    </div>
  );
};

export default Sidebar;
