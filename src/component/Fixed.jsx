//rrd import
import { NavLink, useNavigate, useLocation } from "react-router-dom";
//hook import
import { useState } from "react";
//react-redux import
import { useDispatch, useSelector } from "react-redux";
//toast import
import { toast } from "react-toastify";

//store import
import { clearAddOns } from "../redux/details/userData";

const Fixed = () => {
  const [isInfoActive, setIsInfoActive] = useState(false);
  const [isPlanActive, setIsPlanActive] = useState(false);
  const [isAddOnActive, setIsAddOnActive] = useState(false);
  const [isSummaryActive, setIsSummaryActive] = useState(false);
  const planData = useSelector((state) => state.data.selectPlan);
  const addOnData = useSelector((state) => state.data.addOns);
  const userDetails = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigateToHome = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const handleNavigateToPlan = (event) => {
    event.preventDefault();
    if (userDetails.username) {
      navigate("/selectPlan");
      dispatch(clearAddOns());
    } else if (!userDetails.username && location.pathname === "/") {
      toast.error("Please submit your information first");
    }
  };
  const handleNavigateToAddOn = (event) => {
    event.preventDefault();
    if (planData.planTitle) {
      navigate("/add-ons");
      dispatch(clearAddOns());
    } else if (!planData.planTitle && location.pathname === "/") {
      toast.error("Please submit your information first");
    } else if (!planData.planTitle && location.pathname === "/selectPlan") {
      toast.error("Please select a plan first");
    }
  };
  const handleNavigateToSummary = (event) => {
    event.preventDefault();
    if (addOnData.add_on) {
      navigate("/summary");
    } else if (!addOnData.add_on && location.pathname === "/") {
      toast.error("Please submit your information first");
    } else if (!addOnData.add_on && location.pathname === "/selectPlan") {
      toast.error("Please select a plan first");
    } else if (!addOnData.add_on && location.pathname === "/add-ons") {
      toast.error("Please add some add-ons first");
    }
  };
  return (
    <div className="bg-desktop bg-no-repeat bg-auto m-[16px] pt-[30px] h-screen mobile:bg-mobile mobile:bg-no-repeat mobile:bg-auto mobile:w-[100vw] mobile:flex mobile:justify-center mobile:m-0 mobile:pt-[10px] mobile:-space-x-[6px] aside">
      <NavLink to="/" onClick={handleNavigateToHome}>
        <div className="flex gap-[24px] ml-[24px] mobile:mt-[24px] mobile:ml-0  cursor-pointer">
          <span className="border-white text-white flex h-11 w-11 rounded-full  border  items-center justify-center font-bold hover:bg-Light_blue hover:text-black span mobile:h-8 mobile:w-8">
            1
          </span>
          <span className="mobile:hidden">
            <p className="uppercase text-Light_gray text-small font-normal">
              step 1
            </p>
            <p className="uppercase text-white font-bold text-base">
              your info
            </p>
          </span>
        </div>
      </NavLink>
      <NavLink to="/selectPlan" onClick={handleNavigateToPlan}>
        <div className="flex gap-[24px] mt-[24px] ml-[24px] cursor-pointer">
          <span
            className="border-white text-white
            flex h-11 w-11 rounded-full  border  items-center justify-center font-bold hover:bg-Light_blue hover:text-black span mobile:h-8 mobile:w-8"
          >
            2
          </span>
          <span className="mobile:hidden">
            <p className="uppercase text-Light_gray text-small font-normal">
              step 2
            </p>
            <p className="uppercase text-white font-bold text-base">
              select plan
            </p>
          </span>
        </div>
      </NavLink>
      <NavLink to="/add-ons" onClick={handleNavigateToAddOn}>
        <div className="flex gap-[24px] mt-[24px] ml-[24px] cursor-pointer">
          <span className="border-white text-white flex h-11 w-11 rounded-full  border  items-center justify-center font-bold hover:bg-Light_blue hover:text-black span mobile:h-8 mobile:w-8">
            3
          </span>
          <span className="mobile:hidden">
            <p className="uppercase text-Light_gray text-small font-normal">
              step 3
            </p>
            <p className="uppercase text-white font-bold text-base">add-ons</p>
          </span>
        </div>
      </NavLink>
      <NavLink to="/summary" onClick={handleNavigateToSummary}>
        <div className="flex gap-[24px] mt-[24px] ml-[24px] cursor-pointer">
          <span className="border-white text-white flex h-11 w-11 rounded-full  border  items-center justify-center font-bold hover:bg-Light_blue hover:text-black span mobile:h-8 mobile:w-8">
            4
          </span>
          <span className="mobile:hidden">
            <p className="uppercase text-Light_gray text-small font-normal">
              step 4
            </p>
            <p className="uppercase text-white font-bold text-base">summary</p>
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default Fixed;
