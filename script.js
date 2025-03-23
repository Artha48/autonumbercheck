document.getElementById("numberInput").addEventListener("input", function () {
    // Ambil nilai dari input
    const input = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");
  
    // Jika input kosong, hilangkan pesan
    if (input.trim() === "") {
      resultElement.textContent = "";
      resultElement.className = "message";
      return; // Keluar dari fungsi
    }
  
    // Gunakan regular expression untuk memeriksa apakah input adalah angka ilmiah
    const scientificNumberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  
    if (scientificNumberRegex.test(input)) {
      resultElement.textContent = "Yes, it is a number";
      resultElement.className = "message success show";
    } else {
      resultElement.textContent = "No, it is not a number";
      resultElement.className = "message error show";
    }
  });