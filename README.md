# Generador de Código QR

Un generador de códigos QR simple y rápido, construido con HTML, CSS y JavaScript. Permite generar códigos QR a partir de una URL o texto ingresado por el usuario.

## Características

- Generación rápida de códigos QR.
- Interfaz amigable y simple.
- Sin necesidad de dependencias pesadas: usa `QRCode.js` desde un CDN.
- Adaptable a cualquier proyecto web.

## Requisitos

No se necesita instalación de dependencias adicionales. Simplemente un navegador moderno que soporte HTML5 y JavaScript.

## Instalación

1. Clona este repositorio o descarga los archivos directamente.

   ```bash
   git clone https://github.com/usuario/generador-qr.git
   ```

2. Abre el archivo `index.html` en tu navegador favorito.

## Uso

1. Ingresa una URL o texto en el campo de texto.
2. Haz clic en el botón **"Generar Código QR"**.
3. El código QR aparecerá debajo del botón.

## Estructura del Proyecto

```txt
/ 📂qr-coder
│
├── 📃index.html       # Archivo principal con la estructura HTML.
├── 📃styles.css       # Archivo de estilos CSS para darle diseño a la página.
├── 📃script.js        # Lógica JavaScript para generar el código QR.
└── 📄README.md        # Documentación del proyecto.
```

## Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos para hacer que la página se vea bien.
- **JavaScript**: Lógica de negocio para generar los códigos QR.
- **[QRCode.js](https://davidshimjs.github.io/qrcodejs/)**: Librería para la generación de los códigos QR.

## Personalización

Puedes modificar fácilmente los siguientes aspectos en el archivo `script.js`:

- **Tamaño del código QR**: Cambia los valores `width` y `height` en la configuración de QRCode.
- **Colores del QR**: Personaliza los colores usando las opciones `colorDark` y `colorLight`.

## Ejemplo

![Generador de Código QR](https://user-images.githubusercontent.com/example/generador-qr.png)

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz un fork de este repositorio.
2. Crea una nueva rama con tus cambios.

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Haz commit de tus cambios.

   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```

4. Envía tus cambios a la rama principal.

   ```bash
   git push origin feature/nueva-funcionalidad
   ```

5. Abre un **Pull Request**.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
