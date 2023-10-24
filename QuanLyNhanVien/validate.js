function display(data){
  document.getElementById(`"${data}"`).style.display = "block"; // Hiển thị thông báo lỗi cho tài khoản
  
}
function isUsernameUnique(username) {
  for (var i = 0; i < listStaff.length; i++) {
    if (listStaff[i].username === username) {
      return false; // Tên người dùng đã tồn tại
    }
  }
  return true; // Tên người dùng không bị trùng
}


  



function isUsernameUnique(username) {
  return listStaff.every(function (employee) {
    return employee.username !== username;
  });
}
function validateUsername(username) {
  return username.length >= 4 && username.length <= 6;
}

function validateFullName(fullname) {
  return /^[a-zA-Z\s]+$/.test(fullname);
}
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function validatePassword(password) {
  return /^(?=.*\d)(?=.*[A-Z])(?=.*\W)[A-Za-z\d\W]{6,10}$/.test(password);
}

function validateDate(date) {
  return /^\d{2}\/\d{2}\/\d{4}$/.test(date);
}

function validateSalary(salary) {
  return salary >= 1000000 && salary <= 20000000;
}

function validateJobTitle(level) {
  return level === "Sếp" || level === "Trưởng phòng" || level === "Nhân viên";
}

function validateHoursWorked(hours) {
  return hours >= 80 && hours <= 200;
}


