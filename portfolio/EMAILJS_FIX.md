# EmailJS Production Deployment Fix

## Problem
EmailJS works locally but fails on production (saadabbas.me) with error: 
```
Failed to send email: y {status: 0, text: ''}
```

### What This Error Means
**Status 0** indicates a CORS/network blocking issue where the request is blocked **before** reaching EmailJS servers. This happens when:
1. Domain is not whitelisted in EmailJS
2. CORS policy blocks the request
3. Network/firewall blocks the connection

## Root Causes
1. **Hard-coded credentials** - Not using environment variables
2. **Domain restrictions** - EmailJS account may have domain restrictions
3. **CORS issues** - Production domain not whitelisted
4. **Missing error handling** - Poor error visibility

## Solution Implemented

### 1. Environment Variables
Created `.env` and `.env.example` files with:
```env
VITE_EMAILJS_SERVICE_ID=service_lt5svqo
VITE_EMAILJS_TEMPLATE_ID=template_aoez6m7
VITE_EMAILJS_PUBLIC_KEY=iL1jEoGxX0efT4QsO
```

### 2. Updated Contact.jsx
- Now uses `import.meta.env` for configuration
- Added detailed error handling and error popup
- Better error logging with full error object

### 3. Updated .gitignore
Added `.env` files to prevent exposing credentials

## Deployment Steps

### Step 1: Configure EmailJS Dashboard
1. Go to https://dashboard.emailjs.com/admin
2. Navigate to **Account** → **General**
3. Under **Allowed Domains**, add:
   - `localhost`
   - `saadabbas.me`
   - `*.saadabbas.me`
   - `vercel.app`
   - `*.vercel.app`

### Step 2: Verify Email Template
1. Go to **Email Templates** in EmailJS
2. Select template `template_aoez6m7`
3. Ensure it has these variables:
   ```
   {{from_name}}
   {{from_email}}
   {{message}}
   {{to_name}}
   ```

### Step 3: Add Environment Variables to Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables for **Production**, **Preview**, and **Development**:
   ```
   VITE_EMAILJS_SERVICE_ID = service_lt5svqo
   VITE_EMAILJS_TEMPLATE_ID = template_aoez6m7
   VITE_EMAILJS_PUBLIC_KEY = iL1jEoGxX0efT4QsO
   ```

### Step 4: Redeploy
```bash
git add .
git commit -m "fix: EmailJS production configuration with env variables"
git push origin main
```

Or trigger a redeploy in Vercel dashboard.

## Testing

### Local Testing
```bash
npm run dev
```
Fill out the contact form and check console for detailed logs.

### Production Testing
1. Visit https://saadabbas.me
2. Go to contact section
3. Submit a message
4. Open browser DevTools → Console to see detailed error messages
5. Check Network tab for EmailJS API calls

## Common Issues & Solutions

### Issue: "Failed to send email" with no details
**Solution**: Check browser console for detailed error message now displayed

### Issue: CORS error
**Solution**: Add your domain to EmailJS Allowed Domains list

### Issue: 403 Forbidden
**Solution**: Verify your EmailJS public key is correct and domain is whitelisted

### Issue: Environment variables not working
**Solution**: 
- Ensure variables start with `VITE_`
- Redeploy after adding env vars in Vercel
- Clear browser cache

### Issue: Still failing after deployment
**Solution**:
1. Check Vercel build logs for env variable confirmation
2. Verify EmailJS account is not on free tier limits
3. Check EmailJS service status
4. Ensure email template exists and is published

## Verification Checklist
- [ ] Environment variables added to Vercel
- [ ] Domains whitelisted in EmailJS
- [ ] Email template configured correctly
- [ ] Code deployed to production
- [ ] Browser cache cleared
- [ ] Form tested on production site
- [ ] Error messages visible in console
- [ ] Success notification appears

## Additional Security
Consider adding:
1. **Rate limiting** - Prevent spam
2. **Captcha** - Google reCAPTCHA v3
3. **Input validation** - Server-side validation
4. **Alternative backend** - Custom API endpoint with server-side EmailJS

## Support
If issues persist:
1. Check EmailJS logs in dashboard
2. Verify email quota (free tier: 200 emails/month)
3. Contact EmailJS support with error logs
4. Consider switching to alternative (Formspree, SendGrid, etc.)

## Alternative: Custom Backend (Optional)
For better security and reliability, consider:
```javascript
// Instead of client-side EmailJS, use a serverless function
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
})
```

This keeps credentials server-side and provides better control.
