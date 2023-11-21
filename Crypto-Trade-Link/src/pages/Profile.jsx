import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #181702, #706c0c, #181702)",
          color: "white",
        }}>
        <div className="p-3 max-w-lg mx-auto ">
          <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

          <form className="flex flex-col gap-4">
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
            />
            <input
              type="text"
              placeholder="username"
              id="username"
              className="border p-3 rounded-lg "
            />
            <input
              type="email"
              placeholder="email"
              id="email"
              className="border p-3 rounded-lg "
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="border p-3 rounded-lg "
            />
            <select className="border p-3 rounded-lg text-black" id="role">
              <option className="border p-3 rounded-lg " value="seller">
                Seller
              </option>
              <option className="border p-3 rounded-lg " value="buyer">
                Buyer
              </option>
            </select>
            <button className="bg-slate-950 text-white w-full mt-3 p-2 rounded-lg text-center uppercase hover:opacity-95 disabled:opacity-95">
              {loading ? <Spinner /> : "Update"}
            </button>
          </form>
          <div className="flex justify-between mt-5 ">
            <span className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
              Delete Account
            </span>
            <span className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
              Sign out Account
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
