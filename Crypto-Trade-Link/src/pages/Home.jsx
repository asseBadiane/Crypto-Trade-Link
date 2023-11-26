import Traders from "./Traders";

function Home() {
  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center bg-gray-700 bg-blend-multiply"
        style={{
          backgroundImage:
            "url('https://miro.medium.com/v2/resize:fit:1024/1*VqKuTe9DmMZZRT0ERH2t4Q.jpeg')",
          height: "calc(100vh - 64px)",
        }}>
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 cursor-pointer ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            The solution that will revolutionize the cryptocurrency market
          </h1>
          <p class="mb-8 font-normal text-slate-200 lg:text-xl sm:px-16 lg:px-48">
            Imagine a bridge between the present and the future of cryptos. This
            is exactly what we are building with Crypto-Trade-Link. Welcome
            aboard !
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              style={{
                background: "linear-gradient(to right, #706c0c, #181702 )",
              }}
              href="#"
              class=" inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <Traders />
    </>
  );
}

export default Home;
