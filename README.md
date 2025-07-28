# Tony Stark Portfolio - Yash Gohel

A modern, responsive portfolio website inspired by Tony Stark's Iron Man technology, built with React and featuring an immersive Marvel-themed design.

## 🚀 Features

- **Iron Man Theme**: Complete Marvel-inspired design with Arc Reactor effects
- **Responsive Design**: Optimized for all devices
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Real Contact Form**: FormSubmit integration for direct email communication
- **JARVIS AI Assistant**: Voice-activated assistant for enhanced user experience
- **Project Showcase**: Dynamic project presentation with detailed information
- **Professional Resume**: Downloadable PDF resume

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS, Lucide Icons
- **Backend**: FastAPI, MongoDB
- **Deployment**: Vercel (Frontend), Railway/Heroku (Backend)
- **Form Handling**: FormSubmit
- **Animation**: CSS3, Framer Motion concepts

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tony-stark-portfolio
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your configuration.

4. **Start development server**
   ```bash
   yarn start
   ```

   The app will be available at `http://localhost:3000`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect to GitHub**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Configure Build Settings**
   - Build Command: `cd frontend && yarn build`
   - Output Directory: `frontend/build`
   - Install Command: `cd frontend && yarn install`

3. **Environment Variables**
   Add these to your Vercel dashboard:
   ```
   REACT_APP_BACKEND_URL=your-backend-url
   GENERATE_SOURCEMAP=false
   ```

4. **Deploy**
   - Push to main branch to trigger automatic deployment
   - Or use Vercel CLI: `vercel --prod`

## 📞 Contact

- **Email**: gohelyash11@gmail.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yashgohel)
- **GitHub**: [Your GitHub](https://github.com/yashgohel)

---

**"I am Iron Man"** - Built with ❤️ by Yash Gohel
