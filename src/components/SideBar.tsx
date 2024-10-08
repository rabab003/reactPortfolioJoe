import {
  IoLogoYoutube,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";

const SideBar = () => {
  return (
    <div>
      <div
        className="w-[90px] border-r-[1px]
    h-screen fixed flex flex-col justify-around items-center mt-[90px]"
      >
        <h2 className="-rotate-90 tracking-widest text-xl">HOMEPAGE</h2>
        <div className="flex flex-col gap-7 mb-10 text-[20px]">
          <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in" />
          <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in" />
          <IoLogoTwitter className="cursor-pointer hover:scale-110 transition-all ease-in" />
          <IoLogoYoutube className="cursor-pointer hover:scale-110 transition-all ease-in" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
