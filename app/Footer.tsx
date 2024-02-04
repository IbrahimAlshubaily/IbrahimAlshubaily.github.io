import Link from "next/link";
import styles from "./Footer.module.css"
export default function Footer() {
    return (
        <div className={styles.body}>
            <FooterLinks></FooterLinks>
        </div>
    );
}

const FooterLinks = () => {
    return (
        <ul>
            <li>
                <img src="gh-logo.svg"></img>
                <Link href={"https://github.com/IbrahimAlshubaily"} target="_blank">https://github.com/IbrahimAlshubaily</Link>
            </li>
            <li>
                <img src="linkedin-logo.svg"></img>
                <Link href={"https://linkedin.com/in/alshubaily/"} target="_blank">linkedin.com/in/alshubaily/</Link>
            </li>
            <li>
                <img src="mail-logo.svg"></img>
                <Link href={"mailto:ibrahim.alshubaily.sde@gmail.com"}>ibrahim.alshubaily.sde@gmail.com</Link>
            </li>
        </ul>
    )
}