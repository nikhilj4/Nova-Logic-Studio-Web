# Deployment Guide for Nova Logic Studio

This guide explains how to deploy your Next.js application to production. Since this project is built with Next.js, the easiest and recommended platform is **Vercel**.

## Option 1: Quick Deploy with Vercel CLI (Recommended)

You can deploy directly from your terminal using the Vercel CLI.

1.  **Install Vercel CLI** (if not already installed):
    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**:
    ```bash
    vercel login
    ```
    Follow the prompts to log in with your GitHub, GitLab, or Bitbucket account.

3.  **Deploy**:
    Run the following command in your project root:
    ```bash
    vercel
    ```
    - Confirm the default settings (just press Enter for most prompts).
    - When asked `Want to modify these settings? [y/N]`, answer `N`.

4.  **Production Deployment**:
    Once you've tested the preview deployment, deploy to production:
    ```bash
    vercel --prod
    ```

## Option 2: Deploy via GitHub/GitLab/Bitbucket

1.  **Push your code** to a Git repository (e.g., GitHub).
2.  Go to [Vercel.com](https://vercel.com) and sign up/login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your Git repository.
5.  Vercel will automatically detect that it's a Next.js project.
6.  Click **"Deploy"**.

## Option 3: Static Export (For other hosts)

If you need to host on a static server (like Apache, Nginx, or GitHub Pages), you can export the project.

1.  Update `next.config.ts`:
    ```typescript
    const nextConfig = {
      output: 'export',
      // ... other config
    };
    ```
2.  Run build:
    ```bash
    npm run build
    ```
3.  The static files will be in the `out/` directory.

## Important Notes

- **Environment Variables**: If you use any environment variables (like API keys), make sure to add them in the Vercel project settings under "Settings" > "Environment Variables".
- **Custom Domain**: You can add your custom domain in Vercel settings under "Domains".
