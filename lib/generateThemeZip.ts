import JSZip from 'jszip';

export async function generateThemeZip(
    layout: Array<{ type: string; color: string; text: string }>,
    themeName: string
) {
    if (!layout || !Array.isArray(layout)) {
        throw new Error('Invalid layout provided. It should be an array of components.');
    }
    const zip = new JSZip();
    const themeFolder = (themeName || 'MyTheme').replace(/\s+/g, '-').toLowerCase();

    // --- style.css ---
    const styleCssContent = `
  /*
  Theme Name: ${themeName || 'MyTheme'}
  Author: Your Name
  Version: 1.0
  */
  `;
    zip.file(`${themeFolder}/style.css`, styleCssContent.trim());

    // --- functions.php ---
    const functionsPhpContent = `<?php
  // Enqueue styles and scripts here if needed
  ?>`;
    zip.file(`${themeFolder}/functions.php`, functionsPhpContent.trim());

    // --- header.php ---
    const headerPhpContent = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
  </head>
  <body>
    <header>
      <h1>${themeName}</h1>
    </header>
  `;
    zip.file(`${themeFolder}/header.php`, headerPhpContent.trim());

    // --- footer.php ---
    const footerPhpContent = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} ${themeName}</p>
    </footer>
    <?php wp_footer(); ?>
  </body>
  </html>
  `;
    zip.file(`${themeFolder}/footer.php`, footerPhpContent.trim());

    // --- index.php ---
    const bodyContent = layout.map((item: any) => {
        if (item.type === 'header') {
            return `<h2 style="color:${item.color};">${item.text}</h2>`;
        }
        if (item.type === 'section') {
            return `<div style="color:${item.color};">${item.text}</div>`;
        }
        return '';
    }).join('\n');

    const indexPhpContent = `
  <?php get_header(); ?>
  <main>
    ${bodyContent}
  </main>
  <?php get_footer(); ?>
  `;
    zip.file(`${themeFolder}/index.php`, indexPhpContent.trim());

    return await zip.generateAsync({ type: 'nodebuffer' });
}
