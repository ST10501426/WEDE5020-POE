# Paradox Store - Apparel Catalog Website

A responsive product catalog for Paradox Store, featuring apparel and accessories including T-shirts, hoodies, caps, and bags. The current site supports browsing, filters, product image viewing, and inquiry submissions, but does not process orders or payments.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Product Showcase** - Beautiful product displays with multiple image views (front/back, side views)
- **Product Image Lightbox** - Open product images full-size and navigate between product views
- **Category Navigation** - Browse products by category with easy filtering
- **Price Filtering** - Filter products by price range
- **Featured Collections** - Highlighted product collections on homepage
- **About Section** - Company story, mission, values, and team information
- **Customer inquiries** - Contact and product inquiry submissions through embedded Google Forms
- **Professional UI/UX** - Modern design with smooth animations and hover effects
- **SEO Foundation** - Page-specific titles and descriptions, canonical URLs, social sharing metadata, structured organization data, sitemap.xml, and robots.txt

## 📁 Project Structure

```
my-web-project/
├── index.html           # Homepage with hero section and featured collections
├── shop.html            # Main shopping page with product grid and filters
├── category.html        # Category browsing page
├── inquiry.html         # Google Form for product inquiries
├── about.html           # Company information and team section
├── contact.html         # Contact information and message form
├── sitemap.xml          # XML sitemap for SEO
├── robots.txt           # Robot exclusion file for search engines
│
├── css/
│   └── style.css        # Main stylesheet with responsive design
│
├── js/
│   └── script.js        # JavaScript for interactivity and filtering
│
├── images/
│   ├── Logo.png         # Brand logo
│   ├── T-shirt/         # T-shirt product images
│   │   └── Black-T-shirt.png.jpeg
│   ├── hoodie/          # Hoodie product images (front/back)
│   │   ├── Hoodie-front.png.jpeg
│   │   └── Hoodie-back.png.jpeg
│   ├── caps/            # Cap product images (front/side)
│   │   ├── Cap-Front.png.jpeg
│   │   └── Cap-Side.png.jpeg
│   └── bags/            # Bag product images
│       └── Tote-bag.png.jpeg
│
└── videos/
    └── Modern Gengar Emblem with atom symbol.mp4  # Hero section video
```

## 🛍️ Product Categories

- **T-Shirts** - Premium cotton t-shirts with exclusive designs
- **Hoodies** - Comfortable hoodies for any season
- **Accessories** - Caps and bags to complete your look
- **Limited Edition** - Exclusive and rare pieces (Coming Soon)
- **Best Sellers** - Most popular items (Coming Soon)

## 🎨 Design Features

### Product Image Display
- **T-Shirt & Bags** - Single centered image with gradient background
- **Hoodies & Caps** - Dual image display (front/back and front/side views) with divider
- **Coming Soon Items** - Animated placeholder with shimmer effect

### Interactive Elements
- Smooth hover animations on product cards
- Click or keyboard-activate product images to open the lightbox; use its controls or arrow keys to browse views
- Circular framed profile image for team member
- Product filtering by category and price range
- Responsive navigation menu

### Color Scheme
- **Primary Brand Color** - #ff6b35 (Orange)
- **Background** - #f5f5f5 (Light Gray)
- **Text** - #1a1a1a (Dark Gray)
- **Accents** - White, varying grays

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements for static hosting

### Run locally

1. Open the project root folder in a terminal.
2. Run `python -m http.server 8000`.
3. Visit `http://localhost:8000` and navigate through the pages.
4. Stop the local server with `Ctrl+C` when finished.

Python is only needed for a local preview. The deployed frontend is static HTML, CSS, and JavaScript; there is no Node.js build step or application server.

## 🏗️ Architecture and requirements

### Components

