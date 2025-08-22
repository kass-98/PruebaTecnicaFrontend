document.addEventListener("DOMContentLoaded", function(){
    const loadButton = document.querySelector(".btn.btn-primary.my-2");

    if (loadButton){
        loadButton.addEventListener("click", loadProducts);
    }
});

function loadProducts(){
    
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    });
}



