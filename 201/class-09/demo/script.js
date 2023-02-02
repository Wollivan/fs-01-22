// Event Listeners

const form = document.getElementById("new-store-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const minCustInput = event.target.minCust.value;
  const maxCustInput = event.target.maxCust.value;
  const avgCookieInput = event.target.avgCookies.value;

  console.log(storeNameInput);
  console.log(minCustInput);
  console.log(maxCustInput);
  console.log(avgCookieInput);

  form.reset();

  const newStore = new CookieStore(storeNameInput, minCustInput, maxCustInput, avgCookieInput);

  newStore.render();
});
