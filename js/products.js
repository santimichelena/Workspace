var productsurlArray = [];
var miniCount = undefined;
var maxiCount = undefined;
function showItemsList(){

    let contenido = "";
    for(let i = 0; i < productsurlArray.length; i++){
    let products = productsurlArray[i];
    
    if (((miniCount == undefined) || (miniCount != undefined && parseInt(products.productCount) >= miniCount)) &&
            ((maxiCount == undefined) || (maxiCount != undefined && parseInt(products.productCount) <= maxiCount))){
  
        contenido +=`
    <a href="category-info.html" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + products.imgSrc + `" class="img-thumbnail">
            </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ products.name +`</h4>
                </div>
                <p class="mb-1">` + products.description + `</p>
                <div class="jaja"> ` + "Precio:" + " " + products.cost +`</div>
            </div>
        </div>
    </a>
    `
    
  
    }
}
        
        

        document.getElementById("listado1").innerHTML = contenido;
    }


document.addEventListener("DOMContentLoaded", function (e) {
getJSONData(PRODUCTS_URL).then(function(resultObj){
    if(resultObj.status === "ok")
    {
        productsurlArray = resultObj.data;
        showItemsList(productsurlArray)
    }
});
    });
     //Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes



