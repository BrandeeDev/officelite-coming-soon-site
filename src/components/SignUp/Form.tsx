const Form = (props: {style:string}) => {
    return (
        <form className={`bg-white w-full rounded-[13px] p-6 flex flex-col  gap-y-6 ${props.style} sm:w-[445px] sm:self-center lg:pt-[40px] lg:pb-[51px] lg:pl-[43px] lg:pr-[42px] `} >
          <label className="block group">
              <span id="name"  className="absolute peer-placeholder formStyle  ">Name</span>
              <input type="text" name="name" id="name" className="form-input block  w-full h-[45px] border-b-4 border-0 border-b border-[#747B95]] peer "/>
          </label>
            <label className="block group">
                <span id="email"  className="absolute peer-placeholder  formStyle ">Email Address</span>
                <input type="email" name="email" id="email" className="form-input block  w-full h-[45px] border-b-4 border-0 border-b border-[#747B95]] peer "/>
            </label>
            <label className="block group ">
                <select id="plan " className="form-select w-full h-[45px] border-b-4 border-0 border-b border-[#747B95]] " >
                        <option value="Free" className="block  optionStyle    after:content-['Free'] after:pl-[7px] after:optionPrice   ">
                            Basic pack
                        <span className="optionPrice">{" Free"}</span>
                        </option>

                    <option value="$9.99" className="block  optionStyle    after:content-['Free'] after:pl-[7px] after:optionPrice   ">
                        Pro pack
                        <span className="optionPrice">{" $9.99"}</span>

                    </option>
                    <option value="$19.99" className="block  optionStyle    after:content-['Free'] after:pl-[7px] after:optionPrice   ">
                        Ultimate pack
                        <span className="optionPrice">{" $19.99"}</span>

                    </option>

                </select>

            </label>
            <label className="block group">
                <span id="phone"  className="absolute peer-placeholder formStyle  ">Phone Number</span>
                <input type="text" name="phone" id="phone" className="form-input block  w-full h-[45px] border-b-4 border-0 border-b border-[#747B95]] peer "/>
            </label>
            <label className="block group">
                <span id="company"  className="absolute peer-placeholder group-focus:-translate-y-2  formStyle">Company</span>
                <input type="text" name="company" id="company" className="   block  w-full h-[45px] border-b-4 border-0 border-b border-[#747B95]]  peer "/>
            </label>
            <button className="w-full h-[56px] bg-[#5175FF] rounded-[28px] mt-0 mt-[40px] flex justify-center items-center
             font-kumbh not-italic font-bold text-base leading-7 text-center text-white hover:bg-[#829CFF]">Get on the list</button>

        </form>
    );
};
export default Form;
