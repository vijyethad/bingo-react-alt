// IIFE Generates Unique and Random numbers 

var UniqueRandomNumber = (function() {
    var arr = [];
    for(var i = 1; i < 101; i++)
    arr.push(i);
    return function() {
        if(!arr.length)
          alert("Bingo! No more!");

        var rand = Math.floor(Math.random() * arr.length);
        var random = arr.splice(rand, 1)[0];
        console.log(random);
        return random;
    };
})();

module.exports = UniqueRandomNumber;
