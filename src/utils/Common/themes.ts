export const variablesColorsMap: Themes.ColorsMap = {
  "rgb(255, 255, 255)": "var(--bg-panel)",
  "rgb(252, 252, 252)": "var(--bg-panel)",
  "rgb(248, 248, 248)": "var(--bg-panel-hover)",
  "rgb(240, 240, 240)": "var(--bg-panel-hover)",
  "rgb(241, 249, 255)": "var(--bg-panel-hover)",
  "rgb(237, 245, 250)": "var(--bg-panel-hover)",
  "rgb(229, 229, 229)": "var(--borders)",
  "rgb(229, 229, 229) 1px 0px 0px 0px": `var(--borders) 1px 0px 0px 0px`,
  "rgb(229, 229, 229) 0px 1px 0px 0px": `var(--borders) 0px 1px 0px 0px`,
  "rgb(229, 229, 229) 0px 0px 0px 1px": `var(--borders) 0px 0px 0px 1px`,
  "rgb(239, 239, 239)": "var(--borders)",
  "rgb(217, 217, 217)": "var(--borders)",
  "rgb(212, 212, 212)": "var(--borders)",
  "rgb(218, 235, 247)": "var(--bg-panel-hover)",
  "rgb(191, 186, 252)": "var(--fg-component-disabled-row-active)",
  "rgb(180, 180, 250)": "var(--fg-component-disabled-row-active)",
  "rgb(179, 179, 179)": "var(--text-disabled)",
  "rgb(166, 172, 175)": "var(--text-disabled)",
  "rgb(123, 97, 255)": "var(--fg-component)",
  "rgb(68, 68, 68)": "var(--text)",
  "rgb(51, 51, 51)": "var(--text)",
  "rgb(44, 44, 44)": "var(--bg-toolbar)",
  "rgb(5, 5, 5)": "var(--text-active)",
  "rgb(0, 0, 0)": "var(--text-active)",
  "rgba(0, 0, 0, 0.06)": "var(--borders)",
  "rgba(0, 0, 0, 0.1)": "var(--borders)",
  "rgba(0, 0, 0, 0.15)": "var(--text)",
  "rgba(0, 0, 0, 0.2)": "var(--text)",
  "rgba(0, 0, 0, 0.3)": "var(--text-disabled)",
  "rgba(0, 0, 0, 0.4)": "var(--text)",
  "rgba(0, 0, 0, 0.6)": "var(--text)",
  "rgba(0, 0, 0, 0.5)": "var(--text)",
  "rgba(0, 0, 0, 0.75)": "var(--text)",
  "rgba(0, 0, 0, 0.8)": "var(--textActive)",
  "rgba(0, 0, 0, 0.9)": "var(--text)",
  "rgba(0, 0, 0, 0.95)": "var(--text)",
  "rgba(44, 44, 44, 0.8)": "var(--bg-toolbar)",
  "rgba(51, 51, 51, 0.3)": "var(--text-disabled)",
  "rgba(123, 97, 255, 0.4)": "var(--fg-component-disabled)",
  "rgba(255, 255, 255, 0)": "var(--bg-panel)",
  "rgba(255, 255, 255, 0.2)": "var(--bg-panel)",
  "rgba(255, 255, 255, 0.4)": "var(--bg-panel)",
  "rgba(255, 255, 255, 0.05)": "var(--bg-panel)",
  "rgba(255, 255, 255, 0.5)": "var(--bg-panel)",
  "rgba(255, 255, 255, 0.8)": "var(--text)",
  "rgba(255, 255, 255, 0.95)": "var(--bg-panel)",
  "rgb(24, 160, 251)": "var(--bg-toolbar-active)",
  "rgb(24, 160, 251) 0px 0px 0px 1px inset": `var(--bg-toolbar-active) 0px 0px 0px 1px inset`,
  "rgb(230, 230, 230) 0px 0px 0px 1px inset": "var(--text) 0px 0px 0px 1px inset",
  "rgb(230, 230, 230)": "var(--borders)",
  "rgb(230, 230, 230) 0px -1px": "var(--borders) 0px -1px",
  "rgb(27, 196, 125)": "var(--bg-beta-label)",
};

