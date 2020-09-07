var product = {};
var comments = []; 

function showImagesProduct(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImages").innerHTML = htmlContentToAppend;
    }
}

function showComments(array){
    let htmlComments = "";
    
    for(let i = 0; i < array.length; i++){
        let comentarios = array [i];

    htmlComments +=  '<br></br>' + '<a></a> <hr></hr>' + comentarios.user + ":" + " " + comentarios.description + " " + comentarios.score + '<br><br>';

    document.getElementById("productComentarios").innerHTML = htmlComments;

    } 
}







    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                product = resultObj.data;
    
                let productNameHTML  = document.getElementById("productName");
                let productDescriptionHTML = document.getElementById("productDescription");
                let productCost = document.getElementById("productCost");
                let productCategory = document.getElementById("productCategory");
                let productCurrency = document.getElementById("productCurrency");
                let productSoldCount = document.getElementById("productSoldCount");
                
                     
               
                productNameHTML.innerHTML = product.name;
                productDescriptionHTML.innerHTML = product.description;
                productCost.innerHTML = product.cost;
                productCategory.innerHTML = product.category;
                productCurrency.innerHTML = product.currency;
                productSoldCount.innerHTML = product.soldCount
                
                
                showImagesProduct(product.images);

            }
        });
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                comments = resultObj.data;
                showComments(comments);
            }
        })
    });

    