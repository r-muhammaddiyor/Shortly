import advancedImg1 from '../assets/advenced-img_1.svg';
import advancedImg2 from '../assets/advenced-img_2.svg';
import advancedImg3 from '../assets/advenced-img_3.svg';

export default function Advanced() {
  return (
    <section className="p-5 pt-30 pb-30">
      <div className="xl:max-w-272 xl:mx-auto">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[32px] xl:text-[40px] mb-4 font-bold leading-[48px] tracking-[-0.7px]">
            Advanced Statistics
          </h2>
          <p className="text-[#9E9AA8] xl:text-[18px] text-[16px] font-medium leading-[28px]">
            Track how your links are performing across the web with <br /> our advanced statistics
            dashboard.
          </p>
        </div>

        <ul className="flex flex-col xl:items-start items-center relative gap-[92px] justify-around pt-[92px] xl:flex-row">
          <div
            className="bg-[#2BD0D0] absolute w-2 h-[calc(100%-184px)] top-[92px] left-1/2 transform -translate-x-1/2 rounded-full
                  xl:w-[calc(100%-184px)] xl:h-2 xl:left-0 xl:top-[250px] xl:translate-x-0 xl:-translate-y-1/2"
          ></div>

          <li className="max-w-[327px] w-full relative bg-[#FFFFFF] z-2 text-center flex flex-col justify-center rounded-[5px] pl-8 pr-8 pb-10 items-center">
            <div className="bg-[#3A3054] relative  top-[-44px] p-6 rounded-[50%]">
              <img src={advancedImg1} alt="advanced-img" />
            </div>
            <h3 className="text-[22px] mb-3 font-bold text-[#34313D]">Brand Recognition</h3>
            <p className="text-[15px] text-[#9E9AA8] font-medium">
              Boost your brand recognition with each click. Generic links don’t mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </li>
          <li className="max-w-[327px] w-full relative top-[44px] bg-[#FFFFFF] z-2 text-center flex flex-col justify-center rounded-[5px] pl-8 pr-8 pb-10 items-center">
            <div className="bg-[#3A3054] relative  top-[-44px] p-6 rounded-[50%]">
              <img src={advancedImg2} alt="advanced-img" />
            </div>
            <h3 className="text-[22px] mb-3 font-bold text-[#34313D]">Detailed Records</h3>
            <p className="text-[15px] text-[#9E9AA8] font-medium">
              Gain insights into who is clicking your links. Knowing when and where people engage
              with your content helps inform better decisions.
            </p>
          </li>
          <li className="max-w-[327px] mb-[120px] w-full relative top-[88px] bg-[#FFFFFF] z-2 text-center flex flex-col justify-center rounded-[5px] pl-8 pr-8 pb-10 items-center">
            <div className="bg-[#3A3054] relative  top-[-44px] p-6 rounded-[50%]">
              <img src={advancedImg3} alt="advanced-img" />
            </div>
            <h3 className="text-[22px] mb-3 font-bold text-[#34313D]">Fully Customizable</h3>
            <p className="text-[15px] text-[#9E9AA8] font-medium">
              Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
