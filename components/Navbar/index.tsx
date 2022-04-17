import {
   CartSvg,
   FavoritesSvg,
   GooglePlusSvg,
   InstSvg,
   LogoSvg,
   MarkSvg,
   PhoneSvg,
   ProfileSvg,
   ShipSvg,
   VkSvg,
   WhiteLogo
} from "svg/";
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

               <div className={classes.navigationList}>
                  <div className={classes.navigationBlock}>
                     <FavoritesSvg />
                     <p>Избранное</p>
                  </div>
                  <div className={classes.navigationBlock}>
                     <ShipSvg />
                     <p>Доставка</p>
                  </div>
                  <div className={classes.navigationBlock}>
                     <ProfileSvg />
                     <p>Профиль</p>
                  </div>
                  <div className={classes.navigationBlock}>
                     <CartSvg />
                     <p>Корзина</p>
                  </div>
               </div>
            </div>
         </div>
         <main>{children}</main>
         <div style={{ backgroundImage: "url('backgrounds/footer.png')" }} className={classes.footer}>
            <WhiteLogo />
            <div className={classes.links}>
               <p>Каталог</p>
               <p>Акции</p>
               <p>Доставка</p>
               <p>О нас</p>
               <p>Контакты</p>
               <p>Обратная связь</p>
            </div>
            <div style={{ width: "30%" }} className={classes.links}>
               <InstSvg />
               <VkSvg />
               <GooglePlusSvg />
            </div>
            <p className={classes.bottomP}>© 2022 Масстрой</p>
         </div>
      </>
   );
};

export default NavbarComponent;
