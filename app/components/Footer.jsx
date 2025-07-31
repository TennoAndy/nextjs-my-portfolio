import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="flex container p-12 flex-wrap items-center justify-between mx-auto">
        <span>
          <Image src="/assets/logo.png" alt="log" width={72} height={72} />
        </span>
        <p className="text-slate-600">© All Rights Reserved.</p>
        <p className="text-slate-600">9/2023</p>
      </div>
    </footer>
  );
};

export default Footer;
