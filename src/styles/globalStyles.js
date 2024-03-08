import { StyleSheet } from "aphrodite";

const globalStyles = StyleSheet.create({
  '@global': {
    ':root': {
      '--primary-green': 'hsl(75, 94%, 57%)',
      '--neutral-white': 'hsl(0, 0%, 100%)',
      '--neutral-grey': 'hsl(0, 0%, 20%)',
      '--neutral-dark-grey': 'hsl(0, 0%, 12%)',
      '--neutral-off-black': 'hsl(0, 0%, 8%)',
      '--font-size': '14px',
      '--font-family': '"Inter", sans-serif',
      '--font-weight-regular': '400',
      '--font-weight-medium': '600',
      '--font-weight-bold': '700',
    },
  },
});

export default globalStyles;