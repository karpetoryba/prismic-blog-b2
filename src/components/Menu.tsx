import { createClient } from "@/prismicio";
import styles from "./menu.module.css";
import { PrismicNextLink } from "@prismicio/next";

const Menu = async () => {
  const client = createClient();
  const menu = await client.getSingle("navigation");

  console.log(menu);

  return (
    <nav className={styles.menu}>
      <ul>
        {menu.data.navigationitem.map((item, index) => (
          <li key={index}>
            <PrismicNextLink field={item.link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
