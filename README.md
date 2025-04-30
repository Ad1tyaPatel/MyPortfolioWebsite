# <div align="center">👨‍💻 Aditya Patel Portfolio</div>

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

</div>

<p align="center">
  <img src="https://raw.githubusercontent.com/ad1tyapatel/portfolio/main/public/images/portfolio-preview.png" alt="Portfolio Preview" width="700px" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);" />
</p>

<div align="center">
  A modern, interactive developer portfolio showcasing Aditya Patel's journey as an AI Engineer and Full-Stack Developer.
</div>

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <h3 align="center">Interactive Neural Network</h3>
        <p>Dynamic 3D visualization using Three.js that responds to user interaction</p>
      </td>
      <td width="50%">
        <h3 align="center">Interactive Terminal</h3>
        <p>Functional terminal interface with custom commands to explore portfolio</p>
      </td>
    </tr>
    <tr>
      <td width="50%">
        <h3 align="center">3D Project Cards</h3>
        <p>Animated project cards with fluid transitions and 3D flip effects</p>
      </td>
      <td width="50%">
        <h3 align="center">Animated Timeline</h3>
        <p>GSAP-powered scrolling timeline showing career journey with smooth animations</p>
      </td>
    </tr>
  </table>
</div>

- **⚡ Performant**: Optimized for Core Web Vitals with lightning-fast load times
- **🌓 Dark Mode**: Elegant light and dark theme with smooth transitions
- **📱 Responsive**: Perfectly adapts to any device or screen size
- **🎭 Animations**: Subtle, polished animations using Framer Motion
- **📝 Blog Section**: Beautifully designed blog with rich content formatting
- **📬 Contact Form**: Interactive form with validation and email integration

## 🚀 Tech Stack

This portfolio is built with the latest web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - [GSAP](https://greensock.com/gsap/)
- **3D Visualization**: 
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
  - [Drei](https://github.com/pmndrs/drei)
- **Email Integration**: [EmailJS](https://www.emailjs.com/)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/ad1tyapatel.git
cd ad1tyapatel
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📋 Project Structure

```
ad1tyapatel/
├── app/                  # Next.js 15 app router
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── navbar.tsx        # Navigation bar
│   ├── neural-network.tsx # 3D neural network visualization
│   ├── terminal.tsx      # Interactive terminal component
│   ├── project-card.tsx  # Project card component
│   ├── projects-grid.tsx # Projects gallery component
│   ├── timeline.tsx      # Interactive career timeline
│   └── ...               # Other components
├── public/               # Static assets
│   ├── images/           # Images and screenshots
│   └── fonts/            # Custom fonts
├── sections/             # Page sections
├── styles/               # Additional styles
├── next.config.ts        # Next.js configuration
└── package.json          # Project dependencies
```

## 🎨 Customization

### Personal Information
- Update contact details in `components/contact-form.tsx`
- Edit social links in `components/footer.tsx`
- Replace resume in `/public/aditya-patel-resume.pdf`

### Projects
Modify project data in `components/projects-grid.tsx`:

```tsx
const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description...",
    image: "/images/projects/image.jpg",
    category: ["AI", "Web"],
    technologies: ["React", "TensorFlow.js"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project.example.com",
  },
  // Add more projects...
];
```

### Timeline
Update career milestones in `components/timeline.tsx`:

```tsx
const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "Event Title",
    description: "Description of the event...",
    icon: <YourIcon />,
  },
  // Add more timeline items...
];
```

## 🚢 Deployment

The portfolio is optimized for deployment on [Vercel](https://vercel.com/), but can be deployed to any platform that supports Next.js.

### Deploying to Vercel

1. Push your repository to GitHub
2. Import your project to Vercel
3. Configure build settings if needed
4. Deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <p>Designed & Developed with ❤️ by <a href="https://github.com/ad1tyapatel">Aditya Patel</a></p>
  <p>
    <a href="https://linkedin.com/in/adityapatel"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="https://twitter.com/ad1tyapatel"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=flat-square&logo=twitter&logoColor=white" alt="Twitter" /></a>
    <a href="mailto:contact@ad1tyapatel.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
  </p>
</div> 