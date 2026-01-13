# 🎯 W_IELTS - Smart IELTS Practice Platform

<div align="center">

![W_IELTS Logo](https://img.shields.io/badge/W_IELTS-Smart%20IELTS%20Practice-blue?style=for-the-badge&logo=graduation-cap)

**Intelligent IELTS Practice Platform**

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)](https://redis.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

---

## 📋 Project Overview

**W_IELTS** is a comprehensive IELTS practice platform designed to support students in their IELTS exam preparation. The system provides complete practice tests with all 4 main skills: Reading, Listening, Writing, and Speaking.

### 🎯 Main Objectives
- **Complete IELTS Practice** with official-style practice tests for all 4 skills
- **User-friendly Interface** similar to real exam experience
- **Automatic Scoring** for Reading and Listening sections
- **Comprehensive Test Management** for Administrators
- **Multi-platform Support** Web and Mobile

---

## 🏗️ System Architecture

### Backend (Next.js + TypeScript)
```
backend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/            # API Routes
│   │   ├── admin/          # Admin Dashboard
│   │   └── globals.css     # Global Styles
│   ├── components/         # React Components
│   │   ├── ui/             # UI Components
│   │   ├── test/           # Test Components
│   │   └── admin/          # Admin Components
│   ├── lib/                # Utilities & Config
│   │   ├── db.ts           # Database Connection
│   │   ├── redis.ts        # Redis Connection
│   │   └── queue.ts        # Queue Management
│   ├── types/              # TypeScript Types
│   ├── utils/              # Helper Functions
│   └── middleware/         # Next.js Middleware
├── prisma/                 # Database Schema & Migrations
├── public/                 # Static Assets
├── tests/                  # Test Files
└── docs/                   # Documentation
```

### Database Schema
- **Users & Authentication**: User management and authentication
- **Tests & Questions**: Test information and questions
- **Submissions & Answers**: Student submissions and answers
- **Admin Management**: Test and system management
- **Queue & Jobs**: Asynchronous task processing

---

## 🚀 Key Features

### 🔐 Authentication & User Management
- [x] User registration/login
- [x] Student profile management
- [x] User role management (Student, Admin)
- [x] JWT Authentication with refresh token

### 📖 Reading Test (60 minutes)
- [x] Split-screen interface (Passage + Questions)
- [x] Question navigation palette
- [x] Support for Academic (3 long passages from books, journals, magazines) and General Training (practical texts: letters, advertisements, manuals, newspapers)
- [x] Support for 10-12 question types:
  - Multiple choice
  - Identifying information (True/False/Not Given)
  - Identifying writer's views/claims (Yes/No/Not Given)
  - Matching information (nối thông tin với đoạn văn)
  - Matching headings (ghép tiêu đề đoạn văn)
  - Matching features (nối đặc điểm, quan điểm)
  - Matching sentence endings (nối phần đầu và cuối câu)
  - Sentence completion
  - Summary, note, table, flow-chart completion
  - Diagram label completion
  - Short-answer questions
- [x] Countdown timer and auto-submit
- [x] Automatic scoring

### 🎧 Listening Test (~30 minutes)
- [x] 4 sections with increasing difficulty
- [x] Audio player with single playback
- [x] All questions displayed on one page
- [x] Automatic transition to 10-minute review
- [x] Support for 6 question types:
  - Multiple choice (trắc nghiệm)
  - Matching (nối thông tin)
  - Plan/map/diagram labeling (điền bản đồ, sơ đồ)
  - Form/note/table/flow-chart/summary completion (điền vào biểu mẫu, bảng, sơ đồ, tóm tắt)
  - Sentence completion (hoàn thành câu)
  - Short-answer questions (trả lời ngắn)
- [x] Countdown timer and auto-submit
- [x] Automatic scoring

### ✍️ Writing Test (60 minutes)
- [x] Separate Task 1 and Task 2 interface
- [x] Support for both Academic and General Training formats:
  - **Academic**: Task 1 (describe charts, graphs, tables, processes, maps) + Task 2 (argumentative essay)
  - **General Training**: Task 1 (write letters: formal, semi-formal, informal) + Task 2 (opinion/argumentative essay)
- [x] Real-time word counter
- [x] Auto-save functionality
- [x] Shared countdown timer
- [x] Display submitted essays

### 🗣️ Speaking Test (11-14 minutes)
- [ ] Interactive speaking interface with 3 parts:
  - **Part 1 (Introduction & Interview)**: Short questions about personal topics (family, work, studies, interests)
  - **Part 2 (Long Turn)**: 1-2 minute speech based on cue card topic
  - **Part 3 (Discussion)**: Extended discussion on abstract topics related to Part 2
- [ ] Audio recording functionality
- [ ] Practice mode with sample questions
- [ ] Timer for each section
- [ ] Playback and review capabilities

### 👨‍💼 Admin Dashboard
- [x] Secure admin login
- [x] Test list management
- [x] Import new tests (Reading, Listening, Writing)
- [x] Delete tests
- [x] View test statistics

### 📊 Results & Analytics
- [x] Display Reading/Listening results
- [x] Store test history
- [x] Learning progress statistics
- [x] Export result reports

---

## 🛠️ Tech Stack

### Backend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Cache & Queue**: Redis
- **Authentication**: NextAuth.js
- **Validation**: Zod
- **File Upload**: Next.js API Routes
- **Testing**: Jest + Testing Library

### External Services
- **Audio Storage**: AWS S3 / Cloudinary
- **File Processing**: Sharp (Image optimization)
- **Queue Processing**: Bull (Redis-based)
- **Real-time**: WebSockets (Socket.io)

### Development Tools
- **Code Quality**: ESLint + Prettier
- **Git Hooks**: Husky
- **Type Checking**: TypeScript
- **API Testing**: Postman/Thunder Client
- **Database GUI**: Prisma Studio

---

## 📦 Installation and Setup

### System Requirements
- Node.js 18+
- PostgreSQL 13+
- Redis 6+
- Git

### 1. Clone repository
```bash
git clone https://github.com/your-org/w-ielts-backend.git
cd w-ielts-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment configuration
```bash
cp .env.example .env.local
```

Edit the `.env.local` file:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/w_ielts_db"

# Redis
REDIS_URL="redis://localhost:6379"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# File Upload
UPLOAD_MAX_SIZE="10485760" # 10MB
ALLOWED_AUDIO_TYPES="audio/mpeg,audio/wav"

# Admin
ADMIN_EMAIL="admin@w-ielts.com"
ADMIN_PASSWORD="secure-admin-password"

# External Services
AWS_ACCESS_KEY_ID="your-aws-key"
AWS_SECRET_ACCESS_KEY="your-aws-secret"
AWS_BUCKET_NAME="w-ielts-audio"
AWS_REGION="us-east-1"

# App
NODE_ENV=development
PORT=3000
```

### 4. Setup database
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed initial data
npx prisma db seed
```

### 5. Run the project
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

### 6. Test the application
- **Web App**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **API Routes**: http://localhost:3000/api
- **Database GUI**: `npx prisma studio`

---

## 📚 API Documentation

### Authentication Endpoints
```http
POST /api/auth/register     # Register new user
POST /api/auth/login        # User login
GET  /api/auth/me          # Get profile information
POST /api/auth/refresh     # Refresh token
POST /api/auth/logout      # User logout
```

### Test Management
```http
GET    /api/tests          # Get list of tests
GET    /api/tests/:id      # Get test details
POST   /api/tests          # Create new test (Admin)
PUT    /api/tests/:id      # Update test (Admin)
DELETE /api/tests/:id      # Delete test (Admin)
```

### Test Taking
```http
POST   /api/tests/:id/start    # Start test
GET    /api/tests/:id/questions # Get test questions
POST   /api/submissions        # Submit test
GET    /api/submissions/:id    # Get test results
```

### Admin Management
```http
GET    /api/admin/tests        # Manage tests
POST   /api/admin/tests/import # Import new test
GET    /api/admin/statistics   # System statistics
GET    /api/admin/users        # Manage users
```

### File Upload
```http
POST   /api/upload/audio       # Upload audio file
POST   /api/upload/image       # Upload image
DELETE /api/upload/:id         # Delete file
```

---

## 🧪 Testing

### Run tests
```bash
# Run all tests
npm test

# Run tests with watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Test structure
```
tests/
├── __mocks__/           # Mock files
├── components/          # Component tests
├── pages/              # Page tests
├── api/                # API route tests
├── utils/              # Utility tests
└── setup.ts            # Test setup
```

---

## 📈 Performance & Monitoring

### Metrics
- **Page Load Time**: < 2 seconds
- **API Response Time**: < 500ms
- **Database Query Time**: < 200ms
- **Memory Usage**: < 512MB
- **Audio Streaming**: < 1 second buffer

### Monitoring
- **Health Check**: `/api/health` endpoint
- **Logging**: Built-in Next.js logging
- **Error Tracking**: Error boundaries
- **Performance**: Web Vitals monitoring

---

## 🔒 Security

### Authentication & Authorization
- NextAuth.js với JWT tokens
- Password hashing với bcrypt
- Role-based access control (RBAC)
- Rate limiting cho API endpoints

### Data Protection
- Input validation với Zod
- SQL injection prevention (Prisma ORM)
- XSS protection
- CSRF protection
- Secure file upload

### API Security
- Request validation
- Error handling không leak thông tin
- Secure headers
- HTTPS enforcement

---

## 🚀 Deployment

### Production Environment
- **Platform**: Vercel / Railway / DigitalOcean
- **Database**: PostgreSQL (managed service)
- **Redis**: Redis Cloud / Upstash
- **File Storage**: AWS S3 / Cloudinary
- **CDN**: Vercel Edge Network

### Environment Variables
```env
NODE_ENV=production
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

### Build & Deploy
```bash
# Build production
npm run build

# Deploy to Vercel
vercel --prod

# Deploy to Railway
railway deploy
```

---

## 🤝 Contributing

### Development Workflow
1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Tạo Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format
- **Test Coverage**: Minimum 80%

---

## 📄 License

Dự án này được phát hành dưới [MIT License](LICENSE).

---

## 👥 Team

- **Full-stack Developer**: [Your Name]
- **Database Design**: Prisma + PostgreSQL
- **UI/UX Design**: Tailwind CSS
- **DevOps**: Vercel/Railway

---

## 📞 Support & Contact

- **Email**: support@w-ielts.com
- **Documentation**: [API Docs](http://localhost:3000/api-docs)
- **Issues**: [GitHub Issues](https://github.com/your-org/w-ielts-backend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/w-ielts-backend/discussions)

---

## 🎯 Roadmap

### Phase 1 (Current - Week 1)
- [x] Project setup and database design
- [x] Authentication system
- [x] Basic API structure
- [x] Admin dashboard foundation

### Phase 2 (Week 2)
- [ ] Reading test interface
- [ ] Question management system
- [ ] Auto-grading for Reading
- [ ] Mobile responsive design

### Phase 3 (Week 3)
- [ ] Listening test with audio player
- [ ] Writing test interface
- [ ] Admin import functionality
- [ ] Results and analytics

### Phase 4 (Week 4)
- [ ] Performance optimization
- [ ] Testing and bug fixes
- [ ] Production deployment
- [ ] Documentation completion

### Future Enhancements
- [ ] Speaking test simulation
- [ ] AI-powered writing feedback
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Mobile app (React Native)

---

## 📊 Database Schema

### Core Tables
```sql
-- Users
users (id, email, password, role, created_at, updated_at)

-- Tests
tests (id, title, description, type, duration, created_at, updated_at)

-- Questions
questions (id, test_id, section, question_type, content, options, correct_answer)

-- Submissions
submissions (id, user_id, test_id, answers, score, completed_at)

-- Admin Logs
admin_logs (id, admin_id, action, details, created_at)
```

---

<div align="center">

**🎯 W_IELTS - Smart IELTS Practice Platform**

*Empowering students with intelligent IELTS preparation*

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=flat)](https://github.com/your-org/w-ielts-backend)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>
