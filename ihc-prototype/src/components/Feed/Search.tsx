import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <form>
      <label className="border bg-[#f7f1f1] flex gap-3 p-2 rounded-lg w-[500px]">
        <button>
          <CiSearch />
        </button>
        <input
          type="text"
          className="outline-none bg-transparent font-Poppins text-cor-9F9F9F"
          placeholder="Search products..."
        />
      </label>
    </form>
  );
};

export default Search;
