var silabas = [ "a", "i", "u", "e", "o", 
              "ka", "ki", "ku", "ke", "ko", 
              "ga", "gi", "gu", "ge", "go", 
              "sa", "shi", "su", "se", "so", 
              "za", "ji(shi)", "zu", "ze", "zo", 
              "ta", "chi", "tsu", "te", "to",
              "da", "ji(chi)", "zu(tsu)", "ze", "zo",
              "na", "ni", "nu", "ne", "no", 
              "ha", "hi", "fu", "he", "ho", 
              "ba", "bi", "bu", "be", "bo",
              "pa", "pi", "pu", "pe", "po", 
              "ma", "mi", "mu", "me", "mo", 
              "ra", "ri", "ru", "re", "ro",
              "ya", "yu", "yo",
              "wa", "o(oh)", "n", ];

//Math.floor( Math.random() * 72 )

var randomizer = document.getElementById("randomizer");
var syllable = document.getElementById("syllable");

function generate_syllable(){
    var indx = Math.floor( Math.random() * 72 )
    syllable.innerHTML = silabas[indx];
    
}
randomizer.onclick = generate_syllable;