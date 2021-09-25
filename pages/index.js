import { Fragment } from "react";
import classes from "./homepage.module.css";
import illust from "../public/images/home_graphic.png";
import Image from "next/image";
import Button from "../ui/button";

export default function Home() {
  return (
    <Fragment>
      <div className={classes.body}>
        <div className={classes.upperContainer}>
          <span className={classes.box1}>
            <div className={classes.caption1}>
              <p>
                Do you often fail to make decisions daily?
                <br />
                <br />
                We did too! That’s why we built an app that could do it for us!
              </p>
            </div>
          </span>

          <div className={classes.illus}>
            <Image
              src={illust}
              alt="illustration"
              width={700}
              height={250}
              className={classes.illusImage}
            />
            <button className={classes.btn}>Start deciding today</button>
          </div>
        </div>

        <div className={classes.lowerContainer}>
          <div className={classes.lowerBox}>
            <div className={classes.caption2}>
              <p>
                Plano learns from you! Our curated behaviour engine picks cues
                from your mood and understands the best course of action that
                you should take
              </p>
            </div>

            <div className={classes.btnCt}> 
                <button className={classes.btn}>Develop with us</button>
              </div>

            <div className={classes.caption2}>
              <p>
                Plano is a decision making and planning app that takes over the
                tedious task of making choices and plans for you!
              </p>
              <p>Interested in building plano? Join us today!</p>

              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
