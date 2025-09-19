/** @format */
// tailwind codes
module.exports = {
  //...
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "blue",
          secondary: "teal",
        },
      },
    ],
  },
};
<html data-theme='cupcake'></html>;
