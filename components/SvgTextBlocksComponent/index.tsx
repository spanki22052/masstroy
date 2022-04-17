import { SvgTextInterface } from "components/interfaces";
import { FC } from "react";
import classes from "./svgtextblock.module.scss";

type SvgTextType = {
  svgTextList: SvgTextInterface[];
};

const SvgTextBlock: FC<SvgTextType> = ({ svgTextList }) => {
  return (
    <div className={classes.svgBlocks}>
      {svgTextList.map((el, index) => {
        return (
          <div key={index} className={classes.svgBlock}>
            {el.svgTag}
            <h1>{el.title}</h1>
            <h2>{el.description}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SvgTextBlock;
