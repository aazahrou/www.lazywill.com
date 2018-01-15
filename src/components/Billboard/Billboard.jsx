import React from "react";
import injectSheet from "react-jss";

import SvgEl from "../shared/SvgEl";
import { LOGOS } from "../../constants/logos";
import DemoLink from "./DemoLink";

const styles = theme => ({
  container: {
    width: "100%",
    "@media (min-width: 1024px)": {
      height: "calc(100vh - 50px)",
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch"
    }
  },
  texts: {
    fontSize: "1em",
    textAlign: "center",
    padding: "3em 2em 0 2em",
    "@media (min-width: 600px)": {
      padding: "4em 15% 0"
    },
    "@media (min-width: 1024px)": {
      overflowY: "auto",
      width: "60%",
      paddingLeft: "10%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "2em",
      textAlign: "left"
    }
  },
  logo: {
    display: "inline-block",
    width: "100px",
    margin: "0 0 1em 0",
    "@media (min-width: 1024px)": {
      width: "25%"
    },
    "& path": {
      fill: "#fff"
    }
  },
  header: {
    "& h1, & h2": {
      margin: 0,
      fontWeight: 300,
      lineHeight: 1.15,
      color: "#333"
    },
    "& h1": {
      fontSize: "1.8em",
      "@media (min-width: 600px)": {
        fontSize: "2.1em"
      },
      "@media (min-width: 1024px)": {
        fontSize: "2.4em"
      },
      "& strong": {
        fontWeight: 700
      }
    },
    "& h2": {
      fontSize: "1.2em",
      margin: "1em 0 0 0",
      lneHeight: 1.2,
      "@media (min-width: 1024px)": {
        fontSize: "1.6em"
      }
    },
    "& em": {
      fontStyle: "normal",
      color: theme.main.green
    },
    "& strong": {
      color: theme.main.blue,
      letterSpacing: "-.03em"
    },
    "@media (min-width: 1024px)": {
      "& h1": {
        fontSize: "3em"
      }
    }
  },
  mockup: {
    textAlign: "center",
    "& img": {
      maxWidth: "100%"
    },
    "@media (min-width: 1024px)": {
      width: "40%",
      paddingRight: "5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& img": {
        maxHeight: "calc(100vh - 50px)",
        width: "auto"
      }
    }
  },
  actionForDesktop: {
    margin: "2em 0 0 0",
    display: "none",
    "@media (min-width: 1024px)": {
      display: "block"
    }
  },
  actionForMobile: {
    padding: "0 0 3em",
    "@media (min-width: 1024px)": {
      display: "none"
    },
    "& button": {
      display: "inline-block"
    }
  }
});

const Billboard = ({ classes }) => {
  return (
    <article className={classes.container}>
      <section className={classes.texts}>
        <span className={classes.logo}>
          <SvgEl svg={LOGOS.MAIN} />
        </span>
        <header className={classes.header}>
          <h1>
            A vocabulary training web app for language learners like you,{" "}
            <em>declared</em> <strong>visual learners</strong>.
          </h1>
          <h2>
            If you are a visual learner type the app is definitely for you
          </h2>
        </header>
        <div className={classes.actionForDesktop}>
          <DemoLink />
        </div>
      </section>
      <section className={classes.mockup}>
        <img
          src="/img/phone-perspective.png"
          alt="Lazywill on a smartphone screen"
        />
        <div className={classes.actionForMobile}>
          <DemoLink />
        </div>
      </section>
    </article>
  );
};

export default injectSheet(styles)(Billboard);
