import Link from "next/link";
import { ListItem } from "./styles";

const NavLink = ({ redirect, text }) => {
  return (
    <ListItem>
      <Link passHref href={redirect}>
        <h4>{text}</h4>
      </Link>
    </ListItem>
  );
};

export default NavLink;
