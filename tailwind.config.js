/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        firebrick: {
          "100": "#b1081a",
          "200": "rgba(177, 8, 26, 0.2)",
        },
        seashell: {
          "100": "#fff6f2",
          "200": "rgba(255, 246, 242, 0.7)",
        },
        white: "#fff",
        gray: {
          "100": "#767678",
          "200": "#231f1e",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(118, 118, 120, 0.7)",
          "500": "rgba(0, 0, 0, 0.3)",
        },
        whitesmoke: "#f1f1f1",
        dimgray: "#686868",
        brown: "#aa363a",
        black: "#000",
        gainsboro: {
          "100": "#dfdfdf",
          "200": "#d9d9d9",
          "300": "rgba(223, 223, 223, 0.6)",
        },
        steelblue: "#4ba1da",
      },
      fontFamily: {
        armstrong: "Armstrong",
        "leto-sans": "'Leto Sans'",
        roboto: "Roboto",
        montserrat: "Montserrat",
        "flamante-sans": "'Flamante Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "6xs-4": "6.4px",
      },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      sm: "14px",
      "4xs": "9px",
      "3xs": "10px",
      base: "16px",
      "mini-4": "14.4px",
      "sm-5": "13.5px",
      "smi-6": "12.6px",
      "15xl": "34px",
      "13xl": "32px",
      "xs-2": "11.2px",
      "lgi-2": "19.2px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
