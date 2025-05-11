# 🎲 Random GIF Generator

This is a simple and fun Random GIF Generator built using **React**, **Tailwind CSS**, and the **Giphy API**. It allows users to generate random GIFs or tag-specific GIFs (like "car", "funny", etc.) using custom React hooks.

## 🚀 Live Demo

👉 [Click here to view the live demo](https://anishbhujbal7.github.io/gif-generator)

## 🛠️ Features

- 🔁 Generate random GIFs on button click
- 🔍 Search for tag-based GIFs
- ⚛️ Built using React and Tailwind CSS
- 🎣 Uses custom React hook (`useGif`) for API handling and GIF management
- 🔃 Loading spinner while fetching data
- 📦 Axios for making HTTP requests
- 🧪 Clean component structure for maintainability

## 📂 Folder Structure


## 🔧 Technologies Used

- React
- Tailwind CSS
- Axios
- Giphy API
- GitHub Pages for hosting

## 🧠 Custom Hook - `useGif`

A reusable custom React hook named `useGif` is used to handle the logic for fetching GIFs from the Giphy API. It supports both random and tag-specific requests and handles loading state internally.

## 🌐 Deployment

This project is deployed using **GitHub Pages**. The `gh-pages` npm package is used to publish the `build/` directory.

### Deployment Commands Used

```bash
npm install --save gh-pages

# In package.json
"homepage": "https://anishbhujbal7.github.io/gif-generator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Then run:
npm run deploy
