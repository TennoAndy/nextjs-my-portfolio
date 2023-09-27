const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-tr from-primary-500 via-secondary-600 to-tertiary-500" 
    : "text-[#ADB7BE] border border-2 border-slate-600 hover:border-white";

  return (
    <button
      className={`rounded-full px-1 py-1 ${buttonStyles} text-xl cursor-pointer`}
      onClick={() => onClick(tag)}
    >

      <span className="block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2">
        {tag}
      </span>
    </button>
  );
};

export default ProjectTag;
