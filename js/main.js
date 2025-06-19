// Main JavaScript for MyScholarshipMap

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const scholarshipForm = document.getElementById('scholarshipForm');
    const scholarshipList = document.getElementById('scholarshipList');
    const noResults = document.getElementById('noResults');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const yearElement = document.getElementById('year');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const backToTopBtn = document.getElementById('backToTop');
    
    // Set current year in footer
    yearElement.textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (mobileMenu.classList.contains('show')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }
    
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submission event
    if (scholarshipForm) {
        scholarshipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading overlay
            loadingOverlay.style.display = 'flex';
            
            // Get form values
            const gender = document.getElementById('gender').value;
            const caste = document.getElementById('caste').value;
            const income = document.getElementById('income').value;
            const state = document.getElementById('state').value;
            
            // Simulate API call delay
            setTimeout(() => {
                // Find matching scholarships
                const matchingScholarships = findMatchingScholarships(gender, caste, income, state);
                
                // Display results
                displayResults(matchingScholarships);
                
                // Hide loading overlay
                loadingOverlay.style.display = 'none';
                
                // Scroll to results
                document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        });
    }
    
    // Function to find matching scholarships
    function findMatchingScholarships(gender, caste, income, state) {
        return scholarships.filter(scholarship => {
            const eligibility = scholarship.eligibility;
            
            // Check if the scholarship matches all criteria
            const genderMatch = eligibility.gender.includes(gender);
            const casteMatch = eligibility.caste.includes(caste);
            const incomeMatch = eligibility.income.includes(income);
            const stateMatch = eligibility.state.includes(state) || eligibility.state.includes('all');
            
            return genderMatch && casteMatch && incomeMatch && stateMatch;
        });
    }
    
    // Function to display results
    function displayResults(results) {
        // Clear previous results
        scholarshipList.innerHTML = '';
        
        if (results.length === 0) {
            // Show no results message
            noResults.style.display = 'block';
            noResults.innerHTML = `
                <i class="fas fa-search"></i>
                <p>No scholarships found matching your criteria. Try adjusting your filters.</p>
            `;
        } else {
            // Hide no results message
            noResults.style.display = 'none';
            
            // Display each scholarship
            results.forEach(scholarship => {
                const card = createScholarshipCard(scholarship);
                scholarshipList.appendChild(card);
            });
            
            // Add animation to cards
            animateCards();
        }
    }
    
    // Function to create a scholarship card
    function createScholarshipCard(scholarship) {
        const card = document.createElement('div');
        card.className = 'scholarship-card';
        
        // Format eligibility badges
        const genderText = formatGender(scholarship.eligibility.gender);
        const casteText = formatCaste(scholarship.eligibility.caste);
        const incomeText = formatIncome(scholarship.eligibility.income);
        const stateText = formatState(scholarship.eligibility.state);
        
        card.innerHTML = `
            <div class="scholarship-header">
                <div class="scholarship-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <div class="scholarship-title">
                    <h3>${scholarship.name}</h3>
                    <div class="scholarship-provider">${scholarship.provider}</div>
                </div>
            </div>
            
            <div class="scholarship-badges">
                <span class="badge badge-gender">
                    <i class="fas fa-user"></i> ${genderText}
                </span>
                <span class="badge badge-caste">
                    <i class="fas fa-users"></i> ${casteText}
                </span>
                <span class="badge badge-income">
                    <i class="fas fa-rupee-sign"></i> ${incomeText}
                </span>
                <span class="badge badge-state">
                    <i class="fas fa-map-marker-alt"></i> ${stateText}
                </span>
            </div>
            
            <div class="scholarship-details">
                <div class="detail-item">
                    <div class="detail-icon">
                        <i class="fas fa-money-bill-wave"></i>
                    </div>
                    <div class="detail-text">
                        <strong>Amount:</strong> ${scholarship.details.amount}
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <div class="detail-text">
                        <strong>Deadline:</strong> ${scholarship.details.deadline}
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">
                        <i class="fas fa-book"></i>
                    </div>
                    <div class="detail-text">
                        <strong>Education:</strong> ${scholarship.details.education}
                    </div>
                </div>
                
                <div class="detail-item">
                    <div class="detail-icon">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="detail-text">
                        <strong>Documents:</strong> ${scholarship.details.documents}
                    </div>
                </div>
            </div>
            
            <a href="${scholarship.website}" target="_blank" class="scholarship-link">
                <i class="fas fa-external-link-alt"></i> Apply Now
            </a>
        `;
        
        return card;
    }
    
    // Function to animate cards
    function animateCards() {
        const cards = document.querySelectorAll('.scholarship-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Helper functions to format eligibility text
    function formatGender(genders) {
        if (genders.length === 3) return "All Genders";
        if (genders.includes("female")) return "Female";
        if (genders.includes("male")) return "Male";
        return "Other";
    }
    
    function formatCaste(castes) {
        if (castes.length === 5) return "All Categories";
        if (castes.length > 1) return "Multiple Categories";
        
        const casteMap = {
            "general": "General",
            "sc": "SC",
            "st": "ST",
            "obc": "OBC",
            "minority": "Minority"
        };
        
        return casteMap[castes[0]] || castes[0];
    }
    
    function formatIncome(incomes) {
        if (incomes.length === 4) return "All Income Groups";
        if (incomes.includes("below1lakh")) return "Below ₹1 Lakh";
        if (incomes.includes("1to3lakh")) return "₹1-3 Lakh";
        if (incomes.includes("3to6lakh")) return "₹3-6 Lakh";
        return "Above ₹6 Lakh";
    }
    
    function formatState(states) {
        if (states.includes("all")) return "All India";
        if (states.length > 1) return "Multiple States";
        
        const stateMap = {
            "andhra": "Andhra Pradesh",
            "arunachal": "Arunachal Pradesh",
            "assam": "Assam",
            "bihar": "Bihar",
            "chhattisgarh": "Chhattisgarh",
            "goa": "Goa",
            "gujarat": "Gujarat",
            "haryana": "Haryana",
            "himachal": "Himachal Pradesh",
            "jharkhand": "Jharkhand",
            "karnataka": "Karnataka",
            "kerala": "Kerala",
            "madhya": "Madhya Pradesh",
            "maharashtra": "Maharashtra",
            "manipur": "Manipur",
            "meghalaya": "Meghalaya",
            "mizoram": "Mizoram",
            "nagaland": "Nagaland",
            "odisha": "Odisha",
            "punjab": "Punjab",
            "rajasthan": "Rajasthan",
            "sikkim": "Sikkim",
            "tamil": "Tamil Nadu",
            "telangana": "Telangana",
            "tripura": "Tripura",
            "uttar": "Uttar Pradesh",
            "uttarakhand": "Uttarakhand",
            "west": "West Bengal",
            "delhi": "Delhi"
        };
        
        return stateMap[states[0]] || states[0];
    }
    
    // Initialize any scholarship filters on the scholarships page
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Filter scholarships
                filterScholarships(filter);
            });
        });
        
        // Initial display of all scholarships
        displayAllScholarships();
    }
    
    // Function to display all scholarships on the scholarships page
    function displayAllScholarships() {
        const allScholarshipsList = document.getElementById('allScholarshipsList');
        if (allScholarshipsList) {
            allScholarshipsList.innerHTML = '';
            
            scholarships.forEach(scholarship => {
                const card = createScholarshipCard(scholarship);
                allScholarshipsList.appendChild(card);
            });
            
            // Add animation to cards
            animateCards();
        }
    }
    
    // Function to filter scholarships on the scholarships page
    function filterScholarships(filter) {
        const allScholarshipsList = document.getElementById('allScholarshipsList');
        if (allScholarshipsList) {
            allScholarshipsList.innerHTML = '';
            
            let filteredScholarships;
            
            if (filter === 'all') {
                filteredScholarships = scholarships;
            } else if (filter === 'female') {
                filteredScholarships = scholarships.filter(s => 
                    s.eligibility.gender.includes('female') && s.eligibility.gender.length === 1
                );
            } else if (filter === 'sc-st') {
                filteredScholarships = scholarships.filter(s => 
                    s.eligibility.caste.includes('sc') || s.eligibility.caste.includes('st')
                );
            } else if (filter === 'low-income') {
                filteredScholarships = scholarships.filter(s => 
                    s.eligibility.income.includes('below1lakh')
                );
            } else {
                filteredScholarships = scholarships;
            }
            
            filteredScholarships.forEach(scholarship => {
                const card = createScholarshipCard(scholarship);
                allScholarshipsList.appendChild(card);
            });
            
            // Add animation to cards
            animateCards();
        }
    }
});
