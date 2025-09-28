# React E-Commerce (CI/CD + TDD)

A minimal e-commerce React app demonstrating **Test-Driven Development (TDD)** and a **CI/CD pipeline** with GitHub Actions and Vercel.

## ✨ Features
- Product listing with images, price, and "Add to Cart"
- Shopping cart with item count, remove, and clear functionality
- Context API for state management
- React Router for navigation
- Fully automated pipeline: build → test → deploy

## 🧪 Testing
- **Unit Tests**:  
  - `ProductCard.test.tsx` → component rendering + button interaction  
  - `HeaderBadge.test.tsx` → cart badge updates correctly
- **Integration Test**:  
  - `CartIntegration.test.tsx` → adding product updates the cart badge
- Run locally:  
  ```
  npm test
⚙️ CI/CD Pipeline

- Continuous Integration (CI):

  - GitHub Actions build & test on every push to master

  - Pipeline fails if tests fail

- Continuous Deployment (CD):

  - Successful runs deploy automatically to Vercel

# 🚀 Live Demo

👉 [View Live App](https://react-ecommerce-p5kfp0jua-ozkancimenlis-projects.vercel.app/)

# 📦 Tech Stack

- React + TypeScript + Vite

- React Router

- Context API

- Vitest + React Testing Library

- GitHub Actions

- Vercel

# 📌 Presentation Requirement

This project will be presented live to demonstrate:

- Features

- Architecture

- TDD setup

- CI/CD pipeline
