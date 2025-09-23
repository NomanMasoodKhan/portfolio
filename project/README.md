# 🔥 Innovative Hacker Cybersecurity Portfolio

A cutting-edge cybersecurity portfolio with hacker aesthetics, featuring Matrix effects, terminal interfaces, and cyberpunk styling.

## 🚀 Features

- **Hacker Aesthetics**: Matrix rain effects, glitch animations, terminal interfaces
- **Cyberpunk Design**: Neon colors, monospace fonts, scanning effects
- **Professional Sections**: Blog, Projects, About, Contact
- **Responsive Design**: Works perfectly on all devices
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Vite

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel / GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cybersecurity-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Deploy to Vercel

1. **Using Vercel CLI:**
```bash
npm install -g vercel
vercel
```

2. **Using Vercel Dashboard:**
- Connect your GitHub repository
- Import project
- Deploy automatically

### Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source

2. **Push to main branch:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Deploy to Netlify

1. **Using Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

2. **Using Netlify Dashboard:**
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

## 🎨 Customization

### Update Content
- **Personal Info**: Edit components in `src/components/`
- **Blog Posts**: Modify `src/components/Blog.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Skills**: Customize `src/components/About.tsx`

### Styling
- **Colors**: Modify Tailwind classes
- **Animations**: Adjust CSS animations in components
- **Layout**: Update component structures

### Configuration
- **Site Title**: Update `index.html`
- **Meta Tags**: Modify head section
- **Favicon**: Replace in `public/` folder

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation with glitch effects
│   ├── Hero.tsx        # Matrix-style hero section
│   ├── About.tsx       # Skills and terminal interface
│   ├── Blog.tsx        # Exploit database showcase
│   ├── Projects.tsx    # Weapon arsenal display
│   ├── Contact.tsx     # Secure communication form
│   └── Footer.tsx      # Underground branding
├── App.tsx             # Main application
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🔧 Environment Variables

Create a `.env` file for any API keys or configuration:

```env
VITE_CONTACT_EMAIL=your-email@protonmail.com
VITE_GITHUB_USERNAME=your-github-username
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email h4ck3r@protonmail.com or create an issue in the repository.

---

**⚠️ Disclaimer**: This portfolio template is for educational and professional purposes only. All hacker-themed content is purely aesthetic and should not be used for malicious activities.