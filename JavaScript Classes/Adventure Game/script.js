class Human {
    constructor(name) {
      this.name = name;
    }
    say(stuff) {
      console.log(this.name + ": " + stuff);
    }
  }
  class Pirate extends Human {
    say(stuff) {
      super.say(stuff);
      console.log(this.name + ": Yarr!");
    }
  }
  const human = new Human("Frances");
  const pirate = new Pirate("Long John");
  human.say("G'day, Sir!");
  pirate.say("Ahoy!");