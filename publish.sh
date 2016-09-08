#!/usr/bin/env bash

## create preview.md
$(
  cd src;
  node index.js debug > preview.md
);

markdown-include markdown.json;
