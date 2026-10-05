const reader = document.getElementById("reader");
const statusBox = document.getElementById("status");
const statusText = document.getElementById("status-text");
const retryBtn = document.getElementById("retry");

let scanner = null;
let active = false;

function showStatus(text, allowRetry) {
  statusText.textContent = text;
  retryBtn.hidden = !allowRetry;
  statusBox.classList.add("is-visible");
}

async function start() {
  if (active) return;

  try {
    const cameras = await Html5Qrcode.getCameras();

    if (!cameras.length) {
      showStatus("Kamera tidak ditemukan", true);
      return;
    }

    // Prefer the rear camera
    const rear = cameras.find((cam) => /back|rear|environment|belakang/i.test(cam.label));

    scanner = new Html5Qrcode(reader.id);
    await scanner.start(
      rear ? rear.id : cameras[0].id,
      { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 },
      onScan,
      () => {}
    );

    active = true;
    statusBox.classList.remove("is-visible");
  } catch (err) {
    const msg = String(err && err.message ? err.message : err);

    if (/permission|notallowed|denied/i.test(msg)) {
      showStatus("Izin kamera ditolak. Aktifkan izin kamera di browser lalu tekan Coba lagi.", true);
    } else if (/insecure|context|secure/i.test(msg)) {
      showStatus("Kamera butuh HTTPS atau localhost", true);
    } else {
      showStatus("Kamera gagal jalan: " + msg, true);
    }
  }
}

function onScan(decodedText) {
  if (!active) return;
  active = false;

  // QR contains a full URL, just open it
  window.location.href = decodedText;
}

retryBtn.addEventListener("click", start);

start();