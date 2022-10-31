import CalendarCard from "../../UI/CalendarCard";

const timing = [
    {
        id: 1,
        value: '47',
        unit: "days",
    },
    {
        id: 2,
        value: '07',
        unit: "hours",
    },
    {
        id: 3,
        value: '56',
        unit: "min",
    },
    {
        id: 4,
        value: '14',
        unit: "sec",
    },

];
const Coming = (props:{darkMode:boolean,style:string}) => {
    const comingColor=`${props.darkMode? "text-white":"text-[#333950]"}`;
    return (

        <div className={`${props.style} flex flex-col justify-center items-center  w-full sm:w-[448px] sm:self-center lg:flex-row lg:w-full lg:justify-between lg:items-center z-10` }>
            <div className="flex flex-col justify-center items-center lg:items-start">
                <h3 className="font-kumbh font-bold not-italic text-base leading-[48px] text-center tracking-[5px] uppercase">
                <span className={comingColor}>
                    {"Coming "}
                </span>
                    <span className="text-[#5175FF]">
                    4 Nov 2020

                </span>
                </h3>
                <ul className="list-none flex flex-row justify-between items-center w-full pt-[18px] lg:w-[448px] ">
                    {timing.map(t => <li key={t.id}><CalendarCard darkMode={props.darkMode} value={t.value} unit={t.unit}/></li>)}

                </ul>
            </div>

            {props.darkMode && <button
                className="mt-[40px] w-[171px] h-[56px] rounded-[28px] bg-[#5175FF]  flex  justify-center items-center font-kumbh font-bold not-italic text-base leading-7 text-center text-white
                hover:bg-[#829CFF]">Get
                Started
            </button>}

        </div>
    );
};
export default Coming;
