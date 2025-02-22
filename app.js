// SECTION global variable

let cheese = 0

let clickUpgrades = [
  {
    name: 'knife',
    price: 5,
    quantity: 1,
    bonus: 1
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    bonus: 15
  }

]

let autoUpgrades = [
  {
    name: 'mousetronaut',
    price: 1000,
    quantity: 0,
    bonus: 50
  },
  {
    name: 'space station',
    price: 10000,
    quantity: 0,
    bonus: 200
  }
]


// !SECTION

// SECTION logic functions


// NOTE Mine functions
function mine() {

  let clickPower = 0

  for (let i = 0; i < clickUpgrades.length; i++) {
    const upgrade = clickUpgrades[i];
    clickPower = upgrade.bonus * upgrade.quantity
    cheese += clickPower
  }
  drawPower()
  drawCheese()
}

function autoMine() {

  let minePower = 0

  for (let i = 0; i < autoUpgrades.length; i++) {
    const upgrade = autoUpgrades[i];
    minePower = upgrade.bonus * upgrade.quantity
    cheese += minePower
  }

  drawCheese()

}

// NOTE Click upgrade functions
function buyClickUpgradeKnife() {
  if (clickUpgrades[0].price <= cheese) {
    clickUpgrades[0].quantity++
    cheese -= clickUpgrades[0].price
    clickUpgrades[0].price += 5
  }

  drawKnifePower()
  drawKnifeAmount()
  drawPower()
  drawKnifePrice()
  drawCheese()

}

function buyClickUpgradeDrill() {
  if (clickUpgrades[1].price <= cheese) {
    clickUpgrades[1].quantity++
    cheese -= clickUpgrades[1].price
    clickUpgrades[1].price += 50
  }

  drawDrillAmount()
  drawDrillPower()
  drawPower()
  drawDrillPrice()
  drawCheese()

}

// NOTE Auto Upgrade Functions
function buyMouse() {
  if (autoUpgrades[0].price <= cheese) {
    autoUpgrades[0].quantity++
    cheese -= autoUpgrades[0].price
    autoUpgrades[0].price += 250
  }

  drawMouseAmount()
  drawMousePower()
  drawAutoPower()
  drawMousePrice()
  drawCheese()

}

function buySpaceStation() {
  if (autoUpgrades[1].price <= cheese) {
    autoUpgrades[1].quantity++
    cheese -= autoUpgrades[1].price
    autoUpgrades[1].price += 1000
  }

  drawSpaceStationAmount()
  drawSpaceStationPower()
  drawAutoPower()
  drawSpaceStationPrice()
  drawCheese()

}


// !SECTION

// SECTION draw functions

// NOTE cheese draws
function drawCheese() {
  const cheeseElem = document.getElementById('cheeseWallet')
  cheeseElem.innerText = `${cheese}`
}

// NOTE Click upgrade draws
function drawKnifePrice() {
  const knifeElem = document.getElementById('knifePrice')
  knifeElem.innerText = `${clickUpgrades[0].price}`
}

function drawDrillPrice() {
  const drillElem = document.getElementById('drillPrice')
  drillElem.innerText = `${clickUpgrades[1].price}`
}

function drawKnifeAmount() {
  const knifeAmountElem = document.getElementById('knifeAmount')
  knifeAmountElem.innerText = `${clickUpgrades[0].quantity}`
}

function drawKnifePower() {
  const knifePowerElem = document.getElementById('knifePower')
  knifePowerElem.innerText = `${clickUpgrades[0].quantity}`
}

function drawDrillAmount() {
  const drillAmountElem = document.getElementById('drillAmount')
  drillAmountElem.innerText = `${clickUpgrades[1].quantity}`
}

function drawDrillPower() {
  const drillPowerElem = document.getElementById('drillPower')
  drillPowerElem.innerText = `${clickUpgrades[1].quantity * 15}`
}

// NOTE Auto upgrade draws
function drawMousePrice() {
  const mousePriceElem = document.getElementById('mousePrice')
  mousePriceElem.innerText = `${autoUpgrades[0].price}`
}

function drawSpaceStationPrice() {
  const spaceStationPriceElem = document.getElementById('spaceStationPrice')
  spaceStationPriceElem.innerText = `${autoUpgrades[1].price}`
}

function drawMouseAmount() {
  const mouseAmountElem = document.getElementById('mouseAmount')
  mouseAmountElem.innerText = `${autoUpgrades[0].quantity}`
}

function drawMousePower() {
  const mousePowerElem = document.getElementById('mousePower')
  mousePowerElem.innerText = `${autoUpgrades[0].quantity * 50}`
}

function drawSpaceStationAmount() {
  const spaceStationAmountElem = document.getElementById('spaceStationAmount')
  spaceStationAmountElem.innerText = `${autoUpgrades[1].quantity}`
}

function drawSpaceStationPower() {
  const spaceStationPowerElem = document.getElementById('spaceStationPower')
  spaceStationPowerElem.innerText = `${autoUpgrades[1].quantity * 200}`
}


// NOTE power draws 
function drawPower() {
  let clickPower = 0

  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    clickPower += clickUpgrade.bonus * clickUpgrade.quantity
  }

  const drawPowerElem = document.getElementById('power')
  drawPowerElem.innerText = clickPower.toString()
}

function drawAutoPower() {
  let autoPower = 0

  for (let i = 0; i < autoUpgrades.length; i++) {
    const autoUpgrade = autoUpgrades[i];
    autoPower += autoUpgrade.bonus * autoUpgrade.quantity
  }

  const drawAutoPowerElem = document.getElementById('autoPower')
  drawAutoPowerElem.innerText = autoPower.toString()
}






// !SECTION

// SECTION page load

drawCheese()

drawDrillPower()
drawKnifePower()
drawMousePower()
drawSpaceStationPower()

drawDrillAmount()
drawKnifeAmount()
drawMouseAmount()
drawSpaceStationAmount()

drawKnifePrice()
drawDrillPrice()
drawMousePrice()
drawSpaceStationPrice()



drawPower()
drawAutoPower()

setInterval(autoMine, 3000)
// !SECTION
