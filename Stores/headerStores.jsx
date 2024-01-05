import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function HeaderStores() {
  const obj = [
    {
      linkto: "/baby",
      name: "AIRIA MALL STORE"

    },
    {
      linkto: "/beauty",
      name: "AKSHARDHAM STORE"

    },
    {
      linkto: "/gift",
      name: "AMRITSAR STORE"

    },
    {
      linkto: "/health",
      name: "DWARKA STORE"

    },
    {
      linkto: "/kitchen",
      name: "FARIDABAD STORE"
    },
    {
      linkto: "/personal",
      name: "KANPUR STORE"

    },
  ];

  return (
    <div className="main_high hover:text-[#FE9E2D]">
      <div className="main flex">
        <span className="main_1">CATEGORIES</span>
        <MdOutlineKeyboardArrowDown className=" main_2 text-2xl relative font-light" />
        <ul className="main_low bg-slate-300 flex flex-col">
          {obj.map((element, i) => {
            return (
              <Link to={element.linkto} key={i}>
                <li className="">
                  {element.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HeaderStores;