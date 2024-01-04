//rrd imports
import { useNavigate } from "react-router-dom";
//hook import
import { useState } from "react";
//react-redux toolkit import
import { useDispatch, useSelector } from "react-redux";
//store import
import { selectedAddOns } from "../redux/details/userData";
//import buttons
import { ButtonB, ButtonA } from "./Buttons";

const AddOns = () => {
  const [checked, setChecked] = useState({});
  const planData = useSelector((state) => state.data.selectPlan);
  const addOnData = useSelector((state) => state.data.addOns);
  const duration = planData.planDuration;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addOnsParameter = [
    {
      id: 0,
      title: "Online Service",
      description: "Access to multiplayer games",
      duration: duration === "Monthly",
      price: duration === "Monthly" ? 1 : 10,
      priceTag: duration === "Monthly" ? "mo" : "yr",
    },
    {
      id: 1,
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      duration: duration === "Monthly",
      price: duration === "Monthly" ? 2 : 20,
      priceTag: duration === "Monthly" ? "mo" : "yr",
    },
    {
      id: 2,
      title: "Customizable profile",
      description: "Custom theme on your profile",
      duration: duration === "Monthly",
      price: duration === "Monthly" ? 2 : 20,
      priceTag: duration === "Monthly" ? "mo" : "yr",
    },
  ];

  const handleCheckboxChange = (item) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [item.id]: !prevChecked[item.id],
    }));
  };
  const nextPage = () => {
    const error = document.getElementById("error");

    // Filter out only the checked add-ons
    const checkedAddOns = Object.keys(checked).filter((id) => checked[id]);

    if (checkedAddOns.length > 0) {
      checkedAddOns.forEach((id) => {
        dispatch(
          selectedAddOns({
            add_on: addOnsParameter.find((item) => item.id === Number(id))
              .title,
            price: `${
              addOnsParameter.find((item) => item.id === Number(id)).price
            }/${
              addOnsParameter.find((item) => item.id === Number(id)).priceTag
            }`,
          })
        );
      });

      navigate("/summary");
    } else {
      error.classList.remove("hidden");
    }
  };
  function previousPage() {
    setChecked({});
    navigate("/selectPlan");
  }

  return (
    <main className="mobile:flex mobile:flex-col mobile:h-[100vh] ">
      <article className="mobile:bg-White mobile:rounded-lg mobile:p-[16px] ">
        <div>
          <span>
            <p className="text-4xl font-bold text-Marine_blue mobile:text-2xl">
              Pick add-ons
            </p>
            <p className="text-Cool_gray text-lg font-medium mobile:text-base">
              Add-ons help enhance your gaming experience.
            </p>
          </span>
        </div>
        <section className="mt-[30px] space-y-[24px]  ">
          {addOnsParameter.map((item) => (
            <label
              key={item.id}
              htmlFor={item.title}
              className="border-[1px] border-Light_gray flex flex-col rounded-lg px-[14px] py-[16px] cursor-pointer inputCard"
            >
              <input
                name={item.title}
                id={item.title}
                type="checkbox"
                className="absolute h-[20px] w-[20px] mt-[13px]"
                checked={checked[item.id] || false}
                onChange={() => handleCheckboxChange(item)}
              />
              <div className="flex justify-between ml-[32px]">
                <span>
                  <p className="text-Marine_blue font-bold">{item.title}</p>
                  <p className="text-Cool_gray mobile:text-[13px]">
                    {item.description}
                  </p>
                </span>
                <p className="self-center text-Purplish_blue">
                  +&#36;{item.price}/{item.priceTag}
                </p>
              </div>
            </label>
          ))}
        </section>
      </article>
      <p
        id="error"
        className="text-sm font-light text-center text-[#ff3860] hidden"
      >
        Please select at least one add-on
      </p>
      <div className="flex absolute bottom-[110px] space-x-[255px] mobile:bottom-[20px] mobile:space-x-0 mobile:w-[100%] mobile:justify-between ">
        <div onClick={previousPage}>
          <ButtonB />
        </div>
        <div onClick={nextPage}>
          <ButtonA />
        </div>
      </div>
    </main>
  );
};

export default AddOns;
