import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[90%] mx-auto mt-20 shadow-2xl">
      <footer className="footer sm:footer-horizontal bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-base-content p-10 rounded-4xl mx-auto shadow-xl">
        <aside>
          <p className="text-3xl font-extrabold text-purple-700 animate-bounce">
            Toy-Story
          </p>
          <p className="mt-2 text-sm text-gray-600 italic">
            Where playtime never ends! 🎉
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-purple-600 text-lg font-bold mb-2">
            Services ✨
          </h6>
          <a className="link link-hover hover:text-pink-500">Branding 🎨</a>
          <a className="link link-hover hover:text-pink-500">Design 🖌️</a>
          <a className="link link-hover hover:text-pink-500">Marketing 📢</a>
          <a className="link link-hover hover:text-pink-500">
            Advertisement 🏷️
          </a>
        </nav>

        <nav>
          <h6 className="footer-title text-purple-600 text-lg font-bold mb-2">
            Company 🏢
          </h6>
          <a className="link link-hover hover:text-green-500">About us 👋</a>
          <a className="link link-hover hover:text-green-500">Contact ✉️</a>
          <a className="link link-hover hover:text-green-500">Jobs 💼</a>
          <a className="link link-hover hover:text-green-500">Press kit 📰</a>
        </nav>

        <nav>
          <h6 className="footer-title text-purple-600 text-lg font-bold mb-2">
            Legal ⚖️
          </h6>
          <a className="link link-hover hover:text-blue-500">Terms of use 📜</a>
          <a className="link link-hover hover:text-blue-500">
            Privacy policy 🔒
          </a>
          <a className="link link-hover hover:text-blue-500">
            Cookie policy 🍪
          </a>
        </nav>

        <div className="mt-6 text-center text-gray-700 text-sm">
          Made with ❤️ and lots of fun by Toy-Story Team!
        </div>
      </footer>
    </div>
  );
};

export default Footer;
