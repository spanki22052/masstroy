import { AttachmentSvg } from "svg/";
import { InstInfoInterface } from "components/interfaces";
import { FC } from "react";
import classes from "./instagramcomponent.module.scss";

type layoutProps = {
  data: InstInfoInterface[];
};

const InstagramComponent: FC<layoutProps> = ({ data }) => {
  return (
    <div className={classes.main}>
      {data.map((el, index) => {
        return (
          <div
            style={{
              background: `url('instbackgrounds/${el.img}.png');`,
            }}
            key={index}
            className={classes.instBlock}
          >
            <h1>{el.hashtag}</h1>
            {el.isAttached && <AttachmentSvg />}
          </div>
        );
      })}
    </div>
  );
};

export default InstagramComponent;