| Component | Responsibility | Data / integration |
|---|---|---|
| Static pages (`index.html`, `shop.html`, `category.html`, `about.html`, `contact.html`, `inquiry.html`) | Navigation, product catalog, brand information, and inquiry entry points | Product data and content are authored in HTML |
| `css/style.css` | Responsive layout, visual design, and accessible focus/hover states | No external UI framework |
| `js/script.js` | Product price/category filters, image lightbox, and page interactions | Reads product `data-price` / `data-category` attributes; category links can initialize shop filters |
| Google Forms | Collect contact and product inquiries, perform configured required-field validation, show a confirmation | Google Forms stores responses; link a Google Sheet in Forms if a spreadsheet is needed |
| Google Maps | Shows the Menlyn/Pretoria location on the About page | Google Maps embed |
| Static hosting and search crawlers | Serve the pages and discover canonical URLs | `robots.txt`, `sitemap.xml`, canonical URLs, and page metadata |

### User workflows

1. **Browse products:** Home or Categories → Shop → select categories / price range → inspect product images in the lightbox.
2. **Ask about a product:** Shop or site navigation → Inquiry → complete and submit the Product Inquiry Google Form → Google Forms confirmation → review the response in Forms or its linked Sheet.
3. **Contact the store:** Contact → review store details → complete and submit the Contact Google Form → review the response in Forms or its linked Sheet.
4. **Learn about the business:** About → read the story, mission, values, location, and founder information.

### Data and integrations

- **Product catalog:** Static HTML records use a product name, description, price in ZAR, category, image(s), and availability presentation. Shop filters use each product's price and category attributes.
- **Contact submissions:** Collected and validated by the Contact Google Form. The form controls its questions and required fields; Google Forms stores responses.
- **Product inquiries:** Collected by the Product Inquiry Google Form. Use its configured response destination (for example, a linked Google Sheet) for operational follow-up.
- **Backend, database, webhooks, and payments:** None are currently configured. Google Forms is the submission service; the site is not an order or payment system. Before adding a custom backend, define authentication, retention, privacy, validation, spam controls, and notification behavior.
- **Design references:** No separate screenshot or workflow file was available in the workspace; this architecture reflects the existing site and its current Google Form embeds.

## 📄 Page Descriptions

### index.html (Home Page)
- Hero section with video background
- Featured collections showcase
- Links to shop, categories, and other pages
- Navigation and footer

### shop.html (Shopping Page)
- Product grid with multiple products
- Category filter (T-Shirts, Hoodies, Accessories, Limited Edition)
- Price range slider filter
- Add-to-cart buttons are visual placeholders and do not create orders
- "Coming Soon" placeholders for unavailable items

### category.html (Categories Page)
- Category cards for browsing by type
- Quick navigation to filtered product views
- Special offers and promotional section
- Coming soon categories (Jackets, Limited Edition, Best Sellers)

### about.html (About Us Page)
- Company story and mission
- Core values
- Location information with embedded Google Map
- Team member section with founder profile

### contact.html (Contact Page)
- Contact information (email, phone, address)
- Business hours
- Embedded Google Form for customer messages
- Multiple ways to get in touch

### inquiry.html (Product Inquiry Page)
- Embedded Google Form for product and order inquiries

## 🔧 Technologies Used

- **HTML5** - Semantic markup with proper structure
- **CSS3** - Responsive design with flexbox and grid layouts
- **JavaScript** - Product filtering and image lightbox
- **Google Forms** - Contact and product inquiry submissions
- **Google Maps API** - Embedded location map (in about.html)

## 🚀 Deployment and configuration

1. **Check the Google Forms:** Confirm both live forms accept responses, review required fields and confirmation text, and select a response destination (Google Sheets) if the team needs a spreadsheet.
2. **Preview locally:** Run the local server above. Test all six pages and confirm Google Form iframes load over HTTPS. Google Forms will not accept submissions if the owner disables responses or restricts access.
3. **Publish the static files:** Upload the project contents (keeping the HTML files at the site root and preserving the `css/`, `js/`, `images/`, and `videos/` paths) to a static host such as GitHub Pages, Netlify, or Cloudflare Pages. No build command is required; set the publish directory to the project root.
4. **Configure the production domain:** Canonical URLs, `sitemap.xml`, and `robots.txt` currently use `https://paradoxstore.com`. Point DNS and HTTPS hosting at that domain, or change all those URLs consistently to the actual production domain before launch.
5. **Verify deployment:** Visit Home, Shop, Categories, About, Inquiry, and Contact; check navigation, images, video, mobile layout, form embeds, and browser console/network errors. Submit a clearly marked test response to each Google Form and confirm it appears in Forms and its linked Sheet. Remove test data afterward if appropriate.
6. **Submit the sitemap:** Verify `https://paradoxstore.com/robots.txt` and `https://paradoxstore.com/sitemap.xml` are publicly reachable. Add the verified domain to Google Search Console and submit `/sitemap.xml`.

