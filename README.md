# 🛒 Next.js Full-Stack E-Commerce App

This is a complete **E-Commerce Web Application** built with modern web technologies like **Next.js (App Router)**, **MongoDB**, and **Stripe**. The project supports user authentication, cart functionality, payment processing, and product management, simulating a real-world clothing store.

> ✅ Built from scratch | 🔐 Secure login | 💳 Stripe payment | 🧠 Full control over product and user flow

---

## 📸 Project Highlights

### 🧾 What I Built

I developed a **responsive, scalable, and production-ready full-stack e-commerce platform** with the following capabilities:

- 🔐 **User Authentication**: Secure login and registration using **NextAuth.js**, including route protection.
- 👕 **Dynamic Product Catalog**: Categorized browsing for **Men**, **Women**, **Jewelry**, and **Electronics** using reusable components.
- 🛒 **Shopping Cart System**: Add/remove items from a cart that syncs with **MongoDB** in real-time.
- 💳 **Stripe Payments**: Secure and seamless checkout using **Stripe API**.
- 🧾 **Admin Features**: Admin interface to **add new products** via protected API routes.
- 📆 **Countdown Timer & Banner**: A home page with auto-rotating sales banners and time-based sales.
- 🎞️ **Horizontal Slider**: Scrollable UI components for product showcasing.
- 🌐 **Protected Routes**: Pages like checkout or product creation require login.
- 💅 **Tailwind CSS**: For building a modern, mobile-first, and responsive UI.

---

## 🚀 Technologies Used

| Area           | Tech Stack                                      |
|----------------|--------------------------------------------------|
| **Frontend**   | Next.js 13+ with App Router, Tailwind CSS        |
| **Backend**    | Next.js API routes                               |
| **Database**   | MongoDB with Mongoose                            |
| **Auth**       | NextAuth.js                                      |
| **Payments**   | Stripe API                                       |
| **State Mgmt** | React Context API for cart and session           |
| **Deployment** | Vercel (suggested)                               |

---

## 🔧 File Structure Overview

📁 src
┣ 📂 app # Pages and layout routing using App Router
┃ ┣ 📂 api # API routes for login, payment, product management
┃ ┣ 📂 Login, Signin # Authentication pages
┃ ┣ 📂 PaymentPage # Stripe checkout
┃ ┣ 📂 productAddPage # Product creation form
┣ 📂 component # UI components: Navbar, Slider, Footer, etc.
┣ 📂 model # Mongoose models: Product, User, Cart
┣ 📂 utils # DB config, helper methods
┣ 📜 data.js # Local product data




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
