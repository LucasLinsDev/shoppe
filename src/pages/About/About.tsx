import styles from "./About.module.scss";
import hero from "../../assets/img/blog/single-hero.png";
export function About() {
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <h3>Who we are and why we do what we do!</h3>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.{" "}
      </p>
      <h2>Top trends</h2>
      <img src={hero} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.{" "}
      </p>
      <ul>
        <li>consectetur adipiscing elit. Aliquam placerat</li>
        <li>consectetur adipiscing elit. Aliquam placerat</li>
      </ul>
      <h2>Produced with care</h2>
      <img src={hero} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </div>
  );
}
