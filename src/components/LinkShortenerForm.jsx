export default function LinkShortenerForm() {
  return (
    <section className="p-5 ">
      <div className="bg-[url('/shortLink-img.svg')] p-[24px] xl:mx-auto sm:flex-row  flex flex-col gap-4 rounded-[10px] bg-cover bg-center xl:max-w-272 w-full">
        <input
          type="text"
          className="border p-4 border-white sm:w-[70%] bg-white text-[#34313D] focus:border-[#2BD0D0] focus:ring-0 text-[16px] rounded-[8px]"
          placeholder="Shorten a link here..."
        />
        <button className="p-4 bg-[#2BD0D0] sm:w-[30%] text-white text-[18px] font-bold rounded-[8px]">
          Shorten It!
        </button>
      </div>
    </section>
  );
}
