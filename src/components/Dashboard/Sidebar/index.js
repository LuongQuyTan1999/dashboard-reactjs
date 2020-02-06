import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { ADMIN_ROUTES } from "../../../constants/index";
import { NavLink } from "react-router-dom";

function Sidebar({ classes, showSidebar }) {
  const [state, setState] = useState({
    left: true,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {ADMIN_ROUTES.map((route, index) => (
          <NavLink
            key={route.path}
            to={route.path}
            exact={route.exact}
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
          >
            <ListItem className={classes.menuItem} button>
              {route.name}
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        open={showSidebar}
        onClose={() => toggleDrawer("left", false)}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(Sidebar);
