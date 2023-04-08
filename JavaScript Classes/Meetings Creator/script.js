class Meeting {
    constructor(date, time, name) {
      this.date = date;
      this.time = time;
      this.name = name;
    }
    sendNotification() {
      console.log("This is a reminder that your meeting with " + this.name + " is on " + this.date + " at " + this.time);
    }
  }
  class VideoCall extends Meeting{
     constructor(date, time, name, link) {
      super(date, time, name);
      this.link = link;
    }
    sendNotificationLink(){
      super.sendNotification();
      console.log("This is the link to your video meeting: " + this.link);
    }
    test() {
      console.log("Testing audio and video...success!");
    }
  }
  
  const firstMeeting = new Meeting("03/22/2022", "8:00AM", "Sonia");
  firstMeeting.sendNotification();
  
  const firstVideo = new VideoCall("04/01/2022", "3:30PM", "Mauricio", "https://vid.eo/meetinglink/12345aBcDef");
  firstVideo.sendNotificationLink();
  firstVideo.test();