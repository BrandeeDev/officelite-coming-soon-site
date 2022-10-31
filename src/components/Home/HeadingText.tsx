import {useNavigate} from "react-router-dom";

const HeadingText = () => {
const navigate=useNavigate();
const navigationHandler=()=>{
  navigate('/sign-up') ;
};
    return (
        <div className="flex flex-col justify-center items-center  gap-y-6  sm:w-[345px] sm:justify-start sm:items-start lg:w-[540px]">
            <h1 className="font-kumbh font-bold not-italic text-[40px] leading-[48p] text-center text-[#333950]] sm:text-left lg:text-[56px] lg:leading-[64px] ">A
                simple solution to complex tasks is coming soon</h1>
            <p className="font-kumbh not-italic font-normal text-base leading-[26px text-center text-[#747B95] sm:text-left lg:text-lg lg:leading-7">Say
                goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
                collaboration platform built with an intuitive interface to improve productivity.</p>
            <button onClick={navigationHandler} className="w-[171px] h-[56px] rounded-[28px] bg-[#5175FF] shadow-cus shadow-[#3F5BC2] flex justify-center items-center
           font-kumbh font-bold not-italic text-base leading-7 text-white  lg:mt-8 hover:bg-[#829CFF] ">Get Started

            </button>

        </div>
    );
};
export default HeadingText;
