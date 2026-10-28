# 🔗 BitLinks — URL Shortener

**BitLinks** is a full-stack URL shortening web application built with Next.js, React, Tailwind CSS, and MongoDB. It allows users to convert long URLs into short, customizable links that are easier to share and remember.

## ✨ Features

- **URL Shortening:** Convert long URLs into shorter links.
- **Custom Short URLs:** Choose your preferred text for a short link.
- **Duplicate Validation:** Prevents duplicate short URL identifiers.
- **Database Integration:** Store original URLs and short identifiers in MongoDB.
- **REST API:** Handle URL generation through Next.js API routes.
- **Responsive UI:** Clean interface styled with Tailwind CSS.
- **About & Contact Pages:** Dedicated pages for project information and contact details.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework and API routes |
| React | User interface and state management |
| Tailwind CSS | Styling and responsive design |
| MongoDB | Database for storing URL mappings |
| JavaScript | Application logic |
| Postman | API testing |
| Git & GitHub | Version control and source code hosting |

## 📸 Application Pages

- **Home:** Introduction to BitLinks and navigation.
- **Shorten:** Enter a long URL and choose a custom short identifier.
- **About:** Learn about the application and its features.
- **Contact:** Contact the developer by email or visit GitHub.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A MongoDB database, either local MongoDB or [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas)
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/sankul-jadhav/BitLinks.git
```

> If your repository has a different name, replace `BitLinks` with its actual GitHub repository name.

### 2. Navigate to the project directory

```bash
cd BitLinks
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_HOST=http://localhost:3000
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

**Security:** Never commit `.env.local` or publish your database credentials.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API Endpoint

### Generate a Short URL

**Endpoint:** `/api/generate`

**Method:** `POST`

**Request Body:**

```json
{
  "url": "https://example.com/a-long-url",
  "shorturl": "my-link"
}
```

**Successful Response:**

```json
{
  "success": true,
  "error": false,
  "message": "URL Generated Successfully"
}
```

The API checks whether the requested short identifier already exists before inserting the URL mapping into MongoDB.

## 📚 What I Learned

Through this project, I practiced:

- Building applications with the Next.js App Router.
- Creating API endpoints using Route Handlers.
- Managing form inputs and state using React Hooks.
- Connecting a Next.js application to MongoDB.
- Sending HTTP requests with the Fetch API.
- Testing APIs using Postman.
- Styling interfaces using Tailwind CSS.
- Managing source code with Git and GitHub.

## 🚀 Future Improvements

- Implement redirects from short URLs to their original destinations.
- Add URL validation and stronger error handling.
- Add user authentication and link management.


## 👨‍💻 Developer

**Sankul Jadhav**

- GitHub: [sankul-jadhav](https://github.com/sankul-jadhav)
- Email: [jadhavsankul448@gmail.com](mailto:jadhavsankul448@gmail.com)

---

⭐ If you find this project interesting, feel free to explore the code and share feedback.