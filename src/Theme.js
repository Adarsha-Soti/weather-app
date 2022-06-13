import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    active: "#69B8F9",
    customBlue: "#07092F",
    customBlue1: "393f6c",
    customPurple: "#6875F5",
    lightGray: "#F9F9F9",
    customGray: "#C4C4C4",
    customGray1: "#EDF2F7",
    darkerGray: "#727278",
    lightWhite: "#F9F9F9",
    customBlack1: "#545454",
  },
  icons: {
    locationGps: {
      path: (
        <path
          fill="currentColor"
          d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z"
        />
      ),
    },
  },
});

export default Theme;
