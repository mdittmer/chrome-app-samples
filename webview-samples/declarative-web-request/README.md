# Declarative Web Request API

This sample shows how to use the declarative web request API with a
webview. The app implements a simple content blocker for URLs that match a
[RE2 regular expression](https://code.google.com/p/re2/wiki/Syntax). The
default pattern blocks hosts that contain `blogspot.` (such as blogspot.com
blogs) or `gstatic.` (such as thumbnails in Google image search). Top frame
and sub-frame navigation redirects the whole webview to a "page blocked" page
(see screenshot left). Image loads are redirected to a dummy image that
contains a shortened version of the image URL as text (see screenshot
right). The user can modify the URL matching pattern using a form on the
top-right. Content blocking actions are logged beneath the form on the
top-right.

## Resources

* [Declarative Web Request API](https://developer.chrome.com/extensions/declarativeWebRequest)
* [Webview](http://developer.chrome.com/apps/app_external.html#webview)
* [Permissions](http://developer.chrome.com/apps/manifest.html#permissions)


## Screenshot

![screenshot](https://raw.github.com/GoogleChrome/chrome-app-samples/webview-samples/declarative-web-request/assets/screenshot_1280_800.png)
