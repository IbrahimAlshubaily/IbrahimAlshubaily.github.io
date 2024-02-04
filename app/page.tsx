import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bio}>

        I&rsquo;m Ibrahim Alshubaily, a computer scientist and dog lover. I grew up in a small farming village in <Link href="https://en.wikipedia.org/wiki/Tayma" target="_blank">Tayma</Link>, playing with footballs made out of socks (also known as socker).
        <br /><br />


        I currently work as a Software Engineer at <Link href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank">Amazon</Link>, where I am developing a data pipeline that processes millions of data points on a daily basis.

        Previously, I built machine learning and data analytics tools at <Link href="https://www.neom.com/en-us" target="_blank">NEOM</Link>.
        <br /><br />

        I graduated from the University of Washington - Tacoma, where I also taught <Link href="https://myplan.uw.edu/course/#/courses/TCSS390" target="_blank">CS 390: Undergraduate Seminar</Link>. This seminar supplements students&rsquo; learning through hands-on collaborative problem-solving.
        <br /><br />

        I&rsquo;m enthusiastic about chess and find joy in programming chess engines. <Link href="https://deepmind.google/discover/blog/alphazero-shedding-new-light-on-chess-shogi-and-go/" target="_blank">Alpha Zero</Link> has been a significant influence in sparking my interest in machine learning.

        My bucket list includes developing a machine learning model that can outperform <Link href="https://github.com/official-stockfish/Stockfish" target="_blank">Stockfish</Link>.

        <br /><br />

        Feel free to contact me via <Link href="mailto:ibrahim.alshubaily.sde@gmail.com">email</Link>. I&rsquo;m always open to interesting conversations and collaboration.

      </div>
      <img className={styles.profile_image} src="profile.png" />

    </main>
  );
}
