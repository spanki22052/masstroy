import { ArrowSvg, CatalogSvg, SearchSvg } from "svg/";
import NavbarComponent from "components/Navbar";
import classes from "styles/mainpage.module.scss";
import "styles/mainpage.module.scss";
import Banner from "components/Banner";
import { materialsI } from "components/interfaces";
import CategoriesComponent from "components/CategoriesComponent";

export default function Index() {
  const materialsList: materialsI[] = [
    { title: "Лакокрасочные материалы", img: "1.png" },
    { title: "Напольные покрытия", img: "2.png" },
    { title: "Скобяные изделия", img: "3.png" },
    { title: "Строительные материалы", img: "4.png" },
    { title: "Строительные материалы", img: "4.png" },
    { title: "Потолки", img: "5.png" },
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
      </div>
    </NavbarComponent>
  );
}
