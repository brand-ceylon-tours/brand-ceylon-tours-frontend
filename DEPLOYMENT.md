# Deployment Guide - Brand Ceylon Tours Frontend

## Recommended Hosting: Vercel

**Why Vercel?**
- ✅ Made by the creators of Next.js
- ✅ Zero configuration needed
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificates
- ✅ Global CDN
- ✅ Generous free tier (perfect for MVP)
- ✅ Preview deployments for pull requests
- ✅ Automatic builds and deployments

## Step-by-Step Deployment to Vercel

### Step 1: Create Vercel Account

1. Go to: https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Complete the signup process

### Step 2: Import Your Repository

1. After signing in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find `brand-ceylon-tours/brand-ceylon-tours-frontend`
4. Click "Import"

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js, but verify these settings:

**Project Settings:**
- **Framework Preset:** Next.js (auto-detected)
- **Root Directory:** `frontend` (important - your Next.js app is in the frontend folder)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)

**Environment Variables:**
- None needed for MVP (add later if needed)

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will:
   - Install dependencies
   - Build your Next.js application
   - Deploy to a global CDN
3. Wait 2-3 minutes for the build to complete

### Step 5: Get Your Live URL

After deployment completes:
- You'll get a URL like: `brand-ceylon-tours-frontend.vercel.app`
- Or a custom domain if you configure one
- Share this URL with your client!

## Automatic Future Deployments

### How It Works:

1. **Push to `main` branch** → Automatic production deployment
2. **Create Pull Request** → Automatic preview deployment
3. **Merge PR to `main`** → Automatic production deployment

### Workflow:

```bash
# Make changes locally
git add .
git commit -m "Update home page"
git push origin main

# Vercel automatically:
# 1. Detects the push
# 2. Builds the application
# 3. Deploys to production
# 4. Updates your live URL
```

## Custom Domain (Optional)

If you want a custom domain later:

1. Go to your project on Vercel
2. Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

## Alternative: Netlify

If you prefer Netlify:

1. Go to: https://app.netlify.com
2. Sign up with GitHub
3. "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

## Monitoring Deployments

- **Vercel Dashboard:** View all deployments, logs, and analytics
- **GitHub Integration:** See deployment status in GitHub PRs
- **Email Notifications:** Get notified of deployment success/failure

## Troubleshooting

### Build Fails:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Root Directory Issue:
- If build fails, check "Root Directory" setting
- Should be set to `frontend` (not root of repo)

### Environment Variables:
- Add any needed env vars in Vercel dashboard
- Settings → Environment Variables

## Next Steps After Deployment

1. ✅ Test the live URL
2. ✅ Share with client for review
3. ✅ Set up custom domain (optional)
4. ✅ Configure analytics (optional)
5. ✅ Set up monitoring (optional)

