# wez-ts-config
wezterm-typescript-configuration

## Build
- `npm install`
- `npm buid`
- `sed -i '1s/^/local wezterm = require"wezterm"\n/' init.lua`

## Test
`wezterm --config-file init.lua`
