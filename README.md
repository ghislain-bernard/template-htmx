## template-htmx

[![htmx.webp](htmx.webp)](https://htmx.org) [![tailwind.webp](tailwind.webp)](https://tailwindcss.com)  [![parcel.webp](parcel.webp)](https://parceljs.org)

### usage

```bash
$ corepack pnpm run-script version

> @gbernard/template-htmx@0.0.1 version /home/user/git/template-htmx
> echo $npm_package_version

0.0.1

$ corepack pnpm install

$ NODE_ENV=production corepack pnpm run-script build

> @gbernard/template-htmx@0.0.1 prebuild /home/user/git/template-htmx
> rimraf .parcel-cache dist


> @gbernard/template-htmx@0.0.1 build /home/user/git/template-htmx
> by-node-env


> @gbernard/template-htmx@0.0.1 build:production /home/user/git/template-htmx
> parcel build --no-autoinstall --no-source-maps

✨ Built in 3.13s

dist/index.html                                    970 B    231ms
dist/favicon.935e6546.ico                          318 B    820ms
dist/htmx.e7073fe7.webp                         14.58 kB    113ms
dist/avatar.abb72fda.webp                       18.74 kB    129ms
dist/template-htmx.df15a8c0.css                  5.75 kB    202ms
dist/inter-latin-300-normal.6e5144af.woff2      24.06 kB    128ms
dist/inter-latin-300-normal.c524440e.woff       31.54 kB    185ms
dist/inter-latin-600-normal.cd71eff6.woff2       24.3 kB    129ms
dist/inter-latin-600-normal.27507079.woff       31.78 kB    185ms
dist/material-icons-outlined.af2186d9.woff2    155.28 kB    819ms
dist/material-icons-outlined.25bc5969.woff     182.03 kB    185ms
dist/template-htmx.63d0f253.js                  46.01 kB    865ms

> @gbernard/template-htmx@0.0.1 postbuild /home/user/git/template-htmx
> rimraf .parcel-cache

$ NODE_ENV=production corepack pnpm start

> @gbernard/template-htmx@0.0.1 start /home/user/git/template-htmx
> by-node-env


> @gbernard/template-htmx@0.0.1 start:production /home/user/git/template-htmx
> tsx server.ts

Listening on http://localhost:3000 [production] 
^C

$ corepack pnpm run-script lint

> @gbernard/template-htmx@0.0.1 lint /home/user/git/template-htmx
> eslint --max-warnings=0 server.ts src/script.ts

$ corepack pnpm exec htmlhint dist

   Config loaded: /home/user/git/template-htmx/.htmlhintrc

Scanned 1 files, no errors found (15 ms).

$ corepack pnpm run-script clean

> @gbernard/template-htmx@0.0.1 clean /home/user/git/template-htmx
> rimraf .parcel-cache dist

$ make clean

/!\ cleaning...
rm -f -rv dist
rm -f -r .parcel-cache node_modules
...done
```

> MIT License  
> ghislain.bernard@gmail.com
