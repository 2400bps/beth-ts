import "./lib/network.js"
// import { XMLHttpRequest } from 'xmlhttprequest';
const { XMLHttpRequest } = require("xmlhttprequest");


class Beth {
    constructor() {}

    public getGasPrice = (): void => getGasPrice();

}



function getGasPrice(): void {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ethgasstation.info/json/ethgasAPI.json');
    xhr.onload = function() { 
        console.log(xhr.status)
        console.log(xhr.responseText)
    //     return {
    //     ok: xhr.status >= 200 && xhr.status < 300,
    //     status: xhr.status,
    //     statusText: xhr.statusText,
    //     headers: xhr.getAllResponseHeaders(),
    //     data: xhr.responseText,
    //     json: <T>() => JSON.parse(xhr.responseText) as T,
    //   };
     };
    xhr.send();
}

// getGasPrice();

// getGasPrice()

export default Beth;
