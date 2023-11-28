import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
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
  updateUserError,
} from "../redux/user/userSlice";

function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  // const [loading, setLoading] = useState(false);

  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePercent, setFilePercent] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [successfullyUpdated, setSuccessfullyUpdated] = useState(false);
  console.log(formData);

  // console.log(formData);
  // console.log(filePercent);
  // console.log(fileUploadError);

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
        dispatch(updateUserError(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setSuccessfullyUpdated(true);
    } catch (error) {
      dispatch(updateUserError(error.message));
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
                <span className="text-red-700">
                  Error uploading file (image must be less than 2mb){" "}
                </span>
              ) : filePercent > 0 && filePercent < 100 ? (
                <span className="text-slate-200 flex gap-2">
                  <Spinner />
                  {`progressing...${filePercent}%`}
                </span>
              ) : filePercent === 100 ? (
                <span className="text-green-400">
                  Image successfully uploaded
                </span>
              ) : (
                ""
              )}
            </p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              className="border p-3 rounded-lg "
              defaultValue={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              className="border p-3 rounded-lg "
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="border p-3 rounded-lg "
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
            <span className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
              Delete Account
            </span>
            <span className="bg-slate-950 text-red-500 p-2 rounded-lg cursor-pointer">
              Sign out Account
            </span>
          </div>
        </div>
        <p className="text-red-700 mt-5"> {error ? error : ""} </p>
        <p className="text-green-700 mt-5">
          {successfullyUpdated ? "User updated successfully !" : ""}
        </p>
      </div>
    </>
  );
}

export default Profile;
