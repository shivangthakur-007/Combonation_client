import './headerCategories.css';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {Link} from 'react-router-dom'

function HeaderCategories(){
    const obj = [
      {
        linkto: "/baby",
        img: "https://www.combonation.in/storage/69296/65926ffdab74d_Baby-Care.png",
        name: "BABY CARE",
      },
      {
        linkto: "/beauty",
        img: "https://www.combonation.in/storage/69297/659270103e0df_Beauty.png",
        name: "BEAUTY CARE",
      },
      {
        linkto: "/gift",
        img: "https://www.combonation.in/storage/69293/65926fb584ae2_Gifts.png",
        name: "GIFTS CARE",
      },
      {
        linkto: "/health",
        img: "https://www.combonation.in/storage/69295/65926fe49005d_Health-Wellness.png",
        name: "HEALTH & WELLNESS CARE",
      },
      {
        linkto: "/kitchen",
        img: "https://www.combonation.in/storage/69294/65926fcd9184e_Home-Kitchen.png",
        name: "HOME & KITCHEN CARE",
      },
      {
        linkto: "/personal",
        img: "https://www.combonation.in/storage/69298/65927035799e9_Personal-Care.png",
        name: "PERSONAL CARE",
      },
    ];

    return (
      <div className="main_high hover:text-[#FE9E2D]">
        <div className="main flex">
          <span className="main_1">CATEGORIES</span>
          <MdOutlineKeyboardArrowDown className=" main_2 text-2xl relative font-light" />
          <ul className="main_low bg-slate-300">
            {obj.map((element, i) => {return (
              <Link to={element.linkto} key={i}>
                <li>
                  {element.name}
                  <img src={element.img} />
                </li>
              </Link>
            )})}
          </ul>
        </div>
      </div>
    );
}

export default HeaderCategories