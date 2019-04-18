// // character array 
// var characters = [];

// // function to utilize the stats of a specific character

// function Character(name,health,power,counter,image) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//     this.counter = counter;
//     this.image = image;
// }

// // resets the characters stats for a new game
// // pushes them in an array to use

// function resetChar() {

//     var boba = new Character("Boba Fett", 120, 8, 10, "assets/images/boba.jpg")

//     var trooper = new Character("Stormtrooper", 100, 20, 5, "assets/images/trooper.jpg")

//     var vader = new Character("Darth Vader",150,5,20,"assets/images/vader.jpg")

//     var yoda = new Character("Yoda", 180, 4, 25, "assets/images/yoda.jpg")

//     characters.push(boba, trooper, vader, yoda);
// }

// // function createCharDiv(divID) {
// //     document.getElementById("selecChar").children.remove();
// //     for (i = 0; i < characters.length; i++) {
// //         document.createElement("div");
// //     }
// // }


// // append img or div or p
// // attr class,ID,attributes
// function characterCards(divID) {
//     $(divID).children().remove();
//     for (var i = 0; i < characters.length; i++) {
//         // var div = document.createElement('div');
//         // div.className("col-sm");
//         // document.getElementById(divID).appendChild("div");
//         // $(divID).append("<div />");
//         // $(divID + " div:last-child").attr("class", "col-sm");
//         // $(divID + " div:last-child").append("<p />");
//         // $(divID + " div:last-child").append("<img />");
//         // $(divID + " img:last-child").attr("id", "name");
//         // $(divID + " img:last-child").attr("src", characters[i].image);
//         // $(divID + " img:last-child").attr("width", "150px");
//         // // $(divID + " img:last-child").addClass("img-thumbnail");
//         // $(divID + " div:last-child").append(characters[i].name + "<br>");
//         // $(divID + " div:last-child").append("HP: " + characters[i].health);
//     }
// }



// $(document).ready(function (){
//     resetChar();
//     // characterCards("#selectChar");
// });


var playerChosen = false;

$(document).on("click", "col-sm", function(){
    if (!playerChosen) {
        // document.getElementsByClassName("yourCharacter").appendChild(document.getElementsByClassName())
        console.log(this);
    }
});