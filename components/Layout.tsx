import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (children: any) => {
  return (
    <div className="block">
      <div>
        <Header />
      </div>
      <div className="flex ">
        <div className="bg-black w-64 h-screen">
          <Sidebar />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Layout;