### Release test checklist

- [ ] Navigation links resolve on every page; no missing images, CSS, JavaScript, or video files.
- [ ] `shop.html?category=tshirts`, `?category=hoodies`, `?category=accessories`, and `?category=limited` select the expected filter.
- [ ] Price and category filters work together; the empty state appears when no products match.
- [ ] Product images open in the lightbox by mouse and keyboard; close and previous/next navigation work.
- [ ] Both Google Forms load at desktop and mobile widths, and their direct-link fallbacks open successfully. Submit valid entries, test required-field validation, and confirm the post-submission message.
- [ ] Form responses reach the configured Google Forms response store / linked spreadsheet.
- [ ] `sitemap.xml` parses as XML and lists the canonical production pages; `robots.txt` references that sitemap.
- [ ] No browser console errors on each page.

## 📱 Responsive Breakpoints

- **Desktop** - 1200px and above
- **Tablet** - 768px to 1199px
- **Mobile** - Below 768px

The layouts include responsive breakpoints; complete the release checklist on desktop and mobile before launch.

## 🔍 SEO Features

- **Page metadata** - Unique titles and meta descriptions for each page
- **Search terms** - Relevant page-specific keywords and phrases are included as metadata and in visible page content; major search engines generally ignore the legacy `meta keywords` tag, so it is not a ranking shortcut
- **Canonical URLs** - Preferred URLs prevent duplicate page indexing
- **Social sharing** - Open Graph and Twitter card metadata
- **Structured data** - Organization details on the home page using JSON-LD
- **sitemap.xml** - Lists canonical site pages for search engines
- **robots.txt** - Search engine crawler configuration with the sitemap URL
- **Semantic HTML and image alt text** - Descriptive page structure and image alternatives

## 📧 Contact Information

- **Email** - info@paradoxstore.com
- **Phone** - +1 (234) 567-890
- **Address** - Atterbury Road And, Lois Ave, Menlyn, Pretoria 0063, South Africa
- **Hours** - Mon-Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM | Sun: Closed

## 👔 About Paradox Store

Paradox Store was founded in 2020 with a mission to create unique, high-quality apparel that resonates with individuals who dare to be different. We believe clothing is more than just fabric—it's a form of self-expression. Every piece in our collection is carefully crafted to reflect contemporary trends while maintaining timeless appeal.

### Our Mission
To provide premium quality apparel and accessories that empower individuals to express their unique identity. We are committed to sustainability, ethical manufacturing, and creating products that inspire confidence and creativity.

### Our Values
- **Quality** - Never compromise on materials and craftsmanship
- **Sustainability** - Environmentally responsible production practices
- **Innovation** - Constantly pushing boundaries for fresh designs
- **Customer Satisfaction** - Standing behind every product

## 🎯 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User account and login system
- [ ] Product reviews and ratings
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Newsletter subscription
- [ ] Live chat support
- [ ] Product search functionality
- [ ] Wishlist feature
- [ ] Product comparison

## 📄 License

This project is proprietary to Paradox Store. All rights reserved © 2026.

## 👨‍💼 Founder

**Mr Lebogang Kanyane** - Founder & CEO

With a passion for innovative design and quality craftsmanship, Lebogang founded Paradox to bring unique apparel to the world. His vision drives the company's commitment to excellence and customer satisfaction.

## 🤝 Support

For technical issues or questions, please contact:
- **Website** - https://paradoxstore.com
- **Email** - info@paradoxstore.com
- **Phone** - +1 (234) 567-890

---

**Last Updated** - November 2, 2026

**Version** - 1.0.0
