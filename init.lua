--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local function scheme_for_appearance(appearance)
    if ({string.find(appearance, "Dark")}) ~= nil then
        return "Elemental"
    else
        return "Earthsong"
    end
end
local config = {
    warn_about_missing_glyphs = false,
    color_scheme = scheme_for_appearance(wezterm.gui:get_appearance()),
    window_padding = {left = 0, right = 0, top = 0, bottom = 0},
    font = wezterm.font("Cascadia Code"),
    hyperlink_rules = {{regex = "\\b\\w+://[\\w.-]+\\.[a-z]{2,15}\\S*\\b", format = "$0"}, {regex = "\bw+://(?:[d]{1,3}.){3}[d]{1,3}S*\b", format = "$0"}, {regex = "\bw+://localhostS*\b", format = "$0"}}
}
local ____exports = config
return ____exports
