# Blogging Platform Backend (Like Medium)

A collaborative backend project for building a **Blogging Platform** with PostgreSQL. The system exposes both **REST API** and **GraphQL API**, supporting authentication, role-based permissions, nested comments, tagging, search, and pagination.

---

## 🚀 Features

* **User Authentication**: Sign up, login, JWT-based sessions.
* **Role-Based Permissions**: Regular users vs. admins.
* **Posts**: Create, edit, delete, and retrieve posts.
* **Comments**: Nested comments system with parent-child structure.
* **Tags & Categories**: Organize posts with searchable metadata.
* **Search Functionality**: Full-text search on posts and tags.
* **Pagination**: Efficient pagination for posts and comments.
* **API**: Dual support for **REST** and **GraphQL** endpoints.

---

## 🛠 Tech Stack

* **Backend**: Node.js / Express.js (or Nest.js if preferred)
* **Database**: PostgreSQL
* **ORM**: Prisma / TypeORM / Sequelize (to be decided)
* **Authentication**: JWT + bcrypt
* **GraphQL**: Apollo Server (or integrated solution with chosen framework)
* **Search**: PostgreSQL full-text search / trigram search
* **Testing**: Jest / Supertest

---

## 📂 Project Structure (Proposed)

```
backend/
│── src/
│   ├── config/        # Database, environment configs
│   ├── models/        # Database models/entities
│   ├── resolvers/     # GraphQL resolvers
│   ├── routes/        # REST API routes
│   ├── controllers/   # REST API controllers
│   ├── middleware/    # Auth & permissions
│   ├── services/      # Business logic
│   ├── utils/         # Helpers, pagination, validation
│   └── index.js       # App entry point
│
├── prisma/ (if using Prisma)
├── tests/             # Unit & integration tests
├── docs/              # API docs, diagrams
└── README.md
```

---

## 📖 Database Design (Relational)

* **Users** (`id`, `username`, `email`, `password_hash`, `role`)
* **Posts** (`id`, `title`, `content`, `author_id`, `created_at`, `updated_at`)
* **Comments** (`id`, `post_id`, `author_id`, `content`, `parent_comment_id`, `created_at`)
* **Tags** (`id`, `name`)
* **Post\_Tags** (join table: `post_id`, `tag_id`)
* **Categories** (`id`, `name`)
* **Post\_Categories** (join table: `post_id`, `category_id`)


[Detailed design pdf](./public/blog_platform_db_design.pdf)

---

## 🏗 Roadmap

### Phase 1: Setup & Foundation

* [ ] Initialize Node.js project
* [ ] Configure PostgreSQL database + ORM
* [ ] Define database schema & migrations
* [ ] Set up Express.js (REST) + Apollo (GraphQL)

### Phase 2: Authentication & Authorization

* [ ] User signup/login
* [ ] JWT authentication middleware
* [ ] Role-based access control (user/admin)

### Phase 3: Core Features

* [ ] CRUD for posts (REST + GraphQL)
* [ ] Nested comments system
* [ ] Tags & categories with many-to-many relations
* [ ] Pagination for posts & comments
* [ ] Search functionality (Postgres full-text search)

### Phase 4: API Development

* [ ] REST API endpoints
* [ ] GraphQL schema + resolvers
* [ ] Documentation with Swagger (REST) + GraphQL Playground

### Phase 5: Testing & Deployment

* [ ] Unit & integration tests
* [ ] CI/CD pipeline setup
* [ ] Deployment (Heroku / Railway / Render / Docker)

---

## 🔑 Key Learning Goals

* Relational database design with **PostgreSQL**
* **Authentication & authorization** strategies
* Implementing **nested relationships** (comments)
* Designing APIs with **REST vs. GraphQL**
* **Search & pagination** in large datasets
* Writing **modular, testable backend code**

---

## 🤝 Collaboration Guidelines

* **Branching**: Use `feature/`, `bugfix/`, and `hotfix/` prefixes.
* **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/).
* **Pull Requests**: Must be reviewed by at least 1 collaborator.
* **Issues**: Create GitHub issues for new features/bugs.
* **Docs**: Keep API docs updated in `/docs`.

---

## 📚 API Reference

* REST API docs: `/docs/rest-api.md` (to be created)
* GraphQL schema: `/docs/graphql-schema.graphql`

---

## 🧑‍💻 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/blogging-platform-backend.git
   cd blogging-platform-backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Configure environment variables (`.env`):

   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/blogging_platform
   JWT_SECRET=supersecretkey
   ```
4. Run migrations:

   ```bash
   npx prisma migrate dev
   ```
5. Start the server:

   ```bash
   npm run dev
   ```

---

## ✅ Next Steps

* Decide on the **ORM** (Prisma, TypeORM, Sequelize)
* Assign roles to collaborators for **auth**, **posts**, **comments**, **search**, and **API layer**
* Kick off Phase 1 of the roadmap

---


## References:

Here are the blogs for our reference:

1. [Database design](https://www.geeksforgeeks.org/dbms/how-to-design-database-for-a-blog-website/)
2. [System design](https://medium.com/@srajsonu/designing-a-micro-blogging-platform-scalable-available-and-consistent-bed1e60350bf)


📌 *This README will evolve as we progress. Please update it regularly to reflect changes.*
