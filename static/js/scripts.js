const section_names = ['about', 'experience', 'projects'];
const pageConfig = {
    title: "Minghan Wei | Personal Website",
    pageTopTitle: "Minghan Wei",
    topSectionBgText: "Welcome to my personal website",
    aboutSubtitle: "ABOUT",
    copyrightText: "&copy; Minghan Wei 2023-2026. All Rights Reserved.",
};

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Page config
    document.getElementById('title').innerHTML = pageConfig.title;
    document.getElementById('page-top-title').innerHTML = pageConfig.pageTopTitle;
    document.getElementById('top-section-bg-text').innerHTML = pageConfig.topSectionBgText;
    document.getElementById('about-subtitle').innerHTML = pageConfig.aboutSubtitle;
    document.getElementById('copyright-text').innerHTML = pageConfig.copyrightText;

    // Markdown content from inline script blocks
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach(name => {
        const source = document.getElementById(name + '-source');
        if (source) {
            const markdown = source.textContent.trim();
            const html = marked.parse(markdown);
            document.getElementById(name + '-md').innerHTML = html;
        }
    });

    // MathJax
    if (window.MathJax) {
        MathJax.typeset();
    }

});

