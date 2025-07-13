import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

/**
 * Clones a node and copies computed styles to the clone.
 */
export function cloneWithStyles(node: HTMLElement) {
  const clone = node.cloneNode(true) as HTMLElement;
  const allElems = node.querySelectorAll("*");
  const cloneElems = clone.querySelectorAll("*");

  allElems.forEach((elem, i) => {
    const computedStyle = window.getComputedStyle(elem as HTMLElement);
    for (let j = 0; j < computedStyle.length; j++) {
      const prop = computedStyle[j];
      (cloneElems[i] as HTMLElement).style.setProperty(
        prop,
        computedStyle.getPropertyValue(prop),
        computedStyle.getPropertyPriority(prop)
      );
    }
  });

  // Also copy root node styles
  const rootStyle = window.getComputedStyle(node);
  for (let j = 0; j < rootStyle.length; j++) {
    const prop = rootStyle[j];
    clone.style.setProperty(
      prop,
      rootStyle.getPropertyValue(prop),
      rootStyle.getPropertyPriority(prop)
    );
  }

  return clone;
}

/**
 * Downloads an element as a PNG image, preserving styles (works with Tailwind).
 */
export async function downloadElementAsImage(element: HTMLElement) {
  if (!element) return;

  await document.fonts.ready;
  await new Promise((r) => setTimeout(r, 300));
  const styledClone = cloneWithStyles(element);
  document.body.appendChild(styledClone);
  styledClone.style.position = "fixed";
  styledClone.style.top = "-9999px";

  const canvas = await html2canvas(styledClone, {
    scale: 1.5,
    useCORS: true,
    backgroundColor: null,
  });

  styledClone.remove();

  const image = canvas.toDataURL("image/png");
  return image;
}

/**
 * Convert a canvas image (dataURL) to a PDF Blob.
 * @param imgData - The image dataURL (PNG)
 * @returns Blob representing the PDF file
 */
export function convertCanvasToPdfBlob(imgData: string): Blob {
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [360, 720],
  });
  pdf.addImage(imgData, "PNG", 0, 0, 360, 720);
  // Get PDF as Blob
  const pdfBlob = pdf.output("blob");
  return pdfBlob;
}

export async function getCardsImageAndPdfsFiles(
  elements: HTMLElement[]
): Promise<{ images: File[]; pdfs: File[] }> {
  const results = await Promise.all(
    elements.map(async (element, i) => {
      const imageDataUrl = await downloadElementAsImage(element);
      if (!imageDataUrl) return null;

      // Convert image dataURL to File
      const imageFile = dataURLtoFile(imageDataUrl, `card_${i + 1}.png`);

      // Convert image dataURL to PDF Blob, then to File
      const pdfBlob = convertCanvasToPdfBlob(imageDataUrl);
      const pdfFile = new File([pdfBlob], `card_${i + 1}.pdf`, {
        type: "application/pdf",
      });

      return { imageFile, pdfFile };
    })
  );

  const images: File[] = [];
  const pdfs: File[] = [];
  for (const result of results) {
    if (result) {
      images.push(result.imageFile);
      pdfs.push(result.pdfFile);
    }
  }

  return { images, pdfs };
}

function dataURLtoFile(dataurl: string, filename: string): File {
  const arr = dataurl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "image/png";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
