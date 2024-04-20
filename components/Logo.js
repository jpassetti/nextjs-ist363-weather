import Image from "next/image";

import Row from "./Row";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Row alignItems="center">
      <Image
        src="logo-weather.svg"
        alt="Weather app logo"
        width={162.1}
        height={148.5}
        className={styles.branding__logo}
      />
      <h1 className={styles.branding__wordmark}>IST 363 Weather App</h1>
    </Row>
  );
};
export default Logo;
