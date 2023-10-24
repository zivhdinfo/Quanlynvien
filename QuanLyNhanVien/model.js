function dataStaff(
  username,
  fullname,
  email,
  password,
  days,
  money,
  level,
  timework
) {
  this.username = username;
  this.fullname = fullname;
  this.email = email;
  this.password = password;
  this.days = days;
  this.money = money;
  this.timework = timework;
  this.level = level;
  this.sumMoney = function () {
    if (this.level == "Sếp") {
      return this.money * 3;
    } else if (this.level == "Trưởng phòng") {
      return this.money * 2;
    } else if (this.level == "Nhân viên") {
      return this.money * 1;
    } else {
      return "Nhân viên này hiện bị lỗi chức vụ";
    }
  };
  this.typeStaff = function () {
    if (this.timework >= 192) {
      return "Nhân Viên Xuất Sắc";
    } else if (this.timework >= 176) {
      return "Nhân Viên Giỏi";
    } else if (this.timework >= 160) {
      return "Nhân Viên Khá";
    } else if (this.timework < 160) {
      return "Nhân Viên Trung Bình";
    } else {
      return "Nhân viên này hiện không thể xếp loại";
    }
  };
}



function renderFE(listStaff){
  var contentHTML = "";
  for (var i = 0; i < listStaff.length; i++) {
    var data = listStaff[i];
   
    trString = `<tr>
      <td>${data.username}</td>
      <td>${data.fullname}</td>
      <td>${data.email}</td>
      <td>${data.days}</td>
      <td>${data.level}</td>
      <td>${data.sumMoney()}</td>
      <td>${data.typeStaff()}</td>
      <td>
        <a onclick = "delData('${data.username}')" class="btn btn-danger text-white">Delete</a>
        <a onclick = "editData('${data.username}')" data-toggle="modal" data-target="#myModal" class="btn btn-warning text-white">Edit</a> 
      </td>
    </tr>`;
    contentHTML = contentHTML + trString;
    }
  
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}