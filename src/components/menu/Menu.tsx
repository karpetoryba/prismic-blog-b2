import { createClient } from "@/prismicio";
import styles from "./menu.module.css";
import { PrismicNextLink } from "@prismicio/next";

const Menu = async () => {
  const client = createClient();
  const menu = await client.getSingle("navigation");

  return (
    <nav className={styles.menu}>
      <ul>
        {menu.data.navigationitem.map((item, index) => (
          <li key={index} className="relative group">
            <PrismicNextLink
              field={item.link}
              className="text-gray-800 hover:text-blue-500 transition duration-200 font-medium"
            ></PrismicNextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
