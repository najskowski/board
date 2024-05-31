import { FaGithub, FaCode } from "react-icons/fa";

export const Links = () => {
  return (
    <div className="absolute bottom-5 right-5 space-y-3 flex items-end flex-col">
      <a
        href="https://github.com/najskowski"
        className="flex items-center gap-2 font-semibold hover:text-neutral-400 transition-all"
        target="_blank"
      >
        Visit my Github <FaGithub size={30} />
      </a>
      <a
        href="https://github.com/najskowski/board"
        className="flex items-center gap-2 font-semibold hover:text-neutral-400 transition-all"
        target="_blank"
      >
        Source code <FaCode  size={30} />
      </a>
    </div>
  );
};
