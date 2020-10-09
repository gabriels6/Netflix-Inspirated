var liked = false;
var favorited = false;

function onclicklike(){
    
    
    if(!liked){
        liked = true;
        document.getElementById("like-button").innerHTML = "<i class='fas fa-thumbs-up'></i>";
    }else if(liked){
        liked = false;
        document.getElementById("like-button").innerHTML = "<i class='far fa-thumbs-up'></i>";
    }
}

function onclickfavorite(){
    if(!favorited){
        favorited = true;
        document.getElementById("favorite-button").innerHTML = "<i class='fas fa-heart'></i>";
    }else if(favorited){
        favorited = false;
        document.getElementById("favorite-button").innerHTML = "<i class='far fa-heart'></i>";
    }

}