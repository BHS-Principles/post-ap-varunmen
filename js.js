var LIST =[
    "burrito",
    "tamale",
    "taco"
];

var BTN = document.getElementById("mybutton");
var doSomething = function(event){
    console.log(event);
    alert("praise me")
}
var theAction = function(event){
    alert("yuh");
};
for(var i = 0; i<3; i++){
    var newBTN = BTN.cloneNode(true)
    newBTN.innerHTML = LIST[i]
    document.body.appened(newBTN);
    newBTN.addEventListener("click", doSomething )
}