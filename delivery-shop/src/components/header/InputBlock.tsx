import Image from "next/image";
import iconSearch from "/public/icons-header/icon-search.svg";

const InputBlock = () => {
  return (
    <div className="relative min-w-[261px] flex-grow">
      <input
        type="text"
        placeholder="Найти товар"
        className="w-full n-10 rounded py-2 px-4 outline outline-(--color-primary) focus:shadow-(--shadow-button-default) text-[#8f8f8f] text-base leading-[150%] "
      />
      <Image
        src={iconSearch}
        alt="search"
        width={24}
        height={24}
        className="absolute right-2 top-2 cursor-pointer"
      />
    </div>
  );
};
export default InputBlock;
