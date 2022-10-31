import React from "react";
import bg_home from "../../assets/home/bg-pattern-footer.svg";
import bg_sign from "../../assets/sign-up/bg-pattern-side.svg";


interface Props extends React.PropsWithChildren {

    page:string,

}
const Footer=(props: Props)=>{
 return(<div className={`bg-[#25293A] z-0 flex absolute  ${props.page.trim()==="home"&& " bottom-0 right-0 left-0   w-screen h-[1248px] sm:h-[986px] lg:h-[603px] justify-end "} ${props.page.trim()==="sign-up"&&"h-[320px] w-screen bottom-0 right-0 left-0 justify-end  sm:h-[380px] lg:h-full lg:w-[420px] lg:left-auto lg:top-0 "}  overflow-hidden` }>
     {props.page.trim()==="home"&& <img src={bg_home} alt="" className=" absolute  object-cover box-content  w-[850px] h-[850px] sm:w-[1454px] sm:h-[1454px]  self-end  pb-[66px] sm:pb-auto sm:-bottom-[483px] lg:w-[2036px] lg:h-[2036px]lg:w-[2036px] lg:h-[2036px] lg:-bottom-[819px]  lg:-left-[702px]" />}
     {props.page.trim()==="sign-up"&& <img src={bg_sign} alt="" className="absolute object-cover box-content w-[486px] h-[486px}   self-center  -bottom-[116px] sm:w-[588px] sm:h-[588x] sm:-bottom-[104px] sm:px-[88px] lg:w-[1440px] lg:h-[1440px] lg:bottom-auto lg:left-auto   lg:-top-[400px] lg:-right-[150px]"/>}



 </div>);

}
export default Footer;