import Animation from "../Animation/Animation";
import "./Header.scss";

export default function Header() {
  return (
    <div className={"header-wrapper"}>
      <div>
        <Animation size={48} />
        <h1>NASA Media Library</h1>
      </div>
    </div>
  );
}
