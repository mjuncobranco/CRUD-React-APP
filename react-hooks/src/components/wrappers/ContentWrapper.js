import classes from "./ContentWrapper.module.css";

function ContentWrapper({ content }) {
  return <div className={classes["flex-content"]}>{content}</div>;
}

export default ContentWrapper;
