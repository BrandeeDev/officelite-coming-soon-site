const CalendarCard=(props: {value:string,unit:string,darkMode:boolean})=>{
    const valueStyle="font-kumbh  not-italic font-bold text-[32px] leading-[48px] text-center "+`${props.darkMode?"text-white":"text-[#5175FF]"}`;
    const unitStyle=`font-kumbh not-italic font-bold text-xs leading-7 text-center ${props.darkMode? "text-white":"text-[#333950]"}/[.5] mix-blend-normal`;
return(
    <div className={`rounded-sm pt-[11px] pb-[10px] px-4 sm:p-4 flex flex-col justify-center items-center gap-y-[7px] sm:w-[100px] sm:h-[128px] ${props.darkMode? "bg-[#333950]":"bg-[#E9EDFA]"}`}>
        <p className={valueStyle}>
            {props.value}
        </p>
        <p className={unitStyle}>
            {props.unit}
        </p>

    </div>
);
};
export default  CalendarCard;

