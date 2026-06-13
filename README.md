# 🦅 NayePankh Foundation Website

A simple, clean, and responsive website for **NayePankh Foundation** - a non-profit organization dedicated to education, social welfare, and community development.

This project is built using **vanilla HTML, CSS, and JavaScript** - no frameworks, just pure beginner-friendly code!

---

## 📁 Project Structure

```
NayePankh-Website/
│
├── index.html              # Main HTML file with all sections
├── README.md              # This file
│
├── css/
│   └── style.css          # All styling and responsive design
│
├── js/
│   └── script.js          # Interactive features and animations
│
└── images/                # (Folder for future custom images)
```

---

## ✨ Features Included

### 1. **Responsive Design**
   - Mobile-friendly layout using CSS media queries
   - Works perfectly on phones, tablets, and desktops
   - Hamburger menu for mobile navigation

### 2. **Navigation Bar**
   - Logo with foundation name
   - Navigation links (Home, About, Programs, Gallery, Contact)
   - Dark mode toggle button
   - Sticky navigation (stays at top while scrolling)

### 3. **Hero Section**
   - Eye-catching headline: "NayePankh Foundation"
   - Tagline: "Giving Wings to Dreams"
   - Call-to-action buttons (Donate Now, Join as Volunteer)
   - Smooth scrolling to sections

### 4. **About Us Section**
   - Three cards: "Who We Are", "Our Mission", "Our Vision"
   - Hover effects on cards
   - Professional description of the foundation

### 5. **Programs Section**
   - Four program cards:
     - 📚 Education Support
     - 🎯 Skill Development
     - 👩‍💼 Women Empowerment
     - 🤝 Community Service
   - Emoji icons for visual appeal
   - Hover animations

### 6. **Impact Section**
   - Statistics display with animated counters:
     - 5000+ Children Supported
     - 250 Active Volunteers
     - 45 Projects Completed
     - 15 Communities Reached
   - Numbers animate when section comes into view
   - Beautiful gradient background

### 7. **Gallery Section**
   - Grid of 6 images from Unsplash
   - Hover zoom effect on images
   - Overlay text on hover
   - Responsive grid layout

### 8. **Contact Section**
   - Professional contact form with validation
   - Name, Email, Message fields
   - Contact information (Address, Phone, Email)
   - Form submission handling with alerts

### 9. **Footer**
   - About section
   - Quick links
   - Social media links (Facebook, Twitter, Instagram, LinkedIn)
   - Copyright information

### 10. **Dark Mode**
   - Toggle between light and dark themes
   - User preference is saved in browser
   - Smooth transitions between modes

### 11. **Animations**
   - Fade-in animations on page load
   - Hover effects on buttons and cards
   - Smooth scrolling navigation
   - Number counter animation in impact section
   - Card lift effect on hover

---

## 🚀 How to Use

### Opening the Website

1. **Using a Browser:**
   - Simply open `index.html` in any web browser (Chrome, Firefox, Safari, Edge)
   - Double-click on the file, or right-click → Open with → Your preferred browser

2. **Using VS Code (Live Server):**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` → "Open with Live Server"
   - Website will open in your browser with auto-refresh on changes

### Customizing the Website

#### Change Colors
Edit the CSS variables at the top of `css/style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Change main brand color */
    --secondary-color: #ec4899;    /* Change accent color */
    --accent-color: #f59e0b;       /* Change highlight color */
}
```

#### Change Foundation Name
In `index.html`, replace "NayePankh" with your foundation name:
```html
<h1>🦅 Your Foundation Name</h1>
```

#### Change Contact Information
Update the contact section in `index.html`:
```html
<p>Your Foundation Name<br>Your Address<br>Your Country</p>
<p>+91 Your Phone Number<br>Available 9 AM - 6 PM</p>
<p>your-email@foundation.org<br>support@foundation.org</p>
```

#### Add Your Own Images
Replace image URLs in the gallery section:
```html
<img src="path-to-your-image.jpg" alt="Description">
```

#### Update Social Media Links
Replace `#` with actual social media URLs in footer:
```html
<a href="https://facebook.com/yourfoundation" class="social-link" title="Facebook">
    <i class="fab fa-facebook-f"></i>
</a>
```

