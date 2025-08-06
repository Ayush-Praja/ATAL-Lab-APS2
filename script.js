// Admin login handling
function handleAdminLogin() {
  const username = document.getElementById("admin-username").value;
  const password = document.getElementById("admin-password").value;

  if (username === "admin" && password === "atal123") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Admin ID or Password!");
  }
}
