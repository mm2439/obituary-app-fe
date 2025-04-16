import localFont from "next/font/local";


const robotoFlex = localFont({ src: '../public/fonts/RobotoFlex-VariableFont.ttf'})

const sourceSerif = localFont({
  src: [{ path: "../public/fonts/SourceSerif4-VariableFont.ttf" }],
  variable: "--font-sourceserif",
});
const greatVibes = localFont({
  src: [{ path: "../public/fonts/GreatVibes-Regular.ttf" }],
  variable: "--font-greatvibes",
});




export { robotoFlex, sourceSerif, greatVibes };
