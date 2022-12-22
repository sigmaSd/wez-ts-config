/** @noSelf **/
declare namespace wezterm {
  const font: (_font: string) => void;

  interface Gui {
    get_appearance: () => string;
  }
  const gui: Gui;

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

  hyperlink_rules: [
    {
      format: string,
      regex: string,
    },
    {
      format: string,
      regex: string,
    },
    {
      format: string,
      regex: string,
    },
  ],

}
