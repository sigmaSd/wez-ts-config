# wez-ts-config
wezterm-typescript-configuration

## Build
- `npm install`
- `npm buid`
- `sed -i '1s/^/local wezterm = require"wezterm"\n/' init.lua`

## Test
`wezterm --config-file init.lua`

## Why
Just to get completion and documentation in the ide (requires typing all wezterm builtins + copy paste docs)
