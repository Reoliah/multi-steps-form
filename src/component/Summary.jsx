//react-redux import
import { useDispatch, useSelector } from "react-redux";
//rrd import
import { Link, useNavigate } from "react-router-dom";
//buttons import
import { ButtonB, ButtonC } from "./Buttons";
//store import
import { clearAddOns } from "../redux/details/userData";

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const planData = useSelector((state) => state.data.selectPlan);
  const duration = planData.planDuration;
  const addOnData = useSelector((state) => state.data.addOns);
  const addsOn = addOnData.map((addOn, index) => (
    <ul key={index} className="mt-[10px]">
      <li className="flex justify-between ">
        <p className="text-Cool_gray font-medium">{addOn.add_on}</p>
        <p className="text-Marine_blue font-medium">+&#36;{addOn.price}</p>
      </li>
    </ul>
  ));

  const addOnDuration = {
    duration: duration === "Monthly",
    priceTag: duration === "Monthly" ? "mo" : "yr",
  };

  // Calculate the sum of plan price and add-ons prices
  const calculateTotal = () => {
    const planPriceDigits = planData.planPrice.match(/\d+/);

    // If planPriceDigits is an array, take the first element (the extracted digits)
    const extractedDigits = planPriceDigits ? planPriceDigits[0] : null;

    // Convert the extracted digits to a number
    const numericValue = extractedDigits ? parseInt(extractedDigits, 10) : null;

    const addOnsTotal = addOnData.reduce(
      (total, addOn) => total + parseFloat(addOn.price),
      0
    );

    return numericValue + addOnsTotal;
  };

  const sum = calculateTotal();

  function nextPage() {
    navigate("/confirmation");
  }
  function previousPage() {
    dispatch(clearAddOns());
    navigate("/selectPlan");
  }
  return (
    <main className="mobile:flex mobile:flex-col mobile:h-[100vh]">
      <article className="mobile:bg-White mobile:rounded-lg mobile:p-[16px] ">
        <div>
          <span>
            <p className="text-4xl font-bold text-Marine_blue mobile:text-2xl">
              Finishing Up
            </p>
            <p className="text-Cool_gray text-lg font-medium mobile:text-base">
              Double-check everything looks OK before confirming.
            </p>
          </span>
        </div>
        <section className="bg-Alabaster mt-[30px] py-[24px] px-[20px] rounded-lg mobile:mt-[24px]">
          <div className="flex justify-between border-b-[1px] border-Cool_gray pb-[24px]">
            <div>
              <p className="font-bold text-Marine_blue text-lg">
                {planData.planTitle} ({planData.planDuration})
              </p>
              <Link
                to="/selectPlan"
                onClick={() => dispatch(clearAddOns())}
                className="underline text-Cool_gray  hover:text-Purplish_blue"
              >
                Change
              </Link>
            </div>
            <p className="font-bold text-Marine_blue text-lg self-center">
              {planData.planPrice}
            </p>
          </div>
          <div>{addsOn}</div>
        </section>
        <div className="flex justify-between mt-[30px] px-[20px]">
          <p className="text-Cool_gray">
            Total (per {planData.planDuration.slice(0, -2).toLowerCase()})
          </p>
          <p className="text-Purplish_blue text-xl font-bold">
            +&#36;{sum}/{addOnDuration.priceTag}
          </p>
        </div>
      </article>
      <div className="flex absolute bottom-[100px] space-x-[255px] mobile:bottom-[20px] mobile:space-x-0 mobile:w-[100%] mobile:justify-between ">
        <div onClick={previousPage}>
          <ButtonB />
        </div>
        <div onClick={nextPage}>
          <ButtonC />
        </div>
      </div>
    </main>
  );
};

export default Summary;
