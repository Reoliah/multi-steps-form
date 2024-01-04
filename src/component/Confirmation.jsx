//asset import
import thanks from "../assets/images/icon-thank-you.svg";
const Confirm = () => {
  return (
    <section className="mobile:flex mobile:flex-col ">
      <div className="flex flex-col items-center justify-center w-[512px] max-w-[100%] my-auto text-center mobile:bg-White mobile:rounded-lg mobile:p-[64px] ">
        <img src={thanks} alt="thank you" className="w-[60px]" />
        <p className="text-4xl font-bold text-Marine_blue my-[14px] mobile:text-2xl">
          Thank You!
        </p>
        <p className="text-Cool_gray text-lg font-medium mobile:text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support please feel free to email us at
          support@loremgaming.com
        </p>
      </div>
      <div className="text-center text-Marine_blue max-w-[93%] self-end mt-[280px] mobile:mt-[140px]">
        Challenged by &nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="transition-200 hover:text-Purplish_blue"
        >
          FrontEnd Mentor
        </a>
        . Coded by &nbsp;
        <a
          href="https://github.com/reoliah"
          target="_blank"
          rel="noreferrer"
          className="transition-200 hover:text-Purplish_blue font-bold"
        >
          Isaiah Omoboriowo
        </a>
        .
      </div>
    </section>
  );
};

export default Confirm;
