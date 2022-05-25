import React from 'react'

function landing() {
  return (
    <div>
          <title>Xhibiter | NFT Marketplace HTML Template</title>
          <meta charSet="utf-8" />
          {/*[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]*/}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="description" content />
          {/* Css */}
          <link rel="stylesheet" href="./css/style.css" />
          {/* Favicons */}
          <link rel="shortcut icon" href="img/favicon.ico" />
          <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="img/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="img/apple-touch-icon-114x114.png" />
          {/* Header */}
          <header className="fixed top-0 z-20 w-full transition-colors js-page-header page-header--transparent backdrop-blur">
            <div className="flex items-center px-6 py-6 xl:px-24">
              {/* Logo */}
              <a href="index.html" className="shrink-0">
                <img src="img/logo_white.png" className="max-h-7" alt="Xhibiter | NFT Marketplace" />
              </a>
              {/* Menu / Mobile CTA */}
              <div className="fixed inset-0 z-10 items-center invisible w-full bg-white opacity-0 js-mobile-menu dark:bg-jacarta-800 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
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
                {/* Primary Nav */}
                <nav className="w-full mt-24 navbar lg:mt-0">
                  <ul className="flex flex-col justify-end lg:flex-row">
                    <li className="relative group">
                      <a href="#intro" className="text-jacarta-700 hover:text-accent font-display flex items-center justify-between py-3.5 text-base lg:px-5 lg:text-white lg:hover:text-white/90">Intro
                      </a>
                    </li>
                    <li className="relative group">
                      <a href="#features" className="text-jacarta-700 hover:text-accent font-display flex items-center justify-between py-3.5 text-base lg:px-5 lg:text-white lg:hover:text-white/90">Features
                      </a>
                    </li>
                    <li className="relative group">
                      <a href="#pages" className="text-jacarta-700 hover:text-accent font-display flex items-center justify-between py-3.5 text-base lg:px-5 lg:text-white lg:hover:text-white/90">Pages
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* Mobile CTA */}
                <div className="w-full mt-4 lg:hidden">
                  <a href="#" className="inline-block w-full px-8 py-3 font-semibold text-center text-white transition-all rounded-full bg-accent shadow-accent-volume hover:bg-accent-dark">
                    Purchase Now
                  </a>
                </div>
              </div>
              {/* CTA */}
              {/* <div class="ml-auto hidden shrink-0 lg:flex">
            <a
              href="#"
              class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-2 px-8 text-center font-semibold text-white transition-all"
            >
              Purchase Now
            </a>
          </div> */}
              {/* Mobile Menu Actions */}
              <div className="flex ml-auto lg:hidden">
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
            <section className="relative h-screen py-6" id="intro">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/hero/landing_hero.jpg" className="object-cover w-full h-full" alt="Xhibiter | NFT Marketplace HTML Template" />
              </picture>
              <div className="container h-full">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="inline-flex mb-6 space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-jacarta-900/40">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="w-5">
                        <g clipPath="url(#prefix__clip0)">
                          <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-jacarta-900/40">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 774 875.7" className="w-4">
                        <title>webpack</title>
                        <path fill="#FFF" d="M387 0l387 218.9v437.9L387 875.7 0 656.8V218.9z" />
                        <path fill="#8ed6fb" d="M704.9 641.7L399.8 814.3V679.9l190.1-104.6 115 66.4zm20.9-18.9V261.9l-111.6 64.5v232l111.6 64.4zM67.9 641.7L373 814.3V679.9L182.8 575.3 67.9 641.7zM47 622.8V261.9l111.6 64.5v232L47 622.8zm13.1-384.3L373 61.5v129.9L172.5 301.7l-1.6.9-110.8-64.1zm652.6 0l-312.9-177v129.9l200.5 110.2 1.6.9 110.8-64z" />
                        <path fill="#1c78c0" d="M373 649.3L185.4 546.1V341.8L373 450.1v199.2zm26.8 0l187.6-103.1V341.8L399.8 450.1v199.2zm-13.4-207zM198.1 318.2l188.3-103.5 188.3 103.5-188.3 108.7-188.3-108.7z" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-jacarta-900/40">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25.534" height="25.532" viewBox="0 0 25.534 25.532" className="w-6">
                        <defs>
                          <style dangerouslySetInnerHTML={{__html: "\n                      .cls-1 {\n                        fill: #fbde34;\n                      }\n                    " }} />
                        </defs>
                        <circle id="Ellipse_1_copy_3" data-name="Ellipse 1 copy 3" className="cls-1" cx="12.767" cy="12.766" r="12.767" />
                        <image id="_1_ktJUMJO60oHoluiEV6KBmA" data-name="1_ktJUMJO60oHoluiEV6KBmA" x="2.594" y="2.594" width={20} height={20} xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADvklEQVRIia3WbWhWZRgH8N/Zs81wzpfpdE3BwsISExJLCBM1QymKXiFL7ENgkKVRHypNRWvUpyioGAQKmhqZmGYfQpNyvgWaTUzRbKyy+TLNKTbnnm0n7j1n+mzOtnL/D+c557nPuf/39fK/ritKV43TDRRiAkajGPk4h8PYjaqutsjtYv1OLMQD6PUv7+3H+1iJps5eyLnGhyVYjb14tAuSgDFYhkpM6S7ReOzDDERdEHTEKGzGgo4LHV0XSLagz38kyEY4/NsowPzOLBqC9ddJko03MLMzoo9wYw+RtOFDDMwmuheP9zBJQL+2eLXpaB0ei1vISZEKTkyhJYniedKnyeuXqCgk8EnSl4hSxE3kDcAgnCJ9juhK9C9haCDqi9ogwvBRc5pDVdSdz9zXX2J4KXfchQus+YrBRdw3keZm4ovkDskcZO3XjB3FrWOIL7SzbHZuovigdKneXDjJzFdjp84wqIij1Sx8kdvHR56eG9u+h+M1zJ9LWVlEQ0ZlU2fFdu3lp28jqfyrVDslNxFbBnFGOTW1vDWPF16P+At92bqKtes5WhEpGsbPPyZFqISlr8S2/UD1zsjwYHk1cXPGrQlGpxbNK30E97RmRj6N9XzxDQ0NnKrlu62MvCnSr5TPN7BmE+PHRSY+nBHC7g3BAwwrYd8R4rqo1c1RE3F8xaSQdXlXpUof9h9m9WcsX0dVJcNGUrk5UjqEyQ/G5syO1Z+mrDw2YgRlSyKFN/DMnNimjeSUtNsyPxDVZf8TDnHwKIteoqIicvBA5O6HObaLgl5UbI/s+DLy8XI2ruDAL0yfwKznWFWeqVhbd8Yda86Z8Hgk275gbksL7y1j3++x2t+YNo3GusjMl2NL3uRMTaSwL+MmMaOad8opHBTbX5nZ46GpEY3tiH4NRLsuW5MmL8XzT3HgCHu2UXOWocUseI3q46xYRe8+sTUfRG4Zy+LiSH1jbOWnDCxmw/LI5Om0nGhHtKVNsJWt2RcT5ZAakEQvTn7/RjMG43QihgKa/iC3fyYr08fIC1WyP/EJmtKZvRKMbLstb71GSaaEtD2bRO8scQNNDTQfS6rFRZprMtWj6TzxcfIKMhWj+c+MkLNIvg/habMoNLZDuLljBl4n4kQ6u9t4Qz2anSz0JFYmM0W7NrElu1H1AEKXnpOV0O3wLhb3gGVh1piWKcOdEwUsxZOZ5vC/sAKTko5wGdeagkJ/ug2fJPHrDkIs7sez2Za0oTsDZBGeSMaoMOWEdh/qchBAGBx3JLNG0GLnwD9wtDAYpf8XlgAAAABJRU5ErkJggg==" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-display mb-3 bg-gradient-to-r from-[#F43771] to-[#FF9567] bg-clip-text text-xl text-transparent lg:text-3xl">9x Lighter &amp; Faster</span>
                  <h1 className="mb-6 text-5xl text-center text-white font-display lg:text-6xl xl:text-7xl">NFT Marketplace</h1>
                  <p className="max-w-lg mx-auto mb-8 text-lg text-center text-white">
                    With a loading time of just about 500ms<br />Xhibiter offers unparalleled performance among others
                  </p>
                </div>
              </div>
            </section>
            {/* end hero */}
            {/* Features */}
            <section className="relative py-24" id="features">
              <picture className="absolute inset-0 pointer-events-none -z-10 dark:hidden">
                <img src="img/gradient_light.jpg" alt="gradient" className="h-full" />
              </picture>
              <div className="mx-auto max-w-[90.375rem] px-4">
                <h2 className="mb-16 text-3xl text-center font-display text-jacarta-700 dark:text-white">Why Choose Xhibiter?</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="text-center">
                    <img src="img/landing/google_speed.jpg" alt="google speed" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">Fast and Optimized</h3>
                      <p>The highest Google score among other templates.</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src="img/landing/dark_mode.jpg" alt="dark mode" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">Dark Mode</h3>
                      <p>Switch to a dark theme in a single click.</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src="img/landing/stack.jpg" alt="modern stack" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">Modern Stack</h3>
                      <p>Xhibiter built using the most modern tools, such as Webpack, Tailwind CSS and ES6</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src="img/landing/light_and_fast.jpg" alt="9x lighter and faster" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">9x Lighter and Faster</h3>
                      <p>Thanks to the Tailwind CSS and no JS dependencies, Xhibiter is lean and lightning fast.</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src="img/landing/ui_components.jpg" alt="100+ UI Components" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">100+ UI Components</h3>
                      <p>Modals, dropdowns, charts, tooltips, tabs, countdowns and more.</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <img src="img/landing/metamask.jpg" alt="metamask" className="rounded-2.5xl" />
                    <div className="max-w-xs mx-auto">
                      <h3 className="pt-6 mb-2 text-lg text-center font-display text-jacarta-700">Metamask Integrated</h3>
                      <p>The most popular crypto wallet &amp; gateway to blockchain apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end features */}
            {/* Pages */}
            <section className="py-24" id="pages">
              <div className="mx-auto max-w-[90.375rem] px-4">
                <h2 className="mb-16 text-3xl text-center font-display text-jacarta-700 dark:text-white">Pages for Every Need</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <a href="index.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/home_1.jpg" alt="home 1" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Home 1</h3>
                  </a>
                  <a href="home-2.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/home_2.jpg" alt="home 2" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Home 2</h3>
                  </a>
                  <a href="home-3.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/home_3.jpg" alt="home 3" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Home 3</h3>
                  </a>
                  <a href="collections.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/collections.jpg" alt="Collections" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Collections</h3>
                  </a>
                  <a href="item.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/item.jpg" alt="item" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Item Details</h3>
                  </a>
                  <a href="collection.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/collection.jpg" alt="Collection" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Collection</h3>
                  </a>
                  <a href="activity.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/activity.jpg" alt="activity" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Activity</h3>
                  </a>
                  <a href="rankings.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/rankings.jpg" alt="rankings" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Rankings</h3>
                  </a>
                  <a href="user.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/user.jpg" alt="user" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">User</h3>
                  </a>
                  <a href="edit-profile.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/edit_profile.jpg" alt="Edit Profile" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Edit Profile</h3>
                  </a>
                  <a href="about.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/about.jpg" alt="about" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">About</h3>
                  </a>
                  <a href="contact.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/contact.jpg" alt="contact" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Contact</h3>
                  </a>
                  <a href="wallet.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/wallet.jpg" alt="wallet" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Wallet</h3>
                  </a>
                  <a href="create.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/create.jpg" alt="create" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Create</h3>
                  </a>
                  <a href="login.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/login.jpg" alt="login" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Login</h3>
                  </a>
                  <a href="404.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/404.jpg" alt={404} />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Page 404</h3>
                  </a>
                  <a href="blog.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/blog.jpg" alt="blog" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Blog</h3>
                  </a>
                  <a href="single-post.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/single_post.jpg" alt="Single post" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Single Post</h3>
                  </a>
                  <a href="newsletter.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/newsletter.jpg" alt="newsletter" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Newsletter</h3>
                  </a>
                  <a href="help-center.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/help_center.jpg" alt="Help Center" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Help Center</h3>
                  </a>
                  <a href="platform-status.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/platform_status.jpg" alt="platform status" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Platform Status</h3>
                  </a>
                  <a href="partners.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/partners.jpg" alt="partners" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Partners</h3>
                  </a>
                  <a href="tos.html" className="rounded-2.5xl overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-lg">
                    <img className="w-full" src="img/pages/tos.jpg" alt="tos" />
                    <h3 className="py-6 text-base text-center font-display text-jacarta-700">Terms of Service</h3>
                  </a>
                </div>
              </div>
            </section>
            {/* end pages */}
            {/* CTA */}
            <section className="relative py-40 text-center bg-center bg-no-repeat bg-cover after:bg-jacarta-900/60 after:absolute after:inset-0" style={{backgroundImage: 'url("img/CTA.jpg")'}}>
              <div className="relative z-10">
                <h2 className="mb-3 text-3xl text-center text-white font-display">
                  Build Fast and Optimized Websites in No Time
                </h2>
                <p className="mb-6 text-lg text-white">One Time Payment, Lifetime Updates</p>
                {/* <a
              href="#"
              class="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >Try Xhibiter Today</a
            > */}
              </div>
            </section>
          </main>
          {/* Footer */}
          <footer className="py-6 text-center bg-jacarta-800">
            <span className="text-sm text-jacarta-300">©
              Xhibiter — Made by
              <a href="https://deothemes.com" className="hover:text-accent">DeoThemes</a></span>
          </footer>
          {/* JS Scripts */}
        </div>
  )
}

export default landing
