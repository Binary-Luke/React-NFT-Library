import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
interface Props {
  title: String;
}

const useStyles = makeStyles({
  background: {
      backgroundImage: `linear-gradient(rgba(0, 422, 85) 0%, rgba(121,147,163,1) 47%, rgba(249,249,249,1) 900%)`,
      width: '100%',
      height: '90%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
  },
  main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'lightgreen',
  },
  button_text: {
      color: 'purple',
      textDecoration: 'none',
  },
});

export const Home = ( props: Props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={`${classes.background}`}>
        <div className={classes.main_text}>
          <h1>{props.title}</h1>
          <Button variant="outlined" size="large">
            <Link to='/books' className={classes.button_text}>Take me to my Library!</Link>
          </Button>
        </div>
      </div>
    </>
  )
}