# 🔗 URL Shortener

A full-stack URL Shortener built using **Node.js, Express, PostgreSQL, and JavaScript**.
It allows users to convert long URLs into short, shareable links and redirects them efficiently.

## 🌍 Live Demo
--
https://url-shortener-b2k1.onrender.com/
--

## 🚀 Features

* 🔗 Generate short URLs from long links
* 🔁 Redirect short URL → original URL
* 📊 Click tracking (basic analytics)
* 🌐 Fully deployed backend with public access
* ⚡ Clean and responsive UI (Tailwind CSS)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL (Neon)
* **Frontend:** HTML, Tailwind CSS, JavaScript
* **Deployment:** Render

---

## 📁 Project Structure

```
url-shortener/
│── public/
│   ├── index.html
│   ├── script.js
│── db.js
│── server.js
│── package.json
│── .gitignore
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
DATABASE_URL=your_postgres_connection_string
BASE_URL=http://localhost:3000
```

---

## ▶️ Run Locally

1. Clone the repository:

```
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
node server.js
```

4. Open in browser:

```
http://localhost:3000
```

---
## 🧠 How It Works

1. User enters a long URL
2. Server generates a unique short code using `nanoid`
3. Mapping is stored in PostgreSQL
4. Visiting the short URL redirects to the original URL

---

## 📈 Future Improvements

* User authentication
* Custom short URLs
* Advanced analytics dashboard
* URL expiration
* Redis caching for faster redirects

---

## 🧾 License

This project is open-source and available under the MIT License.