---

## 📱 Responsive Breakpoints

- **Desktop:** 1200px and above (full layout)
- **Tablet:** 768px to 1199px (adjusted spacing)
- **Mobile:** 480px to 767px (single column, hamburger menu)
- **Small Mobile:** Below 480px (compact layout)

---

## 💡 Code Explanations

### HTML (index.html)
- Clean semantic structure
- Organized sections with comments
- Proper use of heading hierarchy
- Accessible form elements

### CSS (css/style.css)
- CSS variables for easy customization
- Flexbox and Grid layouts
- Mobile-first responsive design
- Smooth transitions and animations
- Dark mode styles

### JavaScript (js/script.js)
1. **Dark Mode:** Toggle theme and save preference
2. **Hamburger Menu:** Mobile navigation toggle
3. **Smooth Scrolling:** Scroll to sections smoothly
4. **Number Animation:** Animate counters in impact section
5. **Form Validation:** Check form fields before submission
6. **Intersection Observer:** Detect when elements come into view
7. **Active Link Highlighting:** Highlight current section

---

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Indigo) | #6366f1 | Headings, buttons, links |
| Secondary (Pink) | #ec4899 | Accents, highlights |
| Accent (Amber) | #f59e0b | Secondary highlights |
| Dark Background | #1f2937 | Dark mode background |
| Light Background | #f9fafb | Light mode background |
| Text Dark | #111827 | Main text color |
| Text Light | #f3f4f6 | Light text |

---

## 🔧 Troubleshooting

### Images Not Loading
- Check image URLs are correct
- Ensure internet connection (for Unsplash images)
- Use local images instead if needed

### Dark Mode Not Working
- Clear browser cache/cookies
- Check browser console for errors (F12 → Console)
- Ensure JavaScript is enabled

### Form Not Validating
- Check browser console for JavaScript errors
- Ensure all form fields have correct IDs
- Try in a different browser

### Mobile Menu Not Opening
- Check if JavaScript file is loaded
- Verify hamburger element exists in HTML
- Check CSS display property for hamburger

---

## 📝 Code Comments

All code files are extensively commented to help beginners understand:
- What each section does
- How CSS classes work
- JavaScript function purposes
- Why certain properties are used

Read the comments while studying the code to learn best practices!

---

## 🎓 Learning Points

This project teaches:
1. HTML semantic structure and accessibility
2. CSS Flexbox and Grid layouts
3. Responsive design with media queries
4. JavaScript DOM manipulation
5. Event listeners and handlers
6. CSS animations and transitions
7. LocalStorage for saving preferences
8. Form validation
9. Intersection Observer API

---

## 🚀 Next Steps / Enhancements

To expand this project, you could add:
1. **Backend Integration:** Connect form to a real server
2. **Database:** Store contacts and gallery images
3. **Blog Section:** Articles and news updates
4. **Events Page:** Upcoming programs and events
5. **Donation System:** Online payment integration
6. **Volunteer Portal:** Application form and dashboard
7. **Analytics:** Track visitor statistics
8. **SEO Optimization:** Better search engine visibility
9. **Email Notifications:** Send automatic confirmations
10. **Multi-language Support:** Translate to multiple languages

---

## 📄 License

This project is open for educational use. Feel free to customize and use for your organization.

---

## 💬 Support

If you have any questions about the code:
1. Read the comments in each file
2. Check the troubleshooting section
3. Review the code structure
4. Experiment with small changes

---

## 👨‍💻 Made With

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Interactivity
- **Font Awesome** - Icons (CDN)
- **Unsplash** - Free images (CDN)
- **VS Code** - Code editor
- **Love** - ❤️

---

**Happy Coding! 🎉**

Remember: Start simple, learn by doing, and gradually add more features as you improve your skills!
