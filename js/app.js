'use strict';

// let parentElement = document.getElementById('salesData');
let salesTable = document.getElementById('salesTable');
let storeForm = document.getElementById('storeForm');
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStand(name, min, max, avg) {

  //Properties
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookie = avg;
  //Arrays
  this.CookiesPerHour = [];
  this.total = 0;
  CookieStand.allCookies.push(this);
}
CookieStand.allCookies = [];

CookieStand.prototype.getCustomer = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookie);
    this.CookiesPerHour.push(cookies);
    this.total += cookies;
  }

};
CookieStand.prototype.CookiesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let perHour = Math.ceil(this.avgCookies * this.averageCustomersPerHour[i]);

    this.CookiesPerHour.push(perHour);
    this.totalCookies += perHour;
  }

};
CookieStand.prototype.render = function () {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.CookiesPerHour[i];

  }
  let total = document.createElement('th');
  tr.appendChild(total);
  total.textContent = this.total;

};

let Seattle = new CookieStand('Seattle', 23, 65, 6.3);
let Tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
let Dubai = new CookieStand('Dubai', 11, 38, 3.7);
let Paris = new CookieStand('Paris', 20, 38, 2.3);
let Lima = new CookieStand('Lima', 2, 16, 4.6);

makeTableHeader();

Seattle.getCustomer();
Seattle.render();

Tokyo.getCustomer();
Tokyo.render();

Dubai.getCustomer();
Dubai.render();


Paris.getCustomer();
Paris.render();


Lima.getCustomer();
Lima.render();

makeTableFooter();


function makeTableHeader() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Location';

  for (let i = 0; i < hours.length; i++) {
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hours[i];

  }
  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = 'Daily totals';
}

function makeTableFooter() {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);

  let th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Totals';

  let hourlyTotal = 0;
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    hourlyTotal = 0;

    for (let j = 0; j < CookieStand.allCookies.length; j++) {
      let total = CookieStand.allCookies[j].
        CookiesPerHour[i];
      hourlyTotal += total;
      totalOfTotals += total;
    }
    let th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = hourlyTotal;
  }
  let th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = totalOfTotals;

}
function getRandomCustomer(min , max){
  return Math.floor(Math.random() * max - min) + min ;
}

function addNewCookieShop(event) {
  event.preventDefault();

  let name = event.target.StoreName.value;
  let min = event.target.minCust.value;
  let max = event.target.maxCust .value;
  let avg = event.target.avgCookie.value;

  salesTable.deleteRow(-1);

  let newLoc =  new CookieStand (name ,min ,max ,avg );



  newLoc.getCustomer();
  newLoc.render();
  makeTableFooter();


}


storeForm.addEventListener('submit',addNewCookieShop);
