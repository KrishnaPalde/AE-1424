import config from "@/config";

const API_URL = config.API_URL;

/**
 * Uploads a File to Cloudinary via the backend (keeps the API secret server-side).
 * @param {File} file
 * @param {string} folder - one of "logos" | "banners" | "services" | "gallery" (sub-paths ok, e.g. "logos/government")
 * @param {(percent: number) => void} [onProgress]
 * @returns {Promise<{url: string, publicId: string}>}
 */
export async function uploadImage(file, folder, onProgress) {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("folder", folder);

  // Use XHR (not fetch) so we can report upload progress, matching the old Firebase UX.
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${API_URL}/upload`);

    xhr.upload.onprogress = (e) => {
      if (onProgress && e.lengthComputable) {
        onProgress((e.loaded / e.total) * 100);
      }
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          resolve(JSON.parse(xhr.responseText));
        } catch (err) {
          reject(err);
        }
      } else {
        reject(new Error(`Upload failed with status ${xhr.status}`));
      }
    };
    xhr.onerror = () => reject(new Error("Network error during upload"));
    xhr.send(formData);
  });
}

/**
 * Deletes a previously-uploaded Cloudinary image, given its URL.
 * Safe to call with a non-Cloudinary URL (e.g. a leftover Firebase URL) — it's a no-op.
 */
export async function deleteImageByUrl(imageUrl) {
  if (!imageUrl) return;
  try {
    await fetch(`${API_URL}/upload/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: imageUrl }),
    });
  } catch (err) {
    console.error("Failed to delete image:", err);
  }
}
