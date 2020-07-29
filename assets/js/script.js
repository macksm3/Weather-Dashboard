// HW6 Weather Dashboard js file
// document ready
$(function() {

  const citySearchForm = $("#searchForm");
  const citySearchName = $("#citySearch");
  const searchedCityList = $("#cityList")
  let cityHistory = [];

  function renderCities() {
    // first clear elements
    searchedCityList.empty();
    // create new li for each cityHistory
    cityHistory.forEach(function(element) {
      console.log(element);
      const listItem = $("<button>");
      // add li attribute (class) for styling
      listItem.addClass("cityBtn").text(element);
      $(searchedCityList).append(listItem);
      // add delete button
    });

  }

  function storeCities() {
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
  }

  // when search city name is entered... 
  $(citySearchForm).on("submit", function() {
    event.preventDefault();
    const nameToSearch = citySearchName
      .val()
      .trim();
    if (nameToSearch === "") {
      return;
    }
    cityHistory.push(nameToSearch);
    console.log(cityHistory);
    // clear search field
    $(citySearchName).val("");  
    storeCities();
    renderCities();
  });


});
