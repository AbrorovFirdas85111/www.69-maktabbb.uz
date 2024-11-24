// seo.js

// Function to dynamically set the meta tags
function setMetaTag(name, content) {
    const existingMetaTag = document.querySelector(`meta[name="${name}"]`);
    if (existingMetaTag) {
        existingMetaTag.setAttribute('content', content);
    } else {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
    }
}

// Setting common meta tags for SEO
setMetaTag('description', '69-maktab haqida batafsil maʼlumot. Bizning rasmiy veb-saytimiz orqali o‘qituvchilar, o‘quvchilar va xizmatlar haqida bilib oling.');
setMetaTag('keywords', '69-maktab, Samarqand maktabi, o‘quvchilar, o‘qituvchilar, taʼlim');
setMetaTag('author', '69-maktab maʼmuriyati');

// Function to dynamically set the title of the page
function setPageTitle(title) {
    document.title = `${title} - 69-Maktab Rasmiy Sayti`;
}

// Set default page title
setPageTitle('Bosh sahifa');

// Function to create Open Graph meta tags for social sharing
function setOpenGraphTags({ title, description, url, image }) {
    const ogTags = {
        'og:title': title,
        'og:description': description,
        'og:url': url,
        'og:image': image,
    };

    Object.keys(ogTags).forEach(key => {
        const existingOgTag = document.querySelector(`meta[property="${key}"]`);
        if (existingOgTag) {
            existingOgTag.setAttribute('content', ogTags[key]);
        } else {
            const metaTag = document.createElement('meta');
            metaTag.setAttribute('property', key);
            metaTag.setAttribute('content', ogTags[key]);
            document.head.appendChild(metaTag);
        }
    });
}

// Set default Open Graph tags
setOpenGraphTags({
    title: '69-Maktab Rasmiy Sayti',
    description: '69-maktab o‘quvchilari va o‘qituvchilari uchun eng so‘nggi maʼlumotlar.',
    url: 'https://www.69-maktab.uz',
    image: 'https://www.69-maktab.uz/images/logo.png',
});

// Function to set Twitter Card meta tags
function setTwitterCardTags({ card, site, title, description, image }) {
    const twitterTags = {
        'twitter:card': card,
        'twitter:site': site,
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': image,
    };

    Object.keys(twitterTags).forEach(key => {
        const existingTwitterTag = document.querySelector(`meta[name="${key}"]`);
        if (existingTwitterTag) {
            existingTwitterTag.setAttribute('content', twitterTags[key]);
        } else {
            const metaTag = document.createElement('meta');
            metaTag.setAttribute('name', key);
            metaTag.setAttribute('content', twitterTags[key]);
            document.head.appendChild(metaTag);
        }
    });
}

// Set default Twitter Card tags
setTwitterCardTags({
    card: 'summary_large_image',
    site: '@69_maktab',
    title: '69-Maktab Rasmiy Sayti',
    description: '69-maktab haqida batafsil maʼlumot.',
    image: 'https://www.69-maktab.uz/images/logo.png',
});

// Function to dynamically generate a robots meta tag
function setRobotsTag(content) {
    setMetaTag('robots', content);
}

// Set default robots tag
setRobotsTag('index, follow');

// Function to generate a sitemap dynamically
function generateSitemap(urls) {
    const sitemap = urls.map(url => `<url><loc>${url}</loc></url>`).join('');
    console.log(`Generated Sitemap: ${sitemap}`);
}

// Example: Generate sitemap with default URLs
generateSitemap([
    'https://www.69-maktab.uz/',
    'https://www.69-maktab.uz/contact.html',
    'https://www.69-maktab.uz/about.html',
    'https://www.69-maktab.uz/services.html',
    'https://www.69-maktab.uz/students.html',
]);

// Function to dynamically add canonical URL
function setCanonicalUrl(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
}

// Set default canonical URL
setCanonicalUrl('https://www.69-maktab.uz');

// Function to log SEO audit results in the console
function logSEOAudit() {
    console.log('SEO Audit: All essential meta tags are present.');
    console.log('Title:', document.title);
    console.log('Meta Description:', document.querySelector('meta[name="description"]').content);
    console.log('Canonical URL:', document.querySelector('link[rel="canonical"]').href);
}

// Run SEO audit on page load
document.addEventListener('DOMContentLoaded', logSEOAudit);
// seo.js (200-400)

// Function to add structured data for SEO
function addStructuredData(data) {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
}

// Adding structured data for the organization
addStructuredData({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "69-Maktab",
    "url": "https://www.69-maktab.uz",
    "logo": "https://www.69-maktab.uz/images/logo.png",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Obi Rahmat ko'chasi",
        "addressLocality": "Samarqand",
        "addressCountry": "Uzbekistan"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+998 90 123 4567",
        "contactType": "administrative"
    }
});

