/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        redPrimary: "#B90030",
        bluePrimary: "#0030B9",
        blueDark: "#001245",

        black: "#141414",
        blackFull: "#111111",
        white: "#FFFFFF",
        gray100: "#F2F4F8",
        gray400: "#878B8E",
        gray600: "#C3C7CB",
        borderColor: "#DADCDF",
        label: "#899097",
        input: "#EDEEEF",
        placeholder: "#86898B",
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      fontFamily: {
        archivo: "Archivo",
        manrope: "Manrope",
        electrolize: "Electrolize",
      },
    },
  },
  plugins: [],
};
