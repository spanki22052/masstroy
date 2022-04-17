import Link from "next/link";
import classes from "styles/error.module.scss";

export default function ErrorPage() {
   return (
      <>
         <p>
            Error go back to mainpage{" "}
            <Link href="/">
               <a className={classes.error}>Main</a>
            </Link>
         </p>
      </>
   );
}
