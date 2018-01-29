import React from "react";
import injectSheet from "react-jss";
import "mdn-polyfills/Array.prototype.find";

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
      mockupInPerspective: true,
      phonePerspective500SrcSet: null,
      phonePerspective400SrcSet: null,
      phonePerspective300SrcSet: null,
      phonePerspective300Src: null,
      phonePerspective500WebpSrcSet: null,
      phonePerspective400WebpSrcSet: null,
      phonePerspective300WebpSrcSet: null,
      phone500SrcSet: true,
      phone400SrcSet: null,
      phone300SrcSet: null,
      phone300Src: null,
      phone500WebpSrcSet: null,
      phone400WebpSrcSet: null,
      phone300WebpSrcSet: null
    };

    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.setState({
      phonePerspective500SrcSet: this.getImageSrc({
        width: 500,
        version: "perspective",
        srcSet: true
      }),
      phonePerspective400SrcSet: this.getImageSrc({
        width: 400,
        version: "perspective",
        srcSet: true
      }),
      phonePerspective300SrcSet: this.getImageSrc({
        width: 300,
        version: "perspective",
        srcSet: true
      }),
      phonePerspective300Src: this.getImageSrc({
        width: 300,
        version: "perspective"
      }),
      phonePerspective500WebpSrcSet: this.getImageSrc({
        width: 500,
        type: "webp",
        version: "perspective",
        srcSet: true
      }),
      phonePerspective400WebpSrcSet: this.getImageSrc({
        width: 400,
        type: "webp",
        version: "perspective",
        srcSet: true
      }),
      phonePerspective300WebpSrcSet: this.getImageSrc({
        width: 300,
        type: "webp",
        version: "perspective",
        srcSet: true
      }),

      phone500SrcSet: this.getImageSrc({
        width: 500,
        srcSet: true
      }),
      phone400SrcSet: this.getImageSrc({
        width: 400,
        srcSet: true
      }),
      phone300SrcSet: this.getImageSrc({
        width: 300,
        srcSet: true
      }),
      phone300Src: this.getImageSrc({
        width: 300
      }),
      phone500WebpSrcSet: this.getImageSrc({
        width: 500,
        type: "webp",
        srcSet: true
      }),
      phone400WebpSrcSet: this.getImageSrc({
        width: 400,
        type: "webp",
        srcSet: true
      }),
      phone300WebpSrcSet: this.getImageSrc({
        width: 300,
        type: "webp",
        srcSet: true
      })
    });
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
    const { width, type, version, srcSet } = params;
    const data = this.props.data;

    const srcType = srcSet ? "srcSet" : "src";
    const fileType = type === "webp" ? "Webp" : "";
    const imgWidth = width ? width.toString() : "300";
    const fileName =
      version === "perspective" ? "phone-perspective.png" : "phone.png";

    return data[`phone${imgWidth}`].edges.find(
      el =>
        el.node.resolutions.originalName ===
        (version === "perspective" ? "phone-perspective.png" : "phone.png")
    ).node.resolutions[`${srcType}${fileType}`];
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
              srcSet={this.state.phonePerspective500WebpSrcSet}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={this.state.phonePerspective500SrcSet}
            />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={this.state.phonePerspective400WebpSrcSet}
            />
            <source
              media="(min-width: 600px)"
              srcSet={this.state.phonePerspective400SrcSet}
            />
            <source
              type="image/webp"
              srcSet={this.state.phonePerspective300WebpSrcSet}
            />
            <source srcSet={this.state.phonePerspective300SrcSet} />
            <img
              src={this.state.phonePerspective300Src}
              alt="Lazywill on a smartphone in perspective"
              style={{ opacity: mockupInPerspective ? 1 : 0 }}
            />
          </picture>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet={this.state.phone500WebpSrcSet}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={this.state.phone500SrcSet}
            />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={this.state.phone400WebpSrcSet}
            />
            <source
              media="(min-width: 600px)"
              srcSet={this.state.phone400SrcSet}
            />
            <source type="image/webp" srcSet={this.state.phone300WebpSrcSet} />
            <source srcSet={this.state.phone300SrcSet} />
            <img
              style={{ opacity: mockupInPerspective ? 0 : 1 }}
              src={this.state.phone300Src}
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
