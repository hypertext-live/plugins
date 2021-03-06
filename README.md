## Plugins

Plugins should bundle assets wherever possible; if a plugin requires access to a third-party domain it must be placed in the `cors` folder and list the plugin `origins`.

* [cors](/cors) Cross-origin integrations.
* [font](/font) Font packs.
* [lib](/lib) Libraries and frameworks.
* [std](/std) Standard library.

See [blueprints][], [documentation][] and [syntax][] for plugins that are deeply integrated with the platform tools.

[blueprints]: https://github.com/uwe-app/blueprints
[documentation]: https://github.com/uwe-app/documentation
[syntax]: https://github.com/uwe-app/syntax
