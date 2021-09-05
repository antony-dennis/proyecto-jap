var productosArray = [];
minCount = undefined;
maxCount = undefined;
const ORDER_ASC_BY_COST ="Menor Precio";
const ORDER_DES_BY_COST ="Mayor Precio";
const ORDER_DES_BY_soldCount ="Vendidos";
currentSortCriteria = undefined;







function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < productosArray.length; i++) {
        let producto = productosArray[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.cost) <= maxCount))){


        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ producto.name + `</h4>
                            <small class="text-muted">` + producto.currency + ` ` + producto.cost + `</small>
                        </div>
                        <p class="mb-1">` + producto.description + `</p>
                    </div>
                </div>
            </a>
            `
            }

        document.getElementById("productos-list-container").innerHTML = htmlContentToAppend;
    }
}
//Boton limpiar
document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProductsList();
});

//Filtro Precios
document.getElementById("rangFiiltPrice").addEventListener("click", function () {
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
        minCount = parseInt(minCount);
    }
    else {
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
        maxCount = parseInt(maxCount);
    }
    else {
        maxCount = undefined;
    }
    let htmlContentToAppend = "";
    for (let i = 0; i < productosArray.length; i++) {
        let producto = productosArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(producto.cost) >= minCount)) &&
        ((maxCount == undefined) || (maxCount != undefined && parseInt(producto.cost) <= maxCount))) {






            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ producto.name + `</h4>
                            <small class="text-muted">` + producto.currency + ` ` + producto.cost + `</small>
                        </div>
                        <p class="mb-1">` + producto.description + `</p>
                    </div>
                </div>
            </a>
            `;
        }

        document.getElementById("productos-list-container").innerHTML = htmlContentToAppend;
    }



});

//Ordenar Array
function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);

            if ( acost < bcost ){ return -1; }
            if ( acost > bcost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DES_BY_COST){
        result = array.sort(function(a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);

            if ( a.cost > b.cost ){ return -1; }
            if ( a.coste < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DES_BY_soldCount){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;

}


//Ordenar y mostrar
function sortAndShowProducts(sortCriteria, Array){
    currentSortCriteria = sortCriteria;

    if(Array != undefined){
        productosArray = Array;
    }

    productosArray = sortProducts(currentSortCriteria,productosArray);

    //Muestro las categorías ordenadas
    showProductsList();
}

















document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            productosArray = resultado.data;
            //llamar funcion con la que hago cosas
            showProductsList();

        }
    });


    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DES_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DES_BY_soldCount);
    });

});