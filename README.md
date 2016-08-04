# Influx Bootstrap Theme v0.10

This is the official theme used to build the UI of our web applications. As the theme is used within each application new components & tools are added, and older components are upgraded. [alexpaxton](https://github.com/alexpaxton) will be managing the changelog and direction of the project.
The goal of the project is to expedite the development of our products' interfaces, as well as maintaining a clear and consistent design language across all user touchpoints. Since there are not styles in the theme for *every* standard component, the primary goal is to have something in the theme for them all. Other goals include finishing documentation for everything currently lacking.

## Theme Docs

Currently working on writing more complete docs for each component, standard and custom. My goal is to not only show how to implement the component, but also shed some light on the design theory behind it. This will hopefully empower whoever is building the UI to make more independent decisions about the design and be effective in doing so.

Theme | Notes
--- | ---
[Official Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/index.html) | Primary theme used by Influx applications
[Dark Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/dark-theme.html) | In pretty rough shape, don't think any appplications use this theme currently. Long term goal is to integrate the dark styles into the *Primary Theme*
[Corporate Website Theme](http://influxdata.github.io/design.influxdata.com/bootstrap-theme/web-theme.html) | Only used on the new `www.influxdata.com` website. Documentation is near non-existant, theme changes often.

## Next Release v0.11

- A veriety of tab styles to theme and extend Bootstrap's `Nav` component. Needed these for a long time
- Polishing code styles, still a little rough
- Add Bootstrap's `Popover` component to the theme and style it
- Write docs for `Progress Bar` component
- Add size modifizers to the `Progress Bar` component
- "Compact" version of `.panel-collapse`
- Write docs for `.panel-collapse` component

### Changelog

**0.10**
- Re-designed alert styles, now has the option for an icon, and dismissable alerts are styled
- Different modifiers for `.panel-collapse` intended for use in Cloud's UI
 - `Mint` theme for Kapacitor Nodes
 - `Frost` theme for Grafana Nodes
- Color palette now available in theme
- New style for code blocks (purple to match light theme of Influx Docs)

**0.9**
- Information from this time period is unreliable at best but highly coveted
