import NavbarComponent from "components/Navbar";
import Link from "next/link";

const CartPage = () => {
   return (
      <NavbarComponent title="Корзина">
         <h1>Корзина пуста</h1>
         <Link href={"cart/request"}>
            <a>Оформить заказ</a>
         </Link>
      </NavbarComponent>
   );
};

export default CartPage;
