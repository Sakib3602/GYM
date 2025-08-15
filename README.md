# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# NG Fitness Gym Management System

A modern, full-featured web application for managing gym memberships, trainers, payments, and more. Built with React and Vite, this project provides an intuitive admin panel, user authentication, gallery, reviews, and a responsive design for both gym staff and members.

## Features

- **Admin Panel**: Manage members, trainers, due payments, and deactivated accounts.
- **Member Management**: Add, view, and update member details. View single member cards and details.
- **Dashboard**: Visualize gym statistics with charts and summaries.
- **Due Management**: Track and manage due payments and deactivated dues.
- **Authentication**: Secure login and registration using Firebase.
- **Gallery**: Showcase gym photos and events.
- **Contact & Reviews**: Contact form and review section for user feedback.
- **Live Chat**: Integrated TawkTo chat for real-time support.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Project Structure

```
public/           # Static assets
src/
  index.css       # Global styles
  main.jsx        # App entry point
  Components/
	 ADMIN PANEL/  # Admin features (Add Member, Dashboard, Due, etc.)
	 AXIOS/        # Axios hooks for API calls
	 Contact/      # Contact form
	 Deal/         # Pricing components
	 Footer/       # Footer section
	 Four0Four/    # 404 error page
	 Gellary/      # Gallery section
	 Loader/       # Loading spinner
	 logreg/       # Auth, Firebase, PrivateRoute, Signup
	 Main_Home/    # Main homepage and slider
	 Nav/          # Navigation bar
	 ReviewC/      # Reviews
	 Services/     # Services offered
	 TawkToChat/   # Live chat integration
	 Trainer/      # Trainer profiles
```

## Installation

1. **Clone the repository:**

	```powershell
	git clone https://github.com/Sakib3602/GYM.git
	cd ng_fitness
	```

2. **Install dependencies:**

	```powershell
	npm install
	```

3. **Start the development server:**

	```powershell
	npm run dev
	```

4. **Open in your browser:**

	Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Live Demo

A live demo of the NG Fitness Gym Management System is available here:

[Live Demo Link](https://your-live-demo-url.com)

> **Note:** Replace the above link with your deployed app URL (e.g., Vercel, Netlify, or your custom domain).

## Environment Variables

- For Firebase authentication, create a `.env` file in the root and add your Firebase config variables as shown in `src/Components/logreg/firebase.init.js`.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Developed by Sakib3602 and contributors.**
