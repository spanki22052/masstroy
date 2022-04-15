import { ArrowSvg, CatalogSvg, SearchSvg } from "svg/";
import NavbarComponent from "components/Navbar";
import classes from "styles/mainpage.module.scss";
import "styles/mainpage.module.scss";
import Image from "next/image";

export default function Index() {
  interface materialsI {
    title: string;
    img: string;
  }

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

        <div className={classes.materialTypes}>
          <p>Смотреть все</p>
          {materialsList.map((el, index) => {
            return (
              <div key={index} className={classes.materialType}>
                <h1>{el.title}</h1>
                <img
                  src={`/materials/${el.img}`}
                  alt="materialimg"
                  width="170px"
                  height="110px"
                />
              </div>
            );
          })}
        </div>

        <div className={classes.banner}>
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
      </div>
    </NavbarComponent>
  );
}
