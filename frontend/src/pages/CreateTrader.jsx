import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { app } from "../firebase";

import Logo from "../assets/logo.png";
import { Spinner } from "@material-tailwind/react";

function CreateTrader() {
  const [files, setFiles] = useState([]);
  const [imageUploadError, setImageUplodError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageUrls: [],
    username: currentUser.username,
    email: currentUser.email,
    description: "",
    // star: "",
    crypto: "BTC",
    residence: "",
    // like: "",
    phoneNumber: 22123456789,
    nationalIdentityNumber: 1783456901267890,
    levelExperience: 1,
    sourceOfIncome: "",
    bankAccountInfos: "",
  });

  // console.log(formData);

  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 3) {
      setUploading(true);
      setImageUplodError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUplodError(false);
          setUploading(false);
        })
        .catch((error) => {
          setImageUplodError("Image upload failed (to nb max per image)");
          setUploading(false);
        });
    } else {
      setImageUplodError("You can only upload 3 images per listing");
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("Please add at least one image");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/trader/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success == false) {
        setError(data.message);
      }
      navigate("/");
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  console.log(formData);
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-slate-100 shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div className="px-4 md:px-0 lg:w-7/12">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <img className="mx-auto w-55" src={Logo} alt="logo" />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      We Are The Sllers of Bitcoin
                    </h4>
                  </div>
                  {error && (
                    <p className="text-center font-medium text-red-700 pt-5">
                      {error}
                    </p>
                  )}
                  <h1 className="text-3xl font-semibold my-7 text-center">
                    Complete your account Trader
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col flex-1 gap-4">
                        <input
                          className="border p-3 rounded-lg"
                          type="text"
                          id="username"
                          placeholder="Username"
                          minLength="4"
                          maxLength="62"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        <input
                          className="border p-3 rounded-lg"
                          type="email"
                          id="email"
                          placeholder="reddingcode@gmail.com"
                          minLength="4"
                          maxLength="62"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <textarea
                          className="border p-3 rounded-lg"
                          type="text"
                          id="description"
                          placeholder="Description"
                          required
                          value={formData.description}
                          onChange={handleChange}
                        />

                        <label htmlFor="crypto">
                          <select
                            className="rounded-lg p-2 w-full text-black"
                            name="crypto"
                            id="crypto"
                            value={formData.crypto || "BTC"}
                            onChange={handleChange}
                          >
                            <option value="BTC">BTC</option>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>
                          </select>
                        </label>
                        <input
                          className="border p-3 rounded-lg"
                          type="text"
                          id="residence"
                          placeholder="Residence"
                          required
                          value={formData.residence}
                          onChange={handleChange}
                        />
                        <div className="flex-wrap gap-4">
                          <p className="font-semibold">
                            Images:
                            <span className="font-medium text-green-700 ">
                              The first image will be the cover (max 3)
                            </span>
                          </p>
                          <div className="flex gap-2">
                            <input
                              onChange={(e) =>
                                setFiles(Array.from(e.target.files))
                              }
                              className="p-3 border border-gray-300 rounded-lg w-full "
                              type="file"
                              id="images"
                              accept="image/*"
                              multiple
                            />
                            <button
                              disabled={uploading}
                              onClick={handleImageSubmit}
                              type="button"
                              className="p-3 text-slate-100 rounded uppercase hover:shadow-lg disabled:opacity-80 "
                              style={{
                                background:
                                  "linear-gradient(to right, #706c0c, #181702 )",
                              }}
                            >
                              {uploading ? (
                                <p className="flex justify-center items-center gap-2 cursor-wait">
                                  <Spinner />
                                  <span className="text-slate-200 lowercase">
                                    Uploading...
                                  </span>
                                </p>
                              ) : (
                                "Upload"
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-sm font-medium ">
                            {imageUploadError && imageUploadError}
                          </p>
                          {formData.imageUrls.length > 0 &&
                            formData.imageUrls.map((url, index) => {
                              console.log(
                                "Image URL at index",
                                index,
                                ":",
                                url
                              );
                              return (
                                <div
                                  className="flex justify-between p-3 border item-center"
                                  key={`image-${index}`}
                                >
                                  <img
                                    src={url}
                                    alt="listing image"
                                    className="w-20 h-20 object-contain rounded-lg "
                                  />
                                  <button
                                    onClick={() => handleRemoveImage(index)}
                                    className="p-3 text-red-700 rounded-lg uppercase hover:opacity-95"
                                  >
                                    Delete
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-col flex-1 gap-4">
                          {/* <div>
                          <label htmlFor="" className="font-semibold p-3">Phone Number:</label> */}
                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="phoneNumber"
                            placeholder="221 77 854 36 52"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />

                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="nationalIdentityNumber"
                            placeholder="13 8641 765 9876 543"
                            required
                            value={formData.nationalIdentityNumber}
                            onChange={handleChange}
                          />

                          <textarea
                            className="border p-3 rounded-lg"
                            type="text"
                            id="bankAccountInfos"
                            placeholder="Bank account infos"
                            required
                            value={formData.bankAccountInfos}
                            onChange={handleChange}
                          />

                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="sourceOfIncome"
                            placeholder="Source of income"
                            required
                            value={formData.sourceOfIncome}
                            onChange={handleChange}
                          />

                          <input
                            className="border p-3 rounded-lg"
                            type="number"
                            id="levelExperience"
                            placeholder="Level of experience"
                            required
                            value={formData.levelExperience}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-4 items-center m-6">
                      <button
                        className="p-3 m-2 px-24 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mx-auto transition-all duration-300 ease-in-out "
                        disabled={loading || uploading}
                        type="submit"
                        style={{
                          background:
                            "linear-gradient(to right, #181702, #706c0c, #706c0c, #181702 )",
                        }}
                      >
                        {loading ? (
                          <p className="flex justify-center items-center gap-2 cursor-wait">
                            <Spinner />
                            <span className="text-slate-200 lowercase">
                              Processing...
                            </span>
                          </p>
                        ) : (
                          "Create account Trader"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="flex items-center rounded-b-lg lg:w-5/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{
                  background:
                    "linear-gradient(to right, #181702, #706c0c, #706c0c, #181702 )",
                }}
              >
                <div className="p-6 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a networking platform
                  </h4>
                  <p className="text-sm">
                    Join CryptoTraderLink and start your digital financial
                    journey today. Quickly fill out your information or simplify
                    the process by signing in with Google. Connect with a
                    passionate community of cryptocurrency traders. Get started
                    in the exciting world of Bitcoin trading with ease and
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTrader;
