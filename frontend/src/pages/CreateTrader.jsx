import Logo from "../assets/logo.png";

function CreateTrader() {
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
                  {/* {error && (
                  <p className="text-center font-medium text-red-700 pt-5">
                    {error}
                  </p>
                )} */}
                  <h1 className="text-3xl font-semibold my-7 text-center">
                    Complete your account Trader
                  </h1>
                  <form>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex flex-col flex-1 gap-4">
                        <input
                          className="border p-3 rounded-lg"
                          type="text"
                          id="username"
                          placeholder="Username"
                          minLength="4"
                          maxLength="62"
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
                        />
                        <textarea
                          className="border p-3 rounded-lg"
                          type="text"
                          id="description"
                          placeholder="Description"
                          required
                        />
                        <label htmlFor="crypto">
                          <select
                            className="rounded-lg p-2 w-full text-black"
                            name="crypto"
                            id="crypto"
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
                        />
                        <div className="flex-wrap gap-4">
                          <p className="font-semibold">
                            Images:
                            <span className="font-medium text-green-700 ">
                              The first image will be the cover (max 6)
                            </span>
                          </p>
                          <div className="flex gap-2">
                            <input
                              className="p-3 border border-gray-300 rounded-lg w-full "
                              type="file"
                              id="images"
                              accept="image/*"
                              multiple
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-col flex-1 gap-4">
                          <input
                            className="border p-3 rounded-lg"
                            type="number"
                            id="phoneNumber"
                            placeholder="Phone number"
                            required
                          />
                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="nationalIdentityNumber"
                            placeholder="National Identity Number"
                            required
                          />
                          <input
                            className="border p-3 rounded-lg"
                            type="number"
                            id="levelExperience"
                            placeholder="Level of experience"
                            required
                          />
                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="sourceOfIncome"
                            placeholder="Source of income"
                            required
                          />
                          <input
                            className="border p-3 rounded-lg"
                            type="text"
                            id="bankAccountInfos"
                            placeholder="Bank account infos"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-4 items-center">
                      <button
                        className="p-3 m-2 px-24 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mx-auto"
                        style={{
                          background:
                            "linear-gradient(to right, #181702, #706c0c, #706c0c, #181702 )",
                        }}
                      >
                        Create account Trader
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
