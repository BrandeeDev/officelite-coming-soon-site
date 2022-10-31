import HeadingText from "../components/SignUp/HeadingText";
import Coming from "../components/Shared/Coming";
import Form from "../components/SignUp/Form";
import Layout from "../UI/Layout";
import Footer from "../components/Shared/Footer";

const SignUp=()=>{
    return(
        <Layout isVisible={false} dimensions="w-[262px] h-[262px] bottom-0 lg:w-[1440px] lg:h-[1440px] lg:-right-[555px] lg:-top-[483px] " style="bg-[#FAFAFA] ">
            <div className="flex flex-col w-full justify-center items-center lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center items-center ">
                    <HeadingText />
                    <Coming darkMode={false} style="pt-[64px] sm:pb-[104px] lg:pb-[154px] lg:pt-[40px]" />
                </div>
                <Form style="bg-white  mt-[64px]  mb-[87px] z-10" />


            </div>
            <Footer page="sign-up" />


        </Layout>);

};
export default  SignUp;