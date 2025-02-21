// SECTION global variable

let cheese = 0

let clickUpgrades = [
  {
    name: 'knife',
    price: 50,
    quantity: 0,
    bonus: 1
  },
  {
    name: 'drill',
    price: 250,
    quantity: 0,
    bonus: 5
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
  cheese++
  console.log(cheese);

  drawCheese()
}

function buyClickUpgradeKnife() {

  let price = 0



  if (clickUpgrades[0].price <= cheese) {
    clickUpgrades[0].quantity++
  }



  console.log(clickUpgrades[0].quantity);

}


// !SECTION

// SECTION draw functions

function drawCheese() {
  const cheeseElem = document.getElementById('cheeseWallet')
  cheeseElem.innerText = `${cheese}`
}

// !SECTION

// SECTION page load

// !SECTION
