function kirimData() {
  var name = document.getElementById("nama").value;
  var ID = document.getElementById("ID").value;
  var JenisMesin = document.querySelector("input[name=JenisMesin]:checked").value;
  var alamat = document.getElementById("alamat").value;
  var dropdownValue = document.getElementById("dropdown").value;
  var tanggalValue = document.getElementById("tanggal").value;
  
  // Memformat nilai tanggal (YYYY-MM-DD) ke format yang lebih mudah dibaca (DD-MM-YYYY)
  var dateParts = tanggalValue.split("-");
  var formattedDate = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0];

  var alertMessage =
    "Nama: " + name + "\n" +
    "ID: " + ID + "\n" +
    "Jenis Mesin: " + JenisMesin + "\n" +
    "Alamat: " + alamat + "\n" +
    "Jenis Kelamin: " + dropdownValue + "\n" +
    "Tanggal: " + formattedDate;

  setTimeout(function() {
    alert(alertMessage);
    window.location.href = "index.html";
  }, 0);
}
