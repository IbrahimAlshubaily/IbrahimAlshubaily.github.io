import Link from "next/link";
import styles from "./NavMenu.module.css"
export default function NavMenue() {
    return (
        <nav className={styles.nav}>
            <Link href={"/"} className={styles.page_title}>
                Ibrahim Alshubaily
            </Link>

            <ul className={styles.links}>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
            </ul>

        </nav>
    );
}