// OOP programmer

function Programmer (languages) {
  this.languages = languages || [];
}

Programmer.prototype.learnNewLanguage = function (language) {
  this.languages.push(language);
};

Programmer.prototype.isPragmatic = function () {
  return this.languages.length >= 3;
};

//var programmer = new Programmer();

//['Java', 'JS', 'Clojure'].forEach(programmer.learnNewLanguage.bind(programmer));

// functional programmer

function createProgrammer(langs) {
  var languages = langs || [];
  var programmer = {};

  programmer.learnNewLanguage = function (language) {
    languages.push(language);
  };

  programmer.isPragmatic = function () {
    return languages.length >= 3;
  };

  return programmer;
}

var programmer = createProgrammer([]);

['Java', 'JS', 'Clojure'].forEach(programmer.learnNewLanguage);

