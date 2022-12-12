// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
player1name=document.getElementById("player1_name_input").value 
player2name=document.getElementById("player2_name_input").value 
  // Store these values locally
localStorage.setItem("player1name",player1name)
localStorage.setItem("player2name",player2name)
  //Assign "game_page.html" to window.location
  window.location="game_page.html"
}
