module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "5px 5px 10px rgba(74, 169, 251, 0.23)",
        md: "8px 8px 16px rgba(74, 169, 251, 0.23)",
        DEFAULT:
          "0 1px 3px 0 rgba(74, 169, 251,  0.1), 0 1px 2px 0 rgba(74, 169, 251,  0.06)",
      },
    },
  },
};
