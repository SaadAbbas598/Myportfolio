@echo off
echo.
echo 🚀 EmailJS Production Fix Deployment
echo ======================================
echo.

REM Check if .env file exists
if not exist .env (
    echo ❌ Error: .env file not found!
    echo Creating .env from .env.example...
    copy .env.example .env
    echo ✅ .env file created. Please configure your EmailJS credentials.
    exit /b 1
)

echo 📋 Pre-deployment Checklist:
echo.
echo Before deploying, ensure you have:
echo   1. ✓ Added environment variables to Vercel dashboard
echo   2. ✓ Whitelisted your domain in EmailJS (saadabbas.me)
echo   3. ✓ Verified your EmailJS credentials are correct
echo   4. ✓ Reviewed the EMAILJS_FIX.md guide
echo.

set /p "continue=Have you completed the checklist? (y/n): "
if /i not "%continue%"=="y" (
    echo.
    echo ⚠️  Please complete the checklist before deploying.
    echo 📖 Read EMAILJS_FIX.md for detailed instructions.
    exit /b 1
)

echo.
echo 🔨 Building project...
call npm run build

if errorlevel 1 (
    echo ❌ Build failed! Please fix errors before deploying.
    exit /b 1
)

echo.
echo ✅ Build successful!
echo.
echo 📤 Committing changes...
git add .
git commit -m "fix: EmailJS production configuration with environment variables - Moved EmailJS credentials to environment variables - Added error handling and user-friendly error messages - Updated .gitignore to exclude .env files - Added comprehensive deployment guide - Improved error logging for debugging"

echo.
echo 🚢 Pushing to repository...
git push origin main

echo.
echo ✅ Deployment complete!
echo.
echo 📝 Next Steps:
echo   1. Go to Vercel dashboard
echo   2. Verify environment variables are set
echo   3. Wait for automatic deployment to complete
echo   4. Test the contact form on saadabbas.me
echo   5. Check browser console for any errors
echo.
echo 📖 For troubleshooting, see EMAILJS_FIX.md
echo.
pause
