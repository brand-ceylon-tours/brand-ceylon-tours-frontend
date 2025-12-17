# Vercel Deployment Troubleshooting

## Issue: Deploy Button is Inactive

If the Deploy button is grayed out or inactive, follow these steps:

### Solution 1: Set Root Directory (Most Common Fix)

1. In the Vercel import screen, look for **"Root Directory"** field
2. Click on it or the folder icon next to it
3. Type or select: `frontend`
4. Press Enter or click outside
5. The Deploy button should become active

### Solution 2: Manual Framework Selection

If Root Directory doesn't help:

1. Look for **"Framework Preset"** dropdown
2. Select **"Next.js"** manually
3. Verify these settings appear:
   - Build Command: `npm run build` (or `cd frontend && npm run build`)
   - Output Directory: `.next` (or `frontend/.next`)
   - Install Command: `npm install` (or `cd frontend && npm install`)

### Solution 3: Check Repository Access

1. Ensure Vercel has access to your GitHub organization
2. Go to: https://github.com/settings/installations
3. Find "Vercel" in the list
4. Click "Configure"
5. Ensure `brand-ceylon-tours` organization is selected
6. Grant access to repositories

### Solution 4: Re-import Repository

1. Go back to Vercel dashboard
2. Click "Add New..." → "Project"
3. If you see your repo listed, try importing again
4. If not listed, click "Adjust GitHub App Permissions"
5. Grant necessary permissions
6. Refresh and try again

### Solution 5: Use vercel.json Configuration

The repository now includes a `vercel.json` file that should help Vercel detect the configuration.

1. Make sure `vercel.json` is committed to GitHub:
   ```bash
   git add vercel.json
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. In Vercel import screen:
   - Root Directory: Leave empty or set to root (`.`)
   - Vercel will use the `vercel.json` configuration

### Solution 6: Check Browser Console

1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for any JavaScript errors
4. These might indicate what's preventing deployment

### Solution 7: Alternative - Deploy via Vercel CLI

If the web interface doesn't work:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to project:
   ```bash
   cd /Users/ubandga/IdeaProjects/Brand-Ceylon-Tours
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel --cwd frontend
   ```

5. Follow prompts:
   - Link to existing project? No
   - Project name: brand-ceylon-tours-frontend
   - Directory: ./frontend
   - Override settings: No

## Required Settings Summary

When importing, ensure these are set:

- **Root Directory:** `frontend` (IMPORTANT!)
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (or auto-detected)
- **Output Directory:** `.next` (or auto-detected)
- **Install Command:** `npm install` (or auto-detected)

## Still Not Working?

1. **Check Vercel Status:** https://www.vercel-status.com/
2. **Clear Browser Cache:** Try in incognito mode
3. **Try Different Browser:** Chrome, Firefox, Safari
4. **Contact Vercel Support:** support@vercel.com

## Quick Checklist

- [ ] Repository is public (or Vercel has access)
- [ ] Root Directory is set to `frontend`
- [ ] Framework is detected as Next.js
- [ ] Build command is present
- [ ] No JavaScript errors in browser console
- [ ] Vercel has GitHub organization access

