# 🧶 HM-Shop — Handmade Crochet Toys Store

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

![HM-Shop Preview](https://raw.githubusercontent.com/antoninazz/hm-shop/main/public/demo.jpg)

**Live Demo:** [https://hm-shop-tawny.vercel.app/](https://hm-shop-tawny.vercel.app/)

---

## 🪡 Overview

**HM-Shop** is a full-stack e-commerce web application for selling **handmade crochet toys**, built with **Next.js (App Router)** and **TypeScript**.  
The project provides a complete shopping experience — from browsing and filtering products to placing and paying for orders.  
It includes **authentication**, **wishlist**, **shopping cart**, **order management**, and **integrations** with real delivery and payment APIs.  
The project is fully responsive and deployed on **Vercel**.

---

## ✨ Features

- 🧸 **Product Catalog** – Browse handmade toys by categories, filter, and search by name.  
- ❤️ **Wishlist System** – Like or remove products and store them for later.  
- 🛒 **Shopping Cart** – Add products with selected color and size variants, manage quantities dynamically.  
- 💳 **Secure Checkout & Payment** – Integrated **LiqPay** payment system.  
- 🚚 **Delivery Integration** – Real-time address and warehouse selection via **Nova Poshta API**.  
- 👤 **User Authentication** – Powered by **Clerk**, supporting sign-up, sign-in, and user sessions.  
- 📦 **Order Management** – View your orders with full product details.  
- 🧭 **Dynamic Filtering & Sorting** – Filter products by price, date, or category.  
- 🔔 **Notifications** – Toast messages for feedback and actions.  
- 📱 **Responsive Design** – Optimized for mobile and desktop.  

---

## 🧰 Technologies Used

### **Frontend**
- **Next.js 14 (App Router)** – SSR, routing, and API handling  
- **React 18** – Declarative UI components and hooks  
- **TypeScript** – Strong typing and scalability  
- **Tailwind CSS** – Modern responsive styling  
- **Lucide React** – Icon set for UI elements  
- **SWR** – Efficient data fetching and caching  
- **react-hot-toast** – Real-time notifications  

### **Backend & APIs**
- **Next.js API Routes** – Custom endpoints for users, wishlist and delivery  
- **MongoDB + Mongoose** – Database for users  
- **Clerk** – Authentication and session management  
- **LiqPay API** – Online payments integration  
- **Nova Poshta API** – Delivery and warehouse data  

### **Utilities & Tools**
- **Vercel** – Deployment and hosting  
- **ESLint & Prettier** – Code quality and formatting  
- **PostCSS** – CSS optimization  
- **Git & GitHub** – Version control  
- **Environment Variables (.env.local)** – Secure configuration management  

---

## 🏗️ Architecture

- **App Router Structure (Next.js)** – Organized pages for Home, Products, Cart, Wishlist, Orders, About, etc.  
- **Components Folder** – Reusable UI components (`Cart`, `Navbar`, `ProductList`, `Filter`, etc.)  
- **Custom Hooks** – `useCart` for client-side cart management  
- **API Integration Layer** – Located under `/lib/actions` and `/app/api`, enabling database and third-party communication   
- **Responsive Layout** – Built with flexible grid and Tailwind utilities for all device sizes  

---

## 💡 Developer Skills Demonstrated

- Proficiency in **React** and **Next.js (App Router)**  
- Integration with **third-party APIs** (Nova Poshta, LiqPay, Clerk)  
- Building **secure and dynamic backend endpoints** with **Next.js server routes**  
- Implementation of **real-time user interaction** (cart updates, wishlist toggling) 
- Implementing **authentication and authorization**  
- Creating **responsive layouts** and reusable components with Tailwind CSS  
- **Full deployment workflow and environment management** using Vercel  
- Strong understanding of **TypeScript** and modern frontend architecture for large-scale app development  

---

## 🚀 Live Demo

🌐 **Website:** [https://hm-shop-tawny.vercel.app/](https://hm-shop-tawny.vercel.app/)  
👩‍💻 **Author:** [Antonina Zdebska](https://antoninazz.github.io)  

---

## 📂 Project Structure

```
hm-shop/
├── app/                     # App Router structure
│   ├── api/                 # API routes for users, wishlist, delivery, etc.
│   ├── (auth)/              # Sign-up & sign-in pages 
│   ├── products/            # Product listing and details
│   ├── cart/                # Shopping cart
│   ├── order_created/       # Checkout page
│   ├── successful_payment/  # Successful payment page
│   ├── orders/              # User orders
│   ├── wishlist/            # Wishlist page
│   ├── about/               # About page
│   └── layout.tsx           # Root layout with Navbar and Footer
├── components/          # Reusable UI components
├── lib/                 # Database models, hooks, utilities
├── public/              # Static assets
└── README.md
```

---

## ⚙️ Installation & Setup

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/antoninazz/hm-shop.git

# Navigate to the project folder
cd hm-shop

# Install dependencies
npm install

# Create .env.local and add your API keys
# (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, NEXT_PUBLIC_CLERK_SIGN_IN_URL,NEXT_PUBLIC_CLERK_SIGN_UP_URL, NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL, NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_BASE_URL, MONGODB_URI, NEXT_PUBLIC_NOVAPOST_API_URL, NOVAPOST_API_KEY)

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🧵 License

This project is created for educational and portfolio purposes.  
All handmade products and photos belong to **Antonina Zdebska**.

---

© 2025 [Antonina Zdebska](https://antoninazz.github.io)
