import PricingBox from "../components/Home/PricingBox";
import Coming from "../components/Shared/Coming";
import Presentation from "../components/Home/Presentation";
import Layout from "../UI/Layout";
import Footer from "../components/Shared/Footer";
import React from "react";

const Home=()=>{
    return(
           <Layout isVisible={true} dimensions="  w-[850px] h-[850px]  bottom-[66px] sm:w-[588px] sm:h-[588px] sm:-bottom-[51px] lg:w-[2036px] lg:h-[2036px] lg:-left-[702px] lg:-bottom-[819px]" style="bg-[#FAFAFA] ">


               <Presentation />
               <div className="flex flex-col w-full justify-center items-center gap-y-8 sm:gap-y-6  sm:pt-[140px]   lg:flex-row  lg:w-full lg:justify-between lg:items-center  lg:gap-x-[30px]  lg:pt-[184px] " >
                   <PricingBox blueMode={false} style="  "  tittle="Basic" price="Free" billing="Up to 5 users for free" advantages={["Basic document collaboration","2 GB storage","Great security and support"]}/>
                   <PricingBox style=" " tittle="Pro" price="$9.99" billing="Per user, billed monthly" advantages={["All essential integrations","50 GB storage","More control and insights"]} blueMode={true} />
                   <PricingBox blueMode={false} style=""  tittle="Ultimate" price="$19.99" billing="Per user, billed monthly" advantages={["Robust work management","100 GB storage","VIP support"]}/>
               </div>
               <Coming style=" py-[100px] " darkMode={true} />
               <Footer page="home" />

           </Layout>


    );

};
export default  Home;