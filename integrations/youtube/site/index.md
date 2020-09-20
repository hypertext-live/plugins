+++
title = "Youtube"
description = "Embed a youtube video"
+++

## {{title}}

{{description}}

```handlebars
\{{>youtube id="8WTR8Mk9Qtk" width=560 height=315}}
```

* `id` The video identifier (required).
* `width` The video width (required).
* `height` The video height (required).
*
### Schema

```json
{{include ../schema.json}}
```

### Demo

{{>youtube id="8WTR8Mk9Qtk" width=560 height=315}}
