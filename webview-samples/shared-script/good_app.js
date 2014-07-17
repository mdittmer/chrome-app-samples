// This is the right thing to do:
//
// Generated for script text that injects a script tag into the DOM. The script
// tag will contain the script we intend to run wrapped in an anonymous
// function. This way, the script we wish to run can access the guest page
// scripting context.
function generateScriptText(fn) {

  // fn is going to be interpreted as a quoted string literal. As such, we need
  // to escape double-quotes in the string, and either:
  // (a) strip newlines and comments, or
  // (b) replace newlines with the character sequence "\n" (a slash followed by
  //     an n) and allow comments to be parsed as part of the function.

  // (a):
  // var fnText = fn.toString()
  //   .replace(/"/g, '\\"')                         // Escape double-quotes.
  //   .replace(/[/][/].*\r?\n/g, ' ')               // Rmv single-line comments.
  //   .replace(/\r?\n|\r/g, ' ')                    // Rmv newlines.
  //   .replace(/[/][*]((?![*][/]).)*[*][/]/g, ' '); // Rmv multi-line comments.

  // (b):
  var fnText = fn.toString()
    .replace(/"/g, '\\"')           // Escape double-quotes.
    .replace(/(\r?\n|\r)/g, '\\n'); // Insert newlines correctly.

  var scriptText =
      '(function() {\n' +
      '  var script = document.createElement("script");\n' +
      '  script.innerHTML = "(function() { (' + fnText + ')(); })()" \n'+
      '  document.body.appendChild(script);\n' +
      '})()';
  return scriptText;
}

// When our app loads, setup a listener that will execute our script after the
// target guest page has loaded.
window.addEventListener('load', function() {
  window.console.log('App loaded');
  var webview = document.querySelector('webview');
  webview.addEventListener('loadstop', function() {
    window.console.log('Webview page loaded', webview.src);
    if (webview.src === 'http://rawgit.com/foam-framework/foam/master/demos/Tags.html') {
      window.console.log('Executing script');
      webview.executeScript({ code: generateScriptText(addMoreDragons) });
    }
  });
});
