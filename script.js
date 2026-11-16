// --- Media storage config -----------------------------------------------
// Uploads go straight from the client's browser to Cloudinary's free tier
// (no backend server needed). Before this goes live:
//   1. Create a free Cloudinary account.
//   2. Settings -> Upload -> Add upload preset -> Signing mode: UNSIGNED.
//   3. Put your cloud name and that preset's name below.
// Until both are filled in, uploads are skipped and the form still submits.
const CLOUDINARY_CLOUD_NAME = 'YOUR_CLOUD_NAME';
const CLOUDINARY_UPLOAD_PRESET = 'YOUR_UNSIGNED_PRESET';
// ---------------------------------------------------------------------

const form = document.getElementById('lead-form');
const mediaInput = document.getElementById('media');
const mediaPreview = document.getElementById('media-preview');
const uploadStatus = document.getElementById('upload-status');
const formNote = document.getElementById('form-note');

const MAX_FILES = 6;
const MAX_FILE_MB = 25;

function describeFile(file) {
  return `${file.name} (${(file.size / 1024 / 1024).toFixed(1)} MB)`;
}

mediaInput.addEventListener('change', () => {
  mediaPreview.innerHTML = '';
  const files = Array.from(mediaInput.files || []);

  if (files.length > MAX_FILES) {
    uploadStatus.hidden = false;
    uploadStatus.textContent = `Please choose at most ${MAX_FILES} files.`;
    mediaInput.value = '';
    return;
  }
  uploadStatus.hidden = true;

  files.forEach((file) => {
    const li = document.createElement('li');
    const tooBig = file.size > MAX_FILE_MB * 1024 * 1024;
    li.textContent = describeFile(file) + (tooBig ? ` — too large, max ${MAX_FILE_MB}MB` : '');
    if (tooBig) li.classList.add('file-error');
    mediaPreview.appendChild(li);
  });
});

function isStorageConfigured() {
  return CLOUDINARY_CLOUD_NAME !== 'YOUR_CLOUD_NAME' && CLOUDINARY_UPLOAD_PRESET !== 'YOUR_UNSIGNED_PRESET';
}

async function uploadToCloudinary(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`, {
    method: 'POST',
    body: data,
  });
  if (!res.ok) throw new Error(`Upload failed for ${file.name}`);
  const json = await res.json();
  return json.secure_url;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const files = Array.from(mediaInput.files || []).filter(
    (file) => file.size <= MAX_FILE_MB * 1024 * 1024
  );

  let uploadedUrls = [];

  if (files.length && isStorageConfigured()) {
    uploadStatus.hidden = false;
    uploadStatus.textContent = 'Uploading your files…';
    try {
      uploadedUrls = (await Promise.all(files.map(uploadToCloudinary))).filter(Boolean);
    } catch (err) {
      uploadStatus.textContent = "Upload failed — you can still submit, we'll follow up about the files.";
    }
  }

  // TODO: send these fields (plus uploadedUrls) to a real form backend
  // (Formspree, Tally, a serverless function, etc.) so the lead and their
  // media arrive together. Right now this just logs locally.
  console.log('Lead submitted', {
    name: form.name.value,
    business: form.business.value,
    email: form.email.value,
    platforms: form.platforms.value,
    media: uploadedUrls,
  });

  uploadStatus.hidden = true;
  formNote.hidden = false;
  formNote.textContent = uploadedUrls.length
    ? `Thanks — we'll be in touch shortly. Received ${uploadedUrls.length} file(s).`
    : "Thanks — we'll be in touch shortly.";

  form.reset();
  mediaPreview.innerHTML = '';
});
