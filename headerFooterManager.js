class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="nav-wrapper">
            <h1><a href="/">Leon Benjamignan</a></h1>
            
            <!-- Desktop Nav -->
            <nav class="navbar desktop-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="now.html">Now</a></li>
                    <li><a href="experience.html">Experience</a></li>
                    <li><a href="recommendations.html">Recommendations</a></li>
                    <li><a href="https://world.hey.com/leon.benjamignan">Blog</a></li>
                    <li><a href="speaking.html">Speaking</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>

            <!-- Mobile Hamburger -->
            <button class="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Mobile Menu -->
            <nav class="mobile-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="now.html">Now</a></li>
                    <li><a href="experience.html">Experience</a></li>
                    <li><a href="recommendations.html">Recommendations</a></li>
                    <li><a href="https://world.hey.com/leon.benjamignan">Blog</a></li>
                    <li><a href="speaking.html">Speaking</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
        </div>
        `;

        // Hamburger toggle functionality
        const hamburger = this.querySelector('.hamburger');
        const mobileNav = this.querySelector('.mobile-nav');

        hamburger.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const mobileLinks = this.querySelectorAll('.mobile-nav a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

class CtaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer>
<hr>
<p>© 2026 <a href="/about.html">Leon Benjamignan</a> — 
   <a href="https://world.hey.com/leon.benjamignan">Read my blog</a>
</p>
</footer>
`;
    }
}

customElements.define('nav-header', NavHeader);
customElements.define('cta-footer', CtaFooter);