import { AchievementsSvg, ArrowSvg, CatalogSvg, QuickShip, SearchSvg, WorkGraphicSvg } from "svg/";
import NavbarComponent from "components/Navbar";
import classes from "styles/mainpage.module.scss";
import "styles/mainpage.module.scss";
import Banner from "components/Banner";
import { InstInfoInterface, MaterialsI, SvgTextInterface } from "components/interfaces";

import CategoriesComponent from "components/CategoriesComponent";
import SvgTextBlock from "components/SvgTextBlocksComponent";
import InstagramComponent from "components/InstagramComponent";
import EmailFeedback from "components/EmailFeedback";

export default function Index() {
   const svgTextList: SvgTextInterface[] = [
      {
         svgTag: <QuickShip />,
         title: "Скорость доставки",
         description: "Доставка в любой регион от 2 дней"
      },
      {
         svgTag: <AchievementsSvg />,
         title: "Качество материалов",
         description: "Доставка в любой регион от 2 дней"
      },
      {
         svgTag: <WorkGraphicSvg />,
         title: "Удобный режим работы",
         description: "Доставка в любой регион от 2 дней"
      },
      {
         svgTag: <QuickShip />,
         title: "Скорость доставки",
         description: "Доставка в любой регион от 2 дней"
      }
   ];

   const materialsList: MaterialsI[] = [
      { title: "Лакокрасочные материалы", img: "1.png" },
      { title: "Напольные покрытия", img: "2.png" },
      { title: "Скобяные изделия", img: "3.png" },
      { title: "Строительные материалы", img: "4.png" },
      { title: "Строительные материалы", img: "4.png" },
      { title: "Потолки", img: "5.png" }
   ];

   const InstPostsList: InstInfoInterface[] = [
      {
         hashtag: "#Краска#ярко",
         img: "1",
         isAttached: true
      },
      {
         hashtag: "#дом#уют",
         img: "2",
         isAttached: true
      },
      {
         hashtag: "#надежность",
         img: "3",
         isAttached: false
      },
      {
         hashtag: "#точность",
         img: "4",
         isAttached: false
      },
      {
         hashtag: "#дом#уют",
         img: "5",
         isAttached: true
      }
   ];

   return (
      <NavbarComponent title="Главная страница">
         <div className={classes.mainpage}>
            <div className={classes.findBlock}>
               <div className={classes.inputBlock}>
                  <button>
                     <CatalogSvg /> Каталог
                  </button>
                  <div className={classes.inputHolder}>
                     <input type="text" placeholder="Введите запрос" />
                     <SearchSvg />
                  </div>
               </div>
               <h1>МАССТРОЙ</h1>

               <h1>
                  <span>ВСЕ ДЛЯ ВАШЕГО РЕМОНТА</span>
               </h1>
            </div>

            <CategoriesComponent materialsList={materialsList} />
            <Banner img={"1"} />

            <CategoriesComponent materialsList={materialsList} />
            <Banner img={"2"} />
            <h1 className={classes.bigText}>Наши преимущества</h1>

            <SvgTextBlock svgTextList={svgTextList} />

            <h1 className={classes.bigText}>Следите за нами в Instagram</h1>
            <InstagramComponent data={InstPostsList} />
            <EmailFeedback />
         </div>
      </NavbarComponent>
   );
}
