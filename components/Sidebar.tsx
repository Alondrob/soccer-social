import SideBarIcon from "./shared-components/SideBarIcon";

const Sidebar = () => {
  return (
    <div className=" mt-8  text-center text-white font-bold">
      <div className="mr-12">
        <SideBarIcon className="mt-6" name={"Your-Friends"} />
      </div>
      <div className="mr-12">
        {" "}
        <SideBarIcon name={"Create-Team"} />
      </div>
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
