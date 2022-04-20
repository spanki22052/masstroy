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
   TelegramSvg,
   VkSvg,
   WhiteLogo
} from "svg/";
import Head from "next/head";
import { FC, ReactNode } from "react";
import classes from "styles/navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { linksList } from "../links";

type LayoutProps = {
   children: ReactNode;
   title: string;
};

const linksListHandler = (list: string[]) => {
   return list.map((el, index) => {
      return (
         <Link key={index} href={el.length === 0 ? "/" : `${list.filter((_, id) => id < index + 1).join("/")}`}>
            <a>
               <p>
                  {el.length !== 0 && <span> {">"} </span>}
                  {el.length === 0 ? "Главная" : `${linksList[el]}`}
               </p>
            </a>
         </Link>
      );
   });
};

const NavbarComponent: FC<LayoutProps> = ({ children, title }) => {
   const router = useRouter().asPath.split("/");

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
               <Link href="/">
                  <a>
                     <LogoSvg />
                  </a>
               </Link>
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
                     <Link href="/cart">
                        <a>
                           <CartSvg />
                           <p>Корзина</p>
                        </a>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div style={{ height: "110px" }} />

         <div className={classes.linksLine}>{router[1].length !== 0 && linksListHandler(router)}</div>

         <main>{children}</main>
         <div className={`${classes.footer} footer-component`}>
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
               <TelegramSvg />
            </div>
            <p className={classes.bottomP}>© 2022 Масстрой</p>
            <style jsx global>{`
               .footer-component {
                  background-image: url("backgrounds/footer.png");
               }
            `}</style>
         </div>
      </>
   );
};

export default NavbarComponent;
