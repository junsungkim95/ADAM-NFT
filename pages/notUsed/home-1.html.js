import React from 'react'

function home1() {
  return (
    <div>
          <title>Xhibiter | NFT Marketplace HTML Template</title>
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
          <header className="fixed top-0 z-20 w-full transition-colors js-page-header backdrop-blur">
            <div className="flex items-center px-6 py-6 xl:px-24">
              {/* Logo */}
              <a href="index.html" className="shrink-0">
                <img src="img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                <img src="img/logo_white.png" className="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
              </a>
              {/* Search */}
              <form action="search" className="relative ml-12 mr-8 hidden basis-3/12 lg:block xl:ml-[8%]">
                <input type="search" className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                <span className="absolute top-0 left-0 flex items-center justify-center w-12 h-full rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                  </svg>
                </span>
              </form>
              {/* Menu / Actions */}
              <div className="fixed inset-0 z-10 items-center invisible ml-auto bg-white opacity-0 js-mobile-menu dark:bg-jacarta-800 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                {/* Mobile Logo / Menu Close */}
                <div className="fixed left-0 z-10 flex items-center justify-between w-full p-6 bg-white t-0 dark:bg-jacarta-800 lg:hidden">
                  {/* Mobile Logo */}
                  <a href="index.html" className="shrink-0">
                    <img src="img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                    <img src="img/logo_white.png" className="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                  </a>
                  {/* Mobile Menu Close */}
                  <button className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" aria-label="close mobile menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
                {/* Mobile Search */}
                <form action="search" className="relative w-full mt-24 mb-8 lg:hidden">
                  <input type="search" className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-3 px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                  <span className="absolute top-0 left-0 flex items-center justify-center w-12 h-full rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                    </svg>
                  </span>
                </form>
                {/* Primary Nav */}
                <nav className="w-full navbar">
                  <ul className="flex flex-col lg:flex-row">
                    <li className="relative js-nav-dropdown group">
                      <a href="#" className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" id="navDropdown-1" aria-expanded="false" role="button" data-bs-toggle="dropdown">Home
                        <i className="lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </i>
                      </a>
                      <ul className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-1">
                        <li>
                          <a href="index.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-accent">Home 1</span>
                          </a>
                        </li>
                        <li>
                          <a href="home-2.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Home 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="home-3.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Home 3</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative js-nav-dropdown group">
                      <a href="#" className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" id="navDropdown-2" aria-expanded="false" role="button" data-bs-toggle="dropdown">Pages
                        <i className="lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </i>
                      </a>
                      <ul className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-2">
                        <li>
                          <a href="item.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Item Details</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Explore Collections</span>
                          </a>
                        </li>
                        <li>
                          <a href="collection.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Collection</span>
                          </a>
                        </li>
                        <li>
                          <a href="activity.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Activity</span>
                          </a>
                        </li>
                        <li>
                          <a href="rankings.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Rankings</span>
                          </a>
                        </li>
                        <li>
                          <a href="user.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">User</span>
                          </a>
                        </li>
                        <li>
                          <a href="edit-profile.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Edit Profile</span>
                          </a>
                        </li>
                        <li>
                          <a href="about.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">About</span>
                          </a>
                        </li>
                        <li>
                          <a href="contact.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Contact</span>
                          </a>
                        </li>
                        <li>
                          <a href="wallet.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Wallet</span>
                          </a>
                        </li>
                        <li>
                          <a href="login.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Login</span>
                          </a>
                        </li>
                        <li>
                          <a href="404.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Page 404</span>
                          </a>
                        </li>
                        <li>
                          <a href="tos.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Terms of Service</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative js-nav-dropdown nav-item dropdown group">
                      <a href="collections.html" className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" id="navDropdown-3" aria-expanded="false" role="button" data-bs-toggle="dropdown">Explore
                        <i className="lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </i>
                      </a>
                      <ul className="dropdown-menu dark:bg-jacarta-800 -left-6 top-[85%] z-10 hidden grid-flow-col grid-rows-5 gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:!grid lg:translate-y-4 lg:py-8 lg:px-5 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-1">
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="bg-light-base mr-3 rounded-xl p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-700">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M22 12.999V20a1 1 0 0 1-1 1h-8v-8.001h9zm-11 0V21H3a1 1 0 0 1-1-1v-7.001h9zM11 3v7.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v6.999h-9V3h8z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">All NFTs</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#E4FCF4] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#10B981]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2c5.522 0 10 3.978 10 8.889a5.558 5.558 0 0 1-5.556 5.555h-1.966c-.922 0-1.667.745-1.667 1.667 0 .422.167.811.422 1.1.267.3.434.689.434 1.122C13.667 21.256 12.9 22 12 22 6.478 22 2 17.522 2 12S6.478 2 12 2zm-1.189 16.111a3.664 3.664 0 0 1 3.667-3.667h1.966A3.558 3.558 0 0 0 20 10.89C20 7.139 16.468 4 12 4a8 8 0 0 0-.676 15.972 3.648 3.648 0 0 1-.513-1.86zM7.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Art</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#FDF7EE] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#FEB240]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897c.355.967.549 2.013.549 3.103A9 9 0 1 1 3.55 9.897a4.5 4.5 0 1 1 6.791-5.744 9.05 9.05 0 0 1 3.32 0A4.494 4.494 0 0 1 17.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 0 0-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 1 0 4.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1 0 19 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0 0 17.5 4zM10 13a2 2 0 1 0 4 0h2a4 4 0 1 1-8 0h2z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Collectibles</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#F2EEFF] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#8358FF]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M5 15v4h4v2H3v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.6l4.399-11h2zm-1 2.885L10.752 12h2.492l-1.245-3.115zM9 3v2H5v4H3V3h6zm12 0v6h-2V5h-4V3h6z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Domain Names</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#FFEEFA] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#F35BC7]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 13.535V3h8v3h-6v11a4 4 0 1 1-2-3.465z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Music</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#EAF2FE] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#428AF8]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6zm2 1v12h16V7H4zm10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zM4 2h6v2H4V2z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Photography</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#EBEDFF] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#737EF2]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.366 11.366l-3.469 6.01a8.053 8.053 0 0 0 4.459.51 9.937 9.937 0 0 1 .784-5.494l-1.774-1.026zm3.518 2.031a7.956 7.956 0 0 0-.587 3.894 8.022 8.022 0 0 0 3.077-2.456l-2.49-1.438zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428 8.01 8.01 0 0 0 2.671 3.604l3.469-6.008-1.775-1.024zm11.103-.13l-.258.12a7.947 7.947 0 0 0-2.82 2.333l2.492 1.439a7.975 7.975 0 0 0 .586-3.893zM4 12c0 .266.013.53.038.789a7.95 7.95 0 0 0 3.078-2.454L4.624 8.897A7.975 7.975 0 0 0 4 12zm12.835-6.374l-3.469 6.008 1.775 1.025a9.95 9.95 0 0 1 4.366-3.43 8.015 8.015 0 0 0-2.419-3.402l-.253-.201zM12 4c-.463 0-.916.04-1.357.115a9.928 9.928 0 0 1-.784 5.494l1.775 1.025 3.469-6.01A7.975 7.975 0 0 0 12 4zm-3.297.71l-.191.088a8.033 8.033 0 0 0-2.886 2.367l2.49 1.438a7.956 7.956 0 0 0 .587-3.893z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Sports</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#F5FFED] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#8DD059]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm2 2h6v6H6V7zm2 2v2h2V9H8zm-2 6h12v2H6v-2zm8-8h4v2h-4V7zm0 4h4v2h-4v-2z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Trading Cards</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#FFEEEE] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#EF3D3D]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M22 7h1v10h-1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3zm-2 10h-6a5 5 0 0 1 0-10h6V5H4v14h16v-2zm1-2V9h-7a3 3 0 0 0 0 6h7zm-7-4h3v2h-3v-2z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Utility</span>
                          </a>
                        </li>
                        <li>
                          <a href="collections.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="mr-3 rounded-xl bg-[#EEFCFF] p-[0.375rem]">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-4 w-4 fill-[#46C7E3]">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z" />
                              </svg>
                            </span>
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Virtual Worlds</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="relative js-nav-dropdown group">
                      <a href="#" className="dropdown-toggle text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5" id="navDropdown-4" aria-expanded="false" role="button" data-bs-toggle="dropdown">Resources
                        <i className="lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </i>
                      </a>
                      <ul className="dropdown-menu dark:bg-jacarta-800 left-0 top-[85%] z-10 hidden min-w-[200px] gap-x-4 whitespace-nowrap rounded-xl bg-white transition-all will-change-transform group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:grid lg:translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl lg:group-hover:translate-y-2" aria-labelledby="navDropdown-4">
                        <li>
                          <a href="help-center.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Help Center</span>
                          </a>
                        </li>
                        <li>
                          <a href="platform-status.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Platform Status</span>
                          </a>
                        </li>
                        <li>
                          <a href="partners.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Partners</span>
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Blog</span>
                          </a>
                        </li>
                        <li>
                          <a href="single-post.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Single Post</span>
                          </a>
                        </li>
                        <li>
                          <a href="newsletter.html" className="flex items-center px-5 py-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                            <span className="text-sm font-display text-jacarta-700 dark:text-white">Newsletter</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="group">
                      <a href="create.html" className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">Create</a>
                    </li>
                  </ul>
                </nav>
                {/* Mobile Connect Wallet / Socials */}
                <div className="w-full mt-10 lg:hidden">
                  <a href="#" className="block w-full px-8 py-3 font-semibold text-center text-white transition-all rounded-full js-wallet bg-accent shadow-accent-volume hover:bg-accent-dark" data-bs-toggle="modal" data-bs-target="#walletModal">
                    Connect Wallet
                  </a>
                  <hr className="h-px my-5 border-0 dark:bg-jacarta-600 bg-jacarta-100" />
                  {/* Socials */}
                  <div className="flex items-center justify-center space-x-5">
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Actions */}
                <div className="hidden ml-8 lg:flex xl:ml-12">
                  {/* Wallet */}
                  <a href="#" className="js-wallet border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" data-bs-toggle="modal" data-bs-target="#walletModal" aria-label="wallet">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                    </svg>
                  </a>
                  {/* Profile */}
                  <div className="relative js-nav-dropdown group-dropdown">
                    <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" id="profileDropdown" aria-expanded="false" data-bs-toggle="dropdown" aria-label="profile">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 hidden min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:invisible lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:opacity-0 lg:shadow-2xl" aria-labelledby="profileDropdown">
                      <button className="flex items-center px-5 my-4 leading-none select-none js-copy-clipboard font-display text-jacarta-700 whitespace-nowrap dark:text-white" data-tippy-content="Copy">
                        <span className="max-w-[10rem] overflow-hidden text-ellipsis">0x7a86c0b064171007716bbd6af96676935799a63e</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mb-px ml-1 dark:fill-jacarta-300 fill-jacarta-500">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
                        </svg>
                      </button>
                      <div className="p-4 mx-5 mb-6 border rounded-lg dark:border-jacarta-600 border-jacarta-100">
                        <span className="text-sm font-medium tracking-tight dark:text-jacarta-200">Balance</span>
                        <div className="flex items-center">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="-ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                            <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                          </svg>
                          <span className="text-lg font-bold text-green">10 ETH</span>
                        </div>
                      </div>
                      <a href="user.html" className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                        </svg>
                        <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">My Profile</span>
                      </a>
                      <a href="edit-profile.html" className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">Edit Profile</span>
                      </a>
                      <a href="#" className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
                        </svg>
                        <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">Sign out</span>
                      </a>
                    </div>
                  </div>
                  {/* Dark Mode */}
                  <a href="#" className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent js-dark-mode-trigger ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 dark-mode-light group-hover:fill-white group-focus:fill-white dark:hidden">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="hidden w-4 h-4 transition-colors fill-jacarta-700 dark-mode-dark group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Mobile Menu Actions */}
              <div className="flex ml-auto lg:hidden">
                {/* Profile */}
                <a href="edit-profile.html" className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" aria-label="profile">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                  </svg>
                </a>
                {/* Dark Mode */}
                <a href="#" className="js-dark-mode-trigger border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 dark-mode-light group-hover:fill-white group-focus:fill-white dark:hidden">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="hidden w-4 h-4 transition-colors fill-jacarta-700 dark-mode-dark group-hover:fill-white group-focus:fill-white dark:block dark:fill-white">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
                  </svg>
                </a>
                {/* Mobile Menu Toggle */}
                <button className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]" aria-label="open mobile menu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main>
            {/* Hero */}
            <section className="relative pb-10 pt-20 md:pt-32 lg:h-[88vh]">
              <picture className="absolute inset-x-0 top-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient.jpg" alt="gradient" />
              </picture>
              <picture className="absolute inset-x-0 top-0 hidden pointer-events-none -z-10 dark:block">
                <img src="img/gradient_dark.jpg" alt="gradient dark" />
              </picture>
              <div className="container h-full">
                <div className="grid items-center h-full gap-4 md:grid-cols-12">
                  <div className="flex flex-col items-center justify-center h-full col-span-6 py-10 md:items-start md:py-20 xl:col-span-4">
                    <h1 className="mb-6 text-5xl text-center text-jacarta-700 font-display dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                      Buy, sell and collect NFTs.
                    </h1>
                    <p className="mb-8 text-lg text-center dark:text-jacarta-200 md:text-left">
                      The world's largest digital marketplace for crypto collectibles and non-fungible tokens
                    </p>
                    <div className="flex space-x-4">
                      <a href="create.html" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark w-36">
                        Upload
                      </a>
                      <a href="collections.html" className="px-8 py-3 font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 hover:text-white">
                        Explore
                      </a>
                    </div>
                  </div>
                  {/* Hero image */}
                  <div className="col-span-6 xl:col-span-8">
                    <div className="relative text-center md:pl-8 md:text-right">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]">
                        <defs>
                          <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                            <path d="
                      M 0, 100
                      C 0, 17.000000000000004 17.000000000000004, 0 100, 0
                      S 200, 17.000000000000004 200, 100
                          183, 200 100, 200
                          0, 183 0, 100
                  " fill="#9446ED" />
                          </clipPath>
                        </defs>
                        <g clipPath="url(#clipping)">
                          {/* Bg image */}
                          <image href="img/hero/hero.jpg" width={200} height={200} clipPath="url(#clipping)" />
                        </g>
                      </svg>
                      <img src="img/hero/3D_elements.png" alt="" className="animate-fly absolute top-0 md:-right-[10%]" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end hero */}
            {/* Hot Bids */}
            <section className="pt-10 pb-24">
              <div className="container">
                <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
                  <span className="inline-block w-6 h-6 mr-1 text-xl bg-center bg-contain" style={{backgroundImage: 'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f525.png)'}} />
                  Hot Bids
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
            {/* end hot bids */}
            {/* Top Collections */}
            <section className="relative py-24 dark:bg-jacarta-800">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="h-full" />
              </picture>
              <div className="container">
                <div className="mb-12 text-3xl text-center font-display text-jacarta-700 dark:text-white">
                  <h2 className="inline">Top collections over</h2>
                  <div className="inline cursor-pointer dropdown">
                    <button className="inline-flex items-center dropdown-toggle text-accent" type="button" id="collectionSort" data-bs-toggle="dropdown" aria-expanded="false">
                      last 7 days
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-8 h-8 fill-accent">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="collectionSort">
                      <a className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl" href="#">Last 24 Hours</a>
                      <a className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl" href="#">Last 7 Days</a>
                      <a className="block px-5 py-2 text-sm transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl" href="#">Last 30 Days</a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_1.jpg" alt="avatar 1" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          1
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">NFT Funny Cat</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">7,080.95 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_2.jpg" alt="avatar 2" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-sm text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          2
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Cryptopank</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">6,548,133 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_3.jpg" alt="avatar 3" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          3
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Prince Ape Planet</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">4,823,927 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_4.jpg" alt="avatar 4" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          4
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Hey Mrsmeseks</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">3,186 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_5.jpg" alt="avatar 5" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          5
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Bored Bunny</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">3,027 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_6.gif" alt="avatar 6" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          6
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Wow Frens</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">2,586 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_7.jpg" alt="avatar 7" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          7
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Origin Morish</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">2,347.85 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_8.jpg" alt="avatar 8" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          8
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Superdo</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">2,115.71 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_9.jpg" alt="avatar 9" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          9
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">NFT stars</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">2,027 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_10.jpg" alt="avatar 10" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          10
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Asumitsu</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">1,989.70 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_11.jpg" alt="avatar 11" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          11
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Pank Skull</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">1,726.70 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_12.jpg" alt="avatar 12" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          12
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Lazy Panda</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">1,589.03 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_13.jpg" alt="avatar 13" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          13
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Arcahorizons</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">1,157 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_14.jpg" alt="avatar 14" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          14
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Sussygirl</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">1,030 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_15.jpg" alt="avatar 15" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          15
                        </div>
                        <div className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white" data-tippy-content="Verified Collection">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Smilebin</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">999.51 ETH</span>
                    </div>
                  </div>
                  <div className="border-jacarta-100 dark:bg-jacarta-700 rounded-2.5xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent">
                    <figure className="mr-4 shrink-0">
                      <a href="collection.html" className="relative block">
                        <img src="img/avatars/avatar_16.jpg" alt="avatar 16" className="rounded-2lg" loading="lazy" />
                        <div className="absolute flex items-center justify-center w-6 h-6 text-xs text-white border-2 border-white rounded-full dark:border-jacarta-600 bg-jacarta-700 -left-3 top-1/2 -translate-y-2/4">
                          16
                        </div>
                      </a>
                    </figure>
                    <div>
                      <a href="collection.html" className="block">
                        <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Pankysmoke</span>
                      </a>
                      <span className="text-sm dark:text-jacarta-300">875.65 ETH</span>
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-center">
                  <a href="rankings.html" className="inline-block px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">Go to Rankings</a>
                </div>
              </div>
            </section>
            {/* end top collections */}
            {/* Trending Categories */}
            <section className="py-24">
              <div className="container">
                <h2 className="mb-8 text-3xl text-center font-display text-jacarta-700 dark:text-white">
                  <span className="inline-block w-6 h-6 mr-1 text-xl bg-center bg-contain" style={{backgroundImage: 'url(https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png)'}} />
                  Trending categories
                </h2>
                {/* Filter */}
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
                  <div className="my-1 cursor-pointer dropdown">
                    <div className="inline-flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-white" role="button" id="categoriesSort" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="font-display">Recently Added</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </div>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="categoriesSort">
                      <span className="block px-5 py-2 text-sm font-semibold font-display text-jacarta-300">Sort By</span>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Recently Added
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      </button>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Price: Low to High
                      </button>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Price: High to Low
                      </button>
                      <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        Auction ending soon
                      </button>
                      <span className="block px-5 py-2 text-sm font-semibold font-display text-jacarta-300">Options</span>
                      <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        <span className="flex items-center justify-between">
                          <span>Verified Only</span>
                          <input type="checkbox" defaultValue="checkbox" name="check" defaultChecked className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                        </span>
                      </div>
                      <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        <span className="flex items-center justify-between">
                          <span>NFSW Only</span>
                          <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                        </span>
                      </div>
                      <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                        <span className="flex items-center justify-between">
                          <span>Show Lazy Minted</span>
                          <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_5.jpg" alt="item 5" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">15</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_1.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_1.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Flourishing Cat #180</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">From 8.49 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">2/8</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_4.jpg" alt="item 4" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">188</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_2.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_2.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Amazing NFT art</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions2" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions2">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">From 5.9 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/7</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_7.jpg" alt="item 7" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">160</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_3.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_3.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">SwagFox#133</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions3" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions3">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">0.078 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/3</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_6.jpg" alt="item 6" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">159</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_4.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_4.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Splendid Girl</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions4" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions4">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">10 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">2/3</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_8.jpg" alt="item 8" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">32</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_3.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_5.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Monkeyme#155</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions5" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions5">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">From 5 FLOW</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/1</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_9.jpg" alt="item 9" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">25</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_6.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_4.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Jedidia#149</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions6" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions6">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">0.16 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/1</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_10.jpg" alt="item 10" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">55</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_2.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_7.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Artof Eve</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions7" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions7">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">0.13 FLOW</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/1</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  <article>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <figure className="relative">
                        <a href="item.html">
                          <img src="./img/products/item_11.gif" alt="item 11" className="w-full rounded-[0.625rem]" loading="lazy" />
                        </a>
                        <div className="absolute flex items-center p-2 space-x-1 bg-white rounded-md dark:bg-jacarta-700 top-3 right-3">
                          <span className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" data-tippy-content="Favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500 hover:fill-red dark:hover:fill-red">
                              <path fill="none" d="M0 0H24V24H0z" />
                              <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                            </svg>
                          </span>
                          <span className="text-sm dark:text-jacarta-200">70</span>
                        </div>
                        <div className="absolute left-3 -bottom-3">
                          <div className="flex -space-x-2">
                            <a href="#">
                              <img src="img/avatars/creator_8.png" alt="creator" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Creator: Sussygirl" />
                            </a>
                            <a href="#">
                              <img src="img/avatars/owner_5.png" alt="owner" className="w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 hover:border-accent dark:hover:border-accent" data-tippy-content="Owner: Sussygirl" />
                            </a>
                          </div>
                        </div>
                      </figure>
                      <div className="flex items-center justify-between mt-7">
                        <a href="item.html">
                          <span className="text-base font-display text-jacarta-700 hover:text-accent dark:text-white">Asuna #1649</span>
                        </a>
                        <div className="rounded-full dark:hover:bg-jacarta-600 dropup hover:bg-jacarta-100">
                          <a href="#" className="inline-flex items-center justify-center w-8 h-8 text-sm dropdown-toggle" role="button" id="itemActions8" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width={16} height={4} viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:fill-jacarta-200 fill-jacarta-500">
                              <circle cx={2} cy={2} r={2} />
                              <circle cx={8} cy={2} r={2} />
                              <circle cx={14} cy={2} r={2} />
                            </svg>
                          </a>
                          <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="itemActions8">
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
                      <div className="mt-2 text-sm">
                        <span className="mr-1 dark:text-jacarta-200 text-jacarta-700">0.8 ETH</span>
                        <span className="dark:text-jacarta-300 text-jacarta-500">1/1</span>
                      </div>
                      <div className="flex items-center justify-between mt-8">
                        <button className="text-sm font-semibold text-accent font-display" data-bs-toggle="modal" data-bs-target="#buyNowModal">
                          Buy now
                        </button>
                        <a href="item.html" className="flex items-center group">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0H24V24H0z" />
                            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z" />
                          </svg>
                          <span className="text-sm font-semibold group-hover:text-accent font-display dark:text-jacarta-200">View History</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
            {/* end trending categories */}
            {/* Process / Newsletter */}
            <section className="relative py-24 dark:bg-jacarta-800">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="h-full" />
              </picture>
              <div className="container">
                <h2 className="mb-16 text-3xl text-center font-display text-jacarta-700 dark:text-white">
                  Create and sell your NFTs
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                  <div className="text-center">
                    <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">1. Set up your wallet</h3>
                    <p className="dark:text-jacarta-300">
                      Once you've set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top
                      right corner.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-6 inline-flex rounded-full bg-[#C4F2E3] p-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">2. Create Your Collection</h3>
                    <p className="dark:text-jacarta-300">
                      Click Create and set up your collection. Add social links, a description, profile &amp; banner images, and
                      set a secondary sales fee.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-6 inline-flex rounded-full bg-[#CDDFFB] p-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">3. Add Your NFTs</h3>
                    <p className="dark:text-jacarta-300">
                      Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs
                      with properties, stats.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-6 inline-flex rounded-full bg-[#FFD0D0] p-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="mb-4 text-lg font-display text-jacarta-700 dark:text-white">4. List Them For Sale</h3>
                    <p className="dark:text-jacarta-300">
                      Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to
                      sell your NFTs!
                    </p>
                  </div>
                </div>
                <p className="max-w-2xl mx-auto mt-20 text-lg text-center text-jacarta-700 dark:text-white">
                  Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
                  for navigating Xhibiter
                </p>
                <div className="max-w-md mx-auto text-center mt-7">
                  <form className="relative">
                    <input type="email" placeholder="Email address" className="w-full px-4 py-3 border rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:text-white dark:placeholder-white" />
                    <button className="absolute px-6 py-2 text-sm text-white rounded-full hover:bg-accent-dark font-display bg-accent top-2 right-2">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </section>
            {/* end process / newsletter */}
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
                    <span className="font-semibold font-display text-jacarta-700 hover:text-accent dark:text-white">Total</span>
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
                    <label htmlFor="buyNowTerms" className="text-sm dark:text-jacarta-200">By checking this box, I agree to Xhibiter's <a href="#" className="text-accent">Terms of Service</a></label>
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
                    <label htmlFor="terms" className="text-sm dark:text-jacarta-200">By checking this box, I agree to Xhibiter's <a href="#" className="text-accent">Terms of Service</a></label>
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
          <footer className="bg-white dark:bg-jacarta-900 page-footer">
            <div className="container">
              <div className="grid grid-cols-6 pt-24 pb-12 gap-x-7 gap-y-14 md:grid-cols-12">
                <div className="col-span-3 md:col-span-4">
                  {/* Logo */}
                  <a href="index.html" className="inline-block mb-6">
                    <img src="img/logo.png" className="max-h-7 dark:hidden" alt="Xhibiter | NFT Marketplace" />
                    <img src="img/logo_white.png" className="hidden max-h-7 dark:block" alt="Xhibiter | NFT Marketplace" />
                  </a>
                  <p className="mb-12 dark:text-jacarta-300">
                    Create, sell and collect truly rare digital artworks. Powered by blockchain technology.
                  </p>
                  {/* Socials */}
                  <div className="flex space-x-5">
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <a href="#" className="group">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tiktok" className="w-5 h-5 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2 md:col-start-7">
                  <h3 className="mb-6 text-sm font-display text-jacarta-700 dark:text-white">Marketplace</h3>
                  <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">All NFTs</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Art</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Music</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Domain Names</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Collectibles</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Virtual World</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2">
                  <h3 className="mb-6 text-sm font-display text-jacarta-700 dark:text-white">Company</h3>
                  <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Explore</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">About</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Our Blog</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div className="col-span-full sm:col-span-3 md:col-span-2">
                  <h3 className="mb-6 text-sm font-display text-jacarta-700 dark:text-white">My Account</h3>
                  <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Authors</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Collection</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Author Profile</a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-accent dark:hover:text-white">Create Item</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between py-8 space-y-2 sm:flex-row sm:space-y-0">
                <span className="text-sm dark:text-jacarta-400">©
                  Xhibiter — Made by
                  <a href="https://deothemes.com" className="hover:text-accent">DeoThemes</a></span>
                <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400">
                  <li>
                    <a href="#" className="hover:text-accent">Terms and conditions</a>
                  </li>
                  <li><a href="#" className="hover:text-accent">Privacy policy</a></li>
                </ul>
              </div>
            </div>
          </footer>
          {/* JS Scripts */}
        </div>
  )
}

export default home1

