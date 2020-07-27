// HW6 Weather Dashboard js file
// document ready
$(function() {

  const citySearchForm = $("#searchForm");
  const citySearchName = $("#citySearch");
  const searchedCityList = $("#cityList")
  let cityHistory = [];

  function renderCities() {
    // first clear elements
    searchedCityList.innerHTML = "";
    // create new li for each cityHistory
    // cityHistory.length loop
  }

  function storeCities() {
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
  }

  // when search city name is entered... 
  $(citySearchForm).on("submit", function() {
    event.preventDefault();
    const nameToSearch = citySearchName.value.trim();
    if (nameToSearch === "") {
      return;
    }
    cityHistory.push(nameToSearch);
    // clear search field
    citySearchName.value = "";  
    console.log(citySearchName);
    storeCities();
    renderCities();
  });


});
