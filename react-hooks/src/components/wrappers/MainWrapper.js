
import classes from './MainWrapper.module.css';
function MainWrapper({content}) {
  return (
    <div className={classes.container}>{content}</div>
  );
}

export default MainWrapper;