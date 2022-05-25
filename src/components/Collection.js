import React from 'react'
import './css/style.css'


function Collection() {
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
                      <span className="text-sm font-display text-jacarta-700 dark:text-white">Home 1</span>
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
    <main className="pt-[5.5rem] lg:pt-24">
      {/* Banner */}
      <div className="relative">
        <img src="img/collections/collection_banner.jpg" alt="banner" className="h-[18.75rem] object-cover" />
      </div>
      {/* end banner */}
      {/* Profile */}
      <section className="relative pb-12 dark:bg-jacarta-800 bg-light-base pt-28">
        {/* Avatar */}
        <div className="absolute top-0 z-10 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 left-1/2">
          <figure className="relative">
            <img src="img/collections/collection_avatar.jpg" alt="collection avatar" className="dark:border-jacarta-600 rounded-xl border-[5px] border-white" />
            <div className="absolute bottom-0 flex items-center justify-center w-6 h-6 border-2 border-white rounded-full dark:border-jacarta-600 bg-green -right-3" data-tippy-content="Verified Collection">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="h-[.875rem] w-[.875rem] fill-white">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
              </svg>
            </div>
          </figure>
        </div>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-2 text-4xl font-medium font-display text-jacarta-700 dark:text-white">NFT Funny Cat</h2>
            <div className="mb-8">
              <span className="text-sm font-bold text-jacarta-400">Created by</span>
              <a href="user.html" className="text-sm font-bold text-accent">051_Hart</a>
            </div>
            <div className="inline-flex flex-wrap items-center justify-center mb-8 bg-white border dark:bg-jacarta-800 dark:border-jacarta-600 border-jacarta-100 rounded-xl">
              <a href="#" className="w-1/2 py-4 border-r dark:border-jacarta-600 border-jacarta-100 rounded-l-xl hover:shadow-md sm:w-32">
                <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">7.2K</div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">Items</div>
              </a>
              <a href="#" className="w-1/2 py-4 dark:border-jacarta-600 border-jacarta-100 hover:shadow-md sm:w-32 sm:border-r">
                <div className="mb-1 text-base font-bold text-jacarta-700 dark:text-white">5.3K</div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">Owners</div>
              </a>
              <a href="#" className="w-1/2 py-4 border-r dark:border-jacarta-600 border-jacarta-100 hover:shadow-md sm:w-32">
                <div className="flex items-center justify-center mb-1 text-base font-medium text-jacarta-700 dark:text-white">
                  <span className="inline-block -mt-px" data-tippy-content="ETH">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                      <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                      <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                      <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                      <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                      <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                    </svg>
                  </span>
                  <span className="font-bold">2.55</span>
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">Floor Price</div>
              </a>
              <a href="#" className="w-1/2 py-4 border-jacarta-100 rounded-r-xl hover:shadow-md sm:w-32">
                <div className="flex items-center justify-center mb-1 text-base font-medium text-jacarta-700 dark:text-white">
                  <span className="inline-block -mt-px" data-tippy-content="ETH">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="w-4 h-4">
                      <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                      <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                      <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                      <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                      <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                    </svg>
                  </span>
                  <span className="font-bold">17.2K</span>
                </div>
                <div className="font-medium tracking-tight text-2xs dark:text-jacarta-400">Volume Traded</div>
              </a>
            </div>
            <p className="max-w-xl mx-auto text-lg dark:text-jacarta-300">
              Unique, fully 3D and built to unite the design multiverse. Designed and styled by Digimental.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-2.5">
              <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                <div className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute before:h-4 before:w-4 before:bg-[url('../img/heart-fill.svg')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0" role="button" data-tippy-content="Favorite">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500">
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </div>
              </div>
              <div className="bg-white border dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 text-sm dropdown-toggle" role="button" id="collectionShare" data-bs-toggle="dropdown" aria-expanded="false" data-tippy-content="Share">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 dark:fill-jacarta-200 fill-jacarta-500">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z" />
                  </svg>
                </a>
                <div className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="collectionShare">
                  <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                    <span className="inline-block mt-1">Facebook</span>
                  </a>
                  <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <span className="inline-block mt-1">Twitter</span>
                  </a>
                  <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                    <span className="inline-block mt-1">Discord</span>
                  </a>
                  <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" />
                    </svg>
                    <span className="inline-block mt-1">Email</span>
                  </a>
                  <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dark:hover:bg-jacarta-600 font-display hover:bg-jacarta-50 rounded-xl dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 group-hover:fill-accent fill-jacarta-300 dark:group-hover:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
                    </svg>
                    <span className="inline-block mt-1">Copy</span>
                  </a>
                </div>
              </div>
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
        </div>
      </section>
      {/* end profile */}
      {/* Collection */}
      <section className="relative py-24">
        <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
          <img src="img/gradient_light.jpg" alt="gradient" className="w-full h-full" />
        </picture>
        <div className="container">
          {/* Tabs Nav */}
          <ul className="flex items-center justify-center mb-12 border-b nav nav-tabs dark:border-jacarta-600 border-jacarta-100" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="relative flex items-center px-6 py-3 nav-link active hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="items-tab" data-bs-toggle="tab" data-bs-target="#items" type="button" role="tab" aria-controls="items" aria-selected="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" />
                </svg>
                <span className="text-base font-medium font-display">Items</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button" role="tab" aria-controls="activity" aria-selected="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-5 h-5 mr-1 fill-current">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 5v14h16V5H4zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793L13 8h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.122 2.45-2.45z" />
                </svg>
                <span className="text-base font-medium font-display">Activity</span>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {/* Items Tab */}
            <div className="tab-pane fade show active" id="items" role="tabpanel" aria-labelledby="items-tab">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="flex flex-wrap items-center">
                  {/* Blockchain */}
                  <div className="my-1 mr-2.5">
                    <button className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white" id="blockchainFilter" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 14v2h2v-2H4zM18 4v2h2V4h-2zm0 14v2h2v-2h-2z" />
                      </svg>
                      <span>Blockchain</span>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="blockchainFilter">
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a href="#" className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="text-jacarta-700 dark:text-white">Ethereum</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Polygon
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Flow
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Tezos
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="my-1 mr-2.5">
                    <button className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white" id="categoriesFilter" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z" />
                      </svg>
                      <span>Category</span>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="categoriesFilter">
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a href="#" className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="text-jacarta-700 dark:text-white">All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Art
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Collectibles
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Domain
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Music
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Photography
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Virtual World
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Properties */}
                  <div className="my-1 mr-2.5">
                    <button className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white" type="button" id="propertiesFilter" data-bs-toggle="modal" data-bs-target="#propertiesModal">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z" />
                      </svg>
                      <span>Properties</span>
                    </button>
                    {/* Properties Modal */}
                    <div className="modal fade" id="propertiesModal" tabIndex={-1} aria-labelledby="propertiesModalLabel" aria-hidden="true">
                      <div className="max-w-md modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="propertiesModalLabel">Properties</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-700 dark:fill-white">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                              </svg>
                            </button>
                          </div>
                          {/* Body */}
                          <div className="modal-body">
                            <div className="accordion" id="accordionProps">
                              <div className="border-b accordion-item dark:border-jacarta-600 border-jacarta-100">
                                <h2 className="accordion-header" id="prop-heading-1">
                                  <button className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white" type="button" data-bs-toggle="collapse" data-bs-target="#prop-background" aria-expanded="false" aria-controls="prop-background">
                                    <span>Background</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white">
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div id="prop-background" className="accordion-collapse collapse" aria-labelledby="prop-heading-1" data-bs-parent="#accordionProps">
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="border-b accordion-item dark:border-jacarta-600 border-jacarta-100">
                                <h2 className="accordion-header" id="prop-heading-2">
                                  <button className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white" type="button" data-bs-toggle="collapse" data-bs-target="#prop-eyes" aria-expanded="false" aria-controls="prop-eyes">
                                    <span>Eyes</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white">
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div id="prop-eyes" className="accordion-collapse collapse" aria-labelledby="prop-heading-2" data-bs-parent="#accordionProps">
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="prop-heading-3">
                                  <button className="relative flex items-center justify-between w-full px-6 py-5 bg-white accordion-button collapsed dark:bg-jacarta-700 font-display text-jacarta-700 dark:text-white" type="button" data-bs-toggle="collapse" data-bs-target="#prop-face" aria-expanded="false" aria-controls="prop-face">
                                    <span>Face</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 transition-transform accordion-arrow fill-jacarta-700 dark:fill-white">
                                      <path fill="none" d="M0 0h24v24H0z" />
                                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                                    </svg>
                                  </button>
                                </h2>
                                <div id="prop-face" className="accordion-collapse collapse" aria-labelledby="prop-heading-3" data-bs-parent="#accordionProps">
                                  <div className="px-2 pb-4 accordion-body">
                                    <div className="flex flex-col">
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Red</span>
                                        <span>14</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Green</span>
                                        <span>56</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>Blue</span>
                                        <span>11</span>
                                      </button>
                                      <button className="flex items-center justify-between px-4 py-2 dark:hover:bg-jacarta-600 dark:text-jacarta-200 hover:bg-jacarta-50 rounded-xl">
                                        <span>White</span>
                                        <span>25</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end body */}
                          <div className="modal-footer">
                            <div className="flex items-center justify-center space-x-4">
                              <button type="button" className="px-8 py-3 font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume w-36 hover:text-white">
                                Clear All
                              </button>
                              <button type="button" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark w-36">
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end properties modal */}
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="propertiesFilter">
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a href="#" className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="text-jacarta-700 dark:text-white">All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Art
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Collectibles
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Domain
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Music
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Photography
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Virtual World
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Sale Type */}
                  <div className="my-1 mr-2.5">
                    <button className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white" id="saleTypeFilter" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM13 10V5l-5 7h3v5l5-7h-3z" />
                      </svg>
                      <span>Sale type</span>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="saleTypeFilter">
                      <ul className="flex flex-col flex-wrap">
                        <li>
                          <a href="#" className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="text-jacarta-700 dark:text-white">Timed auction</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Fixed price
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Not for sale
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            Open for offers
                          </a>
                        </li>
                      </ul>
                      <div className="flex items-center justify-center pt-4 mt-4 -ml-2 -mr-2 space-x-3 border-t dark:border-jacarta-600 border-jacarta-100 px-7">
                        <button type="button" className="flex-1 px-6 py-2 text-sm font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume hover:text-white">
                          Clear
                        </button>
                        <button type="button" className="flex-1 px-6 py-2 text-sm font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Price Range */}
                  <div className="my-1 mr-2.5">
                    <button className="flex items-center px-4 text-sm font-semibold transition-colors bg-white border rounded-lg group dropdown-toggle dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 h-9 hover:border-transparent hover:text-white dark:text-white" id="priceRangeFilter" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-1 transition-colors fill-jacarta-700 dark:fill-jacarta-100 group-hover:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z" />
                      </svg>
                      <span>Price Range</span>
                    </button>
                    <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="priceRangeFilter">
                      {/* Blockchain */}
                      <div className="px-5 pt-2 mb-4 cursor-pointer dropdown">
                        <div className="dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border py-3.5 px-3 text-sm dark:text-white" role="button" id="filterPriceBlockchain" data-bs-toggle="dropdown" aria-expanded="false">
                          <span className="flex items-center font-display">
                            <img src="img/chains/ETH.png" alt="eth" className="w-5 h-5 mr-2 rounded-full" />
                            ETH
                          </span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                          </svg>
                        </div>
                        <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="filterPriceBlockchain">
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/ETH.png" alt="eth" className="w-5 h-5 mr-2 rounded-full" />
                              ETH
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/FLOW.png" alt="flow" className="w-5 h-5 mr-2 rounded-full" />
                              FLOW
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/FUSD.png" alt="fusd" className="w-5 h-5 mr-2 rounded-full" />
                              FUSD
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/XTZ.png" alt="xtz" className="w-5 h-5 mr-2 rounded-full" />
                              XTZ
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/DAI.png" alt="dai" className="w-5 h-5 mr-2 rounded-full" />
                              DAI
                            </span>
                          </button>
                          <button className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                            <span className="flex items-center">
                              <img src="img/chains/RARI.png" alt="rari" className="w-5 h-5 mr-2 rounded-full" />
                              RARI
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* From / To */}
                      <div className="flex items-center px-5 pb-2 space-x-3">
                        <input type="number" placeholder="From" className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                        <input type="number" placeholder="To" className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" />
                      </div>
                      <div className="flex items-center justify-center pt-4 mt-4 -ml-2 -mr-2 space-x-3 border-t dark:border-jacarta-600 border-jacarta-100 px-7">
                        <button type="button" className="flex-1 px-6 py-2 text-sm font-semibold text-center transition-all bg-white rounded-full text-accent shadow-white-volume hover:bg-accent-dark hover:shadow-accent-volume hover:text-white">
                          Clear
                        </button>
                        <button type="button" className="flex-1 px-6 py-2 text-sm font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sort */}
                <div className="my-1 cursor-pointer dropdown">
                  <div className="inline-flex items-center justify-between w-48 px-3 py-2 text-sm bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-white" role="button" id="sort" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="font-display">Recently Added</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                    </svg>
                  </div>
                  <div className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl" aria-labelledby="sort">
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
                        <input type="checkbox" defaultValue="checkbox" name="check" defaultChecked className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                      </span>
                    </div>
                    <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      <span className="flex items-center justify-between">
                        <span>NFSW Only</span>
                        <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                      </span>
                    </div>
                    <div className="block w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                      <span className="flex items-center justify-between">
                        <span>Show Lazy Minted</span>
                        <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end filters */}
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
              {/* end grid */}
            </div>
            {/* end items tab */}
            {/* Activity Tab */}
            <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">
              {/* Period / Stats */}
              <div className="flex flex-wrap items-center mb-16">
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
              <div className="relative w-full mb-24 chart-container h-80">
                <canvas id="activityChart" />
              </div>
              {/* Records / Filter */}
              <div className="lg:flex">
                {/* Records */}
                <div className="mb-10 space-y-5 shrink-0 basis-8/12 lg:mb-0 lg:pr-10">
                  <a href="item.html" className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg">
                    <figure className="self-start mr-5">
                      <img src="img/avatars/avatar_2.jpg" alt="avatar 2" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Lazyone Panda
                      </h3>
                      <span className="block mb-3 text-sm dark:text-jacarta-200 text-jacarta-500">sold for 1.515 ETH</span>
                      <span className="block text-xs text-jacarta-300">30 minutes 45 seconds ago</span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                      </svg>
                    </div>
                  </a>
                  <a href="item.html" className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg">
                    <figure className="self-start mr-5">
                      <img src="img/products/item_21_sm.jpg" alt="item 2" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        NFT Funny Cat
                      </h3>
                      <span className="block mb-3 text-sm dark:text-jacarta-200 text-jacarta-500">listed by 051_Hart .08095 ETH</span>
                      <span className="block text-xs text-jacarta-300">40 minutes 36 seconds ago</span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                      </svg>
                    </div>
                  </a>
                  <a href="item.html" className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg">
                    <figure className="self-start mr-5">
                      <img src="img/products/item_22_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Prince Ape Planet
                      </h3>
                      <span className="block mb-3 text-sm dark:text-jacarta-200 text-jacarta-500">tranferred from 027ab52</span>
                      <span className="block text-xs text-jacarta-300">1 hour 15 minutes ago</span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                      </svg>
                    </div>
                  </a>
                  <a href="item.html" className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg">
                    <figure className="self-start mr-5">
                      <img src="img/products/item_23_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Origin Morish
                      </h3>
                      <span className="block mb-3 text-sm dark:text-jacarta-200 text-jacarta-500">bid cancelled by 0397fd</span>
                      <span className="block text-xs text-jacarta-300">1 hour 55 minutes ago</span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                      </svg>
                    </div>
                  </a>
                  <a href="item.html" className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl relative flex items-center border bg-white p-8 transition-shadow hover:shadow-lg">
                    <figure className="self-start mr-5">
                      <img src="img/products/item_24_sm.jpg" alt="item 3" className="rounded-2lg" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="mb-1 text-base font-semibold font-display text-jacarta-700 dark:text-white">
                        Portrait Gallery#029
                      </h3>
                      <span className="block mb-3 text-sm dark:text-jacarta-200 text-jacarta-500">liked by Trina_more</span>
                      <span className="block text-xs text-jacarta-300">2 hours 24 minutes ago</span>
                    </div>
                    <div className="p-3 ml-auto border rounded-full dark:border-jacarta-600 border-jacarta-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-jacarta-700 dark:fill-white">
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                    </div>
                  </a>
                </div>
                {/* Filters */}
                <aside className="basis-4/12 lg:pl-5">
                  <form action="search" className="relative block mb-12">
                    <input type="search" className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white" placeholder="Search" />
                    <button type="submit" className="absolute top-0 left-0 flex items-center justify-center w-12 h-full rounded-2xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                      </svg>
                    </button>
                  </form>
                  <h3 className="mb-4 font-semibold font-display text-jacarta-500 dark:text-white">Filters</h3>
                  <div className="flex flex-wrap">
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z" />
                      </svg>
                      <span className="font-medium text-2xs">Listing</span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z" />
                      </svg>
                      <span className="font-medium text-2xs">Bids</span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z" />
                      </svg>
                      <span className="font-medium text-2xs">Transfer</span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                        <path fill="none" d="M0 0H24V24H0z" />
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                      </svg>
                      <span className="font-medium text-2xs">Likes</span>
                    </button>
                    <button className="dark:border-jacarta-600 dark:bg-jacarta-700 group dark:hover:bg-accent hover:bg-accent border-jacarta-100 mr-2.5 mb-2.5 inline-flex items-center rounded-xl border bg-white px-4 py-3 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mr-2 fill-jacarta-700 group-hover:fill-white dark:fill-white">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z" />
                      </svg>
                      <span className="font-medium text-2xs">Purchases</span>
                    </button>
                  </div>
                </aside>
              </div>
            </div>
            {/* end activity tab */}
          </div>
        </div>
      </section>
      {/* end collection */}
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
              <li><a href="#" className="hover:text-accent dark:hover:text-white">All NFTs</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Art</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Music</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Domain Names</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Collectibles</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Virtual World</a></li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 text-sm font-display text-jacarta-700 dark:text-white">Company</h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Explore</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Our Blog</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-3 md:col-span-2">
            <h3 className="mb-6 text-sm font-display text-jacarta-700 dark:text-white">My Account</h3>
            <ul className="flex flex-col space-y-1 dark:text-jacarta-300">
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Authors</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Collection</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Author Profile</a></li>
              <li><a href="#" className="hover:text-accent dark:hover:text-white">Create Item</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-8 space-y-2 sm:flex-row sm:space-y-0">
          <span className="text-sm dark:text-jacarta-400">©
            Xhibiter — Made by
            <a href="https://deothemes.com" className="hover:text-accent dark:hover:text-white">DeoThemes</a></span>
          <ul className="flex flex-wrap space-x-4 text-sm dark:text-jacarta-400">
            <li><a href="#" className="hover:text-accent dark:hover:text-white">Terms and conditions</a></li>
            <li><a href="#" className="hover:text-accent dark:hover:text-white">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    {/* JS Scripts */}
  </div>
  )
}

export default Collection