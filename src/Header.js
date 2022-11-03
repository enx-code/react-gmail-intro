import LeftTopMenu from "./LeftTopMenu";
import SearchBar from "./SearchBar";
import './styles/header.css'
export default function Header() {
  return (
    <header className="header">
      <LeftTopMenu />
      <SearchBar />
    </header>
  );
}
