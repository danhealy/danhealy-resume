# README

This is the repo for my resume static site.

It was built using the following:
* Ruby 2.7.2
* Nanoc 4.12.12
* Google fonts, FontAwesome

Based off the project: https://github.com/arkency/nanoc-tailwind-starter

Original Readme follows:

# Nanoc + TailwindCSS

Starter kit for static sites on [nanoc](https://nanoc.ws) with TailwindCSS styling.

## Initial setup

It is assumed you already have Ruby with Bundler and Node present.

```
./bin/setup
```

## Build for production

One-time processing with optimizations.

```
./bin/build
```

## Build for development

Starts in foreground, live reloads HTML and CSS changes.

```
./bin/server
open http://localhost:3000/
```

## Unpacking latest release into current directory

```
curl -s https://api.github.com/repos/arkency/nanoc-tailwind-starter/releases/latest |\
  grep tarball_url |\
  cut -d'"' -f4 |\
  xargs -n 1 curl -sSL |\
  tar -xz --strip-components=1
```
