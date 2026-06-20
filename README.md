# Backend-Ledger

A modern **Bank Transaction System** built with Node.js, Express, and MongoDB. This backend service provides secure user authentication, account management, and transaction tracking functionality for a banking application.

---

## 🌟 Features

- **User Authentication**: Secure user registration and login with JWT-based authentication
- **Account Management**: Create and manage user bank accounts
- **Transaction Tracking**: Record, store, and retrieve financial transactions
- **Password Security**: Bcrypt-based password hashing for enhanced security
- **REST API**: Clean and intuitive RESTful API endpoints
- **MongoDB Integration**: Persistent data storage with MongoDB

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: MongoDB (with Mongoose 9.6.2)
- **Authentication**: 
  - JSON Web Tokens (JWT) 9.0.3
  - Bcryptjs 3.0.3
- **Utilities**:
  - Cookie Parser 1.4.7
  - Dotenv 17.4.2

---

## 📋 Prerequisites

Before running the project, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** account (for database connection)

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/n1njaO7/Backend-Ledger.git
cd Backend-Ledger
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_jwt_secret_key_here
PORT=3000
```

**Note**: Replace placeholders with your actual MongoDB credentials and secure JWT secret.

### 4. Verify Environment Setup

Ensure your `.env` file contains:
- `MONGO_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation

---

## 🏃 Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

This uses `nodemon` to automatically restart the server when files change.

### Production Mode

```bash
npm start
```

This runs the server with:

```bash
node server.js
```

The server will start on **http://localhost:3000** by default.

---

## 📁 Project Structure

```
Backend-Ledger/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── routes/
│   │   ├── auth.routes.js    # Authentication endpoints
│   │   ├── account.routes.js # Account management endpoints
│   │   └── transaction.routes.js  # Transaction endpoints
│   ├── config/
│   │   └── db.js             # MongoDB connection setup
│   ├── models/               # Mongoose schemas
│   ├── controllers/          # Route handlers
│   └── middleware/           # Custom middleware
├── server.js                 # Entry point
├── package.json              # Dependencies & scripts
├── .env                      # Environment variables (not in repo)
└── .gitignore               # Git ignore rules
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Account Routes (`/api/accounts`)

- `GET /api/accounts` - Get all accounts
- `POST /api/accounts` - Create a new account
- `GET /api/accounts/:id` - Get specific account
- `PUT /api/accounts/:id` - Update account details

### Transaction Routes (`/api/transactions`)

- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `GET /api/transactions/:id` - Get specific transaction
- `DELETE /api/transactions/:id` - Delete a transaction

---

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Bcryptjs**: Passwords are hashed using bcryptjs with salt rounds
- **Environment Variables**: Sensitive data stored in `.env` file
- **Cookie Parser**: Secure cookie handling
- **HTTP-only Cookies**: Support for secure session management

---

## 🛠️ Development

### Available Scripts

```bash
# Run development server with auto-reload
npm run dev

# Start production server
npm start

# Run tests (currently not configured)
npm test
```

### Project Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | 5.2.1 | Web framework |
| mongoose | 9.6.2 | MongoDB ODM |
| jsonwebtoken | 9.0.3 | JWT authentication |
| bcryptjs | 3.0.3 | Password hashing |
| cookie-parser | 1.4.7 | Cookie handling |
| dotenv | 17.4.2 | Environment variables |

---

## 📝 Environment Variables

The `.env` file should contain:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secure_random_string` |
| `PORT` | Server port (optional) | `3000` |

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify `MONGO_URL` in `.env` is correct
- Check MongoDB Atlas IP whitelist
- Ensure network access is enabled

### JWT Authentication Fails
- Confirm `JWT_SECRET` is set in `.env`
- Check token expiration
- Verify JWT token format in requests

### Port Already in Use
- Change `PORT` in `.env` or
- Kill process using port 3000: `lsof -ti:3000 | xargs kill -9` (macOS/Linux)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License** - see the LICENSE file for details.

---

## 👤 Author

**n1njaO7**

- GitHub: [@n1njaO7](https://github.com/n1njaO7)

---

## 📞 Support

For issues, questions, or suggestions, please:

1. Check existing [GitHub Issues](https://github.com/n1njaO7/Backend-Ledger/issues)
2. Create a new issue with detailed description
3. Include error messages and environment details

---

## 🚀 Next Steps

- [ ] Add comprehensive API documentation (Swagger/OpenAPI)
- [ ] Implement rate limiting
- [ ] Add input validation and error handling
- [ ] Create unit and integration tests
- [ ] Add logging system
- [ ] Implement account balance tracking
- [ ] Add transaction history filtering
- [ ] Implement role-based access control

---

**Last Updated**: 2026-06-20  
**Status**: Active Development
