# Influx Bootstrap Theme v0.11

This is the official theme used to build the UI of our web applications. As the theme is used within each application new components & tools are added, and older components are upgraded. [alexpaxton](https://github.com/alexpaxton) will be managing the changelog and direction of the project.
The goal of the project is to expedite the development of our products' interfaces, as well as maintaining a clear and consistent design language across all user touchpoints. Since there are not styles in the theme for *every* standard component, the primary goal is to have something in the theme for them all. Other goals include finishing documentation for everything currently lacking.


## How to Use

This theme uses a custom icon font instead of the default `Glyphicons` that comes with Bootstrap, you will need to include the font files in your project. Once you have copied the files to your project open `bootstrap-theme.min.css` and locate `../fonts` and replace with the correct path.

**CSS**
```
/dist/css/bootstrap.min.css
/dist/css/bootstrap-theme.min.css
/dist/css/bootstrap-theme.min.css.map
/jquery-ui/jquery-ui.css (Only if using Slider component)
````
**Javascript**
```
/dist/js/bootstrap.min.js
/jquery-ui/jquery-ui.min.js (Only if using Slider component)
```
**Fonts**
```
/fonts/icomoon.eot
/fonts/icomoon.svg
/fonts/icomoon.ttf
/fonts/icomoon.woff
/fonts/icomoon.woff2
```

## Theme Docs

Currently working on writing more complete docs for each component, standard and custom. My goal is to not only show how to implement the component, but also shed some light on the design theory behind it. This will hopefully empower whoever is building the UI to make more independent decisions about the design and be effective in doing so.

| Theme | Notes |
|:--- |:--- |
[Official Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/index.html) | Primary theme used by Influx applications |
[Dark Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/dark-theme.html) | In pretty rough shape, don't think any appplications use this theme currently. Long term goal is to integrate the dark styles into the *Primary Theme* |
[Corporate Website Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/web-theme.html) | Only used on the new `www.influxdata.com` website. Documentation is near non-existant, theme changes often. |

If you need help implementing Bootstrap specifcally check out the very handy [Bootstrap 3 Docs](http://getbootstrap.com/getting-started/)

### Boilerplate Files

There is one main decision to consider: to make the navbar `fixed` or not. As a general rule use a `fixed` navbar when the content is likely to overflow the viewport (which is almost all cases). Having a fixed navbar contributes to the UI feeling like software and not just a website. Below are some boilerplate HTML files to help get you started:

- [Fixed Navbar (Light)](/boilerplate/fixed-nav-light/index.html)
- [Fixed Navbar (Dark)](/boilerplate/fixed-nav-dark/index.html)
- [Static Navbar (Light)](/boilerplate/static-nav-light/index.html)
- [Static Navbar (Dark)](/boilerplate/static-nav-light/index.html)

## Next Release v0.12
- TBD

### Changelog

**0.11**
- Adjusted code block styles, less harsh on the retina
- Created 2 variations on Bootstrap's standard `nav` component. Both of these began as custom Enterprise styles, but it makes more sense to integrate them into the theme
- Dismissable tabs UI. Looks great, zero functionality
- Organized docs more
- If `span.icon` is the first child within `.panel-title` it adds a subtle margin to look breathable
- Code highlighting, manual only
- New docs for `Progress Bar` component
- Size modifizers for the `Progress Bar` component
- Styled Bootstrap's `Popover` component and added contextual alternatives
- New docs for `Collapsible Panels` custom component
- Added size modifier `panel-collapse-sm` for compact panels

**0.10**
- Re-designed alert styles, now has the option for an icon, and dismissable alerts are styled
- Different modifiers for `.panel-collapse` intended for use in Cloud's UI
 - `Mint` theme for Kapacitor Nodes
 - `Frost` theme for Grafana Nodes
- Color palette now available in theme
- New style for code blocks (purple to match light theme of Influx Docs)

**0.9**
- Information from this time period is unreliable at best but highly coveted
