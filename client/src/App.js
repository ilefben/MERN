import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import { Collapse, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} alt="recipe" height="60" />
        <Typography className={classes.heading} variant="h2" align="center">
          WeRecipe
        </Typography>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler /*onClick={toggle}*/ />
        <Collapse /*</AppBar>isOpen={isOpen} */ navbar>
          <Nav className="ml-auto">
            <NavItem>
              <span>
                <strong>User Name</strong>
              </span>
            </NavItem>
            <NavItem>Logout</NavItem>
            <NavItem>RegisterModal</NavItem>
            <NavItem>LoginModal</NavItem>
          </Nav>
        </Collapse>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};
export default App;
