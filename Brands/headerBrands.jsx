import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function HeaderBrands() {
  const obj = [
    {
      linkto: "/baby",
      img: "https://www.combonation.in/storage/37271/647dbdf15b32b_Vintage-Affairs.png",
    },
    {
      linkto: "/beauty",
      img: "https://www.combonation.in/storage/54605/64f1bc858b678_Aadiva-logo.png",
    },
    {
      linkto: "/gift",
      img: "https://www.combonation.in/storage/24819/6433ac6ca10fd_Ajmal-logo.png",
    },
    {
      linkto: "/health",
      img: "https://www.combonation.in/storage/68505/65742e7133a28_Baby-dove.png",
    },
    {
      linkto: "/kitchen",
      img: "https://www.combonation.in/storage/37578/647f081140719_Babiecorn.png",
    },
    {
      linkto: "/personal",
      img: "https://www.combonation.in/assets_new/img/viewall.png",
    },
  ];

  return (
    <div className="main_high hover:text-[#FE9E2D]">
      <div className="main flex">
        <span className="main_1">BRANDS</span>
        <MdOutlineKeyboardArrowDown className=" main_2 text-2xl relative font-light" />
        <ul className="main_low bg-slate-300">
          {obj.map((element, i) => {
            return (
              <Link to={element.linkto} key={i}>
                <li>
                  <img src={element.img}/>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeaderBrands;