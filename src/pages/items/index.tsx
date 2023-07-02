import { useUUID } from "@/utils/useUUID";
import Link from "next/link";
import styles from "./items.module.scss";

const items = ["orange", "apple", "grape"];

export default function ItemsList() {
  function renderLinks() {
    return items.map((e) => (
      <li className={styles.listItem} key={`link-${e}`}>
        <Link href={`items/${e}`}>{e}</Link>
      </li>
    ));
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>{renderLinks()}</ul>
      </div>
    </>
  );
}