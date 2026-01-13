
# 🎯 SmartCV – Career Preparation & Recruitment Insight Platform



![SmartCV Logo](https://img.shields.io/badge/SmartCV-Career%20Preparation-blue?style=for-the-badge\&logo=briefcase)

**Bridge the gap between education and career**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat\&logo=next.js\&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat\&logo=postgresql\&logoColor=white)](https://www.postgresql.org/)


---

## 📋 Project Overview

**SmartCV** is a career preparation platform designed for **final-year students and fresh graduates (0–3 years experience)**.
The platform follows a **“Learn – Practice – Share”** ecosystem to help users prepare CVs, interviews, and make informed career decisions with verified company insights.

### 🎯 Core Goals

* Help students write **industry-specific CVs**
* Provide **structured interview preparation**
* Build a **verified company review ecosystem**
* Reduce anxiety and misinformation in early career recruitment

---

## 🧠 Main Functions

### 1️⃣ CV Writing Tutorial Videos (By Industry)

* Curated video lists teaching **CV writing best practices**
* Categorized by industry:

  * IT / Software
  * Marketing
  * Design
  * Finance
  * Business & Operations
* Each video includes:

  * Industry context
  * Common CV mistakes
  * Recruiter expectations

---

### 2️⃣ Interview Preparation Video Library

* Video collections focused on **interview readiness**
* Topics include:

  * Interview psychology
  * Behavioral questions
  * Communication & body language
  * HR mindset and evaluation criteria
* Each video list includes a **description section** (as defined in Figma)
* ⚠️ *No practice exercises are required for interview videos*

---

### 3️⃣ Interview Question Bank (Premium)

* Structured **question bank classified by**:

  * Industry
  * Job role
  * Experience level
* Includes:

  * Common HR questions
  * Technical / situational questions
* 🔒 **Answers are locked**

  * Users must subscribe to **Premium (49,000 VND / month)** to view solutions
* Designed to move users from **passive learning → active preparation**

---

### 4️⃣ Verified Company Reviews (Premium)

* Users can:

  * Read company reviews
  * Submit reviews about companies they worked for
* 🛡️ **Strict verification required**:

  * Internship certificate
  * Employment contract
  * Official proof of working experience
* 🚨 **Report & Moderation Flow**:

  * Any reported review is flagged
  * Admin manually reviews the case
  * Decision made to keep or remove the review
* 🔒 Viewing and posting reviews requires **Premium subscription (49,000 VND / month)**

---

## 💎 Premium Subscription

**Price**: **49,000 VND / month**

### Premium Benefits

* Unlock interview question answers
* Access verified company reviews
* Post company reviews
* Priority access to premium learning content

---

## 🏗️ System Architecture

### Frontend

```
frontend/
├── pages/
├── components/
│   ├── video/
│   ├── interview/
│   ├── review/
│   └── premium/
├── styles/
├── utils/
└── public/
```

### Backend

```
backend/
├── api/
│   ├── auth/
│   ├── videos/
│   ├── questions/
│   ├── reviews/
│   └── admin/
├── services/
├── database/
└── middleware/
```

---

## 🚀 Key Features

### 🔐 Authentication

* User registration & login
* Role-based access (User / Admin)
* Premium subscription validation

### 🎥 Learning Content

* Video streaming
* Industry-based categorization
* Rich descriptions & metadata

### 🧠 Interview Question System

* Question classification
* Premium answer locking
* Progress tracking

### 🏢 Company Review System

* Identity verification
* Report & moderation workflow
* High-trust review mechanism

### 👨‍💼 Admin Panel

* Review moderation
* User verification approval
* Content management

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn/UI

### Backend

* Node.js / Next.js API Routes
* PostgreSQL
* Prisma ORM
* JWT Authentication

### Infrastructure

* Cloud Storage (Video & Documents)
* CDN for video delivery

---

## 🔒 Security & Trust

* Proof-based review verification
* Manual admin moderation
* Report abuse detection
* Secure file uploads
* Role-based permissions

---

## 🎯 Roadmap

### Phase 1 (MVP)

* [x] CV video library
* [x] Interview video library
* [x] Premium subscription model
* [x] Question bank (locked answers)

### Phase 2

* [ ] Review verification automation
* [ ] Admin moderation dashboard
* [ ] Payment gateway integration

### Phase 3

* [ ] AI CV feedback
* [ ] Personalized learning paths
* [ ] Mobile app version

---

## 📄 License

This project is released under the **MIT License**.

---

## 👥 Team

* **Founder / Full-stack Developer**: SmartCV Team
* **UI/UX**: Figma-based design
* **Content**: HR Professionals & Industry Mentors

