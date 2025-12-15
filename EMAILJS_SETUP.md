# EmailJS Setup Guide

Form contact sudah terintegrasi dengan EmailJS untuk mengirim email ke **rifatarrahman15@gmail.com**.

## Langkah-langkah Setup:

### 1. Daftar di EmailJS
- Kunjungi https://www.emailjs.com/
- Buat akun gratis (free plan cukup untuk kebutuhan personal)

### 2. Buat Email Service
- Setelah login, masuk ke **Email Services**
- Klik **Add New Service**
- Pilih provider email Anda (Gmail, Outlook, dll)
- Ikuti instruksi untuk menghubungkan email Anda
- Catat **Service ID** yang diberikan

### 3. Buat Email Template
- Masuk ke **Email Templates**
- Klik **Create New Template**
- Gunakan template berikut:

**Subject:**
```
Pesan Baru dari Portfolio - {{from_name}}
```

**Content:**
```
Anda menerima pesan baru dari portfolio website:

Nama: {{from_name}}
Email: {{from_email}}
Reply To: {{reply_to}}

Pesan:
{{message}}

---
Email ini dikirim dari form contact portfolio.
```

- Catat **Template ID** yang diberikan

### 4. Dapatkan Public Key
- Masuk ke **Account** > **General**
- Catat **Public Key** Anda

### 5. Setup Environment Variables
Buat file `.env` di root project dengan isi:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Ganti `your_service_id_here`, `your_template_id_here`, dan `your_public_key_here` dengan nilai yang Anda dapatkan dari langkah sebelumnya.

### 6. Restart Development Server
Setelah membuat file `.env`, restart development server:
```bash
npm run dev
```

## Testing
1. Isi form contact di website
2. Klik "Kirim Pesan"
3. Cek email **rifatarrahman15@gmail.com** untuk melihat pesan yang masuk

## Troubleshooting
- Pastikan semua environment variables sudah diisi dengan benar
- Pastikan email service sudah terhubung dengan benar
- Pastikan template menggunakan variable names yang benar: `{{from_name}}`, `{{from_email}}`, `{{message}}`, dll
- Cek console browser untuk error messages

## Catatan
- Free plan EmailJS memiliki limit 200 email/bulan
- Untuk production, pertimbangkan untuk upgrade ke paid plan jika diperlukan

