document.querySelector(".btn-login").addEventListener("click", function() {
  document.querySelector(".logcomp").style.display = "none";
  document.querySelector("#transaction").style.display = "block";
  document.querySelector("#transaction").scrollIntoView();
});

// card

document.getElementById("btn-deposit").addEventListener("click", function() {
  var x = document.getElementById("withdraw-input").value;
  console.log("x");
});
