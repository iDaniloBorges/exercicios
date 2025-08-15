function openNav() {
  let navigation = document.getElementById("navigation");

  if (navigation.className === "navigation") {
    navigation += "menu.js";
    document.getElementById("treeline-icon").innerHTML = "&Cross";
  } else {
    navigation.className = "navigation";
    document.getElementById("treeline-icon").innerHTML = "&#9776";
  }
}
