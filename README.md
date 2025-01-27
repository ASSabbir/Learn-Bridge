# Collaborative Study Platform

This platform connects students, tutors, and administrators to streamline study session scheduling, resource sharing, and user management. It enhances collaboration, improves access to study materials, and ensures effective management of educational activities.

---

## Website Features

- **User Registration & Login**: 
  - Students, Tutors, and Administrators can register and log in to the platform.
  - Social login via Google and GitHub is also supported (students by default).

- **Role-Based Access Control**: 
  - Students, Tutors, and Admins have different levels of access, ensuring each user type only has access to appropriate features.
  - Admin can manage users and approve/reject study sessions.

- **Study Sessions**: 
  - Students can browse available sessions, view session details, and book them (paid or free).
  - Tutors can create study sessions, manage session details, and upload materials.
  - Admin can approve or reject study sessions and manage users.

- **Dashboard**:
  - **Student Dashboard**: View booked sessions, create and manage personal notes, and access study materials for booked sessions.
  - **Tutor Dashboard**: Create study sessions, upload study materials, and manage sessions.
  - **Admin Dashboard**: View and manage all users, sessions, and materials.

- **Responsive Design**:
  - The platform is fully responsive, ensuring an optimized experience on mobile, tablet, and desktop devices.

- **Real-time Notifications**: 
  - Sweet alert notifications for CRUD operations, login/signup success, and booking confirmation.

- **Secure Authentication**:
  - JWT-based authentication for login.
  - Secure token storage in localStorage for session management.

- **Pagination**: 
  - Implemented pagination on two different pages to manage large datasets.

- **Environment Variables**:
  - Firebase config and MongoDB credentials are stored securely in environment variables.

- **Payment Integration**:
  - For paid study sessions, users can proceed to a payment page after clicking "Book Now."

- **Reviews and Ratings**:
  - Students can rate and review sessions after attending.

---

## Admin Credentials

- **Admin Username**: admin@studyplatform.com
- **Admin Password**: admin123

---

## Front-end Live Site Link
LearnBridge
[LearnBridge](https://learnbridge-6f2b3.web.app/)

---

## GitHub Repositories

### Client Side:
- **GitHub Repository Link**: [Client Side Repo](https://github.com/your-username/client-repo)

### Server Side:
- **GitHub Repository Link**: [Server Side Repo](https://github.com/your-username/server-repo)

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Router, Tanstack Query, Axios
- **Backend**: Node.js, Express, MongoDB, JWT, Firebase Authentication
- **Payment**: Integrated payment for paid sessions
- **Version Control**: Git & GitHub for source code management

---

## Setup Instructions

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file for environment variables, including your Firebase and MongoDB credentials.
4. Start the backend server: 
   - Run `npm start` in the server directory.
5. Start the frontend application:
   - Run `npm start` in the client directory.
6. Visit `http://localhost:3000` to view the application locally.

---

## Notes

- Ensure the database collections are properly set up as mentioned in the project requirements.
- The frontend and backend are connected through API requests to handle sessions, bookings, and user management.
- Follow the project requirements strictly to ensure all functionality is implemented correctly.

---

### Acknowledgements

- Thanks to the open-source community for the libraries and tools used in this project.


