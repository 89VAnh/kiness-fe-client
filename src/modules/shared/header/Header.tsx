import { ReactNode } from "react";

import styles from "./scss/header.module.scss";

interface Props {
  context: ReactNode;
}

export default function Header({ context }: Props): JSX.Element {
  return (
    <>
      <div className={styles.headerTop}></div>
      {context}
    </>
  );
}
