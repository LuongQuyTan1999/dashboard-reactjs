const styles = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  wrapperContent1: {
    width: "100%",
    padding: 10,
    marginLeft: "-240px",
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  },
  wrapperContent: {
    width: "100%",
    padding: 10,
    transition: theme.transitions.create("margin", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
});

export default styles;
