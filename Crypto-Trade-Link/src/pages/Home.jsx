

import Traders from "./Traders";

function Home() {
  return (
    // <div>Home</div>
    <>
   
<div
  className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
  // style="background-image: url('...'); height: 400px"
  style={{
    backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1024/1*VqKuTe9DmMZZRT0ERH2t4Q.jpeg')",
    // backgroundImage: `url(${Logo})`,
    height: "calc(100vh - 64px)",
  }}
  >
  <div
    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.6)", 
    }}
    // "background-color: rgba(0, 0, 0, 0.6)"
    >
    <div className="flex h-full items-center justify-center">
      <div className="text-white">
        <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
        <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
        <button
          type="button"
          className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light">
          Call to action
        </button>
      </div>
    </div>
  </div>
</div>

    {/* <!-- Section: Traders profiles --> */}
   <Traders/>
    </>
  )
}

export default Home