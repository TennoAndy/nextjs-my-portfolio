import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE] border-b-2 border-blue-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? variants.active : variants.default}
        variants={variants}
        className="h-1 bg-primary-500 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
