(function($) {

$(document).ready(function() {


        var gameObject = {
          currentCharacter: {
            name: '',
          },
          win: 0,
          characterSelected: false,
          characters: [
            {
              name: "Aragon",
              image: "assets/images/Aragon.jpg",
              health: 120,
              attack: 8,
              defense: 16
            },
            {
              name: "Legolas",
              image: "assets/images/legolas.jpg",
              health: 100,
              attack: 18,
              defense: 5
            },
            {
              name: "Gandalf",
              image: "assets/images/gandalf.jpg",
              health: 150,
              attack: 5,
              defense: 20
            },
            {  
              name: "Sauron",
              image: "assets/images/sauron.jpg",
              health: 180,
              attack: 3,
              defense: 25
            }
          ]
        }

        var selectableCharactersSection = $('#selectableCharacters');
        var individualCharacter = $('#characterDiv');
        var winCountSection = $('#winCount');
        var currentCharacterSection = $('#currentCharacter');
        var currentEnemySection = $('#currentEnemy');
        var currentCharacterName = '';



        function renderCurrentCharacterSection() {
          var html = '';
          html += `<p>Current Character:</p>`;
          currentCharacterSection.html(html);
        }


        function renderSelectableCharacterSection() {
          var characterDiv = '';
          // html += '<ul>';
          $.each(gameObject.characters, function(i, val) {
            characterDiv += "<div id='characterDiv'>"
            characterDiv += `<p id=${val.name}>${val.name}</p>`
            characterDiv += `<img src=${val.image} />`;
            characterDiv += `<p>${val.health}</p>`;
            characterDiv += "</div>"
          });

          selectableCharactersSection.html(characterDiv);
        }


        function renderWinCountSection() {
          winCountSection.html(`<p>${gameObject.win}</p>`);
        }

        // VOID
        function render() {
          renderSelectableCharacterSection();
          renderWinCountSection();
          renderCurrentCharacterSection();
          renderCurrentEnemySection();
        }

        function win() {
          gameObject.win++;
          render();
        }

          $('#selectableCharacters').delegate("div", "click", function(){
          if(!gameObject.characterSelected) {
            currentCharacterSection.append(this);
            currentCharacterSection.html(this);
            gameObject.characterSelected = true;
            gameObject.currentCharacter.name = $(this).find('p');
          } else {
              currentEnemySection.append(this);
              currentEnemySection.html(this);
            }
        })


        function renderCurrentEnemySection() {
          var html = '';
          html += `<p>Current Enemy:</p>`;
          currentEnemySection.html(html)
        }

        function attackButton() {
           {

          }
        }

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



