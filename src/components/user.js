import React from "react";
import { StyleSheet, css } from "aphrodite";
import image from '../assets/images/image.jpg';

const styles = StyleSheet.create({
  'User-containr': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(0, 0%, 12%)',
  },
  ProfileImage: {
    borderRadius: '50%',
    width: '100px',
    marginTop: '5%',
  },
  UserName: {
    fontSize: '24px',
    fontWeight: 700,
    marginTop: '35px',
    marginBottom: '8px',
  },
  'User-address': {
    color: 'hsl(75, 94%, 57%)',
    fontWeight: 700,
    fontSize: '14px',
    margin: '0',
  },
  p: {
    fontSize: '14px',
    marginTop: '35px',
  }
});

export default function UserDetails() {
  return (
    <div className={css(styles['User-containr'])}>
      <img className={css(styles.ProfileImage)} src={image} alt="profile pic"/>
      <p className={css(styles.UserName)}>
        Hamza BOUHALI
      </p>
      <p className={css(styles['User-address'])}>
        Casablanca, Morocco
      </p>
      <p className={css(styles.p)}>
        "Full-Stack developer and mobile enthusiast"
      </p>
    </div>
  );
};