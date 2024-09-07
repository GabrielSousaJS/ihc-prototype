import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsBag } from "./routes/Pages/ProductsBag";
import { ProductsFeed } from "./routes/Pages/ProductsFeed";
import { RegisterProducts } from "./routes/Pages/RegisterProducts";
import { User } from "./routes/Pages/User";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsFeed />} />
        <Route path='product-bag' element={<ProductsBag />} />
        <Route path='register-product' element={<RegisterProducts />} />
        <Route path='user' element={<User />} />

        <Route path='*' element={<ProductsFeed />} />
      </Routes>
    </BrowserRouter>
  );
}
