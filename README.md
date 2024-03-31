# Bello ChatApp

ChatApp is a real-time messaging application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.io for real-time communication. It also utilizes TailwindCSS and Daisy UI for styling, providing a visually appealing and responsive user interface.

## Features

- **Authentication & Authorization**: Implemented using JWT (JSON Web Tokens) for secure user authentication and authorization.
  
- **Real-time Messaging**: Utilizes Socket.io for real-time communication between users, enabling instant messaging functionality.

- **Online User Status**: Tracks online user status using Socket.io and React Context, providing users with real-time presence information.

- **Global State Management**: Zustand is used for global state management, ensuring efficient and centralized state management across the application.

- **Error Handling**: Comprehensive error handling is implemented both on the server and client sides, ensuring robustness and stability of the application.

## Tech Stack

- **Frontend**:
  - React.js
  - TailwindCSS
  - Daisy UI

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)

- **Real-time Communication**:
  - Socket.io
  
- **State Management**:
  - Zustand
  
- **Authentication**:
  - JWT (JSON Web Tokens)

## Usage

- Register/Login: Users can register for a new account or login with existing credentials to access the messaging platform.
  
- Messaging: Users can send real-time messages to other users who are online. The messages will be instantly delivered and displayed in the chat interface.
  
- Online User Status: Users can see the online status of other users, indicating whether they are currently active.

## Contributing

Contributions are welcome! If you want to contribute to ChatApp, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your_feature_name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your_feature_name`).
6. Create a new Pull Request.

## Acknowledgements

- This project was built using the MERN stack and Socket.io.
- TailwindCSS and Daisy UI were used for styling the frontend interface.
- Zustand was used for global state management.
- Authentication and authorization were implemented using JWT.
- Error handling was implemented on both server and client sides for robustness.
  
Thank you for using ChatApp! If you have any questions or feedback, feel free to reach out.
