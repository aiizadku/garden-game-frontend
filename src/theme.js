import NerkoOne from './Fonts/NerkoOne-SemiBold.ttf';
 
const NerkoOne = {
 fontFamily: 'NerkoOne',
 fontStyle: 'semi-bold',
 fontDisplay: 'swap',
 fontWeight: '600',
 src: `
   local('NerkoOne'),
   local('NerkoOne-Regular'),
   url(${NerkoOne}) format('ttf')
 `,
 unicodeRange:
   'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['"Open Sans"', 'NerkoOne', 'Roboto'].join(','),
       }
 
})

export default theme;