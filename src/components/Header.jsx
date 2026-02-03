import bars from '../assets/bars.svg';

export default function Header() {
  return (
    <header className="p-5 bg-white flex xl:max-w-272 xl:mx-auto xl:w-full pt-12  items-center justify-between">
      {/* Logo */}
      <a href="./index.html" className="inline-block">
        <img src="/public/logo(black).svg" alt="logo-black" />
      </a>

      {/* Navigation for larger screens */}
      <nav className="hidden sm:flex flex-1 justify-center gap-8">
        <a href="#" className="text-gray-600 hover:text-black font-medium">
          Features
        </a>
        <a href="#" className="text-gray-600 hover:text-black font-medium">
          Pricing
        </a>
        <a href="#" className="text-gray-600 hover:text-black font-medium">
          Resources
        </a>
      </nav>

      <div className="hidden sm:flex gap-5 items-center">
        <a href="#" className="text-gray-600 hover:text-black font-medium">
          Login
        </a>
        <a
          href="#"
          className="text-white hover:bg-[#8ed2d2] duration-300 bg-[#2BD0D0] rounded-[28px] pt-2.5 pb-2.5 pl-6 pr-6 font-bold hover:opacity-90"
        >
          Sign Up
        </a>
      </div>

      {/* Burger menu (unchanged) */}

      <label
        htmlFor="bars"
        className="absolute right-5 top-5 peer-checked:[&~.burger-menu]:translate-x-0 duration-800 sm:hidden"
      >
        <img src={bars} alt="bars" />
      </label>
      <input className="peer" type="checkbox" id="bars" hidden />
      <label htmlFor="bars" className="peer-checked:block fixed inset-0 hidden"></label>

      <div className="burger-menu sm fixed top-0 left-0 w-[300px] -translate-x-full opacity-0 peer-checked:translate-x-0 peer-checked:opacity-100 transition-all duration-500 ease-in-out shadow-black h-screen bg-[rgba(58,48,84,1)] flex flex-col gap-[30px] pl-5 pr-5 pt-10 pb-10 rounded-r-xl">
        <nav className="flex flex-col gap-7.5">
          <ul className="flex flex-col gap-7.5">
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Features
            </a>
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Pricing
            </a>
            <a href="#" className="text-[20px] text-white font-bold active:border-b-red-500">
              Resources
            </a>
          </ul>

          <hr className="bg-[rgba(158,154,168,1)] w-full h-0.5" />

          <div className="flex flex-col  gap-7.5">
            <a href="#" className="text-white text-[18px] font-bold">
              Login
            </a>
            <a
              href="#"
              className="text-white inline-block text-[18px] font-bold rounded-[28px] bg-[rgba(43,208,208,1)] pt-2.5 pb-2.5 pl-5"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
