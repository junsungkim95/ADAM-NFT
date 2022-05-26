import React from 'react'
// import './css/style.css'

function Create() {
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
                            Set this item as explicit and sensitive content.<span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing ADAM.">
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
                        <span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing ADAM.">
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
                      <span className="inline-block" data-tippy-content="Setting your asset as explicit and sensitive content, like pornography and other not safe for work (NSFW) content, will protect users with safe search while browsing ADAM.">
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
          {/* JS Scripts */}
        </div>
  )
}

export default Create