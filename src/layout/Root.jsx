//rrd imports
import { Outlet } from "react-router-dom";

//fixed image
import Fixed from "../component/Fixed";

const Root = () => {
  return (
    <div className="bg-White mt-0 ">
      <div className="grid grid-cols-3 mobile:inline-block ">
        <div className="mobile:relative mobile:bg-Alabaster ">
          <Fixed className="" />
        </div>
        <div className=" -ml-[60px] col-span-2 mt-[56px] w-[520px] mobile:absolute mobile:top-[44px] mobile:ml-[4.8%] mobile:max-w-[90.4vw] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Root;
