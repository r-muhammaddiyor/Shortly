import GetStartedBtn from './GetStartedBtn';

export default function Cta() {
  return (
    <section className=" bg-[url('/cta-bg.svg')] bg-cover pt-[90px] pb-[90px] pl-[35px] pr-[35px]">
      <div className="xl:max-w-272 xl:mx-auto text-center">
        <h2 className='text-white mb-4 xl:text-[40px] text-[28px] font-bold '>Boost your links today</h2>

        <GetStartedBtn />
      </div>
    </section>
  );
}
