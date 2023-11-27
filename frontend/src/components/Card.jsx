// import { Card } from "flowbite-react";
import { Card, Dropdown, DropdownItem } from "flowbite-react";

function CardComponent() {
  return (
    <>
      <div className="grid md:grid-cols-4 items-center justify-center mb-4">
        <div className="best-sellers mb-4 mr-8 m-4 p-4">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              The pro-sellers
            </h2>
            <a 
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
            </a>
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Nourou
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Nourou@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Bicoin
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDViU-4dcnipj5KO1Is4krCSlBowlvVB9p0g0rwKAValZaHJGFn3HdwqJxcUz8qxJs6M4&usqp=CAU"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Red
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      red@windster.com
                    </p>
                  </div>
                  <div className="data:image/jpeg;base64,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">
                    Bitcoin
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&usqp=CAU"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Daooda
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      Daooda@dev.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Ether
                  </div>
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://www.gstatic.com/mobilesdk/180227_mobilesdk/storage_rules_zerostate.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Malick
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      malick@bonde.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    Litecoin
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
          </a>
        </div>

        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Nourou
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Bitcoin
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDViU-4dcnipj5KO1Is4krCSlBowlvVB9p0g0rwKAValZaHJGFn3HdwqJxcUz8qxJs6M4&usqp=CAU"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Red
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Bitcoin
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex  flex-col items-center p-1 p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={250}
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3fzjyZH0Uaj5roOp2gQW7NHkpebEQfgu9Vcqk8fqYzkmSq5xeKvkfGiciZm396-TGj8&usqp=CAU"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Rokhaya Diagne
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Litecoin
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&usqp=CAU"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Daooda
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              5.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Ether
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMmrqiMdWPqATySvlnp2kvaK4kEcKL2cIOwb5oOBueZpmguq3mYlNtsiRI7Gkudoh4Q8&usqp=CAU"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Cheikh
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="#FFFFFF"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Bitcoin
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Mami
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="#FFFFFF"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              NEO
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(to right, #706c0c, #181702 )",
          }}
          className="max-w-sm m-4 p-4 rounded-lg shadow bg-slate-800 cursor-pointer ">
          <div className="flex flex-col items-center p-4">
            <img
              className="max-w-sm rounded-lg  shadow bg-slate-800 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-100"
              height={200}
              width={200}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgDeCAt-XYHH_5x3qv_KqKU4bPfHvcBT8piXRoN1u2NvuSWzpcyQOLy_8uzzVTAxJMvA&usqp=CAU"
              alt=""
            />
          </div>
          <a href="#">
            <h1 className="font-bold tracking-tight text-slate-200 items-center text-center  dark:text-white p-2">
              Awa
            </h1>
            <p className="text-center  tracking-tight text-slate-100 dark:text-white">
              Passionate bitcoin seller, specializing in cryptocurrency trading
              and management. Expert in market analysis and providing secure
              transaction solutions.
            </p>
          </a>
          <div className="mb-5 mt-2.5 flex items-center">
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="#FFFFFF"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="h-5 w-5 text-yellow-300"
              fill="#FFFFFF"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              3.0
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-slate-100 border-b-4 border-slate-900">
              Stellar
            </span>
            <a
              href="#"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-slate-100 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardComponent;
