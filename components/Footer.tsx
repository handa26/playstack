const Footer = () => {
  return (
    <footer className="bg-[#16181c] h-[200px]">
      <div className="max-w-[1140px] mx-auto py-3 sm:px-10 md:px-16 text-white font-poppins">
        <p className="text-sm text-slate-500">
          &copy; PlayStack | Powered by{" "}
          <a href="https://rawg.io/" target="_blank" className="text-slate-400 hover:text-slate-300">
            RAWG
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
