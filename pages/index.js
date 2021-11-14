import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const sounds = [
  {
    type: "🐮",
    sound: "/sounds/moo.m4a",
    description: "Christy: moooooooo",
  },
  {
    type: "😛",
    sound: "/sounds/asdfjkl.m4a",
    description: "Ava: adfjasdsdfkljsdf",
  },
  {
    type: "🪑",
    sound: "/sounds/chair.m4a",
    description: "a chair at CodeDay",
  },
  {
    type: "🐸",
    sound: "/sounds/ribbit.m4a",
    description: "Shubham: ribbit",
  },
  {
    type: "🦆",
    sound: "/sounds/quack.m4a",
    description: "Rebecca: quack",
  },
  {
    type: "🐁",
    sound: "/sounds/squeak.m4a",
    description: "Snoopy squeak",
  },
  {
    type: "🤷‍♂️",
    sound: "/sounds/quote.m4a",
    description: "It's Friday evening",
  },
  {
    type: "👆",
    sound: "/sounds/table-scratch.m4a",
    description: "Scratching the tables",
  },
  {
    type: "👌",
    sound: "/sounds/snap.m4a",
    description: "Snap",
  },
];

export default function Home() {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>sounds</title>
        <meta name="description" content="CodeDay sounds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          sounds of <a>CodeDay</a>
        </h1>

        <div className={styles.grid}>
          {sounds.map((s) => (
            <div
              className={styles.card}
              aria-label={s.description}
              key={s.type}
              onClick={() => playSound(s.sound)}
            >
              {s.type}
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
