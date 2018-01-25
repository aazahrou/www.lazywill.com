import React from "react";
import injectSheet from "react-jss";

import SvgEl from "../shared/SvgEl";
import { LOGOS } from "../../../utils/logos";
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
      color: theme.main.green,
      letterSpacing: "-.03em",
      fontWeight: 400
    },
    "& strong": {
      color: theme.main.blue,
      letterSpacing: "-.02em",
      fontWeight: 700
    },
    "@media (min-width: 1024px)": {
      "& h1": {
        fontSize: "3em"
      }
    }
  },
  mockup: {
    textAlign: "center",
    position: "relative",
    "& img": {
      maxWidth: "100%",
      transition: "all .5s"
    },
    "& img": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    "@media (min-width: 1024px)": {
      width: "35%",
      "& img": {
        maxHeight: "calc(100vh - 50px)",
        width: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
  },
  justle: {
    width: "300px",
    height: "580px",
    position: "relative",
    margin: "0 auto",
    "@media (min-width: 600px)": {
      width: "400px",
      height: "760px"
    },
    "@media (min-width: 1024px)": {
      display: "none"
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
    textAlign: "center",
    "@media (min-width: 1024px)": {
      display: "none"
    },
    "& button": {
      display: "inline-block"
    }
  }
});

class Billboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockupInPerspective: true
    };

    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseClick(e) {
    if (typeof ga === `function`) {
      window.ga("send", {
        hitType: "event",
        eventCategory: "cta",
        eventAction: "click",
        eventLabel: "Try Demo"
      });
    }

    setTimeout(() => {
      document.location.href = "https://demo.lazywill.com";
    }, 200);
  }

  handleMouseMove(e) {
    if (e.type === "mouseleave" && this.state.mockupInPerspective) {
      return;
    }
    this.setState(prevState => ({
      mockupInPerspective: !prevState.mockupInPerspective
    }));
  }

  getImageSrc(params) {
    const { width, type, version } = params;
    const data = this.props.data;

    const fileType = type ? type.toUpperCase() : "PNG";
    const imgWidth = width ? width.toString() : "300";
    const fileName =
      version === "perspective" ? "phone-perspective.png" : "phone.png";

    return data[`phone${fileType}${imgWidth}`].edges.find(
      el =>
        el.node.resize.originalName ===
        (version === "perspective" ? "phone-perspective.png" : "phone.png")
    ).node.resize.src;
  }

  render() {
    const { classes } = this.props;
    const { mockupInPerspective } = this.state;

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
            <DemoLink onClick={this.handleMouseClick} />
          </div>
        </section>
        <section className={classes.mockup}>
          <div className={classes.justle} />
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet={this.getImageSrc({
                width: 500,
                type: "webp",
                version: "perspective"
              })}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={this.getImageSrc({ width: 500, version: "perspective" })}
            />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={this.getImageSrc({
                width: 400,
                type: "webp",
                version: "perspective"
              })}
            />
            <source
              media="(min-width: 600px)"
              srcSet={this.getImageSrc({ width: 400, version: "perspective" })}
            />
            <source
              type="image/webp"
              srcSet={this.getImageSrc({
                width: 300,
                type: "webp",
                version: "perspective"
              })}
            />
            <img
              src={this.getImageSrc({ width: 300, version: "perspective" })}
              alt="Lazywill on a smartphone in perspective"
              style={{ opacity: mockupInPerspective ? 1 : 0 }}
            />
          </picture>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet={this.getImageSrc({ width: 500, type: "webp" })}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={this.getImageSrc({ width: 500 })}
            />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={this.getImageSrc({ width: 400, type: "webp" })}
            />
            <source
              media="(min-width: 600px)"
              srcSet={this.getImageSrc({ width: 400 })}
            />
            <source
              type="image/webp"
              srcSet={this.getImageSrc({ width: 300, type: "webp" })}
            />
            <img
              style={{ opacity: mockupInPerspective ? 0 : 1 }}
              src={this.getImageSrc({ width: 300 })}
              alt="Lazywill on a smartphone"
              onMouseEnter={this.handleMouseMove}
              onMouseLeave={this.handleMouseMove}
              onClick={this.handleMouseMove}
            />
          </picture>
        </section>
        <section className={classes.actionForMobile}>
          <DemoLink onClick={this.handleMouseClick} />
        </section>
      </article>
    );
  }
}

export default injectSheet(styles)(Billboard);
