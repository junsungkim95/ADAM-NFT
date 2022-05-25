import React from 'react'

function login() {
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
          <main>
            {/* Login */}
            <section className="relative h-screen">
              <div className="lg:flex lg:h-full">
                {/* Left */}
                <div className="relative text-center lg:w-1/2">
                  <img src="img/login.jpg" alt="login" className="absolute object-cover w-full h-full" />
                  {/* Logo */}
                  <a href="index.html" className="relative inline-block py-36">
                    <img src="img/logo_white.png" className="inline-block max-h-7" alt="Xhibiter | NFT Marketplace" />
                  </a>
                </div>
                {/* Right */}
                <div className="relative flex items-center justify-center p-[10%] lg:w-1/2">
                  <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                    <img src="img/gradient_light.jpg" alt="gradient" className="w-full h-full" />
                  </picture>
                  <div className="w-full max-w-[25.625rem] text-center">
                    <h1 className="mb-6 text-4xl text-jacarta-700 font-display dark:text-white">Sign in</h1>
                    <p className="mb-10 text-lg leading-normal dark:text-jacarta-300">
                      Choose one of available wallet providers or create a new wallet.
                      <a href="#" className="text-accent">What is a wallet?</a>
                    </p>
                    {/* Tabs Nav */}
                    <ul className="flex items-center justify-start pb-px mb-12 overflow-x-auto overflow-y-hidden border-b nav nav-tabs scrollbar-custom dark:border-jacarta-600 border-jacarta-100 md:justify-center" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link active hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="ethereum-tab" data-bs-toggle="tab" data-bs-target="#ethereum" type="button" role="tab" aria-controls="ethereum" aria-selected="true">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 1920 1920" xmlSpace="preserve" className="mr-1 mb-[2px] h-4 w-4 fill-current">
                            <path fill="#8A92B2" d="M959.8 80.7L420.1 976.3 959.8 731z" />
                            <path fill="#62688F" d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z" />
                            <path fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z" />
                            <path fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z" />
                            <path fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z" />
                          </svg>
                          <span className="text-base font-medium font-display">Ethereum</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="torus-tab" data-bs-toggle="tab" data-bs-target="#torus" type="button" role="tab" aria-controls="torus" aria-selected="false">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 mb-[2px] h-4 w-4 fill-current">
                            <path d="M9.35098 3H4V5.93692H9.35098V3Z" fill="#0364FF" />
                            <path d="M9.35028 3.00403H6.44531V12.74H9.35028V3.00403Z" fill="#0364FF" />
                            <path d="M11.5221 5.93554C12.3239 5.93554 12.9739 5.27842 12.9739 4.46777C12.9739 3.65715 12.3239 3 11.5221 3C10.7203 3 10.0703 3.65715 10.0703 4.46777C10.0703 5.27842 10.7203 5.93554 11.5221 5.93554Z" fill="#0364FF" />
                          </svg>
                          <span className="text-base font-medium font-display">Torus</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="relative flex items-center px-6 py-3 nav-link hover:text-jacarta-700 text-jacarta-400 whitespace-nowrap dark:hover:text-white" id="wallet-connect-tab" data-bs-toggle="tab" data-bs-target="#wallet-connect" type="button" role="tab" aria-controls="wallet-connect" aria-selected="false">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 mb-[2px] h-4 w-4 fill-current">
                            <path d="M4.08889 5.34343C6.30052 3.1588 9.8863 3.1588 12.0979 5.34343L12.3641 5.60635C12.4747 5.71559 12.4747 5.89269 12.3641 6.0019L11.4536 6.90132C11.3983 6.95594 11.3086 6.95594 11.2534 6.90132L10.8871 6.5395C9.34416 5.01545 6.84265 5.01545 5.29974 6.5395L4.90747 6.92698C4.85219 6.9816 4.76256 6.9816 4.70726 6.92698L3.79674 6.02756C3.68616 5.91835 3.68616 5.74125 3.79674 5.63201L4.08889 5.34343ZM13.981 7.20351L14.7914 8.00397C14.9019 8.11321 14.9019 8.29031 14.7914 8.39953L11.1374 12.009C11.0268 12.1182 10.8475 12.1182 10.7369 12.009C10.7369 12.009 10.7369 12.009 10.7369 12.009L8.14348 9.44724C8.11583 9.41995 8.07101 9.41995 8.04336 9.44724L5.45 12.009C5.33945 12.1182 5.16015 12.1182 5.04957 12.009C5.04957 12.009 5.04957 12.009 5.04957 12.009L1.39544 8.39947C1.28485 8.29026 1.28485 8.11316 1.39544 8.00392L2.2058 7.20346C2.31638 7.09422 2.49568 7.09422 2.60626 7.20346L5.1997 9.7652C5.22735 9.79253 5.27217 9.79253 5.29982 9.7652L7.89312 7.20346C8.00371 7.09422 8.183 7.09422 8.29359 7.20343C8.29359 7.20346 8.29359 7.20346 8.29359 7.20346L10.887 9.7652C10.9147 9.79253 10.9595 9.79253 10.9871 9.7652L13.5806 7.20351C13.6911 7.09427 13.8704 7.09427 13.981 7.20351Z" fill="#3C99FC" />
                          </svg>
                          <span className="text-base font-medium font-display">Mobile Wallet</span>
                        </button>
                      </li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab-content">
                      {/* Ethereum */}
                      <div className="tab-pane fade show active" id="ethereum" role="tabpanel" aria-labelledby="ethereum-tab">
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center text-white transition-all border-2 border-transparent rounded-full js-wallet bg-accent hover:bg-accent-dark" data-bs-toggle="modal" data-bs-target="#walletModal">
                          <img src="img/wallets/metamask_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Sign in with Metamask</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/torus_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Torus</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/wallet_connect_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Mobile Wallet</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <span>Show more options</span>
                        </button>
                      </div>
                      {/* end ethereum */}
                      {/* Torus */}
                      <div className="tab-pane fade" id="torus" role="tabpanel" aria-labelledby="torus-tab">
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/torus_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Torus</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full js-wallet dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent" data-bs-toggle="modal" data-bs-target="#walletModal">
                          <img src="img/wallets/metamask_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Sign in with Metamask</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/wallet_connect_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Mobile Wallet</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <span>Show more options</span>
                        </button>
                      </div>
                      {/* end torus */}
                      {/* Wallet Connect */}
                      <div className="tab-pane fade" id="wallet-connect" role="tabpanel" aria-labelledby="wallet-connect-tab">
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/wallet_connect_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Mobile Wallet</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <img src="img/wallets/torus_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Torus</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full js-wallet dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent" data-bs-toggle="modal" data-bs-target="#walletModal">
                          <img src="img/wallets/metamask_24.svg" className="mr-2.5 inline-block h-6 w-6" alt="" />
                          <span>Sign in with Metamask</span>
                        </button>
                        <button className="flex items-center justify-center w-full px-8 py-4 mb-4 font-semibold text-center transition-all bg-white border-2 rounded-full dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 dark:hover:bg-accent hover:bg-accent text-jacarta-700 hover:border-transparent hover:text-white dark:text-white dark:hover:border-transparent">
                          <span>Show more options</span>
                        </button>
                      </div>
                      {/* end wallet connect */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end login */}
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
          {/* JS Scripts */}
        </div>
  )
}

export default login
