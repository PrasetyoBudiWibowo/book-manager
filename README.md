# 📚 Book Manager API

Aplikasi RESTful API sederhana untuk manajemen data buku menggunakan **Node.js, Express, dan Sequelize (SQLite)**.

---

## 🚀 Fitur

* Menambahkan buku baru
* Mengambil semua data buku (dengan filter)
* Mengambil detail buku berdasarkan ID
* Mengupdate data buku
* Menghapus buku
* Validasi input
* Pencegahan data duplikat
* Custom middleware (logger)
* Autentikasi JWT (untuk endpoint tertentu)

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* Sequelize ORM
* SQLite
* JSON Web Token (JWT)

---

## 📦 Cara Install

Clone repository:

```bash
git clone https://github.com/PrasetyoBudiWibowo/book-manager
cd book-manager
```

Install dependency:

```bash
npm install
```

---

## ▶️ Cara Menjalankan Aplikasi

```bash
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:3000
```

---

## 🧪 Endpoint API

### 🔓 Endpoint Publik

#### 📌 Login

**POST** `/api/login`

```json
{
  "username": "admin",
  "password": "123456"
}
```

---

#### 📌 Ambil Semua Buku (dengan filter)

**GET** `/api/books`

Query parameter (opsional):

* `title`
* `author`
* `year`

Contoh:

```
/api/books?author=martin
```

---

#### 📌 Ambil Detail Buku

**GET** `/api/books/:id`

---

### 🔐 Endpoint Terproteksi (Butuh Token JWT)

#### 📌 Tambah Buku

**POST** `/api/books`

#### 📌 Update Buku

**PUT** `/api/books/:id`

#### 📌 Hapus Buku

**DELETE** `/api/books/:id`

---

## 🔐 Autentikasi JWT

### 1. Login untuk mendapatkan token

```bash
POST /api/login
```

Response:

```json
{
  "status": true,
  "message": "Login berhasil",
  "token": "your_token_here"
}
```

---

### 2. Gunakan token pada header

Tambahkan header:

```
Authorization: Bearer your_token_here
```

---

### 3. Contoh request dengan token

```
POST /api/books
```

Header:

```
Authorization: Bearer your_token_here
```

---

## ⚙️ Seeder (Data Dummy)

Untuk mengisi data buku secara otomatis:

```bash
node generateBooks.js
```

---

## 🧾 Catatan

* Data buku tidak boleh duplikat (berdasarkan title, author, dan year)
* Mendukung filter data menggunakan query string
* Middleware logger mencatat request (method, URL, status, dan waktu respon)
* Menggunakan SQLite untuk kemudahan setup dan testing

---

## 👨‍💻 Author

Prasetyo Budi Wibowo
