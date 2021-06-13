'use strict';

let salesData = document.getElementById('salesData');

let Seattle = {
  Location: 'Seattle',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookies :6.3,
  operationHour: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'],
  results :[],

  getRandomCustomer:function() {

    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); 
  }, 
  getcookiesPerHour: function() {
    for (let i=0; i<this.operationHour.length;i++) {
      Math.floor (this.results.push(this.avgCookies*this.getRandomCustomer()));

    } 
    console.log(this.results);
  },

  render: function() {

    let articleElement = document.createElement('article');
    salesData.appendChild(articleElement);

    let locationTitle = document.createElement('h2');
    articleElement.appendChild(locationTitle);
    locationTitle.textContent = this.Location;
  
    let SeattleList = document.createElement('ul');
    articleElement.appendChild(SeattleList);

    for(let i = 0; i < this.operationHour.length; i++) {
      let listItem = document.createElement('li');
      SeattleList.appendChild(listItem);
      listItem.textContent = this.operationHour[i];
      listItem.textContent = `${this.operationHour[i]} : ${this.results[i]} cookies`;
    }
     
  }
};

Seattle.getcookiesPerHour();
Seattle.render();


let Tokyo = {
  Location: 'Tokyo',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies :1.2,
  operationHour: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'],
  results :[],

  getRandomCustomer:function() {

    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); 
  }, 
  getcookiesPerHour: function() {
    for (let i=0; i<this.operationHour.length;i++) {
      Math.floor (this.results.push(this.avgCookies*this.getRandomCustomer()));
    
    } 
    console.log(this.results);
  },
    
  render: function() {

    let articleElement = document.createElement('article');
    salesData.appendChild(articleElement);
    
    let locationTitle = document.createElement('h2');
    articleElement.appendChild(locationTitle);
    locationTitle.textContent = this.Location;
      
    let TokyoList = document.createElement('ul');
    articleElement.appendChild(TokyoList);
    
    for(let i = 0; i < this.operationHour.length; i++) {
      let listItem = document.createElement('li');
      TokyoList.appendChild(listItem);
      listItem.textContent = this.operationHour[i];
      listItem.textContent = `${this.operationHour[i]} : ${this.results[i]} cookies`;
    }
         
  }
};
    
Tokyo.getcookiesPerHour();
Tokyo.render();


let Dubai = {
  Location: 'Dubai',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies :1.2,
  operationHour: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'],
  results :[],
  getRandomCustomer:function() {

    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); 
  }, 
  getcookiesPerHour: function() {
    for (let i=0; i<this.operationHour.length;i++) {
      Math.floor (this.results.push(this.avgCookies*this.getRandomCustomer()));
      
    } 
    console.log(this.results);
  },
      
  render: function() {
    let articleElement = document.createElement('article');
    salesData.appendChild(articleElement);
      
    let locationTitle = document.createElement('h2');
    articleElement.appendChild(locationTitle);
    locationTitle.textContent = this.Location;
        
    let DubaiList = document.createElement('ul');
    articleElement.appendChild(DubaiList);
      
    for(let i = 0; i < this.operationHour.length; i++) {
      let listItem = document.createElement('li');
      DubaiList.appendChild(listItem);
      listItem.textContent = this.operationHour[i];
      listItem.textContent = `${this.operationHour[i]} : ${this.results[i]} cookies`;
    }
           
  }
};
Dubai.getcookiesPerHour();
Dubai.render();


let Paris = {
  Location: 'Paris',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies :1.2,
  operationHour: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'],
  results :[],
  getRandomCustomer:function() {

    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); 
  }, 
  getcookiesPerHour: function() {
    for (let i=0; i<this.operationHour.length;i++) {
      Math.floor(this.results.push(this.avgCookies*this.getRandomCustomer()));
      
    } 
    console.log(this.results);
  },

  render: function() {
    let articleElement = document.createElement('article');
    salesData.appendChild(articleElement);
      
    let locationTitle = document.createElement('h2');
    articleElement.appendChild(locationTitle);
    locationTitle.textContent = this.Location;
        
    let ParisList = document.createElement('ul');
    articleElement.appendChild(ParisList);
      
    for(let i = 0; i < this.operationHour.length; i++) {
      let listItem = document.createElement('li');
      ParisList.appendChild(listItem);
      listItem.textContent = this.operationHour[i];
      listItem.textContent = `${this.operationHour[i]} : ${this.results[i]} cookies`;
    }
           
  }
};
Paris.getcookiesPerHour();
Paris.render();


let Lima = {
  Location: 'Lima ',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookies :1.2,
  operationHour: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', 'TOTAL'],
  results :[],
  getRandomCustomer:function() {

    return Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers); 
  }, 
  getcookiesPerHour: function() {
    for (let i=0; i<this.operationHour.length;i++) {
      Math.floor (this.results.push(this.avgCookies*this.getRandomCustomer()));
      
    } 
    console.log(this.results);
  },

  render: function() {
    let articleElement = document.createElement('article');
    salesData.appendChild(articleElement);
      
    let locationTitle = document.createElement('h2');
    articleElement.appendChild(locationTitle);
    locationTitle.textContent = this.Location;
        
    let LimaList = document.createElement('ul');
    articleElement.appendChild(LimaList);
      
    for(let i = 0; i < this.operationHour.length; i++) {
      let listItem = document.createElement('li');
      LimaList.appendChild(listItem);
      listItem.textContent = this.operationHour[i];
      listItem.textContent = `${this.operationHour[i]} : ${this.results[i]} cookies`;
    }
           
  }
};
Lima.getcookiesPerHour();
Lima.render();
