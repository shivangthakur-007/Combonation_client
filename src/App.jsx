import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/Notfound";
import HomeHeader from "./homepage/header.jsx";
import BabyPage from "./Pages/Babypage/contentPage.jsx";
import BeautyPage from "./Pages/Beautypage/contentPage.jsx";
import GiftPage from "./Pages/Giftspage/contentPage.jsx";
import HealthPage from "./Pages/Healthpage/contentPage.jsx";
import KitchenPage from "./Pages/Kitchenpage/contentPage.jsx";
import PersonalPage from "./Pages/Personalpage/contentPage.jsx";


function App(){
    return (
      <>
        <Routes>
          <Route path="/" element={<HomeHeader />}>
          </Route>
          <Route path="/baby" element={<BabyPage/>}>
          </Route>
          <Route path="/beauty" element={<BeautyPage/>}>
          </Route>
          <Route path="/gift" element={<GiftPage />}>
          </Route>
          <Route path="/health" element={<HealthPage/>}>
          </Route>
          <Route path="/kitchen" element={<KitchenPage/>}>
          </Route>
          <Route path="/personal" element={<PersonalPage/>}>
          </Route>
          {/* <Route>{}</Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </>
    );
}

export default App;