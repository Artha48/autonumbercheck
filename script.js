 // Fungsi validasi (tetap sama)
document.getElementById("numberInput").addEventListener("input", function() {
  const input = document.getElementById("numberInput").value;
  const resultElement = document.getElementById("result");

  if (input.trim() === "") {
    resultElement.textContent = "";
    resultElement.className = "message";
    return;
  }

  const scientificNumberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

  if (scientificNumberRegex.test(input)) {
    resultElement.textContent = "Yes, it is a number";
    resultElement.className = "message success show";
  } else {
    resultElement.textContent = "No, it is not a number";
    resultElement.className = "message error show";
  }
});

// Fungsi About Us (tetap sama)
document.getElementById("aboutBtn").addEventListener("click", function() {
  const creatorInfo = document.getElementById("creatorInfo");
  creatorInfo.textContent = "Created by Serafin Salindeho";
  creatorInfo.classList.add("show");
  
  setTimeout(() => {
    creatorInfo.classList.remove("show");
  }, 3000);
});

// Fungsi Save as PDF yang DIPERBAIKI
document.getElementById("savePdf").addEventListener("click", function() {
  // Pastikan jsPDF sudah terload
  if (typeof jsPDF !== 'undefined') {
    const doc = new jsPDF();
    
    const inputValue = document.getElementById("numberInput").value || "No input";
    const validationResult = document.getElementById("result").textContent || "No validation";
    const timestamp = new Date().toLocaleString();
    
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("Scientific Number Validation Report", 15, 20);
    
    doc.setFontSize(12);
    doc.text(`Date: ${timestamp}`, 15, 30);
    doc.text(`Input: ${inputValue}`, 15, 40);
    doc.text(`Result: ${validationResult}`, 15, 50);
    
    const filename = `Validation_${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.pdf`;
    doc.save(filename);
  } else {
    alert("PDF library failed to load. Please try again later.");
  }
});
