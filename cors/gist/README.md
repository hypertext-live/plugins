+++
title = "Gist"
description = "Embed a github gist"
+++

## {{title}}

{{description}}

```handlebars
\{{>gist username="tmpfs" id="6fd0119bc03b331c5752eb88910d7734"}}
```

* `username` The github username (required).
* `id` The gist identifier (required).

### Schema

```json
{{include ../schema.json}}
```

### Demo

{{>gist username="tmpfs" id="6fd0119bc03b331c5752eb88910d7734"}}

