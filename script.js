document.getElementById('generateBtn').addEventListener('click', function() {
  const textInput = document.getElementById('textInput').value;
  const qrCodeContainer = document.getElementById('qrCode');

  // Limpiar el QR Code anterior si existe
  qrCodeContainer.innerHTML = '';

  // Generar el código QR solo si el input no está vacío
  if (textInput.trim()) {
      new QRCode(qrCodeContainer, {
          text: textInput,
          width: 200,
          height: 200,
          colorDark : "#000000",
          colorLight : "#ffffff"
      });
  } else {
      alert('Por favor, introduce una URL o texto válido.');
  }
});
