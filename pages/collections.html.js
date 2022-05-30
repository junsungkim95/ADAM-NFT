import React from 'react'
import Script from 'next/script'
// import './css/style.css'

function Collections() {
  return (
    <div>
          <title>ADAM | NFT Marketplace HTML Template</title>
          <meta charSet="utf-8" />
          {/*[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]*/}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content />
          {/* Css */}
          <link rel="stylesheet" href="./css/style.css" />
          {/* Dark Mode JS */}
          {/* Favicons */}
          <link rel="shortcut icon" href="img/favicon.ico" />
          <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
          {/* Header */}
          <main>
            {/* Collections */}
            <section className="relative py-24">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="w-full h-full" />
              </picture>
              <div className="container">
                <h1 className="py-16 text-4xl font-medium text-center font-display text-jacarta-700 dark:text-white">
                  Explore Collections
                </h1>
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-between mb-8">
                  <ul className="flex flex-wrap items-center">
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center justify-center px-4 text-sm font-semibold transition-colors rounded-lg dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent bg-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white">All</a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                        <span>Art</span>
                      </a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4zm6.085 15a1.5 1.5 0 0 1 2.83 0H20v-2.968a4.5 4.5 0 0 1 0-8.064V5h-9.085a1.5 1.5 0 0 1-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                        <span>Collectibles</span>
                      </a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                        </svg>
                        <span>Domain</span>
                      </a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                        </svg>
                        <span>Music</span>
                      </a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                        </svg>
                        <span>Photography</span>
                      </a>
                    </li>
                    <li className="my-1 mr-2.5">
                      <a href="#" className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg dark:border-jacarta-600 dark:bg-jacarta-900 dark:hover:bg-accent group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 h-9 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                        </svg>
                        <span>Virtual World</span>
                      </a>
                    </li>
                  </ul>
                  <div className="relative my-1 cursor-pointer dropdown">
                    <div className="inline-flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="font-display">Trending</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </div>
                    <div className="z-10 hidden w-full px-2 py-4 text-left bg-white shadow-xl dropdown-menu dark:bg-jacarta-800 whitespace-nowrap rounded-xl" aria-labelledby="categoriesSort">
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Trending
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-accent">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Top
                      </button>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Recent
                      </button>
                    </div>
                  </div>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-2 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_1_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_1_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_1_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_1_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        Art Me Outside
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_5.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>Wow Frens</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">10K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_2_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_2_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_2_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_2_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        PankySkal
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_9.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>NFT stars</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">2.8K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_3_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_3_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_3_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_3_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        VR Space_287
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_4.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>Origin Morish</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">8K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_4_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_4_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_4_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_4_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        Metasmorf
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_10.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>Lazy Panda</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">1.5K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_5_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_5_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_5_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_5_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        3Landers
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_11.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>051_Hart</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">15K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_6_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_6_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_6_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_6_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        SlimHoods
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_3.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>Crytopank</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">8.8K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_7_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_7_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_7_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_7_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        The Overseers
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/creator_2.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>Hey Mrsmeseks</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">13K Items</span>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <a href="collection.html" className="flex space-x-[0.625rem]">
                        <span className="w-[74.5%]">
                          <img src="./img/collections/collection_8_1.jpg" alt="item 1" className="h-full w-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                        <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                          <img src="./img/collections/collection_8_2.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_8_3.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                          <img src="./img/collections/collection_8_4.jpg" alt="item 1" className="h-full rounded-[0.625rem] object-cover" loading="lazy" />
                        </span>
                      </a>
                      <a href="collection.html" className="block mt-4 text-base font-display hover:text-accent dark:hover:text-accent text-jacarta-700 dark:text-white">
                        Dope Shibas
                      </a>
                      <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                        <div className="flex flex-wrap items-center">
                          <a href="user.html" className="mr-2 shrink-0">
                            <img src="img/avatars/owner_12.png" alt="owner" className="w-5 h-5 rounded-full" />
                          </a>
                          <span className="mr-1 dark:text-jacarta-400">by</span>
                          <a href="user.html" className="text-accent">
                            <span>alyxbow</span>
                          </a>
                        </div>
                        <span className="text-sm dark:text-jacarta-300">3K Items</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
            {/* end collections */}
          </main>
          {/* Wallet Modal */}
          <div className="modal fade" id="walletModal" tabIndex={-1} aria-labelledby="walletModalLabel" aria-hidden="true">
            <div className="max-w-lg modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="walletModalLabel">Connect your wallet</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-700 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
                {/* Body */}
                <div className="p-6 text-center modal-body">
                  <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 318.6 318.6" xmlSpace="preserve" className="inline-block w-8 h-8 mb-4">
                    <style dangerouslySetInnerHTML={{__html: "\n                .st1,\n                .st6 {\n                  fill: #e4761b;\n                  stroke: #e4761b;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n                .st6 {\n                  fill: #f6851b;\n                  stroke: #f6851b;\n                }\n              " }} />
                    <path fill="#e2761b" stroke="#e2761b" strokeLinecap="round" strokeLinejoin="round" d="M274.1 35.5l-99.5 73.9L193 65.8z" />
                    <path className="st1" d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z" />
                    <path className="st1" d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z" />
                    <path d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z" fill="#d7c1b3" stroke="#d7c1b3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" fill="#cd6116" stroke="#cd6116" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z" fill="#e4751f" stroke="#e4751f" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="st6" d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z" />
                    <path fill="#c0ad9e" stroke="#c0ad9e" strokeLinecap="round" strokeLinejoin="round" d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" />
                    <path fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round" d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" />
                    <path d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" fill="#763d16" stroke="#763d16" strokeLinecap="round" strokeLinejoin="round" />
                    <path className="st6" d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z" />
                  </svg>
                  <p className="text-center dark:text-white">
                    You don't have MetaMask in your browser, please download it from
                    <a href="https://metamask.io/" className="text-accent" target="_blank" rel="noreferrer noopener">MetaMask</a>
                  </p>
                </div>
                {/* end body */}
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <a href="https://metamask.io/" target="_blank" rel="noreferrer noopener" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                      Get Metamask
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Buy Now Modal */}
          <div className="modal fade" id="buyNowModal" tabIndex={-1} aria-labelledby="buyNowModalLabel" aria-hidden="true">
            <div className="max-w-2xl modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="buyNowModalLabel">Complete checkout</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-700 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
                {/* Body */}
                <div className="p-6 modal-body">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold font-display text-jacarta-700 dark:text-white">Item</span>
                    <span className="text-sm font-semibold font-display text-jacarta-700 dark:text-white">Subtotal</span>
                  </div>
                  <div className="relative flex items-center py-4 border-t border-b dark:border-jacarta-600 border-jacarta-100">
                    <figure className="self-start mr-5">
                      <img src="img/avatars/avatar_2.jpg" alt="avatar 2" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <a href="collection.html" className="text-sm text-accent">Elon Musk #709</a>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Lazyone Panda
                      </h3>
                      <div className="flex flex-wrap items-center">
                        <span className="block mr-1 text-sm dark:text-jacarta-300 text-jacarta-500">Creator Earnings: 5%</span>
                        <span data-tippy-content="The creator of this collection will receive 5% of the sale total from future sales of this item.">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-300 fill-jacarta-700">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <span className="flex items-center mb-1 whitespace-nowrap">
                        <span data-tippy-content="ETH">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                            <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-100">1.55 ETH</span>
                      </span>
                      <div className="text-sm text-right dark:text-jacarta-300">$130.82</div>
                    </div>
                  </div>
                  {/* Total */}
                  <div className="dark:border-jacarta-600 border-jacarta-100 mb-2 flex items-center justify-between border-b py-2.5">
                    <span className="font-semibold font-display text-jacarta-700 dark:text-white">Total</span>
                    <div className="ml-auto">
                      <span className="flex items-center whitespace-nowrap">
                        <span data-tippy-content="ETH">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                            <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                          </svg>
                        </span>
                        <span className="font-medium tracking-tight text-green">1.55 ETH</span>
                      </span>
                      <div className="text-right dark:text-jacarta-300">$130.82</div>
                    </div>
                  </div>
                  {/* Terms */}
                  <div className="flex items-center mt-4 space-x-2">
                    <input type="checkbox" id="buyNowTerms" className="self-start w-5 h-5 rounded checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 focus:ring-offset-0" />
                    <label htmlFor="buyNowTerms" className="text-sm dark:text-jacarta-200">By checking this box, I agree to ADAM's <a href="#" className="text-accent">Terms of Service</a></label>
                  </div>
                </div>
                {/* end body */}
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <button type="button" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                      Confirm Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          {/* JS Scripts */}
          <Script src='/js/app.bundle.js'></Script>
        </div>
  )
}

export default Collections