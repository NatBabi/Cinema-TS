# Cinema Ticketing System

A comprehensive, full-featured cinema ticketing platform built with TypeScript that enables users to search, book, and manage movie tickets seamlessly. The system serves multiple stakeholders including users, administrators, movie owners, and venue staff.

## Table of Contents

- [Overview](#overview)
- [System Actors](#system-actors)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Cinema Ticketing System is a multi-role platform designed to facilitate movie ticket booking and management. It provides a seamless experience for cinema-goers while offering powerful administrative and analytical tools for cinema owners and managers.

### Key Highlights

- Multi-actor role-based system
- Real-time seat availability and booking
- Comprehensive payment processing
- Advanced analytics and reporting
- User engagement features (watchlists, ratings, reviews)
- Secure authentication with email and social login

## System Actors

### 1. **Users**

Cinema customers who browse, book, and manage movie tickets.

### 2. **Admin**

Cinema administrators responsible for day-to-day operations and content management.

### 3. **Movie Owners**

Content creators who manage their movies, monitor sales, and engage with audiences.

### 4. **Doorman**

Venue staff responsible for entry management and ticket validation.

### 5. **Managerial Admin**

Senior administrators with oversight of all admins, security, and strategic reporting.

---

## Features

### 👥 **User Features**

#### Authentication & Account Management

- Sign up and login via email and Google Account
- Secure password recovery with email verification
- Account deletion and logout options
- Profile management (picture, username, personal details)

#### Content Discovery

- **Search**: Filter by title, actor, and production company
- **Browse**: View featured movies with comprehensive details
- **Information Display**: Title, description, genre, release date, ratings, trailers
- **Filtering**: By date, genre, language, and ratings
- **Trending**: View frequently searched movies, events, and theaters
- **Recommendations**: Based on search and viewing patterns

#### Engagement & Social Features

- Rate and comment on movies and theaters
- Share movies on social platforms
- Give feedback on movies and the system
- Access watchlist with preferred movies
- Receive reminders when watched movies become available

#### Ticket Booking

- View screening schedules with dates and times
- Interactive seating map to select specific seats
- Choose seat type (VIP, normal)
- Select multiple seats via checkboxes
- Generate booking confirmation (QR code or 6-digit code)

#### Concessions

- Add snacks and refreshments to bookings
- Integrated menu selection

#### Payments

- Multiple payment methods: online payment services or credit card
- Secure transaction processing

#### Booking Management

- View complete booking history with details
- Movie, date, seat, and payment information
- Clear booking history
- Cancellation and refund options with time and percentage policies

#### Support

- Direct contact with administrative support
- Issue resolution and customer service

---

### 🛡️ **Admin Features**

#### Authentication & Profile

- Secure login
- Profile updates
- Password management (change/reset)

#### User Management

- Ban and suspend users
- Search and filter users
- Monitor failed login attempts

#### Movie Management

- Add new movies with title, synopsis, genre, and trailer
- Edit existing movie details
- Remove movies from catalog
- Track movie searches and view frequency

#### Theater & Screening Management

- Assign movies to specific theaters
- Set up screening schedules
- Manage seating configurations and availability
- View and edit screening schedules
- Add special screenings or events
- Monitor seat availability and availability patterns
- Reserve seats for special guests or events

#### Booking & Customer Service

- View and manage all bookings
- Handle customer inquiries and issues
- Process cancellations and refunds

#### Notifications & Monitoring

- Low ticket availability alerts
- Reports from other admins
- Failed login attempt tracking

#### Reporting & Analytics

- Generate detailed sales reports (tickets sold, revenue)
- Attendance analytics
- Frequency of movie searches
- Movie view metrics
- Screening schedule view tracking
- Seat selection and booking patterns
- Cancellation and refund statistics
- User feedback and rating analysis

---

### 👨‍💼 **Managerial Admin Features**

#### Authentication & Account

- Secure login
- Profile updates
- Account management

#### Admin Management

- Add and remove admins
- Oversee all administrative activities

#### Security & Compliance

- Encryption implementation
- User access controls
- Data backup management
- Security and privacy management

#### Reporting & Analytics

- Generate comprehensive reports with multiple timeframes:
  - Daily reports
  - Weekly reports
  - Monthly reports
  - Custom reports
- Report types:
  - Ticket sales metrics
  - Revenue analysis
  - Attendance statistics
  - Key performance indicators
  - Frequently searched movies with frequency
  - Frequently viewed movie details (synopsis, cast, trailers)
  - Frequently viewed screening schedules
  - VIP and regular ticket purchase tracking
  - Cancellation and refund statistics
  - User feedback sentiment analysis

#### Operational Oversight

- View and manage all active and completed bookings
- Manage payments and transactions
- Monitor total tickets sold and revenue
- View and edit screening schedules
- Monitor seat availability across all venues
- Communicate with other admins
- Track user feedback sentiment

---

### 🎬 **Movie Owner Features**

#### Content Management

- Add new movies with detailed information
- Edit existing movie details
- Track and respond to reviews and ratings
- View user feedback and engage with audience

#### Sales & Analytics

- Monitor ticket sales for their movies
- View revenue metrics
- Access audience demographics
- Analyze ticket sales trends
- Track marketing effectiveness

#### Communication

- Communicate directly with customers
- Send newsletters and announcements
- Promote upcoming movies

#### Rights & Licensing

- Manage rights and licensing agreements
- Handle distribution deals with cinemas

#### Payments

- Receive secure payments for ticket sales
- View payment processing details

---

### 🚪 **Doorman Features**

#### Entry Management

- **Access Control**: Manage building/venue entry
- **Ticket Validation**: Verify and validate customer tickets
- **Crowd Management**: Organize and manage visitor flow
- **Customer Assistance**: Help guests and direct them to screening rooms
- **Emergency Response**: Respond to emergencies and safety incidents
- **Communication & Coordination**: Coordinate with staff and management

---

## Technology Stack

### Frontend

- **Framework**: Next.js
- **Language**: TypeScript

### Backend

- **Framework**: NestJS 11
- **Language**: TypeScript
- **Authentication**: JWT with Passport.js
- **Email & OAuth**: Google Account integration

### Database & ORM

- **Database**: PostgreSQL 16
- **Containerization**: Docker
- **ORM**: Drizzle ORM
- **Migrations**: Drizzle Kit

### Additional Services

- **Payment Integration**: (To be specified)

---

## Project Structure

```
Cinema-TS/
├── frontend/                          # Next.js Application
│   ├── src/
│   │   ├── app/                       # Next.js app directory
│   │   ├── components/                # Reusable React components
│   │   ├── pages/                     # Page components
│   │   ├── hooks/                     # Custom React hooks
│   │   ├── lib/                       # Utility functions & API clients
│   │   ├── styles/                    # Global styles
│   │   └── types/                     # TypeScript types/interfaces
│   ├── public/                        # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   └── .env.local.example
│
├── backend/                           # NestJS Application
│   ├── src/
│   │   ├── modules/                   # Feature modules
│   │   │   ├── auth/                  # Authentication module
│   │   │   ├── users/                 # User management
│   │   │   ├── movies/                # Movie management
│   │   │   ├── theaters/              # Theater management
│   │   │   ├── screenings/            # Screening schedules
│   │   │   ├── bookings/              # Ticket bookings
│   │   │   ├── payments/              # Payment processing
│   │   │   └── analytics/             # Reports & analytics
│   │   ├── common/                    # Shared resources
│   │   │   ├── decorators/            # Custom decorators
│   │   │   ├── guards/                # Auth guards
│   │   │   ├── interceptors/          # Request/response interceptors
│   │   │   ├── pipes/                 # Validation pipes
│   │   │   └── exceptions/            # Custom exceptions
│   │   ├── database/
│   │   │   ├── drizzle/               # Drizzle ORM schema
│   │   │   ├── migrations/            # Database migrations
│   │   │   └── seeds/                 # Seed data
│   │   ├── config/                    # Configuration files
│   │   ├── main.ts                    # Application entry point
│   │   └── app.module.ts              # Root module
│   ├── test/                          # Test files
│   ├── docker-compose.yml             # Docker services
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   ├── .env.example
│   └── .dockerignore
│
├── shared/                            # Shared types & constants
│   ├── src/
│   │   ├── types/                     # Shared interfaces
│   │   ├── constants/                 # Shared constants
│   │   └── enums/                     # Shared enums
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                              # Documentation
├── .env.example                       # Root environment variables
├── docker-compose.yml                 # Root Docker compose
├── package.json                       # Root package.json (monorepo)
├── tsconfig.base.json                 # Base TypeScript config
├── README.md
└── LICENSE
```

### Directory Descriptions

- **frontend/**: Next.js client application with component-based architecture
- **backend/**: NestJS API server with modular architecture
- **shared/**: TypeScript types and constants used by both frontend and backend
- **docs/**: Project documentation, API specs, and architecture diagrams
- **database/**: Database schema, migrations, and seed files (within backend)

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- (Additional prerequisites to be specified)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/NatBabi/Cinema-TS.git
   cd Cinema-TS
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run database migrations** (if applicable)

   ```bash
   npm run migrate
   ```

5. **Start the application**
   ```bash
   npm run dev      # Development mode
   npm run build    # Build for production
   npm start        # Production mode
   ```

---

## Usage

### For Users

1. Create an account or login with email/Google
2. Browse and search for movies
3. Add movies to your watchlist
4. Select a screening and choose your seats
5. Complete payment
6. Receive booking confirmation

### For Admins

1. Login to admin dashboard
2. Manage movies, theaters, and screening schedules
3. Monitor user activity and bookings
4. Handle customer issues
5. Generate reports

### For Movie Owners

1. Login to owner portal
2. Upload and manage your movies
3. Monitor ticket sales and analytics
4. Respond to customer reviews

### For Doormen

1. Validate customer tickets at entry
2. Direct guests to appropriate theaters
3. Manage crowd flow
4. Report any issues to management

---

## Contributing

We welcome contributions to the Cinema Ticketing System! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

For questions, issues, or suggestions, please open an issue on the [GitHub repository](https://github.com/NatBabi/Cinema-TS/issues).

---

**Last Updated**: June 2026
