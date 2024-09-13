import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";


export function App() {
  return (
    <main className="grid grid-cols-[250px_auto]">
       <Navigation />
       <Outlet/>
    </main>
  );
}
