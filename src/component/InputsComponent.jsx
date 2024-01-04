import { useDispatch, useSelector } from "react-redux";

import { useForm, useFormState } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ButtonA } from "./Buttons";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/details/userDetails";

const InputComponent = () => {
  const dispatch = useDispatch();
  const { username, email, contact } = useSelector((state) => state.user);
  const form = useForm({
    defaultValues: { username: username, email: email, contact: contact },
    mode: "onTouched",
  });
  const { register, handleSubmit, control, formState } = form;
  const { errors, isSubmitted } = formState;
  // const { isDirty } = useFormState;

  const navigate = useNavigate();
  // function setUserData(username, email, contact) {
  //   return setUser({ username, email, contact });
  // }

  const onSubmit = async (data) => {
    try {
      const { username, email, contact } = data; // Extract values from form data
      dispatch(setUser({ username, email, contact }));

      if (isSubmitted) {
        navigate("/selectPlan");
      }
    } catch (error) {
      console.error(`${error.message} error has occured`);
    }
  };

  return (
    <main className="mobile:flex mobile:flex-col mobile:h-[100vh] ">
      <form
        className="space-y-[100px] mobile:flex mobile:flex-col mobile:justify-between mobile:h-full mobile:space-y-0"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <article className="mobile:bg-White mobile:rounded-lg mobile:p-[16px] ">
          <div>
            <p className="text-4xl mobile:text-2xl font-bold text-Marine_blue">
              Personal info
            </p>
            <p className="text-Cool_gray text-lg font-medium">
              Please provide your name, email address, and phone number.
            </p>
          </div>
          <div className="flex flex-col mt-[30px] space-y-[18px] mobile:mt-[24px]">
            <label>
              <div className="flex justify-between w-[520px] mobile:w-[100%]">
                <p className="text-base font-medium text-Marine_blue ">Name</p>
                <p className="error">{errors.username?.message}</p>
              </div>

              <input
                type="text"
                name="username"
                placeholder="e.g Stephen King"
                {...register("username", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^([A-Za-z\-.,'][\s\-.,']?[A-Za-z\-.,']?)+$/,
                    mesaage: "Name is invalid",
                  },
                  validate: {
                    lessName: (fieldValue) => {
                      if (fieldValue.length < 3) {
                        return "Name is invalid";
                      }
                    },
                  },
                })}
                className={`w-[520px] mobile:w-[100%] ${
                  errors.username
                    ? "border-[#ff3860] border-[2px]"
                    : "border-[1px]"
                } h-[48px] border rounded-[8px] border-Cool_gray p-[10px] focus:border-Purplish_blue focus:outline-none mt-[4px]`}
              />
            </label>
            <label>
              <div className="flex justify-between w-[520px] mobile:w-[100%]">
                <p className="text-base font-medium text-Marine_blue ">Email</p>
                <p className="error">{errors.email?.message}</p>
              </div>
              <input
                type="text"
                name="email"
                placeholder="e.g Stephenking@lorem.com"
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email invalid",
                  },
                })}
                className={`w-[520px] mobile:w-[100%] ${
                  errors.email
                    ? "border-[#ff3860] border-[2px]"
                    : "border-[1px]"
                } h-[48px] border rounded-[8px] border-Cool_gray p-[10px] focus:border-Purplish_blue focus:outline-none mt-[4px]`}
              />
            </label>
            <label>
              <div className="flex justify-between w-[520px] mobile:w-[100%]">
                <p className="text-base font-medium text-Marine_blue ">
                  Phone number
                </p>
                <p className="error">{errors.contact?.message}</p>
              </div>
              <input
                type="tel"
                name="contact"
                placeholder="e.g +1 234 567 890"
                {...register("contact", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value:
                      /^\+?([0-9]{1,3})?[-. ]?(0)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Contact invalid",
                  },
                })}
                className={`w-[520px] mobile:w-[100%] ${
                  errors.contact
                    ? "border-[#ff3860] border-[2px]"
                    : "border-[1px]"
                } h-[48px] border rounded-[8px] border-Cool_gray p-[10px] focus:border-Purplish_blue focus:outline-none mt-[4px]`}
              />
            </label>
          </div>
        </article>
        <div className="flex justify-end bottom-[110px] mobile:bottom-[20px] mobile:w-[100%] ">
          <ButtonA />
        </div>
      </form>
      <DevTool control={control} />
    </main>
  );
};

export default InputComponent;
