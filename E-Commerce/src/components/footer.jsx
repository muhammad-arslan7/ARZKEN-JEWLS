import React from "react";
function footer() {
  return (
    <div className=" bg-[#212121]  w-full rounded-2xl px-3 sm:px-10 xl:px-28 py-10  ">
      <div className="bg-[#c0972f] px-5 sm:px-10 py-6 rounded-3xl flex justify-between flex-col xl:flex-row gap-4">
        <div className="flex flex-col gap-1 xl:gap-3 text-white text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">
            Subscribe Our Newsletter & Delivery!{" "}
          </p>
          <p className="text-[10px] xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            optio.
          </p>
        </div>
        <form className=" flex flex-row justify-center items-center relative w-full sm:w-[250px] md:w-[400px] xl:w-[500px] m-auto">
          <input
            className="h-8 sm:h-10 sm:w-[250px] w-full md:w-[400px] xl:w-[500px] rounded-[100px] outline-none p-4 text-[10px] md:text-base"
            type="email"
            required
            placeholder="Your Email Id here"
          />
          <input
            type="submit"
            className="absolute right-0 bg-black h-8 sm:h-10 text-white font-semibold px-2 sm:p-3 text-[9px] rounded-[100px] "
            value={"SEND MESSAGE"}
          />
        </form>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 mt-6 gap-y-10">
        <div className="px-16 col-span-2 md:col-span-4 lg:col-span-3 h-40 rounded-lg flex justify-between items-center flex-col">
          <div className="text-white col-span-3 flex flex-col gap-3 px-4 text-center ">
            <p className="text-5xl sm:text-6xl font-bold tracking-wider">ARZKEN</p>
            <p className="text-[9px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              harum ullam ducimus{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img
              src="/AppStore.png"
              alt="App Store"
              className="w-32 cursor-pointer"
            />
            <img
              src="/PlayStore.webp"
              alt="Description"
              className="w-32 cursor-pointer"
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 py-2 rounded-lg flex flex-col gap-4 text-white font-light px-3">
          <p className="font-bold text-xl cursor-pointer">Our Address</p>
          <div className="text-[12px] flex items-center gap-2">
            📍 9826 Painter Ave, Whittier, CA,
            United States
          </div>
          <div className="text-[12px] flex items-center gap-2">
            📞 +1800 396 576
          </div>
          <div className="text-[12px] flex items-center gap-2">
            ✉ support@arzken.com
          </div>
          <div className="flex space-x-4 mt-2">
            {/* socials */}
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-3 md:gap-4 py-2 px-3 text-white">
            <p className="font-bold sm:text-lg cursor-pointer">Get to know us</p>
            <p className="text-[12px] font-light cursor-pointer">Careers</p>
            <p className="text-[12px] font-light cursor-pointer">About us</p>
            <p className="text-[12px] font-light cursor-pointer">Inverstors Relation</p>
            <p className="text-[12px] font-light cursor-pointer">Devices</p>
            <p className="text-[12px] font-light cursor-pointer">Customers Reviews</p>
            <p className="text-[12px] font-light cursor-pointer">Social Responsibility</p>
            <p className="text-[12px] font-light cursor-pointer">Store Locations</p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-3 md:gap-4 py-2 px-3 text-white">
            <p className="font-bold sm:text-lg cursor-pointer">Legal</p>
            <p className="text-[12px] font-light cursor-pointer">Privacy Policy</p>
            <p className="text-[12px] font-light cursor-pointer">Terms of Use</p>
            <p className="text-[12px] font-light cursor-pointer">Legal</p>
            <p className="text-[12px] font-light cursor-pointer">Site Map</p>
            <p className="text-[12px] font-light cursor-pointer">Tracking Order</p>
            <p className="text-[12px] font-light cursor-pointer">Inverstors</p>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-3 md:gap-4 py-2 px-3 text-white">
            <p className="font-bold sm:text-lg cursor-pointer">Order & Returns</p>
            <p className="text-[12px] font-light cursor-pointer">Your Orders</p>
            <p className="text-[12px] font-light cursor-pointer">Return & Replacements</p>
            <p className="text-[12px] font-light cursor-pointer">Refund & Return Policies</p>
            <p className="text-[12px] font-light cursor-pointer">Shipping Rates & Policies</p>
            <p className="text-[12px] font-light cursor-pointer">Privacy Policies</p>
            <p className="text-[12px] font-light cursor-pointer">Terms and Conditions</p>
            <p className="text-[12px] font-light cursor-pointer">Cookie Settings</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#ffffffb7] m-5"></div>
      <div className="flex justify-between items-start text-gray-300 mt-6 gap-10">
        <div className="text-[10px] md:text-base italic">
          © 2025 ARZKEN. All rights reserved.
        </div>
        <div className="flex flex-col text-[10px] md:text-base italic">
          <p className="cursor-pointer hover:underline">Terms and Conditions</p>
          <p className="cursor-pointer hover:underline">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}

export default footer;

<style jsx>{`
  @media (max-width: 640px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .col-span-2 {
      grid-column: span 2;
    }
  }
`}</style>;
