import { Link } from "react-router-dom";
import { auth } from "@/service/firebase/firebase.config";
import { CiUser } from "react-icons/ci";
import { IoLogOut } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdAddCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";
const Navigation = () => {
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await auth.signOut();
  };
  return (
    <main className="flex flex-col h-full border border-cor-9F9F9F">
      <div>
        <div className="flex gap-3 items-center p-3 ">
          {user?.photoURL ? (
            <img src={user.photoURL} className="rounded-2xl w-10" />
          ) : (
            <CiUser className="text-2xl text-cor-9F9F9F" />
          )}

          {user ? (
            <div>
              <p className="font-Poppins font-bold text-black ">
                {user?.displayName}
              </p>
              <p className="font-Poppins font-normal text-sm text-cor-9F9F9F">
                {user?.email}
              </p>
            </div>
          ) : (
            <p className="font-Poppins font-bold text-black">Bem Vindo</p>
          )}
        </div>
        <div className="border-b border-cor-9F9F9F w-[98%] mx-auto"></div>
      </div>

      <nav className="flex flex-col p-5 gap-3">
        <Link to={""} className="navigation">
          <IoHomeSharp className="text-xl" /> <span>Inicio</span>
        </Link>
        <Link to={"/product-bag"} className="navigation">
          <FaShoppingCart className="text-xl" /> <span>Carrinho</span>
        </Link>
        <Link to={"/register-product"} className="navigation">
          <IoMdAddCircle className="text-2xl" /> <span>Registrar produtos</span>
        </Link>
        <Link to={"/user"} className="navigation">
          <HiMiniUserCircle className=" text-2xl " /> <span>Perfil</span>
        </Link>
        {user ? (
          <button className="navigation" onClick={handleLogout}>
            <IoLogOut className="text-2xl" /> <span>sair</span>
          </button>
        ) : (
          <Link to={"/login"} className="navigation">
            <FaUser className="text-xl" /> <span>Entre</span>
          </Link>
        )}
      </nav>
    </main>
  );
};

export default Navigation;
