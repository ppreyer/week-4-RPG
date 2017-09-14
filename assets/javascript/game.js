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


$(document).ready(function() {
  // Create initial array of character images
  var imageArray = ["assets/images/Aragon.jpg", "assets/images/gandalf.jpg", "assets/images/legolas.jpg", "assets/images/sauron.jpg"];

  // For loop to iterate through the image array
  for(var i = 0; i < imageArray.length; i++) {
    // Assign index to variable image
    var image = imageArray[i];
    // Create an image element 
    var characterImage = $("<img>");
    // Add a class name to each image
    characterImage.addClass("character-name");
    // Assign a source attribute to each image
    characterImage.attr("src", image);
    // Append each image to the character image div
    $(".character-images").append(characterImage);
    // Apply css properties to each image 
    $(".character-name").css("width", "20%");
    $(".character-name").css("height", "125px");
    $(".character-name").css("padding-left", "10px");
  }

  // Check which character has been clicked
  $(".character-name").on("click", function() {
    // If the source of the image clicked === aragon...
    // if ($(this).attr("src") === "assets/images/Aragon.jpg") {
    //   // Apply a border to that image
      $(this).css({"border": "4px solid green"});
      $(this).siblings().hide();
      $("#character-select").text('Your Character');
      $("#character-hide").css("display", "none");

      // For loop to iterate through the image array
      for(var j = 0; j < imageArray.length; j++) {
      // Assign index to variable image
      var enemy = imageArray[j];
      // Create an image element 
      var enemyImage = $("<img>");
      // Add a class name to each image
      enemyImage.addClass("character-name");
      // Assign a source attribute to each image
      enemyImage.attr("src", enemy);

      // If src attribute is not the one clicked...
      if($(this).attr("src") !== enemy) {
      // Append each image to the character image div
      $(".character-images-row-2").append(enemyImage);
      // Apply css properties to each image 
      $(".character-name").css("width", "20%");
      $(".character-name").css("height", "125px");
      $(".character-name").css("padding-left", "10px");
      }
    }

  });




  // var image = $("<img>");
  // image.attr('src', "assets/images/Aragon.jpg" );
  // $(".character-images").append(image);

});