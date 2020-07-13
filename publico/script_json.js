console.log("============ INÍCIO SCRIPT_JSON.JS ==============");
var produtos = {
    "listaDeProdutos":[
        {
            "codigo": "PROD_A",
            "preço": 45.5
        },
        {
            "codigo": "PROD_B",
            "preço": 60.4
        },
        {
            "codigo": "PROD_C",
            "preço": 100
        }
    ]
};
console.log(produtos);
console.log(JSON.stringify(produtos));

console.log("============ FIM SCRIPT_JSON.JS =============");