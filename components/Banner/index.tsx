import { ArrowSvg } from "svg/";
import classes from "./banner.module.scss";

export default function Banner() {
  return (
    <div
      style={{ backgroundImage: "url('backgrounds/1.png')" }}
      className={classes.banner}
    >
      <div className={classes.infoBlock}>
        <h1>Двойная выгода</h1>
        <h2>
          Более мелкие какие-то детали, которые можно описать двумя
          предложениями
        </h2>
        <button>Подробнее</button>
      </div>
      <div className={classes.leftA}>
        <ArrowSvg />
      </div>
      <div className={classes.rightA}>
        <ArrowSvg />
      </div>
      <div className={classes.dots}>
        <div className={classes.dotS} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
        <div className={classes.dot} />
      </div>
    </div>
  );
}
