# Riya Fashion Studio — GitHub Pages Website

A responsive static fashion-studio website with Home, About, Collections, Services, Gallery and Contact pages.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Upload the contents of the `riya-fashion-github` folder (not the outer ZIP) to the root of your GitHub repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and open the URL it provides.

## Contact form
The contact form submits to FormSubmit and is configured for `riyafashion123@gmail.com`. GitHub Pages is static hosting, so an external form service is required. On the first live submission, FormSubmit may send an activation/confirmation email to that inbox. Open that email and approve the form before expecting future enquiries. The page displays success only after the service returns a successful response; otherwise it displays an error.

The form requires an internet connection. If submissions still fail after activation, check the browser console and FormSubmit's current service status/settings.

## Images
Two fashion photographs supplied in the conversation are included locally in `images/`. Other editorial fashion photos and Google Fonts are loaded from Unsplash and Google Fonts, so those require an internet connection. Replace the Unsplash URLs in the HTML with your own local image files if you later want a fully offline website.

## Project structure
- `index.html`, `about.html`, `collections.html`, `services.html`, `gallery.html`, `contact.html`
- `css/style.css`
- `js/script.js`
- `images/riya-red-look.jpg`, `images/riya-feather-look.jpg`
