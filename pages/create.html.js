import React from 'react'
// import './css/style.css'

function Create() {
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
          <main>
            {/* Create */}
            <section className="relative py-24">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="w-full h-full" />
              </picture>
              <div className="container">
                <h1 className="py-16 text-4xl font-medium text-center font-display text-jacarta-700 dark:text-white">Create</h1>
                <div className="mx-auto max-w-[48.125rem]">
                  {/* File Upload */}
                  <div className="mb-6">
                    <label className="block mb-2 font-display text-jacarta-700 dark:text-white">Image, Video, Audio, or 3D Model<span className="text-red">*</span></label>
                    <p className="mb-3 dark:text-jacarta-300 text-2xs">Drag or choose your file to upload</p>
                    <div className="relative flex flex-col items-center justify-center max-w-md px-5 py-20 text-center bg-white border-2 border-dashed rounded-lg dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group">
                      <div className="relative z-10 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="inline-block mb-4 fill-jacarta-500 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                        </svg>
                        <p className="max-w-xs mx-auto text-xs dark:text-jacarta-300">
                          JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                        </p>
                      </div>
                      <div className="absolute rounded opacity-0 cursor-pointer dark:bg-jacarta-600 bg-jacarta-50 inset-4 group-hover:opacity-100" />
                      <input type="file" accept="image/*,video/*,audio/*,webgl/*,.glb,.gltf" id="file-upload" className="absolute inset-0 z-20 opacity-0 cursor-pointer" />
                    </div>
                  </div>
                  {/* Name */}
                  <div className="mb-6">
                    <label htmlFor="item-name" className="block mb-2 font-display text-jacarta-700 dark:text-white">Name<span className="text-red">*</span></label>
                    <input type="text" id="item-name" className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white" placeholder="Item name" required />
                  </div>
                  {/* External Link */}
                  <div className="mb-6">
                    <label htmlFor="item-external-link" className="block mb-2 font-display text-jacarta-700 dark:text-white">External link</label>
                    <p className="mb-3 dark:text-jacarta-300 text-2xs">
                      We will include a link to this URL on this item's detail page, so that users can click to learn more
                      about it. You are welcome to link to your own webpage with more details.
                    </p>
                    <input type="url" id="item-external-link" className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white" placeholder="https://yoursite.io/item/123" />
                  </div>
                  {/* Description */}
                  <div className="mb-6">
                    <label htmlFor="item-description" className="block mb-2 font-display text-jacarta-700 dark:text-white">Description</label>
                    <p className="mb-3 dark:text-jacarta-300 text-2xs">
                      The description will be included on the item's detail page underneath its image. Markdown syntax is
                      supported.
                    </p>
                    <textarea id="item-description" className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white" rows={4} required placeholder="Provide a detailed description of your item." defaultValue={""} />
                  </div>
                  {/* Collection */}
                  <div className="relative">
                    <div>
                      <label className="block mb-2 font-display text-jacarta-700 dark:text-white">Collection</label>
                      <div className="flex items-center mb-3 space-x-2">
                        <p className="dark:text-jacarta-300 text-2xs">
                          This is the collection where your item will appear.
                          <span className="inline-block" data-tippy-content="Moving items to a different collection may take up to 30 minutes.">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4">
                              <path fill="none" d="M0 0h24v24H0z" />
                              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="my-1 cursor-pointer dropdown">
                      <div className="flex items-center justify-between px-3 py-3 bg-white border rounded-lg dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 dark:text-jacarta-300" role="button" id="item-collection" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className>Select collection</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      </div>
                      <div className="z-10 hidden w-full px-2 py-4 text-left bg-white shadow-xl dropdown-menu dark:bg-jacarta-800 whitespace-nowrap rounded-xl" aria-labelledby="item-collection">
                        <ul className="flex flex-col overflow-y-auto scrollbar-custom max-h-48">
                          <li>
                            <a href="#" className="flex items-center justify-between w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_1.png" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">CryptoKitties</span>
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent mb-[3px] h-4 w-4">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_2.jpg" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">KaijuKings</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_3.png" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">Kumo x World</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_4.jpg" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">Irene DAO</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_5.png" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">GenerativeDungeon</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_6.jpg" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">ENS Domains</span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center w-full px-5 py-2 text-sm text-left transition-colors dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                              <span className="flex items-center space-x-3">
                                <img src="img/avatars/collection_ava_7.png" className="w-8 h-8 rounded-full" loading="lazy" alt="avatar" />
                                <span className="text-jacarta-700 dark:text-white">Cozy Penguin</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Properties */}
                  <div className="relative py-6 border-b dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mt-px mr-2 fill-jacarta-700 shrink-0 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                        </svg>
                        <div>
                          <label className="block font-display text-jacarta-700 dark:text-white">Properties</label>
                          <p className="dark:text-jacarta-300">Textual traits that show up as rectangles.</p>
                        </div>
                      </div>
                      <button className="flex items-center justify-center w-12 h-12 bg-white border rounded-lg group dark:bg-jacarta-700 hover:bg-accent border-accent shrink-0 hover:border-transparent" type="button" id="item-properties" data-bs-toggle="modal" data-bs-target="#propertiesModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Levels */}
                  <div className="relative py-6 border-b dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mt-px mr-2 fill-jacarta-700 shrink-0 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" />
                        </svg>
                        <div>
                          <label className="block font-display text-jacarta-700 dark:text-white">Levels</label>
                          <p className="dark:text-jacarta-300">Numerical traits that show as a progress bar.</p>
                        </div>
                      </div>
                      <button className="flex items-center justify-center w-12 h-12 bg-white border rounded-lg group dark:bg-jacarta-700 hover:bg-accent border-accent shrink-0 hover:border-transparent" type="button" id="item-levels" data-bs-toggle="modal" data-bs-target="#levelsModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="relative py-6 border-b dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mt-px mr-2 fill-jacarta-700 shrink-0 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
                        </svg>
                        <div>
                          <label className="block font-display text-jacarta-700 dark:text-white">Stats</label>
                          <p className="dark:text-jacarta-300">Numerical traits that just show as numbers.</p>
                        </div>
                      </div>
                      <button className="flex items-center justify-center w-12 h-12 bg-white border rounded-lg group dark:bg-jacarta-700 hover:bg-accent border-accent shrink-0 hover:border-transparent" type="button" id="item-stats" data-bs-toggle="modal" data-bs-target="#levelsModal">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-accent group-hover:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* Unlockable Content */}
                  <div className="relative py-6 border-b dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mt-px mr-2 fill-accent shrink-0">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z" />
                        </svg>
                        <div>
                          <label className="block font-display text-jacarta-700 dark:text-white">Unlockable Content</label>
                          <p className="dark:text-jacarta-300">
                            Include unlockable content that can only be revealed by the owner of the item.
                          </p>
                        </div>
                      </div>
                      <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                    </div>
                  </div>
                  {/* Explicit & Sensitive Content */}
                  <div className="relative py-6 mb-6 border-b dark:border-jacarta-600 border-jacarta-100">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 mt-px mr-2 fill-jacarta-700 shrink-0 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z" />
                        </svg>
                        <div>
                          <label className="font-display text-jacarta-700 dark:text-white">Explicit &amp; Sensitive Content</label>
                          <p className="dark:text-jacarta-300">
                            Set this item as explicit and sensitive content.<span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter.">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark:fill-jacarta-300 fill-jacarta-500 ml-2 -mb-[2px] h-4 w-4">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                              </svg>
                            </span>
                          </p>
                        </div>
                      </div>
                      <input type="checkbox" defaultValue="checkbox" name="check" className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0" />
                    </div>
                  </div>
                  {/* Supply */}
                  <div className="mb-6">
                    <label htmlFor="item-supply" className="block mb-2 font-display text-jacarta-700 dark:text-white">Supply</label>
                    <div className="flex items-center mb-3 space-x-2">
                      <p className="dark:text-jacarta-300 text-2xs">
                        The number of items that can be minted. No gas cost to you!
                        <span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter.">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                          </svg>
                        </span>
                      </p>
                    </div>
                    <input type="text" id="item-supply" className="w-full py-3 rounded-lg dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 hover:ring-2 dark:text-white" placeholder={1} />
                  </div>
                  {/* Blockchain */}
                  <div className="mb-6">
                    <label htmlFor="item-supply" className="block mb-2 font-display text-jacarta-700 dark:text-white">Blockchain</label>
                    <div className="relative mb-4 cursor-pointer dropdown">
                      <div className="dark:bg-jacarta-700 dropdown-toggle border-jacarta-100 dark:border-jacarta-600 flex items-center justify-between rounded-lg border bg-white py-3.5 px-3 text-base dark:text-white" role="button" id="item-blockchain" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="flex items-center">
                          <img src="img/chains/ETH.png" alt="eth" className="w-5 h-5 mr-2 rounded-full" />
                          Ethereum
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-4 h-4 fill-jacarta-500 dark:fill-white">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      </div>
                      <div className="z-10 hidden w-full px-2 py-4 text-left bg-white shadow-xl dropdown-menu dark:bg-jacarta-800 whitespace-nowrap rounded-xl" aria-labelledby="item-blockchain">
                        <button className="flex items-center justify-between w-full px-5 py-2 text-base text-left transition-colors dropdown-item text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                          <span className="flex items-center">
                            <img src="img/chains/ETH.png" alt="eth" className="w-5 h-5 mr-2 rounded-full" />
                            Ethereum
                          </span>
                        </button>
                        <button className="flex items-center justify-between w-full px-5 py-2 text-base text-left transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                          <span className="flex items-center">
                            <img src="img/chains/FLOW.png" alt="flow" className="w-5 h-5 mr-2 rounded-full" />
                            Flow
                          </span>
                        </button>
                        <button className="flex items-center justify-between w-full px-5 py-2 text-base text-left transition-colors dropdown-item dark:hover:bg-jacarta-600 hover:bg-jacarta-50 rounded-xl dark:text-white">
                          <span className="flex items-center">
                            <img src="img/chains/FUSD.png" alt="fusd" className="w-5 h-5 mr-2 rounded-full" />
                            FUSD
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Freeze metadata */}
                  <div className="mb-6">
                    <div className="flex items-center mb-2 space-x-2">
                      <label htmlFor="item-freeze-metadata" className="block font-display text-jacarta-700 dark:text-white">Freeze metadata</label>
                      <span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing Xhibiter.">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="dark:fill-jacarta-300 fill-jacarta-500 mb-[2px] h-5 w-5">
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z" />
                        </svg>
                      </span>
                    </div>
                    <p className="mb-3 dark:text-jacarta-300 text-2xs">
                      Freezing your metadata will allow you to permanently lock and store all of this item's content in
                      decentralized file storage.
                    </p>
                    <input type="text" disabled id="item-freeze-metadata" className="w-full py-3 rounded-lg dark:bg-jacarta-700 bg-jacarta-50 border-jacarta-100 dark:border-jacarta-600 dark:placeholder:text-jacarta-300 dark:text-white" placeholder="To freeze your metadata, you must create your item first." />
                  </div>
                  {/* Submit */}
                  <button disabled className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full cursor-default bg-accent-lighter">
                    Create
                  </button>
                </div>
              </div>
            </section>
            {/* end create */}
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
          {/* Properties Modal */}
          <div className="modal fade" id="propertiesModal" tabIndex={-1} aria-labelledby="addPropertiesLabel" aria-hidden="true">
            <div className="max-w-2xl modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addPropertiesLabel">Add properties</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-700 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
                {/* Body */}
                <div className="p-6 modal-body">
                  <p className="mb-8 dark:text-jacarta-300">
                    Item Properties show up underneath your item, are clickable, and can be filtered in your collection's
                    sidebar.
                  </p>
                  <div className="relative flex items-center my-3">
                    <button className="flex items-center self-end justify-center w-12 h-12 border border-r-0 rounded-l-lg dark:bg-jacarta-700 dark:border-jacarta-600 hover:bg-jacarta-100 border-jacarta-100 bg-jacarta-50 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-500 dark:fill-jacarta-300">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                    <div className="flex-1">
                      <label className="block mb-3 text-base font-semibold font-display text-jacarta-700 dark:text-white">Type</label>
                      <input type="text" className="w-full h-12 border border-r-0 dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 focus:ring-inset dark:text-white" placeholder="Character" />
                    </div>
                    <div className="flex-1">
                      <label className="block mb-3 text-base font-semibold font-display text-jacarta-700 dark:text-white">Name</label>
                      <input type="text" className="w-full h-12 border rounded-r-lg dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 focus:ring-inset dark:text-white" placeholder="Male" />
                    </div>
                  </div>
                  <button className="px-8 py-2 mt-2 text-sm font-semibold text-center transition-all border-2 rounded-full hover:bg-accent border-accent text-accent hover:text-white">
                    Add More
                  </button>
                </div>
                {/* end body */}
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <button type="button" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Levels Modal */}
          <div className="modal fade" id="levelsModal" tabIndex={-1} aria-labelledby="addLevelsLabel" aria-hidden="true">
            <div className="max-w-2xl modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addLevelsLabel">Add levels</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-700 dark:fill-white">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                    </svg>
                  </button>
                </div>
                {/* Body */}
                <div className="p-6 modal-body">
                  <p className="mb-8 dark:text-jacarta-300">
                    Levels show up underneath your item, are clickable, and can be filtered in your collection's sidebar.
                  </p>
                  <div className="relative flex items-center my-3">
                    <button className="flex items-center self-end justify-center w-12 h-12 border border-r-0 rounded-l-lg dark:bg-jacarta-700 dark:border-jacarta-600 hover:bg-jacarta-100 border-jacarta-100 bg-jacarta-50 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="w-6 h-6 fill-jacarta-500 dark:fill-jacarta-300">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                    <div className="w-1/2">
                      <label className="block mb-3 text-base font-semibold font-display text-jacarta-700 dark:text-white">Name</label>
                      <input type="text" className="w-full h-12 border border-r-0 dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 focus:ring-inset dark:text-white" placeholder="Speed" />
                    </div>
                    <div className="flex items-end w-1/2">
                      <div className="flex-1">
                        <label className="block mb-3 text-base font-semibold font-display text-jacarta-700 dark:text-white">Value</label>
                        <input type="number" className="w-full h-12 border dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 focus:ring-inset dark:text-white" placeholder={3} />
                      </div>
                      <div className="flex items-center self-end justify-center w-12 h-12 px-2 dark:bg-jacarta-800 dark:text-jacarta-400 dark:border-jacarta-600 bg-jacarta-50 border-jacarta-100 border-y">
                        Of
                      </div>
                      <div className="self-end flex-1">
                        <input type="number" className="w-full h-12 border rounded-r-lg dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 dark:placeholder-jacarta-300 focus:ring-inset dark:text-white" placeholder={10} />
                      </div>
                    </div>
                  </div>
                  <button className="px-8 py-2 mt-2 text-sm font-semibold text-center transition-all border-2 rounded-full hover:bg-accent border-accent text-accent hover:text-white">
                    Add More
                  </button>
                </div>
                {/* end body */}
                <div className="modal-footer">
                  <div className="flex items-center justify-center space-x-4">
                    <button type="button" className="px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                      Save
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

export default Create