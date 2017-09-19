(function($) {

$(document).ready(function() {

        var gameObject = {
          currentCharacter: {
            name: '',
          },
          win: 0,
          characters: [
            {
              name: "Aragon",
              image: "assets/images/Aragon.jpg",
              health: 120
            },
            {
              name: "Legolas",
              image: "assets/images/legolas.jpg",
              health: 100
            },
            {
              name: "Gandalf",
              image: "assets/images/gandalf.jpg",
              health: 150
            },
            {  
              name: "Sauron",
              image: "assets/images/sauron.jpg",
              health: 180
            }
          ]
        }

        var selectableCharactersSection = $('#selectableCharacters');
        var winCountSection = $('#winCount');
        var currentCharacterSection = $('#currentCharacter');



        function renderCurrentCharacterSection() {
          var html = '';
          html += `<p>Current Character: ${gameObject.currentCharacter.name}</p>`;
          currentCharacterSection.html(html);
        }


        function renderSelectableCharacterSection() {
          var characterDiv = '';
          // html += '<ul>';
          $.each(gameObject.characters, function(i, val) {
            characterDiv += "<div id='characterDiv'>"
            characterDiv += `<p>${val.name}</p>`;
            characterDiv += `<img src=${val.image} />`;
            characterDiv += `<p>${val.health}</p>`;
            characterDiv += "</div>"
          });
          // html += '</ul>';

          selectableCharactersSection.html(characterDiv);
        }


        function renderWinCountSection() {
          winCountSection.html(`<p>${gameObject.win}</p>`);
        }

        // VOID
        function render() {
          renderSelectableCharacterSection()
          renderWinCountSection();
          renderCurrentCharacterSection();
        }

        function win() {
          gameObject.win++;
          render();
        }

        selectableCharactersSection.on("click", setCurrentCharacter)

        function setCurrentCharacter(character) {
          gameObject.currentCharacter = character;
          render();
        }

        setCurrentCharacter(gameObject.characters[0]);

        render();

        })

      })(jQuery);




// var gameObject = {
//   "aragon": {
//     name: "aragon",
//     health: 120,
//     attack: 8,
//     defense: 16
//   },
//   "legolas": {
//     name: "legolas",
//     health: 100,
//     attack: 18,
//     defense: 5
//   },
//   "gandalf": {
//     name: "gandalf",
//     health: 150,
//     attack: 5,
//     defense: 20
//   },
//   "sauron": {
//     name: "aragon",
//     health: 120,
//     attack: 3,
//     defense: 25
//   }
// }



