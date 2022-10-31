import React from "react";
import bg from "../assets/home/bg-pattern-header.svg";
import logo from "../assets/shared/logo.svg";
import bgB from "../assets/home/bg-pattern-header.svg";
import Footer from "../components/Shared/Footer";

interface Props extends React.PropsWithChildren {
    style: string,
    dimensions:string,
    isVisible:boolean
}

const Layout :React.FC<Props> =(props)=>{
    const hidden=props.isVisible?"":"sm:invisible";
    return (
       <main className={`min-h-screen overflow-hidden  flex flex-col justify-center items-center sm:items-start  px-6 sm:pl-[39px] sm:pr-[40px] lg:px-[165px] ${props.style}  relative z-1 bg-[#FAFAFA]`}>
          <img src={bg} alt="bg" className={`absolute -top-[170px] z-0 sm:w-[666px] sm:h-[666px] sm:-top-[164px] sm:-right-[293px] lg:w-[1134px] lg:h-[1134px] lg:-top-[419px] lg:-right-[350px] ${hidden}`}/>

           <img src={logo} alt="logo" className="w-[155px] h-[30px] mt-[46px] mb-[80px] sm:mb-[104px] sm:mt-[72px] lg:mt-[81px]"/>

           {
               props.children
           }

       </main>
    );
};
export default  Layout;