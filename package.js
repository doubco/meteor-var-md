Package.describe({
  name: "doubco:meteor-var-md",
  summary: "Compiles markdown files into JS variables.",
  version: "0.0.1",
  git: "https://github.com/doubco/meteor-var-md.git"
});

Package.registerBuildPlugin({
  name: "compileMarkdownAsJSVars",
  sources: [
    'plugin.js'
  ],
  npmDependencies : {
    'html-minifier': '0.7.2',
    'marked': '0.3.5'
  }
});
