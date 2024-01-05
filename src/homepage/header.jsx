import { MdOutlineSmartphone, MdOutlineHelpOutline, MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from "react-icons/md";
import { CgHeart, CgProfile, CgShoppingBag } from "react-icons/cg";
import HeaderCategories from "../Categories/headerCategories";
import HeaderBrands from "../../Brands/headerBrands";
import HeaderStores from "../../Stores/headerStores";

function HomeHeader() {

  return (
    <>
      <header className="flex flex-wrap justify-around gap-[14%] bg-[#FE9E2D]  text-white ">
        <div className="pl-[10%] pt-[6px] pb-[6px]">
          <a href="/">
            <h1 className="p-[3px 0 3px 0 ] hover:invisible">
              Why Choose Combinations?
            </h1>
          </a>
        </div>
        <div className="pl-[3%] pt-[6px] pb-[6px] flex items-center gap-[0.5]">
          <MdOutlineSmartphone />
          <a href="/">
            <h1 className="text-[16px] font-semibold">Get App</h1>
          </a>
        </div>
        <div className=" pr-[10%] pt-[6px] pb-[6px] flex items-center gap-[0.5] font-semibold ">
          <MdOutlineHelpOutline className="text-xl" />
          <a href="/">
            <h1 className="text-[16px] ">Help</h1>
          </a>
        </div>
      </header>
      <section className="ml-[3em] mr-[3em] gap-3">
        <div className="flex justify-around items-center">
          <div>
            <a href="/">
              <img
                src="https://www.combonation.in/storage/9453/63ca5f25af222_Xmas_logo_theme.png"
                alt="combonation"
                className="w-[160px] h-[80px]"
              />
            </a>
          </div>
          <ul className="flex gap-[25px] pr-[9.4em]">
            <a href="/" className="text-[12px] font-bold text-[#282828] flex">
              <li className="">HOME</li>
            </a>
            <a href="/" className="text-[13px] font-bold text-[#282828] flex ">
              <HeaderCategories />
              
            </a>
            <a href="" className="text-[13px] font-bold text-[#282828] flex ">
              <HeaderBrands />
            </a>
            <a href="" className="text-[13px] font-bold text-[#282828] flex ">
              <HeaderStores />
            </a>
          </ul>
          <div className="text-[#525151] font-bold text-md">
            <a href="/">
              <div>Need Help?</div>
              <div>+91-9910722205</div>
            </a>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex basis-[110px]"></div>
          <div className="border-black border-[calc(1px+0.8px)] bg-gray-100 w-[480px] rounded-[3px] ">
            <input
              type="search"
              name="search"
              id="searchindex"
              placeholder="Search Over 13200 + products... "
              className="text-gray-600 outline-none w-[450px] pl-2 pt-1 pb-1 bg-transparent"
            />
          </div>
          <div className="flex gap-2 ">
            <CgProfile className="text-[33px] " />
            <CgHeart className="text-[33px] " />
            <CgShoppingBag className="text-[33px] " />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeHeader;
