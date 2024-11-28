var allproducts =document.querySelectorAll("#cards-container")
var content = document.querySelector("#read")
var btn1 =document.querySelector("#pr")

allproducts.forEach(function(item){
    item.onclick= function () {
        content.innerhtml += item.textcontent + "<br>"
          if(content.innerHTML !=""){
           btn1.computedStyleMap.display = "block"
          }
    }
})
