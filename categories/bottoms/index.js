
""
let d = document.getElementById("food-containers")
for (const element of obj) {
  d.innerHTML += `        
          <div class="food-type fruite p-1">
            <div class="img-container">
              <img class="product-image"
                src="${element.imgLink}" />
              <div class="img-content">
                <h3></h3>
                <a href="product.html?imgLink=${element.imgLink}&name=${element.text}" class="btn btn-primary" target="_self">Shop</a>
              </div>
            </div>
          </div>

       `
}