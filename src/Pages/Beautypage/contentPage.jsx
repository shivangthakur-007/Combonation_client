import { useEffect, useState } from "react";
import axiosInstance from "../../Helper/axiosInstance";
import HomeHeader from "../../homepage/header";
// import axios from "axios";

function BeautyPage() {
  const [product, setproduct] = useState([]);
  // const [loading, setloading] = useState();

  useEffect(() => {
    axiosInstance
      .get("/product")
      .then((res) => res.data)
      .then((product) => setproduct(product.product))
      .catch((e) => console.log(e, "hello"));
  }, []);

  return (
    <div>
      <HomeHeader />
      <ul>
        {product.map((e) => {
          return (
            <div key={e._id} className="">
              <li>{e.title}</li>
              <li>{e.description}</li>
              <li>{e.price}</li>
              <img src={e.image} width="150px"/>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default BeautyPage;
