// Generate random ID and password
function generateID() {
  return Math.floor(10000 + Math.random() * 90000); // 5 digit ID
}

function generatePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let pass = '';
  for (let i = 0; i < 8; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

// Add member to table
function addMember() {
  const name = document.getElementById('memberName').value;
  const memberClass = document.getElementById('memberClass').value;

  if (name && memberClass) {
    const id = generateID();
    const pass = generatePassword();

    const table = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = memberClass;
    newRow.insertCell(2).innerText = id;
    newRow.insertCell(3).innerText = pass;

    document.getElementById('memberName').value = '';
    document.getElementById('memberClass').value = '';
  } else {
    alert('Please fill in all fields');
  }
}
