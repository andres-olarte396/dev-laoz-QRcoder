// Actualizar la vista previa de color
function updateColorPreview(inputId, previewId) {
    document.getElementById(previewId).style.backgroundColor = document.getElementById(inputId).value;
  }

  // Actualizar vistas previas al cargar la página
  updateColorPreview("colorForeground", "foregroundPreview");
  updateColorPreview("colorBackground", "backgroundPreview");

  document.getElementById('colorForeground').addEventListener('input', () => {
    updateColorPreview("colorForeground", "foregroundPreview");
  });

  document.getElementById('colorBackground').addEventListener('input', () => {
    updateColorPreview("colorBackground", "backgroundPreview");
  });

  document.getElementById('generateBtn').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    const size = document.getElementById('size').value;
    const correctionLevel = document.getElementById('correctionLevel').value;
    const colorForeground = document.getElementById('colorForeground').value;
    const colorBackground = document.getElementById('colorBackground').value;

    const qrContainer = document.getElementById('qrCode');
    qrContainer.innerHTML = '';

    try {
      new QRCode(qrContainer, {
        text: text,
        width: parseInt(size),
        height: parseInt(size),
        colorDark: colorForeground,
        colorLight: colorBackground,
        correctLevel: QRCode.CorrectLevel[correctionLevel],
      });
    } catch (error) {
      alert("Error: El contenido es demasiado grande para el tamaño y nivel de corrección seleccionados. Intenta reducir el texto, disminuir el nivel de corrección o aumentar el tamaño del código QR.");
    }
  });