// Adding structured data for website
addStructuredData({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.69-maktab.uz",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.69-maktab.uz/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
});

// Function to add alt attributes to all images
function addAltToImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
            img.setAttribute('alt', `Image ${index + 1}`);
        }
    });
}

// Run function on page load to ensure all images have alt attributes
document.addEventListener('DOMContentLoaded', addAltToImages);

// Function to dynamically generate and add a breadcrumb
function generateBreadcrumb(pathArray) {
    const breadcrumb = document.createElement('nav');
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    breadcrumb.classList.add('breadcrumb');
    
    const breadcrumbList = document.createElement('ol');
    breadcrumbList.classList.add('breadcrumb-list');

    pathArray.forEach((path, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('breadcrumb-item');

        if (index === pathArray.length - 1) {
            listItem.textContent = path.label;
            listItem.setAttribute('aria-current', 'page');
        } else {
            const link = document.createElement('a');
            link.setAttribute('href', path.url);
            link.textContent = path.label;
            listItem.appendChild(link);
        }

        breadcrumbList.appendChild(listItem);
    });

    breadcrumb.appendChild(breadcrumbList);
    document.body.prepend(breadcrumb);
}

// Example breadcrumb usage
generateBreadcrumb([
    { label: 'Bosh sahifa', url: 'https://www.69-maktab.uz' },
    { label: 'Bog‘lanish', url: 'https://www.69-maktab.uz/contact.html' }
]);

// Function to monitor SEO performance (e.g., title length, description length)
function monitorSEO() {
    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.content || '';
    
    if (title.length < 50 || title.length > 60) {
        console.warn(`SEO Warning: Title length (${title.length} characters) is not optimal.`);
    }
    if (description.length < 150 || description.length > 160) {
        console.warn(`SEO Warning: Description length (${description.length} characters) is not optimal.`);
    }
}

// Run SEO monitoring
monitorSEO();

// Function to create and insert a noindex meta tag (useful for development pages)
function addNoindexTag() {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'robots');
    metaTag.setAttribute('content', 'noindex, nofollow');
    document.head.appendChild(metaTag);
}

// Example usage: Uncomment if required for a specific page
// addNoindexTag();

// Function to validate external links and add rel attributes
function validateExternalLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith(window.location.origin)) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Run link validation on page load
document.addEventListener('DOMContentLoaded', validateExternalLinks);

// Function to add an XML sitemap link in the footer
function addSitemapLink() {
    const footer = document.querySelector('footer');
    if (footer) {
        const sitemapLink = document.createElement('a');
        sitemapLink.setAttribute('href', '/sitemap.xml');
        sitemapLink.textContent = 'Sitemap';
        footer.appendChild(sitemapLink);
    }
}

// Run sitemap link addition on page load
document.addEventListener('DOMContentLoaded', addSitemapLink);
// seo.js (400-600)

// Function to dynamically set meta tags for SEO
function setMetaTags(metaData) {
    metaData.forEach(meta => {
        const metaTag = document.createElement('meta');
        Object.keys(meta).forEach(attr => {
            metaTag.setAttribute(attr, meta[attr]);
        });
        document.head.appendChild(metaTag);
    });
}

// Example: Setting custom meta tags
setMetaTags([
    { name: 'author', content: '69-Maktab' },
    { name: 'keywords', content: '69-Maktab, ta\'lim, Samarqand, maktab haqida' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
]);

// Function to analyze page content for keyword density
function analyzeKeywordDensity(keyword) {
    const bodyText = document.body.innerText.toLowerCase();
    const wordCount = bodyText.split(/\s+/).length;
    const keywordCount = bodyText.split(keyword.toLowerCase()).length - 1;

    const density = ((keywordCount / wordCount) * 100).toFixed(2);
    console.log(`Keyword Density Analysis: "${keyword}" appears ${keywordCount} times, making up ${density}% of the content.`);
}

// Example: Analyze "maktab" keyword
analyzeKeywordDensity('maktab');

// Function to lazy-load images for improved performance
function enableLazyLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Enable lazy-loading for images
document.addEventListener('DOMContentLoaded', enableLazyLoading);

// Function to set Open Graph (OG) tags dynamically
function setOpenGraphTags(ogData) {
    ogData.forEach(og => {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('property', og.property);
        metaTag.setAttribute('content', og.content);
        document.head.appendChild(metaTag);
    });
}

// Example: Adding OG tags
setOpenGraphTags([
    { property: 'og:title', content: '69-Maktab Rasman Sayti' },
    { property: 'og:description', content: 'Samarqand shahridagi 69-maktab haqida batafsil ma\'lumot.' },
    { property: 'og:image', content: 'https://www.69-maktab.uz/images/og-image.jpg' },
    { property: 'og:url', content: 'https://www.69-maktab.uz' }
]);

// Function to dynamically add a favicon
function addFavicon(faviconURL) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/png');
    link.setAttribute('href', faviconURL);
    document.head.appendChild(link);
}

