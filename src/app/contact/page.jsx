import dynamic from "next/dynamic";
import Image from "next/image";

const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
  ssr: false,
});

const ContactPage = () => {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-24 md:my-24">
      <div className="flex-1 relative ">
        <Image
          src="/contact.png"
          alt=""
          height={500}
          width={500}
          className="object-contain "
        />
      </div>
      <div className="flex-1">
        <HydrationTestNoSSR />
        <form action="" className="flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-5 rounded border-none outline-none bg-[#2d2b42] text-white"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-5 rounded border-none outline-none bg-[#2d2b42] text-white"
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            className="p-5 rounded border-none outline-none bg-[#2d2b42] text-white"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-5 rounded border-none outline-none bg-[#2d2b42] text-white"
          ></textarea>
          <button className="text-white bg-[#3673fd]  rounded my-2 py-1 font-bold border-none">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
