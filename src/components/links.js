import React from "react";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  ul: {
    listStyleType: 'none',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
  li: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  },
  a: {
    textDecoration: 'none',
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '350px',
    height: '30px',
    padding: '10px',
    borderRadius: '15px',
    backgroundColor: 'hsl(0, 0%, 20%)',
    ':hover': {
      backgroundColor: 'hsl(75, 94%, 57%)',
      color: 'hsl(0, 0%, 12%)'
    }
  }
})
export default function Links() {
  return (
    <div>
      <ul className={css(styles.ul)}>
        <li className={css(styles.li)}>
          <a className={css(styles.a)} href="https://github.com/bouhvli" rel="noreferrer" target="_blank">
          GitHub
          </a>
        </li>
        <li className={css(styles.li)}>
          <a className={css(styles.a)} href="https://www.frontendmentor.io/profile/bouhvli" rel="noreferrer" target="_blank">
            Frontend Mentor
          </a>
        </li>
        <li className={css(styles.li)}>
          <a className={css(styles.a)} href="https://ma.linkedin.com/in/bouhali-hamza" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </li>
        <li className={css(styles.li)}>
          <a className={css(styles.a)} href="https://twitter.com/bouhvli" rel="noreferrer" target="_blank">
            X (Twitter)
          </a>
        </li>
        <li className={css(styles.li)}>
          <a className={css(styles.a)} href="https://www.instagram.com/bouhvli/" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}