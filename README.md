# 🦾 Iron Man - Yash Stark Portfolio

A stunning Iron Man-inspired portfolio website showcasing the genius behind Yash Stark's engineering prowess. Experience the perfect fusion of cutting-edge web technology and Marvel's iconic aesthetic.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)

## ✨ Live Demo

🔗 **[View Live Portfolio](https://ironman-yash-stark.vercel.app)**

## 🚀 Features

- **🎨 Marvel-Themed Design**: Complete Iron Man aesthetic with arc reactor glow effects, holographic text, and HUD-style interfaces
- **🤖 JARVIS Integration**: Interactive AI assistant with voice synthesis
- **⚡ Enhanced Navigation**: Smooth gradient animations and hover effects
- **📱 Fully Responsive**: Optimized for all devices and screen sizes including iPhone SE
- **🎭 Marvel Background Effects**: Comic book-style animations and hexagon patterns
- **🔥 Performance Optimized**: Fast loading times and optimal user experience
- **📧 Contact Form**: Integrated FormSubmit for direct email communication
- **🎯 Professional Showcase**: Dynamic project presentation and resume download
- **🔄 Scroll-to-Top Navigation**: Automatic scroll to top when navigating between pages
- **🔗 Social Integration**: Complete social media integration (GitHub, LinkedIn, Instagram)

## 🛠️ Tech Arsenal

### Frontend
- **React 19** - Latest React with advanced features
- **Tailwind CSS** - Utility-first CSS framework with custom Iron Man theme
- **Lucide React** - Beautiful icon library
- **React Router Dom** - Client-side routing
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Forms with validation

### Backend
- **FastAPI** - High-performance Python web framework
- **MongoDB** - NoSQL database for data persistence
- **Python 3.9+** - Modern Python features

### Design Features
- **Arc Reactor Effects** - Glowing animations throughout the UI
- **Holographic Text** - 3D text effects with Iron Man styling
- **HUD Interfaces** - Heads-up display style components
- **Comic Book Elements** - Marvel-inspired background effects

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- Yarn 1.22.0 or higher
- Python 3.9+ (for backend)

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/engineer-yash/ironman-yash-stark.git
cd ironman-yash-stark

# Install frontend dependencies
cd frontend
yarn install

# Start development server
yarn start
```

The app will be available at `http://localhost:3000`

### Backend Setup (Optional)

```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the FastAPI server
python server.py
```

The API will be available at `http://localhost:8001`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
# Backend API URL (for production)
REACT_APP_BACKEND_URL=https://your-backend-url.com

# Disable source maps in production
GENERATE_SOURCEMAP=false
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

**✅ This project is deployment-ready!**

1. **Fork and Clone**
   ```bash
   git clone https://github.com/engineer-yash/ironman-yash-stark.git
   cd ironman-yash-stark
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

3. **Deploy on Vercel**
   - Connect your GitHub account to Vercel
   - Import the project
   - Configure build settings:
     - Build Command: `cd frontend && yarn build`
     - Output Directory: `frontend/build`
     - Install Command: `cd frontend && yarn install`

4. **Environment Variables (Optional)**
   Add to your Vercel dashboard:
   ```
   GENERATE_SOURCEMAP=false
   ```

### Quick Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/engineer-yash/ironman-yash-stark&project-name=ironman-yash-stark&repository-name=ironman-yash-stark)

### Manual Build

```bash
# Build for production
cd frontend
yarn build

# The build folder contains the production-ready app
```

## 🎨 Customization

### Marvel Theme Colors
All Iron Man theme colors are defined in `frontend/src/App.css`:

```css
:root {
  /* Iron Man Color Palette */
  --iron-red: #DC143C;        /* Primary Iron Man Red */
  --iron-gold: #FFD700;       /* Iron Man Gold */
  --arc-blue: #00D4FF;        /* Arc Reactor Blue */
  --brand-primary: #DC143C;
  --jarvis-green: #FFD700;    /* JARVIS Interface Gold */
}
```

### Personal Information
Update your details in `frontend/src/mockData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  alias: "Your Alias", // Your superhero alias
  title: "Your Professional Title",
  email: "your.email@example.com",
  // ... other personal details
};
```

### Project Data
Add your projects to the same file:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    // ... other project details
  }
];
```

## 📁 Project Structure

```
ironman-yash-stark/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   │   └── ui/            # UI primitives and shared components
│   │   ├── pages/             # Page components
│   │   │   ├── Home.js        # Landing page with hero section
│   │   │   ├── About.js       # About page with Marvel effects
│   │   │   ├── Projects.js    # Projects showcase
│   │   │   ├── Skills.js      # Technical skills display
│   │   │   ├── Experience.js  # Professional experience
│   │   │   ├── Education.js   # Educational background
│   │   │   ├── Certifications.js # Certifications and achievements
│   │   │   └── Contact.js     # Contact form with Marvel theming
│   │   ├── context/           # React context providers
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   ├── App.js             # Main application component
│   │   ├── App.css            # Iron Man theme styles
│   │   ├── mockData.js        # Sample data and personal information
│   │   └── index.js           # Application entry point
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
├── backend/                    # FastAPI backend (optional)
│   ├── server.py              # Main FastAPI server
│   └── requirements.txt       # Python dependencies
├── vercel.json                # Vercel deployment configuration
├── README.md                  # This file
└── package.json               # Root package configuration
```

## 🎯 Key Features Breakdown

### Enhanced Navigation
- **Gradient Hover Effects**: Smooth color transitions on hover
- **Active State Indicators**: Clear visual feedback for current page
- **JARVIS Toggle**: Enhanced button with shimmer and glow effects

### Marvel Background Effects
- **Arc Reactor Glows**: Animated circular glows throughout pages
- **Comic Book Elements**: Subtle animated dots and effects
- **Hexagon Patterns**: Subtle geometric overlays
- **Color-coded Themes**: Different effect colors per page

### Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices
- **Tablet Compatibility**: Perfect rendering on iPad and similar devices
- **Desktop Enhancement**: Full-featured experience on larger screens

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Marvel Studios** for the Iron Man inspiration
- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the beautiful icon library
- **Radix UI** for accessible components

## 📞 Contact

- **Portfolio**: [Live Demo](https://ironman-yash-stark.vercel.app)
- **LinkedIn**: [Yash Gohel](https://www.linkedin.com/in/yash-gohel)
- **GitHub**: [engineer-yash](https://github.com/engineer-yash)
- **Instagram**: [yashu_gohel_](https://www.instagram.com/yashu_gohel_)
- **Email**: gohelyash11@gmail.com

## 🔄 Recent Updates

### Version 3.0 - Iron Man Enhancement
- ✅ Updated title to "Iron Man - Yash Stark"
- ✅ Added comprehensive SEO meta tags and keywords
- ✅ Integrated Instagram social link
- ✅ Implemented new Iron Man logo as favicon and footer branding
- ✅ Added scroll-to-top functionality for better UX
- ✅ Fixed Vercel deployment configuration for ironman-yash-stark.vercel.app
- ✅ Enhanced navigation with gradient animations
- ✅ Marvel-themed background effects on all pages
- ✅ Improved mobile responsiveness including iPhone SE support
- ✅ Reduced spacing issues and improved layout

---

<div align="center">
  <p><strong>Made with ❤️ and ⚡ by Tony Stark (Yash Gohel)</strong></p>
  <p><em>"I am Iron Man." - Sometimes you gotta run before you can walk.</em></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>