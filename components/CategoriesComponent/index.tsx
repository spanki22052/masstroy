import { materialsI } from "components/interfaces";
import { FC } from "react";
import classes from "./categories.module.scss";

type layoutProps = {
  materialsList: materialsI[];
};

const CategoriesComponent: FC<layoutProps> = ({ materialsList }) => {
  return (
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
  );
};

export default CategoriesComponent;
