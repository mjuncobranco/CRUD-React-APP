import classes from "../footer/Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <span>
        Designed with &#10084; by &copy;MJB {new Date().getFullYear()}{" "}
      </span>
      <a
        className={classes.date}
        href="https://github.com/mjuncobranco"
        target="blank"
      >
        View my GitHub Portfolio.{" "}
      </a>
    </footer>
  );
}

export default Footer;
