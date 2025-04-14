class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1><a href='/'>Leon Benjamignan</a></h1>
        <nav class="navbar">
        <ul>
            <li><a href="https://leonbenj.bearblog.dev/blog/">Blog</a></li>
            <li><a href="speaking.html">Speaking</a></li>
            <li><a href="testimonials.html">Testimonials</a></li>
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
<p>© 2025 <a href=/>Leon Benjamignan</a> / Read my <a href="https://leonbenj.bearblog.dev/blog/">blog here</a>.
</footer>
`;
    }
}

class CtaEmail extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<p>
Join my newsletter:</p>
<div id="convertkit-form-container">
    <script async data-uid="a11e974e74" src="https://leonbenj.ck.page/a11e974e74/index.js"></script>
</div>
`;
    }
}

customElements.define('nav-header',NavHeader)
customElements.define('cta-footer',CtaFooter)
customElements.define('cta-email',CtaEmail)