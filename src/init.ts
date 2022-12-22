function scheme_for_appearance(appearance: string) {
  if (string.find(appearance, "Dark") !== null) return "Elemental";
  else return "Earthsong";
}

const config: Partial<Config> = {
  warn_about_missing_glyphs: false,
  color_scheme: scheme_for_appearance(wezterm.gui.get_appearance()),

  window_padding: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  font: wezterm.font("Cascadia Code"),

  hyperlink_rules: [
    // Linkify things that look like URLs and the host has a TLD name.
    // Compiled-in default. Used if you don't specify any hyperlink_rules.
    {
      regex: `\\b\\w+://[\\w.-]+\\.[a-z]{2,15}\\S*\\b`,
      format: "$0",
    },
    // Linkify things that look like URLs with numeric addresses as hosts.
    // E.g. http://127.0.0.1:8000 for a local development server,
    // or http://192.168.1.1 for the web interface of many routers.
    {
      regex: `\b\w+://(?:[\d]{1,3}\.){3}[\d]{1,3}\S*\b`,
      format: "$0",
    },
    // http://localhost:8000
    {
      regex: `\b\w+://localhost\S*\b`,
      format: "$0",
    },
  ],
}

export = config