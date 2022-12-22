# wez-ts-config
wezterm-typescript-configuration

## Build
- `npm insatall`
- `npx tstl`
- `sed -i '1s/^/local wezterm = require"wezterm"\n/' init.lua`

## Test
`wezterm --config-file init.lua`
