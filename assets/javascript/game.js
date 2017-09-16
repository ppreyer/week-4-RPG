// var gameObject = {
//   aragon: {
//     name: "aragon";
//     health: 120;
//   }
// }

// CURRENT BUILD

$(document).ready(function() {
  // Check which character has been clicked
  $(".row-1").on("click", function() {
    if($(this).attr("id") === 'aragon') {
    // Apply a border to that image
    $(this).css({"border": "4px solid green"});
    $("#legolas, #gandalf, #sauron").css("display", "none");
    $(".row-2").css("display", "inline");  
    }
  })
});















// EXTRA CODE


//     $(".row-1-gandalf, .row-1-legolas, .row-1-sauron").css("display", "none");
//     // $(".row-2-gandalf, .row-2-legolas, .row-2-sauron").show();
//     $("#character-unhide").text('Your Character');
//     } else if($(this).hasClass('gandalf')) {
//     // Apply a border to that image
//     $(this).css({"border": "4px solid green"});
//     $(".row-1-aragon, .row-1-legolas, .row-1-sauron").css("display", "none");

//     $("#character-unhide").text('Your Character');
//     // $("#character-hide").css("display", "none");
    
//     } else if($(this).hasClass('legolas')) {
//     // Apply a border to that image
//     $(this).css({"border": "4px solid green"});
//     $(".row-1-aragon, .row-1-gandalf, .row-1-sauron").css("display", "none");

//     $("#character-unhide").text('Your Character');
//     // $("#character-hide").css("display", "none");
    
//     } else {
//       // Apply a border to that image
//       $(this).css({"border": "4px solid green"});
//       $(".row-1-aragon, .row-1-gandalf, .row-1-legolas").css("display", "none");

//       $("#character-unhide").text('Your Character');
//       }

// })

// })



// // Wraps Jquery and JS code
// $(document).ready(function() {

// // Check which character has been selected
//   $(".character").on("click", function() {
//     // If the character selected is aragon...
//     if($(this).hasClass("aragon")) {
//       // Add border to aragon image
//       $(".aragon").css({"border": "4px solid green"});
//       // Remove other character images
//       $(".gandalf, .legolas, .sauron").css("display", "none");
//       $("#character-select").text('Your Character');
//       $("#character-hide").css("display", "none");
//       $(".character-images-row-2").display("inline");

//     }
//   });

// });


// $(document).ready(function() {
//   var gameObject = {
//       aragon: {
//                   title: "Aragon",
//                   image: "assets/images/Aragon.jpg",
//                   hp: 120
//       },  
//       gandalf: {
//                   title: "Gandalf",
//                   image: "assets/images/gandalf.jpg",
//                   hp: 150
//       },
//       legolas: {
//                   title: "Legolas",
//                   image: "assets/images/legolas.jpg",
//                   hp: 100

//       },
//       sauron: {
//                   title: "Sauron",
//                   image: "assets/images/sauron.jpg",
//                   hp: 180
//       }
// };
// var emptyDiv = $("<div>");

//   for(var key in gameObject) {
//     emptyDiv.addClass("empty-div");
//     $(".characters").append(emptyDiv);
//     var character = gameObject[key].title;
//     var characterTitle = $("<h3>");
//     characterTitle.addClass("character-title");
//     characterTitle.attr("data-title", character);
//     characterTitle.text(character)
//     $(".empty-div").append(characterTitle);
//     $(".character-title").css("float", "left");
//   }

//   for(var key in gameObject) {  
//     var picture = gameObject[key].image;
//     var characterImage = $("<img>");
//     characterImage.addClass("character-image");
//     characterImage.attr("src", picture);
//     $(".empty-div").append(characterImage);
//     $(".character-image").css("width", "20%");
//     $(".character-image").css("height", "125px");
//     $(".character-image").css("margin-left", "10px");
//   };

// });

// // $(document).ready(function() {
// //   // Create initial array of character images
// //   var imageArray = ["assets/images/Aragon.jpg", "assets/images/gandalf.jpg", "assets/images/legolas.jpg", "assets/images/sauron.jpg"];

// //   // For loop to iterate through the image array
// //   for(var i = 0; i < imageArray.length; i++) {
// //     // Assign index to variable image
// //     var image = imageArray[i];
// //     // Create an image element 
// //     var characterImage = $("<img>");
// //     // Add a class name to each image
// //     characterImage.addClass("character-name");
// //     // Assign a source attribute to each image
// //     characterImage.attr("src", image);
// //     // Append each image to the character image div
// //     $(".character-images").append(characterImage);
// //     // Apply css properties to each image 
// //     $(".character-name").css("width", "20%");
// //     $(".character-name").css("height", "125px");
// //     $(".character-name").css("margin-left", "10px");
// //   }

// //   // Check which character has been clicked
// //   $(".character-name").on("click", function() {
// //     //   // Apply a border to that image
// //       $(this).css({"border": "4px solid green"});
// //       $(this).siblings().hide();
// //       $("#character-select").text('Your Character');
// //       $("#character-hide").css("display", "none");

// //       // For loop to iterate through the image array
// //       for(var j = 0; j < imageArray.length; j++) {
// //       // Assign index to variable image
// //       var enemy = imageArray[j];
// //       // Create an image element 
// //       var enemyImage = $("<img>");
// //       // Add a class name to each image
// //       enemyImage.addClass("character-name");
// //       // Assign a source attribute to each image
// //       enemyImage.attr("src", enemy);

// //       // If src attribute is not the one clicked...
// //       if($(this).attr("src") !== enemy) {
// //       // Append each image to the character image div
// //       $(".character-images-row-2").append(enemyImage);
// //       // Apply css properties to each image 
// //       $(".character-name").css("width", "20%");
// //       $(".character-name").css("height", "125px");
// //       $(".character-name").css("margin-left", "10px");
// //       }
// //     }

// //       // Check which image has been clicked
// //       $(".character-name").on("click", function() {
// //       $(this).css("display", "none");
// //       // For loop to iterate through the image array
// //       for(var k = 0; k < imageArray.length; k++) {
// //       // Assign index to variable image
// //       var fighter = imageArray[k];
// //       // Create an image element 
// //       var fighterImage = $("<img>");
// //       // Add a class name to each image
// //       fighterImage.addClass("character-fighter");
// //       // Assign a source attribute to each image
// //       fighterImage.attr("src", fighter);

// //       // If src attribute is not the one clicked...
// //       if($(this).attr("src") === fighter) {
// //       // Append each image to the character image div
// //       $(".character-images-row-3").append(fighterImage);
// //       // Apply css properties to each image 
// //       $(".character-fighter").css("width", "20%");
// //       $(".character-fighter").css("height", "125px");
// //       $(".character-fighter").css("margin-left", "10px");
// //       $(".character-fighter").css({"border": "4px solid red"});
// //       }
// //     }



// //     }); 
  
// //   });







// //   // var image = $("<img>");
// //   // image.attr('src', "assets/images/Aragon.jpg" );
// //   // $(".character-images").append(image);

// // });