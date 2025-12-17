# Netlify Deployment Guide - Brand Ceylon Tours Frontend

## ✅ Netlify Compatibility Confirmed

Your Next.js application is **fully compatible** with Netlify:

- ✅ Next.js 14 with App Router
- ✅ Static pages (no server-side rendering needed for MVP)
- ✅ TypeScript support
- ✅ Tailwind CSS support
- ✅ All dependencies are standard and supported

## Required Configuration

The project now includes `netlify.toml` with the correct settings for Next.js deployment.

## Step-by-Step Deployment Instructions

### Step 1: Sign Up for Netlify

1. Go to: https://app.netlify.com/signup
2. Click **"Sign up with GitHub"**
3. Authorize Netlify to access your GitHub account
4. Complete the signup process

### Step 2: Import Your Repository

1. After signing in, click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. You may need to authorize Netlify to access your GitHub organization:
   - Click **"Configure the Netlify app on GitHub"**
   - Select your organization: `brand-ceylon-tours`
   - Click **"Install"** or **"Configure"**
   - Grant access to repositories (or select specific repos)
4. Find and select: `brand-ceylon-tours/brand-ceylon-tours-frontend`
5. Click **"Import"**

### Step 3: Configure Build Settings

**IMPORTANT:** Netlify should auto-detect Next.js, but verify these settings:

1. **Base directory:** `frontend`
   - This tells Netlify where your Next.js app is located

2. **Build command:** `npm run build`
   - This builds your Next.js application

3. **Publish directory:** `.next`
   - This is where Next.js outputs the build

4. **Node version:** `18` (or leave default)
   - Netlify will use Node 18 automatically

### Step 4: Install Netlify Next.js Plugin

The `netlify.toml` file includes the Next.js plugin configuration. Netlify should automatically:

1. Detect the `@netlify/plugin-nextjs` plugin from the config
2. Install it during the first build
3. Configure Next.js routing automatically

**If the plugin isn't auto-installed:**

1. Go to your site settings in Netlify
2. Navigate to **"Plugins"** or **"Build & deploy"** → **"Plugins"**
3. Click **"Add plugin"**
4. Search for: `@netlify/plugin-nextjs`
5. Click **"Install"**

### Step 5: Deploy

1. Review all settings
2. Click **"Deploy site"**
3. Wait 3-5 minutes for the build to complete
4. You'll see build logs in real-time

### Step 6: Get Your Live URL

After deployment completes:

- You'll get a URL like: `brand-ceylon-tours-frontend-xxxxx.netlify.app`
- Or a custom name if you set one
- **Share this URL with your client!**

## Automatic Future Deployments

### How It Works:

1. **Push to `main` branch** → Automatic production deployment
2. **Create Pull Request** → Automatic preview deployment
3. **Merge PR to `main`** → Automatic production deployment

### Workflow:

```bash
# Make changes locally
git add .
git commit -m "Update features"
git push origin main

# Netlify automatically:
# 1. Detects the push
# 2. Builds the application
# 3. Deploys to production
# 4. Updates your live URL
```

## Configuration Files

### netlify.toml

The repository includes a `netlify.toml` file with:

```toml
[build]
  base = "frontend"           # Your Next.js app is in the frontend folder
  command = "npm run build"   # Build command
  publish = ".next"           # Output directory

[build.environment]
  NODE_VERSION = "18"         # Node.js version

[[plugins]]
  package = "@netlify/plugin-nextjs"  # Next.js plugin for proper routing
```

This file ensures Netlify knows:
- Where your app is located (`frontend` folder)
- How to build it (`npm run build`)
- Where the output is (`.next` folder)
- To use the Next.js plugin for proper routing

## Troubleshooting

### Build Fails

1. **Check build logs** in Netlify dashboard
2. **Verify Node version:** Should be 18 or higher
3. **Check dependencies:** Ensure all are in `package.json`
4. **Verify base directory:** Must be set to `frontend`

### 404 Errors on Routes

1. **Ensure Next.js plugin is installed:**
   - Go to Site settings → Plugins
   - Verify `@netlify/plugin-nextjs` is installed
   - If not, install it manually

2. **Check netlify.toml:**
   - Ensure the plugin is listed
   - Verify base directory is correct

### Images Not Loading

1. **Check public folder:** Images should be in `frontend/public/`
2. **Verify image paths:** Use `/images/hero-image.jpg` (leading slash)
3. **Check build logs:** Look for image optimization errors

### Environment Variables

If you need environment variables later:

1. Go to Site settings → Environment variables
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Redeploy the site

## Custom Domain (Optional)

To add a custom domain later:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain
4. Follow DNS configuration instructions

## Free Tier Limits

Netlify's free tier includes:

- ✅ 100 GB bandwidth per month
- ✅ 300 build minutes per month
- ✅ Unlimited sites
- ✅ Automatic SSL certificates
- ✅ Preview deployments for PRs
- ✅ Form handling (100 submissions/month)

**Perfect for MVP and client review!**

## Next Steps After Deployment

1. ✅ Test all pages on the live URL
2. ✅ Verify images load correctly
3. ✅ Test navigation between pages
4. ✅ Share URL with client
5. ✅ Monitor deployments in Netlify dashboard

## Support

- **Netlify Docs:** https://docs.netlify.com/
- **Next.js on Netlify:** https://docs.netlify.com/integrations/frameworks/next-js/
- **Netlify Support:** https://www.netlify.com/support/

