// ==================== NAV HEADER ====================
class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex items-center justify-between h-20">
                    
                    <!-- Logo + Name -->
                    <a href="/" class="flex items-center gap-x-3">
                        <div class="w-9 h-9 rounded-2xl tesla-gradient flex items-center justify-center">
                            <span class="text-white font-bold text-xl tracking-tighter">LB</span>
                        </div>
                        <div class="font-semibold text-xl tracking-tight">Leon Benjamignan</div>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-x-8 text-sm font-medium">
                        <a href="/" class="nav-link text-[#374151] hover:text-[#0D9488]">Home</a>
                        <a href="/experience" class="nav-link text-[#374151] hover:text-[#0D9488]">Experience</a>
                        <a href="/recommendations.html" class="nav-link text-[#374151] hover:text-[#0D9488]">Recommendations</a>
                        <a href="https://world.hey.com/leon.benjamignan" class="nav-link text-[#374151] hover:text-[#0D9488]">Journal</a>
                    </div>

                    <!-- Email Button + Mobile Menu -->
                    <div class="flex items-center gap-x-3">
                        <a href="mailto:leon.benjamignan@hey.com" 
                           class="inline-flex items-center px-6 py-2.5 bg-[#0D9488] hover:bg-[#0F766E] text-white text-sm font-semibold rounded-2xl transition-all active:scale-[0.985]">
                            Email me
                        </a>

                        <!-- Mobile Hamburger -->
                        <button class="md:hidden w-10 h-10 flex items-center justify-center text-[#6B7280]" aria-label="Toggle menu">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
}

// ==================== FOOTER ====================
class CtaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="border-t border-[#E5E7EB] bg-white">
            <div class="max-w-7xl mx-auto px-6 py-12 text-sm flex flex-col md:flex-row justify-between items-center gap-y-4 text-[#6B7280]">
                <div>© 2026 Leon Benjamignan. Built with obsession for clean systems.</div>
                
                <div class="flex items-center gap-x-6">
                    <a href="https://world.hey.com/leon.benjamignan" class="hover:text-[#0D9488]">Journal</a>
                    <a href="/" class="hover:text-[#0D9488]">Home</a>
                    <a href="/experience" class="hover:text-[#0D9488]">Experience</a>
                    <a href="/recommendations.html" class="hover:text-[#0D9488]">Recommendations</a>
                    <span class="hidden md:inline">•</span>
                    <span class="text-xs">Vancouver, BC</span>
                </div>
            </div>
        </footer>
        `;
    }
}

// Register the custom elements
customElements.define('nav-header', NavHeader);
customElements.define('cta-footer', CtaFooter);