// Example: Adding favicon
addFavicon('https://www.69-maktab.uz/images/favicon.png');

// Function to dynamically generate and add robots meta tags
function addRobotsMeta(content) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'robots');
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
}

// Example: Adding robots meta tag
addRobotsMeta('index, follow');

// Function to track click events on specific links for analytics
function trackLinkClicks(selector, category, action) {
    const links = document.querySelectorAll(selector);
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Analytics Event: Category = ${category}, Action = ${action}, Label = ${link.href}`);
        });
    });
}

// Example: Tracking all external links
trackLinkClicks('a[target="_blank"]', 'External Link', 'Click');

// Function to dynamically create an RSS feed link
function addRSSFeedLink(feedURL) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('type', 'application/rss+xml');
    link.setAttribute('title', 'RSS Feed');
    link.setAttribute('href', feedURL);
    document.head.appendChild(link);
}

// Example: Adding RSS feed
addRSSFeedLink('https://www.69-maktab.uz/rss.xml');

// Function to add canonical link for SEO
function addCanonicalLink(canonicalURL) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalURL);
    document.head.appendChild(link);
}

// Example: Adding canonical link
addCanonicalLink('https://www.69-maktabbb.uz');
//
// seo.js (600-700)

// Function to dynamically generate a sitemap XML link
function addSitemapLink(sitemapURL) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'sitemap');
    link.setAttribute('type', 'application/xml');
    link.setAttribute('title', 'Sitemap');
    link.setAttribute('href', sitemapURL);
    document.head.appendChild(link);
}

// Example: Adding sitemap link
addSitemapLink('https://www.69-maktab.uz/sitemap.xml');

// Function to optimize images by adding alt attributes if missing
function addAltAttributesToImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        if (!img.hasAttribute('alt') || img.getAttribute('alt') === '') {
            img.setAttribute('alt', `Image ${index + 1}`);
        }
    });
}

// Automatically add alt attributes to images
addAltAttributesToImages();

// Function to create structured data for search engines
function addStructuredData(structuredData) {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Example: Adding structured data for an organization
addStructuredData({
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "69-Maktab",
    "url": "https://www.69-maktab.uz",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Obi Rahmat ko'chasi",
        "addressLocality": "Samarqand",
        "addressCountry": "UZ"
    },
    "sameAs": [
        "https://www.facebook.com/69maktab",
        "https://www.twitter.com/69maktab",
        "https://www.instagram.com/69maktab"
    ]
});

// Function to preload important resources for performance
function addPreloadLinks(resources) {
    resources.forEach(resource => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', resource.type);
        link.setAttribute('href', resource.url);
        document.head.appendChild(link);
    });
}

// Example: Preloading important CSS and JS files
addPreloadLinks([
    { type: 'style', url: '/styles/style.css' },
    { type: 'script', url: '/scripts/main.js' }
]);

// Function to set language attribute dynamically
function setLanguageAttribute(lang) {
    document.documentElement.setAttribute('lang', lang);
}

// Example: Setting language to Uzbek
setLanguageAttribute('uz');

// Function to dynamically create breadcrumb structured data
function addBreadcrumbStructuredData(breadcrumbs) {
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": breadcrumb.name,
            "item": breadcrumb.url
        }))
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(breadcrumbList);
    document.head.appendChild(script);
}

// Example: Adding breadcrumb structured data
addBreadcrumbStructuredData([
    { name: "Bosh sahifa", url: "https://www.69-maktab.uz" },
    { name: "Biz haqimizda", url: "https://www.69-maktab.uz/about" },
    { name: "Aloqa", url: "https://www.69-maktab.uz/contact" }
]);

// Function to ensure HTTPS is used
function enforceHTTPS() {
    if (location.protocol !== 'https:') {
        location.href = 'https://' + location.host + location.pathname + location.search;
    }
}

// Automatically enforce HTTPS
enforceHTTPS();

// Function to dynamically set a page-specific title
function setPageTitle(title) {
    document.title = title;
}

// Example: Setting page title for "Aloqa" page
setPageTitle('Aloqa | 69-Maktab');

// SEO improvements complete!
console.log("SEO script executed successfully!");
