function adminLogin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  // Fixed admin credentials
  if (username === "admin" && password === "atal123") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid Admin ID or Password!");
  }
}
