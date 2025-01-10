
$(document).ready(function () {
  if(sessionStorage.getItem("EmpNumber_HR")==null && sessionStorage.getItem("OpenOSRandom")==1) { location.href = "index.html"; }
  Connect_DB();
  CheckData();
});


function CheckData() {
  var str = "";
  var str1 = "";
  dbStaff.where('EmpNumber','==',sessionStorage.getItem("EmpNumber_HR"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      str1 += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile"></div>';
      str1 += '<div class="NameLine" style="color:#000000;">'+ doc.data().EmpName +'</div>';
      $("#MyProfile").html(str1);  
      str += '<div style="font-size:13px; color:#ff0000;">'+ doc.data().DateConsend +'</div>';
      $("#MyDateConsend").html(str);  
    });

  });
}



function CloseAll() {
  document.getElementById('id01').style.display='none';
}
