function login(id){
    document.getElementById(id).style.backgroundColor = "red"
    document.getElementById(id).innerText = "Logout"
    alert("You need to register first")
}

function buy(id) {
    e = document.getElementById(id)
    e.remove()
}

function like(id) {
    // document.getElementById(id).innerText
    var likes = document.getElementById(id).innerText 
    likes  = likes +2
    console.log(likes);
}

function over(element) {
    element.src = "/images/6.jpg"
}
function out (element) {
    element.src = "/images/1.jpg"
}