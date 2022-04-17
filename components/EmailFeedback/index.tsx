import classes from "./emailfeedback.module.scss";

const EmailFeedback = () => {
   return (
      <div className={classes.feedbackBlock}>
         <h1>Подпишитесь на нас</h1>
         <h2>Узнавайте об интересных новинках и будьте в курсе всех акций</h2>
         <form>
            <input placeholder="email" /> <button>Подписаться</button>
         </form>
         <img src="/backgrounds/paints.png" alt="paint" />
      </div>
   );
};

export default EmailFeedback;
