
const show = {
    name: "Pick and Shorty",
    views: 10,
    play: function(){
      const showName = this.name;
      console.log("Now Playing " + showName);
    },
    addViews: function(numberViews){
      this.views = this.views + numberViews;
      return this.views;
    }
  };
  
  show.play();
  console.log(show.addViews(1));