# rarePurple Website

This is the official website for rarePurple, built with React and Tailwind CSS.

## Updating Content

Most website content can be updated through the configuration file located at `src/config/site.ts`. This includes:

### Company Information
- Company name
- Description
- Logo paths

### Navigation
- Menu items
- Call-to-action buttons

### Hero Section
- Main headline
- Description
- Button text

### Products Section
- Product cards
- Features
- Descriptions

### Benefits
- Main points
- Descriptions

### Contact Information
- Address
- Phone
- Email
- Social media links

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Folder Structure

```
rpweb/
├── assets/
│   └── Company_logo.png
├── src/
│   ├── config/
│   │   └── site.ts      # Main configuration file
│   ├── components/
│   ├── lib/
│   └── pages/
└── index.html
```

## Deployment

This website is deployed using GitHub Pages. To deploy:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages

## Customization

1. Theme: Update `theme.json` to change colors and styling
2. Content: Modify `src/config/site.ts` to update website content
3. Assets: Place new images in the `assets` folder and update paths in config
