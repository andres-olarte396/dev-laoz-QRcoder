// Capacidad máxima de caracteres por nivel de corrección y versión (1 a 5)
const versionCapacity = {
  L: [41, 77, 127, 187, 255], // Versión 1-5 con corrección L (Bajo)
  M: [34, 63, 101, 149, 202], // Versión 1-5 con corrección M (Medio)
  Q: [27, 48, 77, 111, 144], // Versión 1-5 con corrección Q (Alto)
  H: [17, 34, 58, 82, 106], // Versión 1-5 con corrección H (Muy alto)
};

function updateWordCount() {
  const textInput = document.getElementById("textInput").value;
  const wordCount = textInput.trim() ? textInput.trim().split(/\s+/).length : 0;
  const correctionLevel = document.getElementById("correctionLevel").value;

  const maxCapacity =
    versionCapacity[correctionLevel][
      versionCapacity[correctionLevel].length - 1
    ];
  document.getElementById(
    "wordCount"
  ).textContent = `Palabras: ${wordCount}, Caracteres: ${textInput.length} (Máximo: ${maxCapacity} caracteres)`;
}

function downloadQRCode(){
  const qrCode = document.getElementById("qrCode").querySelector("canvas");
  if (!qrCode) {
    alert("Primero genera un código QR antes de descargarlo.");
    return;
  }
  const link = document.createElement("a");
  link.download = "codigo-qr.png";
  link.href = qrCode.toDataURL("image/png");
  link.click();
}

function generateQRCode() {
  const text = document.getElementById("textInput").value;

  if (!text) {
    alert("Por favor ingresa texto para generar el código QR.");
    return;
  }

  const size = document.getElementById("size").value;
  const correctionLevel = document.getElementById("correctionLevel").value;
  const colorForeground = document.getElementById("colorForeground").value;
  const colorBackground = document.getElementById("colorBackground").value;

  // Buscar versión mínima que soporte el texto
  let selectedVersion = 0;
  for (let i = 0; i < versionCapacity[correctionLevel].length; i++) {
    if (text.length <= versionCapacity[correctionLevel][i]) {
      selectedVersion = i + 1; // Las versiones inician en 1
      break;
    }
  }

  if (selectedVersion === 0) {
    alert(
      `El texto es demasiado largo para las versiones soportadas en el nivel de corrección ${correctionLevel}.\n\n` +
        `Intenta reducir el texto a un máximo de ${
          versionCapacity[correctionLevel][
            versionCapacity[correctionLevel].length - 1
          ]
        } caracteres, ` +
        `disminuir el nivel de corrección o aumentar el tamaño del código QR.`
    );
    return;
  }

  // Generar el código QR con la versión seleccionada
  const qrContainer = document.getElementById("qrCode");
  qrContainer.innerHTML = "";

  try {
    new QRCode(qrContainer, {
      text: text,
      width: parseInt(size),
      height: parseInt(size),
      colorDark: colorForeground,
      colorLight: colorBackground,
      correctLevel: QRCode.CorrectLevel[correctionLevel],
      typeNumber: selectedVersion,
    });
  } catch (error) {
    alert("Ocurrió un error al generar el código QR: " + error);
  }
}
