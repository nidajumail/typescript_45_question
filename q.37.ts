function make_shirts(size:string = "large", printMessage:string = "I Love Typescript"){
    console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt`)
}

make_shirts();
make_shirts('medium');
make_shirts('small', 'I Love Coding');