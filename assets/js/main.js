const food = ["cow", "potato", "chicken", "corn"];
const cookedFood = food.map(item => {
  switch (item) {
    case "cow":
      return "hamburger";
      break;
    case "potato":
      return "fries";
      break;
    case "chicken":
      return "poultry_leg";
      break;
    case "corn":
      return "popcorn";
      break;
  }
});
const VegetarianCookedFood = cookedFood.filter(
  food => food === "fries" || food === "popcorn"
);
const ReducedFood = cookedFood.reduce((accumulator, currentValue) => "shit");
document.getElementById(
  "root"
).innerHTML = `<strong>Food source:</strong> ${food}<br><strong>prepared Food:</strong> ${cookedFood}<br><strong>Vegetarian food:</strong> ${VegetarianCookedFood}<br><strong>Final result after digestion:</strong>${ReducedFood}`;
