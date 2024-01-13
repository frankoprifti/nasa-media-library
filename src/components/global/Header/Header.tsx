import { ReactElement } from "react";
import Animation from "../Animation/Animation";
import "./Header.scss";

export default function Header({
  iconComponent,
}: {
  iconComponent?: ReactElement;
}) {
  return (
    <div className={"header-wrapper"} data-testid={"header-wrapper"}>
      {iconComponent}
      <Animation size={48} />
      <h1>NASA Media Library</h1>
    </div>
  );
}
