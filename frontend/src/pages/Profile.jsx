import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutSuccess,
  signOutFailure,
  signOutStart,
} from "../redux/user/userSlice";
import Logo from "../assets/logo.png";

function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [deleteUserStatus, setDeleteUserStatus] = useState(false);

  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercent, setFilePercent] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [successfullyUpdated, setSuccessfullyUpdated] = useState(false);
  const navigate = useNavigate();
  const [updateUserStatus, setUpdateUserStatus] = useState(false);
  console.log(formData);
  console.log(error);

  const handleSignoutUser = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch("api/auth/signout");
      const data = await res.json();
      if (data.success == false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setSuccessfullyUpdated(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setFilePercent(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({
            ...formData,
            avatar: downloadURL,
          });
        });
      }
    );
  };
  //   allow read;
  //   allow write: if
  //   request.resource.size < 2 * 1024 * 1024 &&
  //   request.resource.contentType.matches("image/.*")

  return (
    <>
      <div
        style={{
          background: "linear-gradient(to right, #181702, #706c0c, #181702)",
          color: "white",
        }}>
        <div className="p-3 max-w-lg mx-auto ">
          <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
          <p className="text-green-500 font-bold text-center mt-5 p-2 ">
            {successfullyUpdated ? "User updated successfully !" : ""}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-black">
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <img
              onClick={() => fileRef.current.click()}
              src={formData.avatar || currentUser.avatar}
              alt="Profile"
              className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
            />
            <p>
              {fileUploadError ? (
                <span className="text-red-700 font-medium pt-3 text-center">
                  Error uploading file (image must be less than 2mb){" "}
                </span>
              ) : filePercent > 0 && filePercent < 100 ? (
                <span className="text-slate-200 flex gap-2">
                  <Spinner />
                  {`progressing...${filePercent}%`}
                </span>
              ) : filePercent === 100 ? (
                <span className="text-center font-medium text-green-500 pt-3">
                  Image successfully uploaded
                </span>
              ) : (
                ""
              )}
            </p>
            {error && (
              <p className="text-center font-medium text-red-700 pt-3">
                {error}
              </p>
            )}
            <input
              required
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              className="border p-3 rounded-lg "
              defaultValue={currentUser.username}
              onChange={handleChange}
            />
            <input
              required
              type="email"
              name="email"
              id="email"
              className="border p-3 rounded-lg "
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
            <input
              required
              type="password"
              name="password"
              id="password"
              className="border p-3 rounded-lg "
              placeholder="password"
              defaultValue={currentUser.password}
              onChange={handleChange}
            />
            <select
              className="border p-3 rounded-lg text-black"
              id="role"
              name="role"
              defaultValue={currentUser.role}
              onChange={handleChange}>
              <option className="border p-3 rounded-lg " value="trader">
                Seller
              </option>
              <option className="border p-3 rounded-lg " value="user">
                Buyer
              </option>
            </select>
            <button className="bg-slate-950  text-white w-full mt-3 p-2 rounded-lg text-center uppercase hover:bg-slate-800 ">
              {loading ? (
                <p className="flex justify-center items-center gap-2 cursor-wait">
                  <Spinner />
                  <span className="text-slate-200 lowercase">
                    Processing...
                  </span>
                </p>
              ) : (
                "Update"
              )}
            </button>
          </form>
          <div className="flex justify-between mt-5 ">
            <div>
              {deleteUserStatus ? (
                ""
              ) : (
                <span
                  onClick={() => setDeleteUserStatus(true)}
                  className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
                  Delete Account
                </span>
              )}
            </div>

            <div>
              <span
                onClick={() => handleSignoutUser()}
                className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
                Sign out Account
              </span>
            </div>
          </div>
          <div className="text-center p-4 m-8 max-w-lg mx-auto">
            <Link
              to="/create-trader"
              style={{
                background: "linear-gradient(to right, #706c0c, #181702 )",
              }}
              type="button"
              className="w-full rounded-lg text-center p-2 text-m font-medium uppercase text-slate-100 hover:bg-slate-900 ">
              Complete your profile seller
            </Link>
          </div>
        </div>
      </div>

      {deleteUserStatus ? (
        <div
          id="marketing-banner"
          tabindex="-1"
          class="fixed z-70 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-2 -translate-x-1/2 bg-slate-200 border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600">
          <div class="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
            <a
              href="#"
              class="h-16 text-red-900 flex items-center mb-2 border-red-900 md:pe-4 md:me-4  md:mb-0 dark:border-red-900">
              <img src={Logo} class=" mt-2" alt="Flowbite Logo" width={80} />
              <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                Crypto Trade Link
              </span>
              <svg
                class="flex-shrink-0 w-4 h-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
            </a>
            <p class="flex items-center text-sm font-medium text-red-900 dark:text-red-900">
              Once you delete your account, all your data will be lost. This
              action cannot be undone.
            </p>
          </div>
          <div class="flex items-center flex-shrink-0">
            <button
              onClick={() => handleDeleteUser()}
              type="button"
              href="#"
              class="px-5 py-2 me-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-blue-800">
              Delete Account
            </button>
            <button
              onClick={() => setDeleteUserStatus(false)}
              data-dismiss-target="#marketing-banner"
              type="button"
              class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-red-900 hover:text-red-200 rounded-lg text-sm p-1.5 dark:hover:bg-red-900 dark:hover:text-white">
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Profile;
