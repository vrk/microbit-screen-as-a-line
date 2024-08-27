
> Open this page at [https://vrk.github.io/microbit-screen-as-a-line/](https://vrk.github.io/microbit-screen-as-a-line/)

> Followed the tutorial at [https://www.youtube.com/watch?v=ztrm4XehfGo](https://www.youtube.com/watch?v=ztrm4XehfGo)

## Usage

### ``plotAt``

Use the ``plotAt`` block to render LEDs at an index location.

```blocks

for (let i = 0; i < 25; i++) {
    screenMagic.plotAt(i);
    basic.pause(500);
}

```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/vrk/microbit-screen-as-a-line** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/vrk/microbit-screen-as-a-line** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
