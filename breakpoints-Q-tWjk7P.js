/** Breakpoints for responsive design. The values are the max width of the screen for each breakpoint. */
var Breakpoints;
(function (Breakpoints) {
    Breakpoints[Breakpoints["MOBILE"] = 767] = "MOBILE";
    Breakpoints[Breakpoints["TABLET"] = 1151] = "TABLET";
    Breakpoints[Breakpoints["DESKTOP"] = 1365] = "DESKTOP";
})(Breakpoints || (Breakpoints = {}));

export { Breakpoints as B };
