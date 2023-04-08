const allergies = {
    nuts: {},
    milk: {},
    gluten: {}
  };
  allergies.nuts.children = ['Becca', 'Max', 'Phil'];
  allergies.milk.children = ['Simon', 'Ada', 'Stacy'];
  allergies.gluten.children = ['Paul', 'Lisa', 'Beth', 'Alex'];
  console.log(allergies.milk.children);
  allergies.nuts.total = allergies.nuts.children.length;
  allergies.milk.total = allergies.milk.children.length;
  allergies.gluten.total = allergies.gluten.children.length;
  allergies.getTotalNumber = function() {
    const totalNumber = this.nuts.total + this.milk.total + this.gluten.total;
    console.log("There are " + totalNumber +
      " children with food restrictions.");
  };
  allergies.getTotalNumber();