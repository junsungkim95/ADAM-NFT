import React from "react";
import Script from "next/script";
function Home2() {
  return (
    <div>
      <title>ADAM | NFT Marketplace HTML Template</title>
      <meta charSet="utf-8" />
      {/*[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]*/}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="description" content />
      {/* Css */}
      <link rel="stylesheet" href="./css/style.css" />
      {/* Dark Mode JS */}
      {/* Favicons */}
      <link rel="shortcut icon" href="img/favicon.ico" />
      <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="img/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="img/apple-touch-icon-114x114.png"
      />
      {/* Header */}
      <main>
        {/* Hero */}
        <section className="relative py-20 hero md:pt-32">
          <picture className="absolute inset-x-0 top-0 pointer-events-none -z-10 dark:hidden">
            <img src="img/gradient.jpg" alt="gradient" className="w-full" />
          </picture>
          <picture className="absolute inset-x-0 top-0 hidden pointer-events-none -z-10 dark:block">
            <img src="img/gradient_dark.jpg" alt="gradient dark" />
          </picture>
          <div className="container">
            <div className="py-24 text-center">
              <h1 className="mb-6 text-5xl font-display text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl">
                Collect M2E Digital Art.
              </h1>
              <p className="mb-8 text-lg dark:text-jacarta-200">
                Buy and sell NFTs from the world's top artists
              </p>
              <div className="inline-flex space-x-4">
                <a
                  href="create.html"
                  className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full w-36 bg-accent shadow-accent-volume hover:bg-accent-dark"
                >
                  Create
                </a>
                <a
                  href="collections.html"
                  className="px-8 py-3 font-semibold text-center transition-all bg-white rounded-full w-36 text-accent shadow-white-volume hover:bg-accent-dark hover:text-white hover:shadow-accent-volume"
                >
                  Explore
                </a>
              </div>
            </div>
            <div className="relative">
              {/* Slider */}
              <div className="swiper card-slider-3-columns !pb-5">
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a href="item.html">
                            <img
                              src="/img/products/openseaImg1.png"
                              alt="item 1"
                              height={430}
                              width={379}
                              className="swiper-lazy h-[430px] w-full object-cover"
                            />
                            <div className="swiper-lazy-preloader" />
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <a href="user.html" className="shrink-0">
                              <img
                                src="img/avatars/avatar_17_rounded.jpg"
                                alt="avatar"
                                className="w-10 h-10 mr-4 rounded-full"
                              />
                            </a>
                            <div>
                              <a href="item.html" className="block">
                                <span className="text-lg leading-none font-display text-jacarta-700 hover:text-accent dark:text-white">
                                  Light Bars
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-accent">
                                Wow Frens
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a href="item.html">
                            <img
                              src="/img/products/openseaImg2.png"
                              alt="item 1"
                              className="swiper-lazy h-[430px] w-full object-cover"
                              height={430}
                              width={379}
                            />
                            <div className="swiper-lazy-preloader" />
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <a href="user.html" className="shrink-0">
                              <img
                                src="img/avatars/avatar_18_rounded.gif"
                                alt="avatar"
                                className="w-10 h-10 mr-4 rounded-full"
                              />
                            </a>
                            <div>
                              <a href="item.html" className="block">
                                <span className="text-lg leading-none font-display text-jacarta-700 hover:text-accent dark:text-white">
                                  Etherium NFT Launching Lab
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-accent">
                                051_Hart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a href="item.html">
                            <img
                              src="/img/products/openseaImg3.png"
                              alt="item 1"
                              className="swiper-lazy h-[430px] w-full object-cover"
                              height={430}
                              width={379}
                            />
                            <div className="swiper-lazy-preloader" />
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <a href="user.html" className="shrink-0">
                              <img
                                src="img/avatars/avatar_22_rounded.jpg"
                                alt="avatar"
                                className="w-10 h-10 mr-4 rounded-full"
                              />
                            </a>
                            <div>
                              <a href="item.html" className="block">
                                <span className="text-lg leading-none font-display text-jacarta-700 hover:text-accent dark:text-white">
                                  Oceania \\ OVERSEER 017
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-accent">
                                MadeByM1KE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a href="item.html">
                            <img
                              src="/img/pixel.jpg"
                              data-src="/img/products/item_14_lg.jpg"
                              alt="item 1"
                              className="swiper-lazy h-[430px] w-full object-cover"
                              height={430}
                              width={379}
                            />
                            <div className="swiper-lazy-preloader" />
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <a href="user.html" className="shrink-0">
                              <img
                                src="img/avatars/avatar_19_rounded.jpg"
                                alt="avatar"
                                className="w-10 h-10 mr-4 rounded-full"
                              />
                            </a>
                            <div>
                              <a href="item.html" className="block">
                                <span className="text-lg leading-none font-display text-jacarta-700 hover:text-accent dark:text-white">
                                  Amazing NFT art
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-accent">
                                Lila Spacex
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl block overflow-hidden bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <a href="item.html">
                            <img
                              src="/img/pixel.jpg"
                              data-src="/img/products/item_15_lg.jpg"
                              alt="item 1"
                              className="swiper-lazy h-[430px] w-full object-cover"
                              height={430}
                              width={379}
                            />
                            <div className="swiper-lazy-preloader" />
                          </a>
                        </figure>
                        <div className="p-6">
                          <div className="flex">
                            <a href="user.html" className="shrink-0">
                              <img
                                src="img/avatars/avatar_20_rounded.jpg"
                                alt="avatar"
                                className="w-10 h-10 mr-4 rounded-full"
                              />
                            </a>
                            <div>
                              <a href="item.html" className="block">
                                <span className="text-lg leading-none font-display text-jacarta-700 hover:text-accent dark:text-white">
                                  SwagFox#133
                                </span>
                              </a>
                              <a href="#" className="text-2xs text-accent">
                                Bored Bunny
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              {/* Navigation */}
              <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer swiper-button-prev-3 group top-1/2 -left-4 shadow-white-volume sm:-left-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 group-hover:fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
              </div>
              <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer swiper-button-next-3 group top-1/2 -right-4 shadow-white-volume sm:-right-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 group-hover:fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* end hero */}
        {/* Top Collections */}
        <section className="relative py-24 dark:bg-jacarta-800">
          <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              className="h-full"
            />
          </picture>
          <div className="container">
            <div className="mb-12 text-3xl text-center font-display text-jacarta-700 dark:text-white">
              <h2 className="inline">Top collections over</h2>
              <div className="inline cursor-pointer dropdown">
                <button
                  className="inline-flex items-center dropdown-toggle text-accent"
                  type="button"
                  id="collectionSort"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  last 7 days
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    className="w-8 h-8 fill-accent"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </button>
                <div
                  className="dropdown-menu z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                  aria-labelledby="collectionSort"
                >
                  <a
                    className="block px-5 py-2 text-sm transition-colors dropdown-item rounded-xl hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                    href="#"
                  >
                    Last 24 Hours
                  </a>
                  <a
                    className="block px-5 py-2 text-sm transition-colors dropdown-item rounded-xl hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                    href="#"
                  >
                    Last 7 Days
                  </a>
                  <a
                    className="block px-5 py-2 text-sm transition-colors dropdown-item rounded-xl hover:bg-jacarta-50 dark:hover:bg-jacarta-600"
                    href="#"
                  >
                    Last 30 Days
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_1.jpg"
                      alt="avatar 1"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      1
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      NFT Funny Cat
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    7,080.95 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_2.jpg"
                      alt="avatar 2"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-sm text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      2
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Cryptopank
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    6,548,133 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_3.jpg"
                      alt="avatar 3"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      3
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Prince Ape Planet
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    4,823,927 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_4.jpg"
                      alt="avatar 4"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      4
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Hey Mrsmeseks
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    3,186 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_5.jpg"
                      alt="avatar 5"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      5
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Bored Bunny
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    3,027 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_6.gif"
                      alt="avatar 6"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      6
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Wow Frens
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    2,586 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_7.jpg"
                      alt="avatar 7"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      7
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Origin Morish
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    2,347.85 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_8.jpg"
                      alt="avatar 8"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      8
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Superdo
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    2,115.71 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_9.jpg"
                      alt="avatar 9"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      9
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      NFT stars
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    2,027 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_10.jpg"
                      alt="avatar 10"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      10
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Asumitsu
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    1,989.70 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_11.jpg"
                      alt="avatar 11"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      11
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Pank Skull
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    1,726.70 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_12.jpg"
                      alt="avatar 12"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      12
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Lazy Panda
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    1,589.03 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_13.jpg"
                      alt="avatar 13"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      13
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Arcahorizons
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    1,157 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_14.jpg"
                      alt="avatar 14"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      14
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Sussygirl
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    1,030 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_15.jpg"
                      alt="avatar 15"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      15
                    </div>
                    <div
                      className="absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green dark:border-jacarta-600"
                      data-tippy-content="Verified Collection"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="h-[.875rem] w-[.875rem] fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Smilebin
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    999.51 ETH
                  </span>
                </div>
              </div>
              <div className="rounded-2.5xl flex border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent dark:bg-jacarta-700">
                <figure className="mr-4 shrink-0">
                  <a href="collection.html" className="relative block">
                    <img
                      src="img/avatars/avatar_16.jpg"
                      alt="avatar 16"
                      className="rounded-2lg"
                      loading="lazy"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full -left-3 top-1/2 -translate-y-2/4 bg-jacarta-700 dark:border-jacarta-600">
                      16
                    </div>
                  </a>
                </figure>
                <div>
                  <a href="collection.html" className="block">
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">
                      Pankysmoke
                    </span>
                  </a>
                  <span className="text-sm dark:text-jacarta-300">
                    875.65 ETH
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <a
                href="rankings.html"
                className="inline-block px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
              >
                Go to Rankings
              </a>
            </div>
          </div>
        </section>
        {/* end top collections */}
        {/* Live Auctions */}
        <section className="py-24">
          <div className="container">
            <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
              <span
                className="inline-block w-6 h-6 mr-1 text-xl bg-center bg-contain animate-heartBeat"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/2764-fe0f.png)",
                }}
              />
              Live Auctions
            </h2>
            <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_1.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_1.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions1"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_8.jpg"
                        alt="item 8"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-04-07T11:32:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Monkeyme#155
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      1.3 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">25</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_4.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_4.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions2"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_6.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-06-01T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Splendid Girl
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      10 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">60</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_8.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_5.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions3"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions3"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_11.gif"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-03-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Asuna #1649
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      0.8 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">34</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_2.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_7.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions4"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions4"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_10.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-07-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Artof Eve
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      1.75 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">15</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_2.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_2.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions5"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions5"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_17.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-05-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Azuki #4017
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      9.3712 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">334</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_9.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_8.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions6"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions6"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_18.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-09-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Block #2788
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      7.3 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">52</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_6.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_4.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions7"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions7"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_19.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-10-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        Crypto bull #6195
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      0.32 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">90</span>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className="rounded-2.5xl block border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex -space-x-2">
                      <a href="#">
                        <img
                          src="img/avatars/creator_3.png"
                          alt="creator"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Creator: Sussygirl"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="img/avatars/owner_3.png"
                          alt="owner"
                          className="w-6 h-6 rounded-full"
                          data-tippy-content="Owner: Sussygirl"
                        />
                      </a>
                    </div>
                    <div className="rounded-full dropdown hover:bg-jacarta-100 dark:hover:bg-jacarta-600">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle"
                        role="button"
                        id="itemActions8"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width={16}
                          height={4}
                          viewBox="0 0 16 4"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-jacarta-500 dark:fill-jacarta-200"
                        >
                          <circle cx={2} cy={2} r={2} />
                          <circle cx={8} cy={2} r={2} />
                          <circle cx={14} cy={2} r={2} />
                        </svg>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800"
                        aria-labelledby="itemActions8"
                      >
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          New bid
                        </button>
                        <hr className="h-px mx-4 my-2 border-0 bg-jacarta-100 dark:bg-jacarta-600" />
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Refresh Metadata
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Share
                        </button>
                        <button className="block w-full px-5 py-2 text-sm text-left transition-colors rounded-xl font-display hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                  <figure className="relative">
                    <a href="item.html">
                      <img
                        src="/img/products/item_20.jpg"
                        alt="item 6"
                        className="w-full rounded-[0.625rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center justify-center space-x-1 rounded-full bg-white py-2.5 px-6 text-2xs font-medium">
                      <span
                        className="h-3.5 w-3.5 shrink-0 bg-contain bg-center"
                        style={{
                          backgroundImage:
                            "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/23f3.png)",
                        }}
                      />
                      <span
                        className="js-countdown-timer shrink-0 whitespace-nowrap text-jacarta-700"
                        data-countdown="2022-03-14T10:45:30"
                        data-expired="This auction has ended"
                      />
                      <span
                        className="js-countdown-left"
                        data-countdownleft="left"
                      />
                    </div>
                  </figure>
                  <div className="flex items-center justify-between mt-7">
                    <a href="item.html">
                      <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">
                        TSARÉVNA
                      </span>
                    </a>
                    <span className="flex items-center px-2 py-1 border rounded-md whitespace-nowrap border-jacarta-100 dark:border-jacarta-600">
                      <span data-tippy-content="ETH">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          x={0}
                          y={0}
                          viewBox="0 0 1920 1920"
                          xmlSpace="preserve"
                          className="w-4 h-4"
                        >
                          <path
                            fill="#8A92B2"
                            d="M959.8 80.7L420.1 976.3 959.8 731z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                          />
                          <path
                            fill="#454A75"
                            d="M959.8 1295.4l539.8-319.1L959.8 731z"
                          />
                          <path
                            fill="#8A92B2"
                            d="M420.1 1078.7l539.7 760.6v-441.7z"
                          />
                          <path
                            fill="#62688F"
                            d="M959.8 1397.6v441.7l540.1-760.6z"
                          />
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="dark:text-jacarta-300">Highest Bid</span>
                    <span className="text-jacarta-700 dark:text-jacarta-100">
                      4.7 ETH
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <button
                      className="text-sm font-semibold font-display text-accent"
                      data-bs-toggle="modal"
                      data-bs-target="#placeBidModal"
                    >
                      Place bid
                    </button>
                    <div className="flex items-center space-x-1">
                      <span
                        className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('./img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                        data-tippy-content="Favorite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="w-4 h-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red"
                        >
                          <path fill="none" d="M0 0H24V24H0z" />
                          <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                        </svg>
                      </span>
                      <span className="text-sm dark:text-jacarta-200">260</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mt-10 text-center">
              <a
                href="collections.html"
                className="inline-block px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
              >
                Load More
              </a>
            </div>
          </div>
        </section>
        {/* end live auctions */}
        {/* Process / Newsletter */}
        <section className="relative py-24 dark:bg-jacarta-800">
          <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
            <img
              src="img/gradient_light.jpg"
              alt="gradient"
              className="h-full"
            />
          </picture>
          <div className="container">
            <h2 className="mb-16 text-3xl text-center font-display text-jacarta-700 dark:text-white">
              Create and sell your NFTs
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-5 h-5 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">
                  1. Set up your wallet
                </h3>
                <p className="dark:text-jacarta-300">
                  Once you've set up your wallet of choice, connect it to
                  OpenSeaby clicking the NFT Marketplacein the top right corner.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-5 h-5 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">
                  2. Create Your Collection
                </h3>
                <p className="dark:text-jacarta-300">
                  Click Create and set up your collection. Add social links, a
                  description, profile &amp; banner images, and set a secondary
                  sales fee.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-5 h-5 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">
                  3. Add Your NFTs
                </h3>
                <p className="dark:text-jacarta-300">
                  Upload your work (image, video, audio, or 3D art), add a title
                  and description, and customize your NFTs with properties,
                  stats.
                </p>
              </div>
              <div className="text-center">
                <div className="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      className="w-5 h-5 fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">
                  4. List Them For Sale
                </h3>
                <p className="dark:text-jacarta-300">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You choose how you want to sell your
                  NFTs!
                </p>
              </div>
            </div>
            <p className="max-w-2xl mx-auto mt-20 text-lg text-center text-jacarta-700 dark:text-white">
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating ADAM
            </p>
            <div className="max-w-md mx-auto text-center mt-7">
              <form className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 border rounded-full border-jacarta-100 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder-white"
                />
                <button className="absolute px-6 py-2 text-sm text-white rounded-full top-2 right-2 bg-accent font-display hover:bg-accent-dark">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* end process / newsletter */}
        {/* Featured collections */}
        <section className="py-24">
          <div className="container">
            <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
              <span
                className="inline-block w-6 h-6 mr-1 text-xl bg-center bg-contain"
                style={{
                  backgroundImage:
                    "url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png)",
                }}
              />
              Featured collections
            </h2>
            <div className="relative">
              {/* Slider */}
              <div className="swiper collections-slider !py-5">
                <div className="swiper-wrapper">
                  {/* Slides */}
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                        <a
                          href="collection.html"
                          className="flex space-x-[0.625rem]"
                        >
                          <span className="w-[74.5%]">
                            <img
                              src="/img/collections/collection_1_1.jpg"
                              alt="item 1"
                              className="h-full w-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                          <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                            <img
                              src="/img/collections/collection_1_2.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_1_3.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_1_4.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                        </a>
                        <a
                          href="collection.html"
                          className="block mt-4 text-base font-display text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                        >
                          Art Me Outside
                        </a>
                        <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                          <div className="flex flex-wrap items-center">
                            <a href="user.html" className="mr-2 shrink-0">
                              <img
                                src="img/avatars/owner_5.png"
                                alt="owner"
                                className="w-5 h-5 rounded-full"
                              />
                            </a>
                            <span className="mr-1 dark:text-jacarta-400">
                              by
                            </span>
                            <a href="user.html" className="text-accent">
                              <span>Wow Frens</span>
                            </a>
                          </div>
                          <span className="text-sm dark:text-jacarta-300">
                            10K Items
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                        <a
                          href="collection.html"
                          className="flex space-x-[0.625rem]"
                        >
                          <span className="w-[74.5%]">
                            <img
                              src="/img/collections/collection_2_1.jpg"
                              alt="item 1"
                              className="h-full w-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                          <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                            <img
                              src="/img/collections/collection_2_2.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_2_3.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_2_4.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                        </a>
                        <a
                          href="collection.html"
                          className="block mt-4 text-base font-display text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                        >
                          PankySkal
                        </a>
                        <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                          <div className="flex flex-wrap items-center">
                            <a href="user.html" className="mr-2 shrink-0">
                              <img
                                src="img/avatars/owner_9.png"
                                alt="owner"
                                className="w-5 h-5 rounded-full"
                              />
                            </a>
                            <span className="mr-1 dark:text-jacarta-400">
                              by
                            </span>
                            <a href="user.html" className="text-accent">
                              <span>NFT stars</span>
                            </a>
                          </div>
                          <span className="text-sm dark:text-jacarta-300">
                            2.8K Items
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                        <a
                          href="collection.html"
                          className="flex space-x-[0.625rem]"
                        >
                          <span className="w-[74.5%]">
                            <img
                              src="/img/collections/collection_3_1.jpg"
                              alt="item 1"
                              className="h-full w-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                          <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                            <img
                              src="/img/collections/collection_3_2.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_3_3.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_3_4.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                        </a>
                        <a
                          href="collection.html"
                          className="block mt-4 text-base font-display text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                        >
                          VR Space_287
                        </a>
                        <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                          <div className="flex flex-wrap items-center">
                            <a href="user.html" className="mr-2 shrink-0">
                              <img
                                src="img/avatars/owner_4.png"
                                alt="owner"
                                className="w-5 h-5 rounded-full"
                              />
                            </a>
                            <span className="mr-1 dark:text-jacarta-400">
                              by
                            </span>
                            <a href="user.html" className="text-accent">
                              <span>Origin Morish</span>
                            </a>
                          </div>
                          <span className="text-sm dark:text-jacarta-300">
                            8K Items
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                        <a
                          href="collection.html"
                          className="flex space-x-[0.625rem]"
                        >
                          <span className="w-[74.5%]">
                            <img
                              src="/img/collections/collection_4_1.jpg"
                              alt="item 1"
                              className="h-full w-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                          <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                            <img
                              src="/img/collections/collection_4_2.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_4_3.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_4_4.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                        </a>
                        <a
                          href="collection.html"
                          className="block mt-4 text-base font-display text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                        >
                          Metasmorf
                        </a>
                        <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                          <div className="flex flex-wrap items-center">
                            <a href="user.html" className="mr-2 shrink-0">
                              <img
                                src="img/avatars/owner_10.png"
                                alt="owner"
                                className="w-5 h-5 rounded-full"
                              />
                            </a>
                            <span className="mr-1 dark:text-jacarta-400">
                              by
                            </span>
                            <a href="user.html" className="text-accent">
                              <span>Lazy Panda</span>
                            </a>
                          </div>
                          <span className="text-sm dark:text-jacarta-300">
                            1.5K Items
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article>
                      <div className="rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700">
                        <a
                          href="collection.html"
                          className="flex space-x-[0.625rem]"
                        >
                          <span className="w-[74.5%]">
                            <img
                              src="/img/collections/collection_5_1.jpg"
                              alt="item 1"
                              className="h-full w-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                          <span className="flex w-1/3 flex-col space-y-[0.625rem]">
                            <img
                              src="/img/collections/collection_5_2.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_5_3.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                            <img
                              src="/img/collections/collection_5_4.jpg"
                              alt="item 1"
                              className="h-full rounded-[0.625rem] object-cover"
                              loading="lazy"
                            />
                          </span>
                        </a>
                        <a
                          href="collection.html"
                          className="block mt-4 text-base font-display text-jacarta-700 hover:text-accent dark:text-white dark:hover:text-accent"
                        >
                          3Landers
                        </a>
                        <div className="flex items-center justify-between mt-2 text-sm font-medium tracking-tight">
                          <div className="flex flex-wrap items-center">
                            <a href="user.html" className="mr-2 shrink-0">
                              <img
                                src="img/avatars/owner_11.png"
                                alt="owner"
                                className="w-5 h-5 rounded-full"
                              />
                            </a>
                            <span className="mr-1 dark:text-jacarta-400">
                              by
                            </span>
                            <a href="user.html" className="text-accent">
                              <span>051_Hart</span>
                            </a>
                          </div>
                          <span className="text-sm dark:text-jacarta-300">
                            15K Items
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              {/* Slider Navigation */}
              <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer swiper-button-prev-2 group top-1/2 -left-4 shadow-white-volume sm:-left-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 group-hover:fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
              </div>
              <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer swiper-button-next-2 group top-1/2 -right-4 shadow-white-volume sm:-right-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="fill-jacarta-700 group-hover:fill-accent"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* end featured collections */}
        {/* Partners */}
      </main>
      {/* Wallet Modal */}
      <div
        className="modal fade"
        id="walletModal"
        tabIndex={-1}
        aria-labelledby="walletModalLabel"
        aria-hidden="true"
      >
        <div className="max-w-lg modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="walletModalLabel">
                Connect your wallet
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-6 h-6 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="p-6 text-center modal-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 318.6 318.6"
                xmlSpace="preserve"
                className="inline-block w-8 h-8 mb-4"
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                .st1,\n                .st6 {\n                  fill: #e4761b;\n                  stroke: #e4761b;\n                  stroke-linecap: round;\n                  stroke-linejoin: round;\n                }\n                .st6 {\n                  fill: #f6851b;\n                  stroke: #f6851b;\n                }\n              ",
                  }}
                />
                <path
                  fill="#e2761b"
                  stroke="#e2761b"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M274.1 35.5l-99.5 73.9L193 65.8z"
                />
                <path
                  className="st1"
                  d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
                />
                <path
                  className="st1"
                  d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zm111.3 0l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z"
                />
                <path
                  d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z"
                  fill="#d7c1b3"
                  stroke="#d7c1b3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z"
                  fill="#233447"
                  stroke="#233447"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                  fill="#cd6116"
                  stroke="#cd6116"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z"
                  fill="#e4751f"
                  stroke="#e4751f"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="st6"
                  d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                />
                <path
                  fill="#c0ad9e"
                  stroke="#c0ad9e"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                />
                <path
                  fill="#161616"
                  stroke="#161616"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                />
                <path
                  d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                  fill="#763d16"
                  stroke="#763d16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="st6"
                  d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                />
              </svg>
              <p className="text-center dark:text-white">
                You don't have MetaMask in your browser, please download it from
                <a
                  href="https://metamask.io/"
                  className="text-accent"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  MetaMask
                </a>
              </p>
            </div>
            {/* end body */}
            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="https://metamask.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
                >
                  Get Metamask
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Place Bid Modal */}
      <div
        className="modal fade"
        id="placeBidModal"
        tabIndex={-1}
        aria-labelledby="placeBidLabel"
        aria-hidden="true"
      >
        <div className="max-w-2xl modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="placeBidLabel">
                Place a bid
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  className="w-6 h-6 fill-jacarta-700 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="p-6 modal-body">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold font-display text-jacarta-700 dark:text-white">
                  Price
                </span>
              </div>
              <div className="relative flex items-center mb-2 overflow-hidden border rounded-lg border-jacarta-100 dark:border-jacarta-600">
                <div className="flex items-center self-stretch flex-1 px-2 border-r border-jacarta-100 bg-jacarta-50">
                  <span>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x={0}
                      y={0}
                      viewBox="0 0 1920 1920"
                      xmlSpace="preserve"
                      className="w-5 h-5 mr-1"
                    >
                      <path
                        fill="#8A92B2"
                        d="M959.8 80.7L420.1 976.3 959.8 731z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"
                      />
                      <path
                        fill="#454A75"
                        d="M959.8 1295.4l539.8-319.1L959.8 731z"
                      />
                      <path
                        fill="#8A92B2"
                        d="M420.1 1078.7l539.7 760.6v-441.7z"
                      />
                      <path
                        fill="#62688F"
                        d="M959.8 1397.6v441.7l540.1-760.6z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-display text-jacarta-700">
                    ETH
                  </span>
                </div>
                <input
                  type="text"
                  className="h-12 w-full flex-[3] border-0 focus:ring-inset focus:ring-accent"
                  placeholder="Amount"
                  defaultValue="0.05"
                />
                <div className="flex self-stretch justify-end flex-1 border-l border-jacarta-100 bg-jacarta-50">
                  <span className="self-center px-2 text-sm">$130.82</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm dark:text-jacarta-400">
                  Balance: 0.0000 WETH
                </span>
              </div>
              {/* Terms */}
              <div className="flex items-center mt-4 space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="self-start w-5 h-5 rounded border-jacarta-200 text-accent checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600"
                />
                <label
                  htmlFor="terms"
                  className="text-sm dark:text-jacarta-200"
                >
                  By checking this box, I agree to ADAM's{" "}
                  <a href="#" className="text-accent">
                    Terms of Service
                  </a>
                </label>
              </div>
            </div>
            {/* end body */}
            <div className="modal-footer">
              <div className="flex items-center justify-center space-x-4">
                <button
                  type="button"
                  className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark"
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* JS Scripts */}
      <Script src="/js/app.bundle.js" />
      <Script src="/js/countdown.bundle.js" />
    </div>
  );
}

export default Home2;
