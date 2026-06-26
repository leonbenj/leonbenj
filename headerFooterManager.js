// ==================== NAV HEADER ====================
class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
            <div class="max-w-7xl mx-auto px-6">
                <div class="flex items-center justify-between h-16 md:h-20">
                    
                    <!-- Logo + Name -->
                    <a href="/" class="flex items-center gap-x-3">
                        <div class="w-8 h-8 md:w-9 md:h-9 rounded-2xl tesla-gradient flex items-center justify-center">
                            <span class="text-white font-bold text-lg md:text-xl tracking-tighter">LB</span>
                        </div>
                        <div class="font-semibold text-base md:text-xl tracking-tight">Leon Benjamignan</div>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center gap-x-8 text-sm font-medium">
                        <a href="/" class="nav-link text-[#374151] hover:text-[#0D9488]">Home</a>
                        <a href="/experience" class="nav-link text-[#374151] hover:text-[#0D9488]">Experience</a>
                        <a href="/recommendations.html" class="nav-link text-[#374151] hover:text-[#0D9488]">Recommendations</a>
                        <a href="https://world.hey.com/leon.benjamignan" class="nav-link text-[#374151] hover:text-[#0D9488]">Journal</a>
                    </div>

                    <!-- Email + Hamburger -->
                    <div class="flex items-center gap-x-3">
                        <a href="mailto:leon.benjamignan@hey.com" 
                           class="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-2xl bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all active:scale-[0.985]">
                            Email me
                        </a>
                        
                        <!-- Mobile Hamburger -->
                        <button class="md:hidden w-9 h-9 flex items-center justify-center text-[#6B7280]" id="hamburger">
                            <i class="fa-solid fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-[#E5E7EB] py-4">
                    <div class="flex flex-col gap-y-4 px-6 text-sm font-medium">
                        <a href="/" class="nav-link py-2">Home</a>
                        <a href="/experience" class="nav-link py-2">Experience</a>
                        <a href="/recommendations.html" class="nav-link py-2">Recommendations</a>
                        <a href="https://world.hey.com/leon.benjamignan" class="nav-link py-2">Journal</a>
                    </div>
                </div>
            </div>
        </nav>
        `;

        // Mobile Menu Toggle
        const hamburger = this.querySelector('#hamburger');
        const mobileMenu = this.querySelector('#mobile-menu');
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// ==================== FOOTER ====================
class CtaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="border-t border-[#E5E7EB] bg-white">
            <div class="max-w-7xl mx-auto px-6 py-12 text-sm flex flex-col items-center md:flex-row justify-between gap-y-6 text-[#6B7280]">
                <div>© 2026 Leon Benjamignan.</div>
                
                <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center">
                    <a href="/" class="hover:text-[#0D9488]">Home</a>
                    <a href="/recommendations.html" class="hover:text-[#0D9488]">Recommendations</a>
                </div>
                <div class="text-xs text-[#6B7280]">
                    Vancouver, BC
                </div>
            </div>
        </footer>
        `;
    }
}

// Register the components
customElements.define('nav-header', NavHeader);
customElements.define('cta-footer', CtaFooter);
