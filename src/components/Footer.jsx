export default function Footer() {
  return (
    <footer className="bg-black pt-[72px] pb-[72px]">
      <div className="xl:max-w-272 xl:mx-auto p-5 flex flex-col xl:flex-row xl:items-start xl:justify-between items-center justify-center">
        <img src="/public/logo(white).svg" alt="logo" className="mb-[50px] xl:m-0 mt-[54px]" />

        <ul className="flex flex-col xl:flex-row xl:items-start gap-[78px]">
          <li className="flex flex-col items-center xl:items-start justify-center xl:mb-0 mb-10">
            <p className="text-[#FFFFFF] xl:text-[20px] mb-[22px] text-[16px] font-bold">Features</p>
            <a
              href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Link Shortening
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Branded Links
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Analytics
            </a>
          </li>
          <li className="flex flex-col items-center xl:items-start justify-center xl:mb-0 mb-10">
            <p className="text-[#FFFFFF] xl:text-[20px] mb-[22px] text-[16px] font-bold">Resources</p>
            <a
              href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Blog
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Developers
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 xl: text-[#BFBFBF] font-medium
            "
            >
              Support
            </a>
          </li>
          <li className="flex flex-col items-center xl:items-start justify-center">
            <p className="text-[#FFFFFF] xl:text-[20px] mb-[22px] text-[16px] font-bold">Company</p>
            <a
              href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 text-[#BFBFBF] font-medium
            "
            >
              About
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 text-[#BFBFBF] font-medium
            "
            >
              Our Team
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 text-[#BFBFBF] font-medium
            "
            >
              Careers
            </a>
            <a
               href="#"
              className="hover:text-[#2BD0D0] xl:text-[18px] text-[15px] mb-2.5 text-[#BFBFBF] font-medium
            "
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-6 xl:m-0 mt-12">
          <a
            href="https://www.facebook.com/profile.php?id=61577012215356&locale=ru_RU"
            target="_blank"
            className="text-[24px] text-white hover:text-[#2BD0D0] duration-500"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="text-[24px] text-white hover:text-[#2BD0D0] duration-500">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-[24px] text-white hover:text-[#2BD0D0] duration-500">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a
            href="https://www.instagram.com/ikromovic.dev/"
            target="_blank"
            className="text-[24px] text-white hover:text-[#2BD0D0] duration-500"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
