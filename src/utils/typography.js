// https://github.com/KyleAMathews/typography.js
import Typography from "typography";
import funstonTheme from "typography-theme-funston";

const typography = new Typography({
  ...funstonTheme,
  // Already included by default but just for clarity,
  // replaces Meyer reset in global styles
  includeNormalize: true,
  headerColor: "#005875",
  bodyColor: "#000",
  /* overrideThemeStyles: () => ({
        body: { 'background-color': "#F5F5F5" }
    }), */
});

export default typography;
