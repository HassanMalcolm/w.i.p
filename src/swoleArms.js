class SwoleArms extends Upgrade {
    constructor(upgradeName, cost, building) {
        super(upgradeName, cost);
        this.building = building;
    }

    purchase() {
        super.purchase();
        clickStrength++;
        this.building.doubleUpgrade++;
        this.building.applyDoubleUpgrade();
    }
}
