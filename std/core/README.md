# Core

The `std::core` plugin provides the primary layout `std::core::main`, standard partials and a standard stylesheet.

The layout uses the provided partials so that users of this plugin can override partials as the primary technique for customizing markup. If overriding the supplied partials is not sufficient users can create their own layout instead.

The `example` directory contains a project that can be used by plugin developers to view the stylesheet rendering:

```
uwe dev example
```
