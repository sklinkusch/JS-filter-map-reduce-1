const food = ["cow", "potato", "chicken", "corn"];
function ArrayMapFilterReduce(array) {
  cookedFood = array.map(item => {
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
  VegetarianCookedFood = cookedFood.filter(
    food => food === "fries" || food === "popcorn"
  );
  ReducedFood = VegetarianCookedFood.reduce(
    (accumulator, currentValue) => "shit"
  );
  return ReducedFood;
}
console.log(ArrayMapFilterReduce(food));
