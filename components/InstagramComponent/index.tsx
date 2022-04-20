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
               <div style={{}} key={index} className={`${classes.instBlock} inst-block`}>
                  <h1>{el.hashtag}</h1>
                  {el.isAttached && <AttachmentSvg />}

                  <style jsx global>
                     {`
                        .inst-block:nth-child(${index + 1}) {
                           background: url("instbackgrounds/${el.img}.png");
                        }
                     `}
                  </style>
               </div>
            );
         })}
      </div>
   );
};

export default InstagramComponent;
