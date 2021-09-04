var productosArray = [];







function showProductsList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < productosArray.length; i++) {
        let producto = productosArray[i];



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


        document.getElementById("productos-list-container").innerHTML = htmlContentToAppend;
    }
}

document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

    showProductsList();
});

//Filtro diseñad
document.getElementById("rangFiiltPrice").addEventListener("click", function () {
    let valMin = document.getElementById("rangeFilterCountMin").value;
    let valMax = document.getElementById("rangeFilterCountMax").value;
    
    
    if ((valMin.length==0) || (valMax.length==0)) {
        
        
    }
    else {
        let htmlContentToAppend = "";
    document.getElementById("productos-list-container").innerHTML = htmlContentToAppend;

        for (let i = 0; i < productosArray.length; i++) {
            let producto = productosArray[i];


            if (parseInt(producto.cost) <= valMax && parseInt(producto.cost) >= valMin) {

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



        }







        document.getElementById("productos-list-container").innerHTML = htmlContentToAppend;
    }
});


















document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            productosArray = resultado.data;
            //llamar funcion con la que hago cosas
            showProductsList();

        }
    });

});