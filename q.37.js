function make_shirts(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("You selected ".concat(size, " size shirt with ").concat(printMessage, " prints on shirt"));
}
make_shirts();
make_shirts('medium');
make_shirts('small', 'I Love Coding');
