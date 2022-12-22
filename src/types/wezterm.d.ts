/** @noSelf **/
declare namespace wezterm {
  const font: (_font: string) => void;

  namespace gui {
    const get_appearance: () => string;
  }
}


interface Config {
  warn_about_missing_glyphs: boolean,

  color_scheme: string,

  window_padding: {
    left: number,
    right: number,
    top: number,
    bottom: number,
  },

  font: void,

  hyperlink_rules: { format: string, regex: string, }[],
}
