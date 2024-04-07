import { useState } from "react";
<<<<<<< HEAD
import SellerAccount from "./components/buy_sell/seller_account";
import SellerSignIn from "./components/buy_sell/seller_signin";
import Front from "../src/components/Main/front";
import AddProduct from "./components/buy_sell/add_products";
import AddDairyProduct from "./components/buy_sell/addDairyProduct";
import AddVegetableProduct from "./components/buy_sell/addVegetables";
import AddFruits from "./components/buy_sell/addFruits";
=======
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cart from "./pages/cart";
import Front from "./components/Main/front";
import About from "./pages/about";


>>>>>>> c8e23cb (about)

function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}></Route>
        <Route path="/seller/signup" element={<SellerAccount />}></Route>
        <Route path="/seller/signin" element={<SellerSignIn />}></Route>
        <Route path="/seller/addProducts" element={<AddProduct />}></Route>
        <Route
          path="/seller/addProducts/dairyProducts"
          element={<AddDairyProduct />}
        ></Route>
        <Route
          path="/seller/addProducts/vegetable"
          element={<AddVegetableProduct />}
        ></Route>
        <Route
          path="/seller/addProducts/fruits"
          element={<AddFruits />}
        ></Route>
      </Routes>
    </BrowserRouter>
=======
    <div className="bg-green-500 h-screen">
    
    </div>
>>>>>>> c8e23cb (about)
  );
}

export default App;
