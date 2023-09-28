import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <span>
          <Image src="/assets/logo.png" alt="log" width={100} height={100} />
        </span>
        <p className="text-slate-600">2023 © All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
