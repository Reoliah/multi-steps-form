//hook import
import { useState } from "react";
//rrd import
import { useNavigate } from "react-router-dom";
//button component imports
import { ButtonA, ButtonB } from "./Buttons";
//react-redux import
import { useDispatch, useSelector } from "react-redux";
//data update import
import { updatePlanChoice } from "../redux/details/userData";

const Plans = () => {
  const [toggle, setToggle] = useState(false);
  const [slider, setSlider] = useState(false);

  //useSelector selects the state in the store
  const planData = useSelector((state) => state.data.selectPlan);
  //useDispatch to update and call action
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let planTitle;
  let planPrice;
  let planDuration;

  const handleSwitch = () => {
    setToggle(!toggle);
    setSlider(!slider);
    updateFontWeight();
  };

  function updateFontWeight() {
    const monthly = document.getElementById("monthly");
    const yearly = document.getElementById("yearly");
    // Check the current state of the slider
    const isMonthlySelected = slider;

    // Switch font boldness of plan Duration in UX
    monthly.classList.toggle("font-extrabold", isMonthlySelected);
    yearly.classList.toggle("font-extrabold", !isMonthlySelected);
  }

  //get string values of active plans
  function active(e) {
    const monthly = document.getElementById("monthly");
    const yearly = document.getElementById("yearly");
    // Check the current state of the slider
    const isMonthlySelected = slider;

    // Get plan Duration, plan Title and plan Price text
    planDuration = !isMonthlySelected ? monthly.innerText : yearly.innerText;
    planTitle =
      e.target.parentElement.children[1].children[1].children[0].innerText;
    planPrice =
      e.target.parentElement.children[1].children[1].children[1].children[0]
        .innerText;

    dispatch(
      updatePlanChoice({
        planDuration: planDuration,
        planTitle: planTitle,
        planPrice: planPrice,
      })
    );
  }

  function nextPage() {
    const error = document.getElementById("error");
    planData.planTitle
      ? navigate("/add-ons")
      : error.classList.remove("hidden");
  }
  function previousPage() {
    navigate("/");
  }

  return (
    <article className="mobile:flex mobile:flex-col mobile:h-[100vh] ">
      <div className="mobile:bg-White mobile:rounded-lg mobile:p-[16px] ">
        <div>
          <span>
            <p className="text-4xl font-bold text-Marine_blue mobile:text-2xl">
              Select Your Plan
            </p>
            <p className="text-Cool_gray text-lg font-medium mobile:text-[17px] ">
              You have the option of monthly or yearly billing.
            </p>
          </span>
        </div>
        <section className="mt-[30px] mobile:mt-[24px]">
          <div className="flex space-x-[20px] mobile:flex-col mobile:space-y-[20px] mobile:space-x-0">
            <div className="radio" onClick={active}>
              <input
                className="hidden"
                id="radio_1"
                type="radio"
                name="radio"
              />
              <label
                className="flex flex-col w-[160px] p-[18px] border border-Cool_gray rounded-[10px] mobile:flex-row mobile:p-[10px] mobile:w-[100%]"
                htmlFor="radio_1"
              >
                <img
                  src="../src/assets/images/icon-arcade.svg"
                  alt="arcade icon"
                  className="w-[40px]"
                />
                <div className="mobile:ml-[10px]">
                  <p className="mt-[40px] text-xl text-Marine_blue font-bold mobile:mt-0 mobile:text-lg">
                    Arcarde
                  </p>
                  {!toggle ? (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;9/mo</p>
                      <p></p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;90/yr</p>
                      <p className="font-medium text-Marine_blue mobile:text-sm">
                        2 months free
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="radio" onClick={active}>
              <input
                className="hidden"
                id="radio_2"
                type="radio"
                name="radio"
              />
              <label
                className="flex flex-col w-[160px] p-[18px] border border-Cool_gray rounded-[10px] mobile:flex-row mobile:p-[10px] mobile:w-[100%]"
                htmlFor="radio_2"
              >
                <img
                  src="../src/assets/images/icon-advanced.svg"
                  alt="advanced icon"
                  className="w-[40px]"
                />
                <div className="mobile:ml-[10px]">
                  <p className="mt-[40px] text-xl text-Marine_blue font-bold mobile:text-lg mobile:mt-0 ">
                    Advanced
                  </p>
                  {!toggle ? (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;12/mo</p>
                      <p></p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;90/yr</p>
                      <p className="font-medium text-Marine_blue mobile:text-sm">
                        2 months free
                      </p>
                    </div>
                  )}{" "}
                </div>
              </label>
            </div>
            <div className="radio" onClick={active}>
              <input
                className="hidden"
                id="radio_3"
                type="radio"
                name="radio"
              />
              <label
                className="flex flex-col w-[160px] p-[18px] border border-Cool_gray rounded-[10px] mobile:flex-row mobile:p-[10px] mobile:w-[100%]"
                htmlFor="radio_3"
              >
                <img
                  src="../src/assets/images/icon-pro.svg"
                  alt="pro icon"
                  className="w-[40px] "
                />
                <div className="mobile:ml-[10px]">
                  <p className="mt-[40px] text-xl text-Marine_blue font-bold mobile:mt-0 mobile:text:lg ">
                    Pro
                  </p>
                  {!toggle ? (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;15/mo</p>
                      <p></p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-small text-Cool_gray">&#36;150/yr</p>
                      <p className="font-medium text-Marine_blue mobile:text-sm">
                        2 months free
                      </p>
                    </div>
                  )}
                </div>
              </label>
            </div>
          </div>
        </section>
        <form className="flex space-x-[24px] bg-Alabaster w-[520px] mt-[30px] py-[20px] justify-center rounded-[8px] mobile:w-[100%] mobile:py-[12px] mobile:mt-[24px]">
          <label id="monthly" className="font-extrabold text-Marine_blue">
            Monthly
          </label>
          <div className="">
            <label htmlFor="toggle" className="flex cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  id="toggle"
                  name="slider"
                  onClick={handleSwitch}
                />
                <div className="block bg-gray-600 w-[57px] h-[28px] rounded-full duration-300 ease-in-out"></div>
                {!slider ? (
                  <div className="absolute left-[6px] top-[5px] bg-white w-[18px] h-[18px] rounded-full transform translate-x-0 duration-300 ease-in-out "></div>
                ) : (
                  <div className="absolute left-[6px] top-[5px] bg-white w-[18px] h-[18px] rounded-full transform translate-x-[150%] duration-300 ease-in-out"></div>
                )}
              </div>
            </label>
          </div>
          <label id="yearly" className="text-Marine_blue">
            Yearly
          </label>
        </form>
        <p
          id="error"
          className="text-sm font-light text-center text-[#ff3860] hidden"
        >
          Please choose a plan
        </p>
      </div>
      <div className="flex absolute bottom-[110px] space-x-[255px] mobile:bottom-[20px] mobile:space-x-0 mobile:w-[100%] mobile:justify-between ">
        <div onClick={previousPage}>
          <ButtonB />
        </div>
        <div onClick={nextPage}>
          <ButtonA />
        </div>
      </div>
    </article>
  );
};

export default Plans;
