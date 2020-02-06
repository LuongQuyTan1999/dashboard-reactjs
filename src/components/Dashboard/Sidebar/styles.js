const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    zIndex: 10,
    height: "100vh",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuLink: {
    textDecoration: "none",
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    "&>div": {
      backgroundColor: theme.color.hover,
    },
  },
});

export default styles;
