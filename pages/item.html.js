import React from 'react'
import Script from 'next/script'
// import './css/style.css'

function Item() {
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
          <main className="mt-24">
            {/* Item */}
            <section className="relative pt-12 pb-24 lg:py-24">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="h-full" />
              </picture>
              <div className="container">
                {/* Item */}
                <div className="md:flex md:flex-wrap">
                  {/* Image */}
                  <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
                    <img src="img/products/item_single_large.jpg" alt="item" className="rounded-2.5xl cursor-pointer" data-bs-toggle="modal" data-bs-target="#imageModal" />
                    {/* Modal */}
                    <div className="modal fade" id="imageModal" tabIndex={-1} aria-labelledby="buyNowModalLabel" aria-hidden="true">
                      <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4">
                        <img src="img/products/item_single_full.jpg" alt="item" />
                      </div>
                      <button type="button" className="absolute btn-close top-6 right-6" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                        </svg>
                      </button>
                    </div>
                    {/* end modal */}
                  </figure>
                  {/* Details */}
                  <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
                    {/* Collection / Likes / Actions */}
                    <div className="flex mb-3">
                      {/* Collection */}
                      <div className="flex items-center">
                        <a href="collection.html" className="mr-2 text-sm font-bold text-accent">CryptoGuysNFT</a>
                        <span className="inline-flex items-center justify-center w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 bg-green" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </span>
                      </div>
                      {/* Likes / Actions */}
                      <div className="flex ml-auto space-x-2">
                        <div className="flex items-center px-4 py-2 space-x-1 bg-white border dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-xl">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">188</span>
                        </div>
                        {/* Actions */}
                        <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                          <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-sm dropdown-toggle" role="button" id="collectionActions" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="collectionActions">
                            <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                              New bid
                            </button>
                            <hr className="h-px mx-4 my-2 border-0 dark:bg-jacarta-600 bg-jacarta-100" />
                            <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                              Refresh Metadata
                            </button>
                            <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                              Share
                            </button>
                            <button className="block w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                              Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h1 className="mb-4 text-4xl font-semibold font-display text-jacarta-700 dark:text-white">TSARÉVNA</h1>
                    <div className="flex items-center mb-8 space-x-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="-ml-1" data-tippy-content="ETH">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                            <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium tracking-tight text-green">4.7 ETH</span>
                      </div>
                      <span className="text-sm dark:text-jacarta-300 text-jacarta-400">Highest bid</span>
                      <span className="text-sm dark:text-jacarta-300 text-jacarta-400">1/1 available</span>
                    </div>
                    <p className="mb-10 dark:text-jacarta-300">
                      Neque aut veniam consectetur magnam libero, natus eius numquam reprehenderit hic at, excepturi
                      repudiandae magni optio odio doloribus? Facilisi lobortisal morbi fringilla urna amet sed ipsum.
                    </p>
                    {/* Creator / Owner */}
                    <div className="flex flex-wrap mb-8">
                      <div className="flex mb-4 mr-8">
                        <figure className="mr-4 shrink-0">
                          <a href="user.html" className="relative block">
                            <img src="img/avatars/avatar_7.jpg" alt="avatar 7" className="rounded-2lg" loading="lazy" />
                            <div className="dark:border-jacarta-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                              </svg>
                            </div>
                          </a>
                        </figure>
                        <div className="flex flex-col justify-center">
                          <span className="block text-sm text-jacarta-400 dark:text-white">Creator <strong>10% royalties</strong></span>
                          <a href="user.html" className="block text-accent">
                            <span className="text-sm font-bold">@creative_world</span>
                          </a>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <figure className="mr-4 shrink-0">
                          <a href="user.html" className="relative block">
                            <img src="img/avatars/avatar_1.jpg" alt="avatar 1" className="rounded-2lg" loading="lazy" />
                            <div className="dark:border-jacarta-600 bg-green absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                              </svg>
                            </div>
                          </a>
                        </figure>
                        <div className="flex flex-col justify-center">
                          <span className="block text-sm text-jacarta-400 dark:text-white">Owned by</span>
                          <a href="user.html" className="block text-accent">
                            <span className="text-sm font-bold">@051_Hart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Bid */}
                    <div className="p-8 bg-white border dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-2lg">
                      <div className="mb-8 sm:flex sm:flex-wrap">
                        {/* Highest bid */}
                        <div className="sm:w-1/2 sm:pr-4 lg:pr-8">
                          <div className="block overflow-hidden text-ellipsis whitespace-nowrap">
                            <span className="text-sm dark:text-jacarta-300 text-jacarta-400">Highest bid by </span>
                            <a href="user.html" className="text-sm font-bold text-accent">0x695d2ef170ce69e794707eeef9497af2de25df82</a>
                          </div>
                          <div className="flex mt-3">
                            <figure className="mr-4 shrink-0">
                              <a href="user.html" className="relative block">
                                <img src="img/avatars/avatar_4.jpg" alt="avatar" className="rounded-2lg" loading="lazy" />
                              </a>
                            </figure>
                            <div>
                              <div className="flex items-center whitespace-nowrap">
                                <span className="-ml-1" data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-5 h-5">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-lg font-medium leading-tight tracking-tight text-green">4.7 ETH</span>
                              </div>
                              <span className="text-sm dark:text-jacarta-300 text-jacarta-400">~10,864.10</span>
                            </div>
                          </div>
                        </div>
                        {/* Countdown */}
                        <div className="mt-4 dark:border-jacarta-600 sm:border-jacarta-100 sm:mt-0 sm:w-1/2 sm:border-l sm:pl-4 lg:pl-8">
                          <span className="text-sm js-countdown-ends-label text-jacarta-400 dark:text-jacarta-300">Auction ends in</span>
                          <div className="flex mt-3 space-x-4 js-countdown-single-timer" data-countdown="2022-09-07T19:40:30" data-expired="This auction has ended">
                            <span className="countdown-days text-jacarta-700 dark:text-white">
                              <span className="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]" />
                              <span className="block text-xs font-medium tracking-tight">Days</span>
                            </span>
                            <span className="countdown-hours text-jacarta-700 dark:text-white">
                              <span className="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]" />
                              <span className="block text-xs font-medium tracking-tight">Hrs</span>
                            </span>
                            <span className="countdown-minutes text-jacarta-700 dark:text-white">
                              <span className="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]" />
                              <span className="block text-xs font-medium tracking-tight">Min</span>
                            </span>
                            <span className="countdown-seconds text-jacarta-700 dark:text-white">
                              <span className="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]" />
                              <span className="block text-xs font-medium tracking-tight">Sec</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#placeBidModal" className="inline-block w-full px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">Place Bid</a>
                    </div>
                    {/* end bid */}
                  </div>
                  {/* end details */}
                </div>
                {/* Tabs */}
                <div className="overflow-x-auto rounded-lg scrollbar-custom mt-14">
                  <div className="min-w-fit">
                    {/* Tabs Nav */}
                    <ul className="flex items-center nav nav-tabs" role="tablist">
                      {/* Offers */}
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link active hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="offers-tab" data-bs-toggle="tab" data-bs-target="#offers" type="button" role="tab" aria-controls="offers" aria-selected="true">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                          </svg>
                          <span className="text-base font-medium font-display">Offers</span>
                        </button>
                      </li>
                      {/* Properties */}
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="properties-tab" data-bs-toggle="tab" data-bs-target="#properties" type="button" role="tab" aria-controls="properties" aria-selected="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                          </svg>
                          <span className="text-base font-medium font-display">Properties</span>
                        </button>
                      </li>
                      {/* Details */}
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button" role="tab" aria-controls="details" aria-selected="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z" />
                          </svg>
                          <span className="text-base font-medium font-display">Details</span>
                        </button>
                      </li>
                      {/* Activity */}
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab" aria-controls="activity" aria-selected="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z" />
                          </svg>
                          <span className="text-base font-medium font-display">Activity</span>
                        </button>
                      </li>
                      {/* Price History */}
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="price-history-tab" data-bs-toggle="tab" data-bs-target="#price-history" type="button" role="tab" aria-controls="price-history" aria-selected="false">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z" />
                          </svg>
                          <span className="text-base font-medium font-display">Price History</span>
                        </button>
                      </li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Offers */}
                      <div className="tab-pane fade show active" id="offers" role="tabpanel" aria-labelledby="offers-tab">
                        <div role="table" className="grid w-full grid-cols-5 overflow-y-auto text-sm bg-white border rounded-lg rounded-tl-none scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 dark:text-white">
                          <div className="contents" role="row">
                            <div className="sticky top-0 px-4 py-2 dark:bg-jacarta-600 bg-light-base" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Price</span>
                            </div>
                            <div className="sticky top-0 px-4 py-2 dark:bg-jacarta-600 bg-light-base" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">USD Price</span>
                            </div>
                            <div className="sticky top-0 px-4 py-2 dark:bg-jacarta-600 bg-light-base" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Floor Difference</span>
                            </div>
                            <div className="sticky top-0 px-4 py-2 dark:bg-jacarta-600 bg-light-base" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Expiration</span>
                            </div>
                            <div className="sticky top-0 px-4 py-2 dark:bg-jacarta-600 bg-light-base" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">From</span>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">30 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $90,136.10
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              70% below
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 5 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">ViviGiallo</a>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">15.5 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $45,458.10
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              70% below
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 5 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">DB96DB</a>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">0.9 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $2,347.90
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              98% below
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 5 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">myc_nc</a>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">1.2 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $4,568.40
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              100% below
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 6 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">MetaRDnA</a>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">0.5 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $1,699.10
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              100% below
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 6 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">Karafuru</a>
                            </div>
                          </div>
                          <div className="contents" role="row">
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">4.7 ETH</span>
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              $13,966.64
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              40% above
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              in 2 months
                            </div>
                            <div className="flex items-center px-4 py-4 border-t dark:border-jacarta-600 border-jacarta-100" role="cell">
                              <a href="user.html" className="text-accent">seekortelur</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Properties */}
                      <div className="tab-pane fade" id="properties" role="tabpanel" aria-labelledby="properties-tab">
                        <div className="p-6 bg-white border rounded-tl-none dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg md:p-10">
                          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">ACCESSORY</span>
                              <span className="text-base text-jacarta-700 dark:text-white">Metal headband</span>
                              <span className="text-sm text-jacarta-400">3% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">SKIN</span>
                              <span className="text-base text-jacarta-700 dark:text-white">Dark Brown</span>
                              <span className="text-sm text-jacarta-400">8% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">EYES</span>
                              <span className="text-base text-jacarta-700 dark:text-white">Cyborg</span>
                              <span className="text-sm text-jacarta-400">2% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">CLOTH</span>
                              <span className="text-base text-jacarta-700 dark:text-white">Adidas</span>
                              <span className="text-sm text-jacarta-400">7% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">HAIR</span>
                              <span className="text-base text-jacarta-700 dark:text-white">White Ash</span>
                              <span className="text-sm text-jacarta-400">7% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">CHARACTER</span>
                              <span className="text-base text-jacarta-700 dark:text-white">TSAREVNA</span>
                              <span className="text-sm text-jacarta-400">1% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">BACKGROUND</span>
                              <span className="text-base text-jacarta-700 dark:text-white">CyberPunk</span>
                              <span className="text-sm text-jacarta-400">9% have this trait</span>
                            </a>
                            <a href="collection.html" className="flex flex-col p-5 space-y-2 text-center transition-shadow border dark:bg-jacarta-800 dark:border-jacarta-600 bg-light-base rounded-2lg border-jacarta-100 hover:shadow-lg">
                              <span className="text-sm uppercase text-accent">MOUTH</span>
                              <span className="text-base text-jacarta-700 dark:text-white">Flower</span>
                              <span className="text-sm text-jacarta-400">4% have this trait</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Details */}
                      <div className="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">
                        <div className="p-6 bg-white border rounded-tl-none dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg md:p-10">
                          <div className="flex items-center mb-2">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Contract Address:</span>
                            <a href="#" className="text-accent">0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F</a>
                          </div>
                          <div className="flex items-center mb-2">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Token ID:</span>
                            <span className="cursor-pointer select-none js-copy-clipboard text-jacarta-700 dark:text-white" data-tippy-content="Copy">7714</span>
                          </div>
                          <div className="flex items-center mb-2">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Token Standard:</span>
                            <span className="text-jacarta-700 dark:text-white">ERC-721</span>
                          </div>
                          <div className="flex items-center">
                            <span className="dark:text-jacarta-300 mr-2 min-w-[9rem]">Blockchain:</span>
                            <span className="text-jacarta-700 dark:text-white">Ethereum</span>
                          </div>
                        </div>
                      </div>
                      {/* Activity */}
                      <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
                        {/* Filter */}
                        <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 bg-light-base border border-b-0 px-4 pt-5 pb-2.5">
                          <div className="flex flex-wrap">
                            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                              </svg>
                              <span className="font-medium text-2xs">Listing</span>
                            </button>
                            <button className="dark:hover:bg-accent-dark hover:bg-accent-dark bg-accent mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent px-4 py-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                              </svg>
                              <span className="font-medium text-white text-2xs">Bids</span>
                            </button>
                            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                              </svg>
                              <span className="font-medium text-2xs">Transfers</span>
                            </button>
                            <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                              </svg>
                              <span className="font-medium text-2xs">Sales</span>
                            </button>
                          </div>
                        </div>
                        <div role="table" className="w-full overflow-y-auto text-sm bg-white border rounded-lg rounded-tl-none scrollbar-custom dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 max-h-72 dark:text-white">
                          <div className="sticky top-0 flex dark:bg-jacarta-600 bg-light-base" role="row">
                            <div className="w-[17%] py-2 px-4" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Event</span>
                            </div>
                            <div className="w-[17%] py-2 px-4" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Price</span>
                            </div>
                            <div className="w-[22%] py-2 px-4" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">From</span>
                            </div>
                            <div className="w-[22%] py-2 px-4" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">To</span>
                            </div>
                            <div className="w-[22%] py-2 px-4" role="columnheader">
                              <span className="w-full overflow-hidden text-jacarta-700 dark:text-jacarta-100 text-ellipsis">Date</span>
                            </div>
                          </div>
                          <div className="flex" role="row">
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4" role="cell">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                              </svg>
                              Bid
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">30 ETH</span>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">AD496A</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">Polymorph: MORPH Token</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="#" className="flex flex-wrap items-center text-accent" target="_blank" rel="nofollow noopener" title="Opens in a new window" data-tippy-content="March 13 2022, 2:32 pm">
                                <span className="mr-1">19 days ago</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-current">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div className="flex" role="row">
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4" role="cell">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                              </svg>
                              Transfer
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">.00510 ETH</span>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">The_vikk</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">Polymorph: MORPH Token</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <span className="mr-1 dark:text-jacarta-300">16 days ago</span>
                            </div>
                          </div>
                          <div className="flex" role="row">
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center border-t py-4 px-4" role="cell">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                              </svg>
                              Sale
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[17%] items-center whitespace-nowrap border-t py-4 px-4" role="cell">
                              <span className="-ml-1" data-tippy-content="ETH">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4 mr-1">
                                  <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                  <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                  <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                  <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                  <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                </svg>
                              </span>
                              <span className="text-sm font-medium tracking-tight text-green">1.50 ETH</span>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">CryptoGuysNFT</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="user.html" className="text-accent">Polymorph: MORPH Token</a>
                            </div>
                            <div className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center border-t py-4 px-4" role="cell">
                              <a href="#" className="flex flex-wrap items-center text-accent" target="_blank" rel="nofollow noopener" title="Opens in a new window" data-tippy-content="March 13 2022, 2:32 pm">
                                <span className="mr-1">19 days ago</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-current">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Price History */}
                      <div className="tab-pane fade" id="price-history" role="tabpanel" aria-labelledby="price-history-tab">
                        <div className="p-6 bg-white border rounded-tl-none dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg">
                          {/* Period / Stats */}
                          <div className="flex flex-wrap items-center mb-10">
                            <select className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mr-8 min-w-[12rem] rounded-lg py-3.5 text-sm dark:text-white">
                              <option value="7-days">Last 7 Days</option>
                              <option value="14-days">Last 14 Days</option>
                              <option value="30-days">Last 30 Days</option>
                              <option value="60-days">Last 60 Days</option>
                              <option value="90-days" selected>Last 90 Days</option>
                              <option value="last-year">Last Year</option>
                              <option value="all-time">All Time</option>
                            </select>
                            <div className="py-2">
                              <span className="inline-block mr-4 align-middle">
                                <span className="block text-sm font-bold dark:text-white">90 Day Avg. Price:</span>
                                <span className="block text-sm font-bold text-green">Ξ7.0633</span>
                              </span>
                              <span className="inline-block align-middle">
                                <span className="block text-sm font-bold dark:text-white">90 Day Volume:</span>
                                <span className="block text-sm font-bold text-green">Ξ24,085.6957</span>
                              </span>
                            </div>
                          </div>
                          {/* Chart */}
                          <div className="relative w-full chart-container h-80">
                            <canvas id="activityChart" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end tab content */}
                  </div>
                </div>
                {/* end tabs */}
              </div>
            </section>
            {/* end item */}
            {/* Related */}
            <section className="py-24 dark:bg-jacarta-800 bg-light-base">
              <div className="container">
                <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
                  More from this collection
                </h2>
                <div className="relative">
                  {/* Slider */}
                  <div className="swiper card-slider-4-columns !py-5">
                    <div className="swiper-wrapper">
                      {/* Slides */}
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure>
                              <a href="item.html">
                                <img src="./img/products/item_1.jpg" alt="item 1" width={230} height={230} className="w-full rounded-[0.625rem]" loading="lazy" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">ETH Me Outside</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">1.55 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">1.3 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">159</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure>
                              <a href="item.html">
                                <img src="./img/products/item_2.jpg" alt="item 2" width={230} height={230} className="w-full rounded-[0.625rem]" loading="lazy" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Lazyone Panda</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">2 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">0.001 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">75</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure>
                              <a href="item.html">
                                <img src="./img/products/item_6.jpg" alt="item 6" width={230} height={230} className="w-full rounded-[0.625rem]" loading="lazy" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Splendid Girl</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">5.1 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">4.7 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">253</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure>
                              <a href="item.html">
                                <img src="./img/products/item_4.jpg" alt="item 4" width={230} height={230} className="w-full rounded-[0.625rem]" loading="lazy" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Amazing NFT art</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">7 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">1.2 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">324</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure className="relative">
                              <a href="item.html">
                                <img src="./img/pixel.jpg" data-src="./img/products/item_3.gif" alt="item 3" width={230} height={230} className="swiper-lazy w-full rounded-[0.625rem]" />
                                <div className="swiper-lazy-preloader" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Portrait Gallery</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">0.7 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">0.05 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">54</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article>
                          <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                            <figure className="relative">
                              <a href="item.html">
                                <img src="./img/pixel.jpg" data-src="./img/products/item_5.jpg" alt="item 5" width={230} height={230} className="swiper-lazy w-full rounded-[0.625rem]" />
                                <div className="swiper-lazy-preloader" />
                              </a>
                            </figure>
                            <div className="flex items-center justify-between mt-4">
                              <a href="item.html">
                                <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Flourishing Cat #180</span>
                              </a>
                              <span className="flex items-center px-2 py-1 border rounded-md dark:border-jacarta-600 border-jacarta-100 whitespace-nowrap">
                                <span data-tippy-content="ETH">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                                    <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                                    <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                                    <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                                    <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                                    <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                                  </svg>
                                </span>
                                <span className="text-sm font-medium tracking-tight text-green">3 ETH</span>
                              </span>
                            </div>
                            <div className="mt-2 text-sm">
                              <span className="dark:text-jacarta-300">Current Bid</span>
                              <span className="dark:text-jacarta-100 text-jacarta-700">0.25 ETH</span>
                            </div>
                            <div className="flex items-center justify-between mt-8">
                              <button type="button" className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#placeBidModal">
                                Place bid
                              </button>
                              <div className="flex items-center space-x-1">
                                <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                                    <path fill="none" d="M0 0H24V24H0z" />
                                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                                  </svg>
                                </span>
                                <span className="text-sm dark:text-jacarta-200">125</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  {/* Slider Navigation */}
                  <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer group swiper-button-prev shadow-white-volume top-1/2 -left-4 sm:-left-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 group-hover:fill-accent">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                    </svg>
                  </div>
                  <div className="absolute z-10 flex items-center justify-center w-12 h-12 p-3 -mt-6 text-base bg-white rounded-full cursor-pointer group swiper-button-next shadow-white-volume top-1/2 -right-4 sm:-right-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 group-hover:fill-accent">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>
            {/* end related */}
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
          {/* Place Bid Modal */}
          <div className="modal fade" id="placeBidModal" tabIndex={-1} aria-labelledby="placeBidLabel" aria-hidden="true">
            <div className="max-w-2xl modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="placeBidLabel">Place a bid</h5>
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
                    <span className="text-sm font-semibold font-display text-jacarta-700 dark:text-white">Price</span>
                  </div>
                  <div className="relative flex items-center mb-2 overflow-hidden border rounded-lg dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center self-stretch flex-1 px-2 border-r border-jacarta-100 bg-jacarta-50">
                      <span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-5 h-5 mr-1">
                          <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                          <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                          <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                          <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                          <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                        </svg>
                      </span>
                      <span className="text-sm font-display text-jacarta-700">ETH</span>
                    </div>
                    <input type="text" className="focus:ring-accent h-12 w-full flex-[3] border-0 focus:ring-inset" placeholder="Amount" defaultValue="0.05" />
                    <div className="flex self-stretch justify-end flex-1 border-l bg-jacarta-50 border-jacarta-100">
                      <span className="self-center px-2 text-sm">$130.82</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm dark:text-jacarta-400">Balance: 0.0000 WETH</span>
                  </div>
                  {/* Terms */}
                  <div className="flex items-center mt-4 space-x-2">
                    <input type="checkbox" id="terms" className="self-start w-5 h-5 rounded checked:bg-accent dark:bg-jacarta-600 text-accent border-jacarta-200 focus:ring-accent/20 dark:border-jacarta-500 focus:ring-offset-0" />
                    <label htmlFor="terms" className="text-sm dark:text-jacarta-200">By checking this box, I agree to ADAM's <a href="#" className="text-accent">Terms of Service</a></label>
                  </div>
                </div>
                {/* end body */}
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <button type="button" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          {/* JS Scripts */}
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js" strategy='beforeInteractive'></Script>
          <Script src="/js/countdown.bundle.js"></Script>
          <Script src="/js/app.bundle.js"></Script>
          <Script src="/js/charts.bundle.js"></Script>
        </div>
  )
}

export default Item