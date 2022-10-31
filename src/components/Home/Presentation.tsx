import illustration from "../../assets/home/illustration-charts.svg";
import HeadingText from "./HeadingText";

const Presentation =()=>{

    return(<div className="mt-[80px] sm:mt-[104px] flex flex-col justify-start items-center sm:flex-row-reverse   lg:mt-[102px] w-full z-10">
        <img src={illustration} alt="illustration" className="w-[171px] h-[192px]  sm:w-[281px] sm:h-[314px]  lg:w-[475px] lg:h-[531px]  "/>
        <HeadingText />
    </div>);
};
export  default  Presentation;