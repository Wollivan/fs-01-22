function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCust = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCust);
    }
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
    }
  },
  render: function () {
    this.calcCustPerHour();
    this.calcCookiesPerHour();

    const div = document.getElementById(this.name);

    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    div.appendChild(h2);

    const ul = document.createElement("ul");
    div.appendChild(ul);

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const li = document.createElement("li");
      li.textContent = this.cookiesPerHour[i] + " cookies";
      ul.appendChild(li);
    }
  },
};

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCust = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCust);
    }
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
    }
  },
  render: function () {
    this.calcCustPerHour();
    this.calcCookiesPerHour();

    const div = document.getElementById(this.name);

    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    div.appendChild(h2);

    const ul = document.createElement("ul");
    div.appendChild(ul);

    for (let i = 0; i < this.cookiesPerHour.length; i++) {
      const li = document.createElement("li");
      li.textContent = this.cookiesPerHour[i] + " cookies";
      ul.appendChild(li);
    }
  },
};

seattle.render();
tokyo.render();
