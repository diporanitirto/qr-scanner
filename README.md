<p align="center">
  <img src="logo.png" alt="DIPORANI" width="80">
</p>

<h1 align="center">QR Scanner</h1>

<p align="center">
  Pemindai QR Code untuk memverifikasi surat izin Ambalan Diporani Tirto, SMAN 1 Kasihan.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/html5--qrcode-161616?style=flat-square" alt="html5-qrcode">
</p>

---

## Tentang

Halaman web satu file untuk memindai QR Code yang tercetak di surat izin, lalu membuka halaman verifikasi miliknya. Tidak ada login, tidak ada database, tidak ada API.

QR Code pada surat izin sudah berisi URL lengkap ke halaman `/verify/[id]`, jadi Scanner ini cukup memindai lalu membuka alamat tersebut. Halaman verifikasi dan data statusnya dimiliki oleh [surat-izin-pramuka](https://github.com/diporanitirto/surat-ijin-pramuka).

## Fitur

- Kamera belakang otomatis dipakai, bukan kamera depan.
- Pemindaian QR langsung berpindah ke halaman tujuan begitu QR terbaca.
- Layar penuh satu halaman, tanpa tombol atau menu lain.
- Logo DIPORANI di header dan di tengah bingkai scan.
- Memberi tahu kalau izin kamera ditolak, dengan tombol coba lagi.
- Tautan Instagram dan GitHub di footer.

## Tech Stack

| Layer | Teknologi |
|---|---|
| Bahasa | HTML5, CSS3, JavaScript |
| Pemindai | html5-qrcode 2.3.8 (dimuat dari CDN) |
| Ikon | Font Awesome 6 (dimuat dari CDN) |
| Font | Bebas Neue (dimuat dari Google Fonts) |

Tidak ada build step dan tidak ada dependency yang perlu di-install.

## Menjalankan

```bash
python3 -m http.server 8000
```

Buka http://localhost:8000.

### Catatan kamera

Browser hanya mengizinkan akses kamera pada **HTTPS** atau **localhost**. Kalau dibuka lewat alamat IP LAN (misal `http://192.168.1.10:8000`), kamera akan ditolak dan halaman akan menampilkan peringatan. Untuk dipakai di HP di luar jaringan lokal, halaman ini perlu di-hosting di domain dengan HTTPS, misalnya lewat Cloudflare Pages atau Vercel.

## Terkait

- [diporanitirto/surat-ijin-pramuka](https://github.com/diporanitirto/surat-ijin-pramuka): aplikasi pengajuan surat izin, pemilik halaman `/verify` yang dibuka Scanner ini.
- [diporanitirto/dashboard](https://github.com/diporanitirto/dashboard): dashboard admin untuk memverifikasi pengajuan izin.