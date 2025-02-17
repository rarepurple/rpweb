rpweb/
├── assets/
│   └── Company_logo.png           # Copy from attached_assets/Company_logo.png
├── src/
│   ├── config/
│   │   └── site.ts               # Configuration file
│   ├── components/
│   │   ├── ui/                   # Copy all UI components
│   │   └── layout/
│   │       ├── Navigation.tsx
│   │       ├── Hero.tsx
│   │       ├── Products.tsx
│   │       ├── Benefits.tsx
│   │       ├── SocialProof.tsx
│   │       ├── Contact.tsx
│   │       ├── Newsletter.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── animations.ts
│   │   └── queryClient.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── not-found.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── theme.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md

## Deployment Steps

1. Clone your repository:
```bash
git clone https://github.com/yourusername/rpweb.git
cd rpweb
```

2. Copy all the files maintaining the structure shown above

3. Initialize and push to GitHub:
```bash
git add .
git commit -m "Initial website setup"
git push origin main