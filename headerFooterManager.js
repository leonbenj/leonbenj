class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1><a href='/'>Leon Benjamignan</a></h1>
        <nav class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="now.html">Now</a></li>
            <li><a href="experience.html">Experience</a></li>
            <li><a href="recommendations.html">Recommendations</a></li>
            <li><a href="https://world.hey.com/leon.benjamignan">Blog</a></li>
            <li><a href="speaking.html">Speaking</a></li>
        </ul>
        </nav>
        <hr>
    `;
    }
}    

class CtaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer>
<hr>
<p>© 2026 <a href="/">Leon Benjamignan</a> — 
   <a href="https://world.hey.com/leon.benjamignan">Read my blog</a>
</p>
</footer>
`;
    }
}

customElements.define('nav-header', NavHeader);
customElements.define('cta-footer', CtaFooter);