const colors = require("./colors");
import { createMuiTheme } from 'material-ui/styles';

var primary = {
  50: "#f3f9e7",
  100: "#e0f0c2",
  200: "#cce699",
  300: "#b8db70",
  400: "#a8d452",
  500: "#99cc33",
  600: "#91c72e",
  700: "#86c027",
  800: "#7cb920",
  900: "#6bad14",
  A100: "#f0ffe0",
  A200: "#d8ffad",
  A400: "#c0ff7a",
  A700: "#b4ff60",
  contrastDefaultColor: "light"
};

const theme = createMuiTheme({
  main: {
    background: "#D0E0D8",
    green: "#709425",
    blue: "#2D949F"
  },
  footer: {
    colors: {
      text: "#777777",
      link: "#999999",
      linkHover: "#777777"
    }
  },
  palette: {
    primary: primary,
    type: "dark",
    background: {
      green: "#709425",
      blue: "#2D949F",
      first: "#383a30",
      second: "#3e4035",
      third: "#4d4f44",
      fourth: "#545649"
    }
  },
  typography: {
    fontFamily: `"Helvetica", "Arial", sans-serif`
  },
  navigator: {
    colors: {
      title: colors.firstSuperLight,
      subTitle: colors.bright,
      scrollTrack: colors.first,
      scrollThumb: colors.firstDark,
      linkHover: colors.bright,
      header: colors.firstSuperLight,
      asideItemActiveBorder: colors.accent
    },
    sizes: {
      asideWidth: "19em",
      maxWidth: "56em"
    },
    backgrounds: {
      wrapper: colors.first,
      asideItemActive: colors.firstDark
    }
  },
  post: {
    colors: {
      author: colors.middle,
      authorBorder: colors.firstLight,
      bold: colors.middle,
      blockquoteFrame: colors.light,
      copyright: colors.middle,
      link: colors.first,
      linkHover: colors.firstLight,
      meta: colors.middle,
      metaBorder: colors.first,
      text: colors.dark,
      title: colors.middle,
      subTitle: colors.superDark
    },
    backgrounds: {
      wrapper: colors.bright,
      meta: colors.light
    },
    sizes: {
      maxWidth: "50em"
    }
  },
  bottomBar: {
    colors: {
      link: colors.bright,
      icon: colors.firstSuperLight
    },
    backgrounds: {
      wrapper: colors.first,
      icon: colors.firstDark
    },
    sizes: {
      height: 44 //pixels
    }
  },
  topBar: {
    colors: {
      logo: colors.bright,
      logoPost: colors.first
    },
    backgrounds: {
      wrapper: colors.firstLight,
      wrapperPost: colors.bright,
      icon: colors.accent
    },
    sizes: {
      height: 44 //pixels
    }
  },
  info: {
    colors: {
      text: colors.firstDark,
      link: colors.firstDark,
      linkHover: colors.first,
      btn: colors.bright
    },
    backgrounds: {
      wrapper: colors.firstLight,
      btn: colors.accent
    },
    sizes: {
      maxWidth: "40em"
    }
  },
  mediaQueryTresholds: {
    XL: "65em",
    L: "49em",
    M: "37em",
    S: "28em",
    XS: "21em"
  }
});

export default theme;
