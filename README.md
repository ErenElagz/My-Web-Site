# ErenElagz.com 
### Figma Design File
https://www.figma.com/design/LDMQ0izfK3O2eAEL0aXQFo/My-Web-Site-Design?node-id=0-1&t=Ttke8krVoFMFVoiC-1

**Inspired from https://ned.im**

## Overview
This document provides detailed information on the structure, functionality, and usage of the personal portfolio website **erenelagz.com**. The website showcases **Eren Elagöz**, a React Native Mobile App Developer and UI & UX Designer, along with his projects, blogs, and designs.

## Website Structure & Navigation
The website consists of the following main sections:

- **Read Me**: General information about Eren and his ongoing projects.
- **Blogs**: A collection of written blog posts.
- **Projects**: A showcase of past and ongoing projects.
- **Designs**: A portfolio of design-related work.

Navigation is handled via the top navigation bar, enabling users to switch between sections easily.

## Homepage
The homepage provides a brief introduction to Eren and highlights some of his most recent projects in the **Spotlight** section. Additionally, links to social media accounts and contact information are provided.

## Projects
The **Projects** page lists Eren’s major projects with the following details:

- **Project Name**
- **Date Range**
- **Location**
- **Description**

### Example Projects:
- **HitBis: Bicycle Sharing App** (10.2024 - Present, Çorum, Turkey)
  - IoT-based bicycle rental application with AI-driven ride assistance.
- **Belen: AI-Based Tourism Assistant App** (02.2024 - 10.2024, Antalya, Turkey)
  - AR/VR-supported AI-powered tourism assistant application.

## Contact Information
Users can reach out to Eren using the following channels:

- **Email**: [erenelagoz@gmail.com](mailto:erenelagoz@gmail.com)
- **GitHub**: [github.com/erenelagz](https://github.com/erenelagz)
- **LinkedIn**: [linkedin.com/in/erenelagz](https://www.linkedin.com/in/erenelagz)
- **Twitter**: [twitter.com/erenelagz](https://twitter.com/erenelagz)

## Technical Details
The website is built with **Next.js (App Router)** and styled using **Tailwind CSS**. It follows modern web development standards and ensures a responsive design for optimal viewing on different devices.

## Usage Instructions
- **Navigation**: Use the top menu to access different sections.
- **Viewing Projects**: Click on a project in the **Projects** section for more details.
- **Contact**: Use the provided email or social links to get in touch.

## Google Analytics Integration
Google Analytics has been integrated into `layout.tsx` to track user interactions. The tracking script is loaded dynamically via `next/script` to ensure performance optimization.

## Known Issues & Fixes
- **Page Navigation Not Working**: Ensure `page.tsx` exists inside each subdirectory under `/app/`.
- **Dynamic Routes Not Loading**: Use `[id]/page.tsx` for dynamic paths such as `/blogs/[id]`.
- **Metadata Not Updating**: Restart the Next.js development server (`npm run dev`) after making metadata changes.

This documentation serves as a guide for understanding the structure and usage of the website. If any modifications or updates are required, they should be aligned with the outlined architecture.

