var listStaff = [];

var dataJson = localStorage.getItem("listStaff");
if (dataJson != null) {
  var result = JSON.parse(dataJson); // Lưu dataJson vào result
  //  Chuyển đổi từ data localStore về data gốc để sử dụng function
  listStaff = result.map(function (item) {
    return new dataStaff(
      item.username,
      item.fullname,
      item.email,
      item.password,
      item.days,
      item.money,
      item.level,
      item.timework
    );
  });
  
  renderFE(listStaff);
}

function btnThemNV() {
  var username = document.getElementById("tknv").value;
  var fullname = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var days = document.getElementById("datepicker").value;
  var money = document.getElementById("luongCB").value;
  var level = document.getElementById("chucvu").value;
  var timework = document.getElementById("gioLam").value;
  var staff = new dataStaff(
    username,
    fullname,
    email,
    password,
    days,
    money,
    level,
    timework
  );

  // validate
  var isValid = true;
  if (!isUsernameUnique(username)) {
    document.getElementById("tbTKNV").innerHTML = "Tên người dùng đã tồn tại, hãy chọn tên khác";
    document.getElementById("tbTKNV").style.display = "block";
    return false;
    
  }
  else {
    document.getElementById("tbTKNV").style.display = "none";
  }
  if (!validateUsername(username)) {
    document.getElementById("tbTKNV").innerHTML = "Tài khoản phải có 4-6 ký tự";
    isValid = false;
    document.getElementById("tbTKNV").style.display = "block";
  } else {
    document.getElementById("tbTKNV").style.display = "none";
  }

  if (!validateFullName(fullname)) {
    document.getElementById("tbTen").innerHTML = "Tên nhân viên phải là chữ";
    isValid = false;
    document.getElementById("tbTen").style.display = "block";
  } else {
    document.getElementById("tbTen").style.display = "none";
  }

  if (!validateEmail(email)) {
    document.getElementById("tbEmail").innerHTML = "Email không đúng định dạng";
    isValid = false;
    document.getElementById("tbEmail").style.display = "block";
  } else {
    document.getElementById("tbEmail").style.display = "none";
  }

  if (!validatePassword(password)) {
    document.getElementById("tbMatKhau").innerHTML =
      "Mật khẩu phải từ 6-10 ký tự, bao gồm ít nhất 1 số, 1 chữ in hoa, và 1 ký tự đặc biệt";
    isValid = false;
    document.getElementById("tbMatKhau").style.display = "block";
  } else {
    document.getElementById("tbMatKhau").style.display = "none";
  }

  if (!validateDate(days)) {
    document.getElementById("tbNgay").innerHTML =
      "Ngày làm không đúng định dạng (mm/dd/yyyy)";
    isValid = false;
    document.getElementById("tbNgay").style.display = "block";
  } else {
    document.getElementById("tbNgay").style.display = "none";
  }

  if (!validateSalary(money)) {
    document.getElementById("tbLuongCB").innerHTML =
      "Lương cơ bản phải từ 1,000,000 đến 20,000,000";
    isValid = false;
    document.getElementById("tbLuongCB").style.display = "block";
  } else {
    document.getElementById("tbLuongCB").style.display = "none";
  }

  if (!validateJobTitle(level)) {
    document.getElementById("tbChucVu").innerHTML =
      "Chọn chức vụ hợp lệ (Sếp, Trưởng phòng, Nhân viên)";
    isValid = false;
    document.getElementById("tbChucVu").style.display = "block";
  } else {
    document.getElementById("tbChucVu").style.display = "none";
  }

  if (!validateHoursWorked(timework)) {
    document.getElementById("tbGiolam").innerHTML =
      "Số giờ làm trong tháng phải từ 80-200 giờ";
    isValid = false;
    document.getElementById("tbGiolam").style.display = "block";
  } else {
    document.getElementById("tbGiolam").style.display = "none";
  }

  if (isValid) {
    listStaff.push(staff);
    //  lưu vào localstore
    var dataJson = JSON.stringify(listStaff);
    localStorage.setItem("listStaff", dataJson);
    renderFE(listStaff);
  }
}
function delData(username) {
  var location = listStaff.findIndex(function (item) {
    return item.username == username;
  });
  listStaff.splice(location, 1);
  var dataJson = JSON.stringify(listStaff);
  // update localStorage
  localStorage.setItem("listStaff", dataJson);
  // update font end
  renderFE(listStaff);
}

