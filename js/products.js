var productsurlArray = [];
function showItemsList(array){

    let item = "";
    for(let i = 0; i < array.length; i++){
        let pos = array[i];

        

        document.getElementById("listado").innerHTML = item;
    }
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
//elementos HTML presentes.