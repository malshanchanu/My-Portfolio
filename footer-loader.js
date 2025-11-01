document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Chanuka Malshan</h3>
                    <p>Software Engineering undergraduate at NSBM Green University, passionate about creating innovative solutions and making a positive impact through technology.</p>
                    <div class="footer-social">
                        <a href="#" class="social-link"><i class='bx bxl-github'></i></a>
                        <a href="#" class="social-link"><i class='bx bxl-linkedin'></i></a>
                        <a href="#" class="social-link"><i class='bx bxl-facebook'></i></a>
                        <a href="#" class="social-link"><i class='bx bxl-instagram'></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html"><i class='bx bx-chevron-right'></i> Home</a></li>
                        <li><a href="projects.html"><i class='bx bx-chevron-right'></i> Projects</a></li>
                        <li><a href="about.html"><i class='bx bx-chevron-right'></i> About Me</a></li>
                        <li><a href="contact.html"><i class='bx bx-chevron-right'></i> Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Skills</h4>
                    <ul>
                        <li><i class='bx bx-code-alt'></i> Frontend Development</li>
                        <li><i class='bx bx-data'></i> Backend Development</li>
                        <li><i class='bx bx-mobile-alt'></i> Responsive Design</li>
                        <li><i class='bx bx-game'></i> Game Development</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i class='bx bx-map'></i> Anamaduwa, Sri Lanka</li>
                        <li><i class='bx bx-envelope'></i> chanukamalshan2002@gmail.com</li>
                        <li><i class='bx bx-phone'></i> +94 761964700</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Chanuka Malshan. All Rights Reserved.</p>
            </div>
        </footer>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
    } else {
        console.error('Footer container not found');
    }
});