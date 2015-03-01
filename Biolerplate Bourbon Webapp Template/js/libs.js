/* ************************************************************************ */
/* Avoid `console` errors in browsers that lack a console.                  */
/* ************************************************************************ */
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* ************************************************************************ */
/* Imports - Prepros will combine and minify everything below               */
/* ************************************************************************ */

/* Main JavaScript Libraries */
//@prepros-append libs/modernizr/modernizr-2.8.3.min.js
//@prepros-append libs/respond/respond-1.4.2.min.js
//@prepros-append libs/jquery/jquery-1.11.2.min.js
//@prepros-append libs/detectmobile/detectmobile.min.js


/* Component Libraries */

