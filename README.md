# Webpack Setup

This is a basic Webpack setup designed to handle vanilla TypeScript and Tailwind CSS. It adds client-side interactivity to server-side rendered applications, and includes support for HTMX. The setup provides both development and production configurations, with production builds using cache busting to generate a Tailwind CSS build and a JavaScript bundle.

## Project Structure
```
webpack-setup/
├── node_modules/           # Installed packages
├── public/                 # Contains the build output and other public files
│   └── build/              # Compiled JS and CSS
├── resources/              # Source files
│   ├── css/                # CSS files
│   ├── templates/          # HTML template files
│   ├── ts/                 # TypeScript files
│   └── index.html          # Main HTML template for HMR
├── .env                    # Environment variables
├── .gitignore              # Git ignore file to exclude files and directories 
├── .nvmrc                  # Node.js version manager configuration
├── package-lock.json       # Exact versions of installed packages
├── package.json            # Project metadata and scripts
├── postcss.config.js       # Postcss configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.common.js       # Common Webpack configuration
├── webpack.dev.js          # Development Webpack configuration
├── webpack.prod.js         # Production Webpack configuration
└── README.md               # This file
```


## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v20.18.0 or higher)
- npm (10.9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BradleyParkerDev/webpack-setup.git
   cd webpack-setup
   ```

2. Rename `example.env` to `.env`:

   ```bash
   mv example.env .env
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Scripts

- **`npm run dev`** : Runs a dev server with HRM on localhost 3010, this is used for development.
- **`npm run clean`** : Uses rimraf to delete the contents of the `./public/build` directory.
- **`npm run build`** : Builds the css, js bundle, and a manifest in the `./public/build` directory.
- **`npm start`** : Cleans and rebuilds the `./public/build` directory, this is used for production.


## Dependencies

- **canvas-confetti**: A lightweight library for adding customizable confetti effects to web applications.
- **dotenv**: A module that loads environment variables from a `.env` file into process.env.
- **htmx.org**: Enables dynamic HTML updates with declarative syntax, making server-driven interactivity simple and lightweight.
- **rimraf**: A cross-platform tool for removing directories, used to clean the `./public/build` directory.

## DevDependencies
- **@types/canvas-confetti** : Provides TypeScript type definitions for the `canvas-confetti` library.
- **@types/dotenv** : Provides TypeScript type definitions for the `dotenv` library.
- **autoprefixer**: A tool to parse CSS and add vendor prefixes to CSS rules.
- **clean-webpack-plugin**: A plugin to remove old build files from the output directory.
- **css-loader**: Loads and bundles CSS files into JavaScript.
- **html-webpack-plugin**: Generates HTML files to include Webpack bundles.
- **mini-css-extract-plugin**: Extracts CSS into separate files during production.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **postcss-loader**: A loader for webpack to process CSS with PostCSS.
- **style-loader**: Adds CSS to the DOM by injecting a <style> tag.
- **tailwindcss**: A utility-first CSS framework.
- **ts-loader**: Loads and compiles TypeScript files.
- **typescript**: TypeScript compiler to transpile TypeScript code into JavaScript.
- **webpack**: The core bundler for your project.
- **webpack-cli**: Command-line interface for Webpack.
- **webpack-dev-server**: A development server with live reloading and hot module replacement.
- **webpack-manifest-plugin**: Generates a manifest file mapping source file names to output file names.
- **webpack-merge**: A tool to merge multiple Webpack configurations.

## License

This project is open for personal and educational use. No specific license applies.