function editData(username) {
  var location = listStaff.findIndex(function (item) {
    return item.username == username;
  });
  var data = listStaff[location];

  document.getElementById("tknv").readOnly = true; // dont edit
  document.getElementById("tknv").value = data.username;
  document.getElementById("name").value = data.fullname;
  document.getElementById("email").value = data.email;
  document.getElementById("password").value = data.password;
  document.getElementById("datepicker").value = data.days;
  document.getElementById("luongCB").value = data.money;
  document.getElementById("chucvu").value = data.level;
  document.getElementById("gioLam").value = data.timework;
}
function btnCapNhat() {
  var username = document.getElementById("tknv").value;
  var fullname = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var days = document.getElementById("datepicker").value;
  var money = document.getElementById("luongCB").value;
  var level = document.getElementById("chucvu").value;
  var timework = document.getElementById("gioLam").value;
  var staff = new dataStaff(
    username,
    fullname,
    email,
    password,
    days,
    money,
    level,
    timework
  );
  var location = listStaff.findIndex(function (item) {
    return item.username == username;
  });
  
// validate
var isValid = true;

if (!validateUsername(username)) {
  document.getElementById("tbTKNV").innerHTML = "Tài khoản phải có 4-6 ký tự";
  isValid = false;
  document.getElementById("tbTKNV").style.display = "block";
} else {
  document.getElementById("tbTKNV").style.display = "none";
}

if (!validateFullName(fullname)) {
  document.getElementById("tbTen").innerHTML = "Tên nhân viên phải là chữ";
  isValid = false;
  document.getElementById("tbTen").style.display = "block";
} else {
  document.getElementById("tbTen").style.display = "none";
}

if (!validateEmail(email)) {
  document.getElementById("tbEmail").innerHTML = "Email không đúng định dạng";
  isValid = false;
  document.getElementById("tbEmail").style.display = "block";
} else {
  document.getElementById("tbEmail").style.display = "none";
}

if (!validatePassword(password)) {
  document.getElementById("tbMatKhau").innerHTML =
    "Mật khẩu phải từ 6-10 ký tự, bao gồm ít nhất 1 số, 1 chữ in hoa, và 1 ký tự đặc biệt";
  isValid = false;
  document.getElementById("tbMatKhau").style.display = "block";
} else {
  document.getElementById("tbMatKhau").style.display = "none";
}

if (!validateDate(days)) {
  document.getElementById("tbNgay").innerHTML =
    "Ngày làm không đúng định dạng (mm/dd/yyyy)";
  isValid = false;
  document.getElementById("tbNgay").style.display = "block";
} else {
  document.getElementById("tbNgay").style.display = "none";
}

if (!validateSalary(money)) {
  document.getElementById("tbLuongCB").innerHTML =
    "Lương cơ bản phải từ 1,000,000 đến 20,000,000";
  isValid = false;
  document.getElementById("tbLuongCB").style.display = "block";
} else {
  document.getElementById("tbLuongCB").style.display = "none";
}

if (!validateJobTitle(level)) {
  document.getElementById("tbChucVu").innerHTML =
    "Chọn chức vụ hợp lệ (Sếp, Trưởng phòng, Nhân viên)";
  isValid = false;
  document.getElementById("tbChucVu").style.display = "block";
} else {
  document.getElementById("tbChucVu").style.display = "none";
}

if (!validateHoursWorked(timework)) {
  document.getElementById("tbGiolam").innerHTML =
    "Số giờ làm trong tháng phải từ 80-200 giờ";
  isValid = false;
  document.getElementById("tbGiolam").style.display = "block";
} else {
  document.getElementById("tbGiolam").style.display = "none";
}

if (isValid) {
    if (location !== -1) {
      //  Tiến hành update
      listStaff[location].username = staff.username;
      listStaff[location].fullname = staff.fullname;
      listStaff[location].email = staff.email;
      listStaff[location].password = staff.password;
      listStaff[location].days = staff.days;
      listStaff[location].money = staff.money;
      listStaff[location].level = staff.level;
      listStaff[location].timework = staff.timework;

      // Gỡ chế độ chỉ đọc cho ô mã sinh viên để cho phép chỉnh sửa lại sau khi cập nhật
      document.getElementById("tknv").readOnly = false;

      // Xóa giá trị trong các ô nhập liệu
      document.getElementById("tknv").value = "";
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value;
      document.getElementById("datepicker").value = "";
      document.getElementById("luongCB").value = "";
      document.getElementById("chucvu").value = "";
      document.getElementById("gioLam").value = "";

      //  lưu vào localstore
      var dataJson = JSON.stringify(listStaff);
      localStorage.setItem("listStaff", dataJson);
      renderFE(listStaff);
    } else {
      Swal.fire("Không tìm thấy thông tin của nhân viên này.");
    }
  } else {
    Swal.fire (`Vui Lòng Đáp Ứng Đủ Các Điều Kiện`)
  }
}
function btnTimNV() {
  var searchName = document.getElementById("searchName").value;

  var filteredEmployees = listStaff.filter(function (item) {
    return item.typeStaff() === searchName;
  });

  if (filteredEmployees.length > 0) {
    renderFE(filteredEmployees);
  } else {
    
    alert(`Không có ${searchName}`);
  }
}
