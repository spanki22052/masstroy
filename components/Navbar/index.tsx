import { CartSvg, FavoritesSvg, LogoSvg, MarkSvg, PhoneSvg, ProfileSvg, ShipSvg } from "svg/";
import Head from "next/head";
import { FC, ReactNode } from "react";
import classes from "styles/navbar.module.scss";

type LayoutProps = {
   children: ReactNode;
   title: string;
};

const NavbarComponent: FC<LayoutProps> = ({ children, title }) => {
   return (
      <>
         <Head>
            <title>Масстрой | {title}</title>
         </Head>

         <div className={classes.navbar}>
            <div className={classes.adaptiveInfoBlock}>
               <div className={classes.location}>
                  <MarkSvg />
                  <p>Москва, улица Ленина 8</p>
               </div>
               <div className={classes.contactus}>
                  <PhoneSvg />
                  <p>8 (495) 012 - 34 - 56</p>
               </div>
            </div>

            <div className={classes.navholder}>
               <LogoSvg />
               <div className={classes.location}>
                  <MarkSvg />
                  <p>Москва, улица Ленина 8</p>
               </div>
               <div className={classes.contactus}>
                  <PhoneSvg />
                  <p>8 (495) 012 - 34 - 56</p>
               </div>

               <div className={classes.navlist}>
                  <div className={classes.navblock}>
                     <FavoritesSvg />
                     <p>Избранное</p>
                  </div>
                  <div className={classes.navblock}>
                     <ShipSvg />
                     <p>Доставка</p>
                  </div>
                  <div className={classes.navblock}>
                     <ProfileSvg />
                     <p>Профиль</p>
                  </div>
                  <div className={classes.navblock}>
                     <CartSvg />
                     <p>Корзина</p>
                  </div>
               </div>
            </div>
         </div>
         <main>{children}</main>
      </>
   );
};

export default NavbarComponent;
