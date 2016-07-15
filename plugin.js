var minify = Npm.require('html-minifier').minify;
var marked = Npm.require('marked');

Plugin.registerSourceHandler('var.md', {
  isTemplate: true,
  archMatching: 'web'
}, function(compileStep) {

  var contents = compileStep.read().toString('utf8');

  marked.setOptions({
    gfm: true
  });

  contents = marked(contents)

  var newPath = compileStep.inputPath;
  newPath = newPath.replace(/\\/g, "/");
  newPath = newPath.replace(".var.md", ".js");

  var ContainerName =  newPath.replace(".js","").replace(/\//g,"_");

  var content = minify(contents.replace(/'/g, "\\'"), {
        collapseWhitespace : true,
        conservativeCollapse : true,
        removeComments : true,
        minifyJS : true,
        minifyCSS: true,
      });

  var results = "this.md_"+ContainerName+"='"+content+"';" ;

  compileStep.addJavaScript({
    path : newPath,
    data : results.replace(/\n/g, '\\n'),
    sourcePath : compileStep.inputPath
  });

});
