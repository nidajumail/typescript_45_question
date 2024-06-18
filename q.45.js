function create_car(manufacturer, model, options) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = create_car("toyota", "corolla", "color:black");
console.log(my_car);
