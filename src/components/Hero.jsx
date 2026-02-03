import GetStartedBtn from './GetStartedBtn';
import heroImg from '../assets/hero-img.svg';

export default function Hero() {
  return (
    <section className="pt-[139px] bg-white pb-38 overflow-hidden">
      <div className="pl-5 pr-5 xl:max-w-272 relative lg:flex-row lg:justify-between xl:mx-auto w-full items-center flex flex-col-reverse gap-[37px] xl:gap-25">
        <div className="text-center xl:max-w-[600px] lg:text-start sm:max-w-[500px] w-full max-w-[400px]">
          <h1 className="text-[42px] mb-[15px] lg:text-[60px] lg:tracking-[-2px] lg:leading-[60px] xl:mb-1.25 xl:text-[90px] xl:leading-[90px] font-bold text-[#34313D] leading-[48px] tracking-[-1.05px]">
            More than just shorter links
          </h1>
          <p className="text-[#9E9AA8] xl:text-[22px] mb-[32px] text-[18px] leading-[30px] tracking-[0.12px]">
            Build your brand’s recognition and get detailed insights on how your links are
            performing.
          </p>

          <GetStartedBtn />
        </div>

        <img
          src={heroImg}
          alt="Hero img"
          className="max-w-87.5 xl:absolute xl:right-[-323px] xl:max-w-[733px] sm:max-w-[500px] w-full "
        />
      </div>
    </section>
  );
}