export const getColorsMap = (palette: Themes.Palette, currentPalette?: Themes.ColorsMap): Themes.ColorsMap => {
  const defaultColorsMap: Themes.ColorsMap = {
    "rgb(255, 255, 255)": palette["bg-panel"],
    "rgb(252, 252, 252)": palette["bg-panel"],
    "rgb(248, 248, 248)": palette["bg-panel-hover"],
    "rgb(240, 240, 240)": palette["bg-panel-hover"],
    "rgb(241, 249, 255)": palette["bg-panel-hover"],
    "rgb(237, 245, 250)": palette["bg-panel-hover"],
    "rgb(229, 229, 229)": palette["borders"],
    "rgb(229, 229, 229) 1px 0px 0px 0px": `${palette.borders} 1px 0px 0px 0px`,
    "rgb(229, 229, 229) 0px 1px 0px 0px": `${palette.borders} 0px 1px 0px 0px`,
    "rgb(229, 229, 229) 0px 0px 0px 1px": `${palette.borders} 0px 0px 0px 1px`,
    "rgb(239, 239, 239)": palette["borders"],
    "rgb(217, 217, 217)": palette["borders"],
    "rgb(212, 212, 212)": palette["borders"],
    "rgb(218, 235, 247)": palette["bg-toolbar-hover"],
    "rgb(191, 186, 252)": palette["fg-component-disabled-row-active"],
    "rgb(180, 180, 250)": palette["fg-component-disabled-row-active"],
    "rgb(179, 179, 179)": palette["text-disabled"],
    "rgb(166, 172, 175)": palette["text-disabled"],
    "rgb(123, 97, 255)": palette["fg-component"],
    "rgb(68, 68, 68)": palette.text,
    "rgb(51, 51, 51)": palette.text,
    "rgb(44, 44, 44)": palette["bg-toolbar"],
    "rgb(5, 5, 5)": palette["text-active"],
    "rgb(0, 0, 0)": palette["text-active"],
    "rgba(0, 0, 0, 0.06)": palette.borders,
    "rgba(0, 0, 0, 0.1)": palette.borders,
    "rgba(0, 0, 0, 0.15)": palette.text,
    "rgba(0, 0, 0, 0.2)": palette.text,
    "rgba(0, 0, 0, 0.3)": palette["text-disabled"],
    "rgba(0, 0, 0, 0.4)": palette.text,
    "rgba(0, 0, 0, 0.6)": palette.text,
    "rgba(0, 0, 0, 0.5)": palette.text,
    "rgba(0, 0, 0, 0.75)": palette.text,
    "rgba(0, 0, 0, 0.8)": palette["text-active"],
    "rgba(0, 0, 0, 0.9)": palette.text,
    "rgba(0, 0, 0, 0.95)": palette.text,
    "rgba(44, 44, 44, 0.8)": palette["bg-toolbar"],
    "rgba(51, 51, 51, 0.3)": palette["text-disabled"],
    "rgba(123, 97, 255, 0.4)": palette["fg-component-disabled"],
    "rgba(255, 255, 255, 0)": palette["bg-panel"],
    "rgba(255, 255, 255, 0.2)": palette["bg-panel"],
    "rgba(255, 255, 255, 0.4)": palette["bg-panel"],
    "rgba(255, 255, 255, 0.05)": palette["bg-panel"],
    "rgba(255, 255, 255, 0.5)": palette["bg-panel"],
    "rgba(255, 255, 255, 0.8)": palette.text,
    "rgba(255, 255, 255, 0.95)": palette["bg-panel"],
    "rgb(24, 160, 251)": palette["bg-toolbar-active"],
    "rgb(24, 160, 251) 0px 0px 0px 1px inset": `${palette["bg-toolbar-active"]} 0px 0px 0px 1px inset`,
    "rgb(230, 230, 230) 0px 0px 0px 1px inset": `${palette["bg-toolbar-active"]} 0px 0px 0px 1px inset`,
    "rgb(230, 230, 230)": `${palette.borders}`,
    "rgb(230, 230, 230) 0px -1px": `${palette.borders}  0px -1px`,
    "rgb(27, 196, 125)": `${palette["bg-beta-label"]}`,
  };

  if (currentPalette) {
    const updatedColorsMap: Themes.ColorsMap = {};
    const keys = Object.keys(currentPalette);

    for (const key of keys) {
      updatedColorsMap[currentPalette[key]] = defaultColorsMap[key];
    }

    return updatedColorsMap;
  }

  return defaultColorsMap;
};
