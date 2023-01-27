function like(e) {
    document.getElementById(e).innerText ++;
}
function like2(id){
    var likeId = "#"+id
    console.log(likeId);
    document.querySelector(likeId).innerText ++;
}

function remove(id) {
    document.getElementById(id).remove()
}