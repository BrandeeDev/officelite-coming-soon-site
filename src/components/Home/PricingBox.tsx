import bg from "../../assets/home/bg-pattern-pricing.svg";

const PricingBox = (props: { style: string, tittle: string, price: string, billing: string, advantages: string[], blueMode: boolean }) => {
    const style = ` overflow-hidden rounded-[13px] w-full flex flex-col justify-center items-center z-10 sm:flex-row sm:justify-start sm:items-start  sm:pl-[48px] sm:relative   lg:flex-row lg:justify-center lg:items-center  lg:px-[64px] lg:py-[40px]   ${props.style} ${props.blueMode ? " bg-[#5175FF] relative" : "bg-white"}`;
    let i = 0;
    const textColor = `${props.blueMode ? "text-white" : "text-[#333950]"}`
    const titleStyle = "font-kumbh font-bold text-xl leading-7  not-italic mt-[40px] sm:mt-[48px] " + textColor;
    const priceStyle = "font-kumbh font-bold text-[56px] leading-[64px]  mt-[40px] sm:mt-4" + textColor;
    const billingStyle = "font-kumbh font-medium text-base leading-7 text-center  mt-2 sm:mt-1" + textColor;
    const adStyle = "font-kumbh font-medium text-base leading-7 text-center " + `${props.blueMode ? "text-white/[.75] mix-blend-normal" : " text-[#747B95]"}`;
    const btnStyle = "mb-[40px] mt-[46px] w-[171px] h-[56px] rounded-[25px]  flex justify-center items-center sm:mt-6 font-kumbh font-bold text-base leading-7 text-center text-[#5175FF] " + `${props.blueMode ? "hover:text-[#829CFF] bg-white  " : "bg-[#5175FF]/[.15] hover:bg-[#5175FF]/[.35] mix-blend-normal"}`;
    return (
        <div className={style}>
            {props.blueMode && <img src={bg} alt="bg"
                                    className="  absolute box-content h-[880px] w-[880px] -top-[379px] sm:-top-[282px] sm:right-[128px] object-cover -z-1"/>}
            <div className="flex flex-col justify-center items-center sm:items-start lg:items-center">
                <h3 className={titleStyle}>{props.tittle}</h3>
                <h3 className={priceStyle}>{props.price}</h3>
                <h4 className={billingStyle}>{props.billing}</h4>
                <ul className="list-none flex flex-col justify-center items-center gap-y-4 pt-[56px] sm:absolute sm:right-[100px] sm:pt-0 sm:top-[92px] sm:items-start lg:static lg:items-center ">
                    {props.advantages.map(a => <li key={i++} className={adStyle}>{a}</li>)}
                </ul>
                <button className={btnStyle}>Try for Free</button>
            </div>


        </div>);


};
export default PricingBox;

