import { AttachmentSvg } from "svg/";
import { InstInfoInterface } from "components/interfaces";
import { FC } from "react";
import classes from "./instagramcomponent.module.scss";

interface LayoutProps {
   data: InstInfoInterface[];
}

const InstagramComponent: FC<LayoutProps> = ({ data }) => {
   return (
      <div className={classes.main}>
         {data.map((el, index) => {
            return (
               <div
                  style={{
                     background: `url('instbackgrounds/${el.img}.png');`
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
