import MainLayout from "components/MainLayout";
import classes from "styles/mainpage.module.scss";

export default function Index() {
  return (
    <MainLayout title="Главная страница">
      <div className={classes.mainpage}></div>
    </MainLayout>
  );
}
