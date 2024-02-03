import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bio}>

        I&rsquo;m Ibrahim Alshubaily, a computer scientist and dog lover. I grew up in a small farming village in <Link href="https://en.wikipedia.org/wiki/Tayma">Tayma</Link>, playing with footballs made out of socks (also known as socker).
        <br /><br />


        I currently work as a Software Engineer at <Link href="https://en.wikipedia.org/wiki/Amazon_(company)">Amazon</Link>. Previously, I built machine learning and data analytics tools at <Link href="https://www.neom.com/en-us">NEOM</Link>.
        <br /><br />

        I graduated from the University of Washington - Tacoma, where I also taught <Link href="https://myplan.uw.edu/course/#/courses/TCSS390">CS 390: Undergraduate Seminar</Link>. This seminar supplements students&rsquo; learning through hands-on collaborative problem-solving.
        <br /><br />

        Feel free to contact me via <Link href="mailto:ibrahim.alshubaily.sde@gmail.com">email</Link>. I&rsquo;m always open to interesting conversations and collaboration.

      </div>
      <img className={styles.profile_image} src="profile.png" />

    </main>
  );
}
