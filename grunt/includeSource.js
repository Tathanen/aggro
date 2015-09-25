"use strict";

module.exports = {
  options: {
    templates: {
      html: {
        js: '<script src="/{filePath}"></script>'
      }
    }
  },
  index: {
    files: {
      "build/index.html": "source/modules/_app/templates/index.html"
    }
  }
};
