import React from "react";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

const styles = theme => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    padding: "1em 50px",
    alignItems: "center",
    width: "100%",
    color: theme.footer.colors.text,
    fontSize: ".85em",
    "@media (min-width: 1024px)": {
      height: "50px",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    "& a": {
      borderBottom: `1px solid ${theme.footer.colors.link}`,
      color: theme.footer.colors.link,
      textShadow: `1px 1px ${theme.main.background},
        -1px 1px ${theme.main.background},
        -1px -1px ${theme.main.background},
        -1px 1px ${theme.main.background},
        -1px 0 ${theme.main.background},
        1px 0 ${theme.main.background}`,
      "&:hover": {
        color: theme.footer.colors.linkHover,
        borderBottom: `1px solid ${theme.footer.colors.linkHover}`
      }
    }
  },
  column: {
    textAlign: "center",
    padding: ".2em 0",
    "& b": {
      color: "#bbb"
    },
    "@media (max-width: 599px)": {
      "& span": {
        display: "block",
        padding: ".2em 0"
      },
      "& b": {
        display: "none"
      }
    }
  }
});

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.column}>
        Contact: <Obfuscate email="hello@lazywill.com" />
      </div>
      <div className={classes.column}>
        <span>
          Built with <a href="">React</a> & <a href="">Gatsby</a>
        </span>{" "}
        <b>|</b>{" "}
        <span>
          Hosted on <a href="">Netlify</a>
        </span>
      </div>
    </footer>
  );
};

export default injectSheet(styles)(Footer);
