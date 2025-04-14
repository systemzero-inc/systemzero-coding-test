# System Zero Engineering Challenge

Welcome to the System Zero engineering challenge! This project evaluates your engineering approach, system design decisions, and code quality through focused implementation tasks.

## Important Notes

- This is NOT a task to build a complete end-to-end platform
- Pre-coding before the interview is not permitted
- You may explore the codebase after receiving access
- The goal is to understand your engineering thought process and decision-making

## What We Evaluate

- Clean, maintainable code structure
- System design and architectural choices
- Testing and error handling approaches
- Clear communication of technical decisions
- Problem-solving methodology

During the interview, you'll work on specific implementation tasks focusing on:
- LLM agent integration
- Streaming data handling
- API and middleware development
- Database modeling
- Testing strategies

## Setup Instructions

### Prerequisites
- Node.js ~v23
- Docker and Docker Compose
- pnpm (recommended) or npm

### Database Setup

1. Start the PostgreSQL database using Docker:
   ```bash
   docker-compose up -d db
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/systemzero
   OPENAI_API_KEY='You will receive an api key'
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Run database migrations:
   ```bash
   pnpm prisma migrate dev
   ```

5. Seed the database (optional):
   ```bash
   pnpm prisma db seed
   ```

6. Start the development server:
   ```bash
   pnpm dev
   ```

The application should now be running at `http://localhost:3000`

### Troubleshooting

If you encounter any database connection issues:
- Ensure you have received an OPENAI_API_KEY 
- Ensure Docker is running
- Check that port 5432 is not in use
- Verify your .env configuration matches the docker-compose settings

