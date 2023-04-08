function switchNavbar() {
    const input = document.getElementById("selection").value;
    if (input == "option1") {
      document.getElementById("option1").classList.remove("hidden");
      document.getElementById("option2").classList.add("hidden");
    } else {
      document.getElementById("option2").classList.remove("hidden");
      document.getElementById("option1").classList.add("hidden");
    }
  }