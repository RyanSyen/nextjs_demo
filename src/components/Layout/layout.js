import { LayoutWrapper } from "./layout.styled";
import styles from "./layout.module.css";

/*
  CSS Modules
  - CSS Modules are used for component-level styles
  - CSS modules using [name].module.css naming convention
  - create a unique class name with slightly better readability compared to styled components
  - code splitting feature works on css modules as well by ensuring minimal CSS is loaded for each page, resulting in smaller bundle sizes
  - css modules are extracted from the JS bundles at build time and generate css files 
  - styled components does not have built-in support
*/

const Layout = ({ children }) => {
  // return <LayoutWrapper>{children}</LayoutWrapper>;
  // return <div className={styles.container}>{children}</div>;
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
