# MFE-starterkit
- The purpose of this project provides a Starter Kit of Micro Frontends using Module Federation.

## Module Federation
- Module Federation is a feature built into Webpack 5 that makes it easy to share code between applications.
- Module Federation is one way to achieve runtime dependecies which means MFEs are independently deployed to production and are consumed at runtime by the Shell.

## Terminologies
- shell (host): a Webpack build that is initialized first during a page load. It will consume MFEs.
- remote: another Webpack build. it will be consumed by a shell
- bi-directional-shell: It will consume MFEs and also be consumed by a shell.