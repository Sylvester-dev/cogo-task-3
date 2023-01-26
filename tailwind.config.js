/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-25": "#fcfcfd",
        "primary-501": "#f9f5ff",
        "primary-7001": "#6941c6",
        "gray-2001": "#eaecf0",
        "primary-6001": "#7f56d9",
        "base-white1": "#fff",
        "gray-3001": "#d0d5dd",
        "gray-7001": "#344054",
        "gray-6001": "#475467",
        "gray-9001": "#101828",
      },
      fontFamily: { "text-sm-medium1": "Inter" },
      borderRadius: { small: "28px", base: "200px" },
    },
    fontSize: { sm: "12px", base: "14px", lg: "16px", xl: "24px" },
  },
};
