# Multi-Tenant SaaS Backend (Docker + PostgreSQL)

A production-style **multi-tenant backend application** built using Node.js, PostgreSQL, Docker, and Prisma.  
This project is designed as a **portfolio-grade system** that demonstrates real-world backend engineering practices such as containerization, database migrations, and tenant isolation.

---

## 🚀 Project Goals

- Build a realistic **multi-tenant SaaS backend**
- Use **PostgreSQL** instead of MongoDB to demonstrate relational modeling
- Use **Docker & Docker Compose** for environment consistency
- Manage database schema using **Prisma migrations**
- Follow production-style backend architecture and workflows

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Infrastructure:** Docker, Docker Compose
- **Auth (planned):** JWT
- **Architecture:** Multi-tenant (shared DB, shared schema)

---

## 🏗️ Architecture Overview

### Multi-Tenancy Strategy

This application uses a **shared database, shared schema** multi-tenancy model.

- All tenants share the same PostgreSQL database
- Tenant isolation is enforced using an explicit `orgId` column
- Every query is scoped by tenant context (to be enforced via middleware)

This is the most common and scalable approach used in modern SaaS products.

---

## 🐳 Docker Setup

The application runs using **Docker Compose**, which orchestrates:

- A **Node.js backend container**
- A **PostgreSQL database container**
- A private Docker network for inter-service communication
- A named volume for persistent database storage

### Services

- **backend**
  - Runs the Node.js application
  - Connects to Postgres using Docker DNS
- **postgres**
  - Official PostgreSQL image
  - Stores data in a named Docker volume

---

## 📦 Environment Variables

The application uses a single database connection string:

```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/multitenant_db
