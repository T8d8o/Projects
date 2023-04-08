class Desk {
    constructor(width, height,color){
      this.price = 0;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    calculatePrice() {
          this.price = (this.width / 100 + this.height / 100) * 100;
      console.log(this.price);
    }
  }
  class CustomDesk extends Desk {
    constructor (width, height, color, drawerUnitsAmount, hasCableManagement, adjustingMechanism){
    super(width, height, color);
    this.drawerUnitsAmount = drawerUnitsAmount;
    this.hasCableManagement = hasCableManagement;
    this.adjustingMechanism = adjustingMechanism;
    }
    calculatePrice() {
      let cableManagementPrice = 20;
      let electricAdjustingPrice = 125;
      let manualAdjustingPrice = 25;
      let drawerUnitPrice = 30;
      let initialCost = (this.width / 100 + this.height / 100) * 100;
         // logic to calculate price based on user settings and choices
      if (this.adjustingMechanism === 'electric') {
        if (this.hasCableManagement) {
          this.price = initialCost + cableManagementPrice +
              electricAdjustingPrice + drawerUnitPrice * this.drawerUnitsAmount
              ;
        } else {
          this.price = initialCost + electricAdjustingPrice + drawerUnitPrice *
            this.drawerUnitsAmount;
        }
      } else if (this.adjustingMechanism === 'manual') {
        if (this.hasCableManagement) {
          this.price = initialCost + cableManagementPrice +
              manualAdjustingPrice + drawerUnitPrice * this.drawerUnitsAmount;
        } else {
          this.price = initialCost + manualAdjustingPrice + drawerUnitPrice *
            this.drawerUnitsAmount;
        }
      }
      console.log(this.price);
   
    }
  }
  const basicDesk = new Desk(200, 80, 'white');
  const awesomeDesk = new CustomDesk(200, 110, 'blue', 1, true, 'electric');
  basicDesk.calculatePrice();
  awesomeDesk.calculatePrice();
  