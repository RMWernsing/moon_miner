// SECTION global variable

let cheese = 0

let power = 0

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
    bonus: 10
  },
  {
    name: 'space station',
    price: 50000,
    quantity: 0,
    bonus: 100
  }
]


// !SECTION

// SECTION logic functions

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
  console.log("quantity", clickUpgrades[0].quantity);
  console.log("price", clickUpgrades[0].price);
  console.log("bonus", clickUpgrades[0].bonus);

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


// !SECTION

// SECTION draw functions

function drawCheese() {
  const cheeseElem = document.getElementById('cheeseWallet')
  cheeseElem.innerText = `${cheese}`
}

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

function drawPower() {
  let clickPower = 0

  for (let i = 0; i < clickUpgrades.length; i++) {
    const clickUpgrade = clickUpgrades[i];
    clickPower += clickUpgrade.bonus * clickUpgrade.quantity
  }

  const drawPowerElem = document.getElementById('power')
  drawPowerElem.innerText = clickPower.toString()
}






// !SECTION

// SECTION page load

drawDrillAmount()
drawDrillPower()
drawKnifePower()
drawKnifeAmount()
drawKnifePrice()
drawDrillPrice()
drawPower()

// !SECTION
