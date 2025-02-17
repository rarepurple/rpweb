#!/bin/bash

# Create the directory structure
mkdir -p rpweb/src/{components/{layout,ui},config,lib,pages}
mkdir -p rpweb/assets

# Copy core files
cp client/src/App.tsx rpweb/src/
cp client/src/index.css rpweb/src/
cp client/src/main.tsx rpweb/src/

# Copy layout components
cp client/src/components/layout/{Navigation,Hero,Footer,Contact,Newsletter}.tsx rpweb/src/components/layout/

# Copy essential UI components
cp client/src/components/ui/{button,form,input,textarea,label,separator,toast,toaster}.tsx rpweb/src/components/ui/

# Copy config and assets
cp rpweb/src/config/site.ts rpweb/src/config/
cp attached_assets/Company_logo.png rpweb/assets/

# Copy build and config files
cp rpweb/package.json rpweb/
cp rpweb/theme.json rpweb/
cp client/index.html rpweb/
cp tailwind.config.ts rpweb/
cp rpweb/tsconfig.json rpweb/
cp rpweb/.gitignore rpweb/

# Copy documentation
cp rpweb/README.md rpweb/
cp rpweb/deployment.md rpweb/

echo "Files have been copied to the rpweb directory."
echo "Now you can download the entire rpweb directory from your Replit workspace."