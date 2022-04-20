import { FC } from "react";
import { ArrowSvg } from "svg/";
import classes from "./banner.module.scss";
import { BannersListInterface } from "components/interfaces";
import Slider from "react-slick";

interface LayoutProps {
   banners: BannersListInterface[];
}

const Banner: FC<LayoutProps> = ({ banners }) => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      initialSlide: 0
   };
   const settingsWithModules = {
      ...settings,
      dotsClass: classes.button__bar
   };

   return (
      <div className={classes.banners}>
         <Slider className={classes.carousel} {...settingsWithModules}>
            {banners.map((el, index) => {
               return (
                  <div key={index} className={classes.banner}>
                     <img src={`backgrounds/${el.img}.png`} alt="photo" />
                     <div className={classes.infoBlock}>
                        <h1>{el.title}</h1>
                        <h2>{el.description}</h2>
                        <button>Подробнее</button>
                     </div>
                  </div>
               );
            })}
         </Slider>
      </div>
   );
};

export default Banner;
