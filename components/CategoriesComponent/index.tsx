import { ArrowSvg } from "svg/";
import { MaterialsI } from "components/interfaces";
import { FC } from "react";
import classes from "./categories.module.scss";
import Slider from "react-slick";

interface LayoutProps {
   materialsList: MaterialsI[];
}

const CategoriesComponent: FC<LayoutProps> = ({ materialsList }) => {
   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
            }
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
               initialSlide: 2
            }
         },
         {
            breakpoint: 680,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2
            }
         }
      ]
   };

   const settingsWithModules = {
      ...settings,
      dotsClass: classes.button__bar
   };

   return (
      <div className={classes.materialTypes}>
         <p>Смотреть все</p>

         <Slider className={classes.carousel} {...settingsWithModules}>
            {materialsList.map((el, index) => {
               return (
                  <div key={index} className={classes.materialType}>
                     <h1>{el.title}</h1>
                     <img src={`/materials/${el.img}`} alt="materialimg" width="170px" height="110px" />
                  </div>
               );
            })}
         </Slider>
         {/*<div className={classes.leftA}>*/}
         {/*   <ArrowSvg />*/}
         {/*</div>*/}
         {/*<div className={classes.rightA}>*/}
         {/*   <ArrowSvg />*/}
         {/*</div>*/}
      </div>
   );
};

export default CategoriesComponent;
