import HeaderUserBlock from "./HeaderUserBlock";
import LogoBlock from "./LogoBlock";
import SearchBlock from "./SearchBlock";

const Header = () => {
  return (
    <header>
      <LogoBlock />
      <SearchBlock />
      <nav aria-label="Основное меню">
        <HeaderUserBlock />
      </nav>
    </header>
  );
};

export default Header;
