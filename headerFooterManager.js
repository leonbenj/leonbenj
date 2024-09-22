class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1><a href='/'>Leon Benjamignan</a></h1>
        <nav class="navbar">
        <ul>
            <li><a href="index.html">Blog</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="speaking.html">Speaking</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
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
<p>© 2024 <a href=/>Leon Benjamignan</a> / Join my <a href="/">newsletter</a> for project updates and special offers.
</footer>
`;
    }
}

customElements.define('nav-header',NavHeader)
customElements.define('cta-footer',CtaFooter)