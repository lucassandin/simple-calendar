export const alterTheme = (bColor, color) => ({
  type: "ALTER_THEME",
  payload: { backgroundColor: bColor, color: color }
});
