const food = ["cow", "potato", "chicken", "corn"];
cookedFood = food.map(item => {
  var cook;
  switch (item) {
    case "cow":
      cook = "hamburger";
      break;
    case "potato":
      cook = "fries";
      break;
    case "chicken":
      cook = "poultry_leg";
      break;
    case "corn":
      cook = "popcorn";
      break;
  }
  return cook;
});
