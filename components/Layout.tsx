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

        <div className="h-screen w-full bg-green-100">
          {children.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
