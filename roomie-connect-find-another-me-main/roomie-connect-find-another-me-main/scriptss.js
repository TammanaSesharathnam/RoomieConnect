
// Sample users array with preferences
const users = [
    { id: 1, name: "Amala", preferences: ["veg", "introvert", "morningbird", "female"], email: "amala@example.com", budget: 5000, location: "Visakhapatnam" },
    { id: 2, name: "Arjun", preferences: ["nonveg", "extrovert", "nightowl", "male"], email: "arjun@example.com", budget: 3000, location: "Vijayawada" },
    { id: 3, name: "Ram", preferences: ["veg", "extrovert", "nightowl", "male"], email: "ram@example.com", budget: 2000, location: "Guntur" },
    { id: 4, name: "Sita Mahalakshmi", preferences: ["nonveg", "introvert", "morningbird", "female"], email: "sita@example.com", budget: 2000, location: "Kakinada" },
    { id: 5, name: "Jessica", preferences: ["veg", "extrovert", "morningbird", "female"], email: "jessica@example.com", budget: 3500, location: "Tirupati" },
    { id: 6, name: "Preetham", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "preetham@example.com", budget: 2000, location: "Anantapur" },
    { id: 7, name: "Keerthi", preferences: ["veg", "extrovert", "morningbird", "female"], email: "keerthi@example.com", budget: 2400, location: "Rajahmundry" },
    { id: 8, name: "Yash", preferences: ["veg", "introvert", "nightowl", "male"], email: "yash@example.com", budget: 2600, location: "Srikakulam" },
    { id: 9, name: "Sindhu", preferences: ["nonveg", "extrovert", "morningbird", "female"], email: "sindhu@example.com", budget: 3200, location: "Nellore" },
    { id: 10, name: "Kalyan", preferences: ["veg", "introvert", "nightowl", "male"], email: "kalyan@example.com", budget: 1800, location: "Chittoor" },
    { id: 11, name: "Pranathi", preferences: ["nonveg", "extrovert", "morningbird", "female"], email: "pranathi@example.com", budget: 3300, location: "Kadapa" },
    { id: 12, name: "Chaithanya", preferences: ["veg", "introvert", "nightowl", "male"], email: "chaithanya@example.com", budget: 2100, location: "Vizianagaram" },
    { id: 13, name: "Sudha", preferences: ["nonveg", "extrovert", "morningbird", "female"], email: "sudha@example.com", budget: 3500, location: "Eluru" },
    { id: 14, name: "Sharukh", preferences: ["veg", "introvert", "nightowl", "male"], email: "sharukh@example.com", budget: 2300, location: "Ongole" },
    { id: 15, name: "Sania", preferences: ["veg", "extrovert", "morningbird", "female"], email: "sania@example.com", budget: 2700, location: "Kurnool" },
    { id: 16, name: "Dhoni", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "dhoni@example.com", budget: 3000, location: "Bapatla" },
    { id: 17, name: "Ayesha", preferences: ["veg", "extrovert", "morningbird", "female"], email: "ayesha@example.com", budget: 2500, location: "Mangalagiri" },
    { id: 18, name: "Pooja", preferences: ["nonveg", "introvert", "nightowl", "female"], email: "pooja@example.com", budget: 3200, location: "Amaravati" },
    { id: 19, name: "Willimans", preferences: ["veg", "extrovert", "nightowl", "male"], email: "willimans@example.com", budget: 2700, location: "Visakhapatnam" },
    { id: 20, name: "Praveena", preferences: ["nonveg", "introvert", "morningbird", "female"], email: "praveena@example.com", budget: 2200, location: "Vijayawada" },
    { id: 21, name: "Uma", preferences: ["veg", "extrovert", "nightowl", "female"], email: "uma@example.com", budget: 2900, location: "Tirupati" },
    { id: 22, name: "Raja", preferences: ["nonveg", "introvert", "morningbird", "male"], email: "raja@example.com", budget: 2400, location: "Chittoor" },
    { id: 23, name: "Vandy", preferences: ["veg", "extrovert", "morningbird", "female"], email: "vandy@example.com", budget: 3500, location: "Guntur" },
    { id: 24, name: "Yoseph", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "yoseph@example.com", budget: 2800, location: "Rajahmundry" },
    { id: 25, name: "Bhavya", preferences: ["veg", "extrovert", "morningbird", "female"], email: "bhavya@example.com", budget: 3100, location: "Kakinada" },
    { id: 26, name: "Zane", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "zane@example.com", budget: 2600, location: "Srikakulam" },
    { id: 27, name: "Bhagya", preferences: ["veg", "extrovert", "nightowl", "female"], email: "bhagya@example.com", budget: 3000, location: "Nellore" },
    { id: 28, name: "Aryan", preferences: ["nonveg", "introvert", "morningbird", "male"], email: "aryan@example.com", budget: 2300, location: "Eluru" },
    { id: 29, name: "Saranya", preferences: ["veg", "extrovert", "morningbird", "female"], email: "saranya@example.com", budget: 3400, location: "Kadapa" },
    { id: 30, name: "Krishna", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "krishna@example.com", budget: 2200, location: "Vizianagaram" },
    { id: 31, name: "Vikram", preferences: ["veg", "extrovert", "morningbird", "male"], email: "vikram@example.com", budget: 2500, location: "Bapatla" },
    { id: 32, name: "Neha", preferences: ["nonveg", "introvert", "nightowl", "female"], email: "neha@example.com", budget: 1900, location: "Ongole" },
    { id: 33, name: "Rohit", preferences: ["veg", "extrovert", "morningbird", "male"], email: "rohit@example.com", budget: 2800, location: "Mangalagiri" },
    { id: 34, name: "Shalini", preferences: ["veg", "introvert", "morningbird", "female"], email: "shalini@example.com", budget: 2700, location: "Tirupati" },
    { id: 35, name: "Mohan", preferences: ["nonveg", "extrovert", "nightowl", "male"], email: "mohan@example.com", budget: 3000, location: "Guntur" },
    { id: 36, name: "Kiran", preferences: ["veg", "introvert", "nightowl", "male"], email: "kiran@example.com", budget: 2500, location: "Visakhapatnam" },
    { id: 37, name: "Anjali", preferences: ["veg", "extrovert", "morningbird", "female"], email: "anjali@example.com", budget: 3400, location: "Vijayawada" },
    { id: 38, name: "Reema", preferences: ["nonveg", "introvert", "morningbird", "female"], email: "reema@example.com", budget: 3100, location: "Kakinada" },
    { id: 39, name: "Sohail", preferences: ["veg", "introvert", "nightowl", "male"], email: "sohail@example.com", budget: 2600, location: "Rajahmundry" },
    { id: 40, name: "Nisha", preferences: ["veg", "extrovert", "morningbird", "female"], email: "nisha@example.com", budget: 3000, location: "Srikakulam" },
    { id: 41, name: "Aditya", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "aditya@example.com", budget: 2800, location: "Chittoor" },
    { id: 42, name: "Tara", preferences: ["veg", "extrovert", "morningbird", "female"], email: "tara@example.com", budget: 2200, location: "Vizianagaram" },
    { id: 43, name: "Akshay", preferences: ["veg", "introvert", "nightowl", "male"], email: "akshay@example.com", budget: 2500, location: "Kadapa" },
    { id: 44, name: "Sneha", preferences: ["nonveg", "extrovert", "morningbird", "female"], email: "sneha@example.com", budget: 3000, location: "Nellore" },
    { id: 45, name: "Ishaan", preferences: ["veg", "introvert", "nightowl", "male"], email: "ishaan@example.com", budget: 2400, location: "Eluru" },
    { id: 46, name: "Kavya", preferences: ["veg", "extrovert", "morningbird", "female"], email: "kavya@example.com", budget: 3200, location: "Mangalagiri" },
    { id: 47, name: "Jatin", preferences: ["nonveg", "introvert", "nightowl", "male"], email: "jatin@example.com", budget: 2800, location: "Tirupati" },
    { id: 48, name: "Radhika", preferences: ["veg", "extrovert", "morningbird", "female"], email: "radhika@example.com", budget: 2700, location: "Guntur" },
    { id: 49, name: "Varun", preferences: ["veg", "introvert", "nightowl", "male"], email: "varun@example.com", budget: 2900, location: "Kakinada" },
    { id: 50, name: "Poonam", preferences: ["nonveg", "introvert", "nightowl", "female"], email: "poonam@example.com", budget: 2600, location: "Vijayawada" }
];

// Sample users array with preferences (unchanged)

// Function to collect selected filters and ensure mutual exclusivity
function getSelectedFilters() {
    const checkboxes = document.querySelectorAll('#filters-form input[type="checkbox"]:checked');
    const selectedFilters = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    // Automatically deselect opposite filters
    if (selectedFilters.includes('veg') && selectedFilters.includes('nonveg')) {
        selectedFilters.splice(selectedFilters.indexOf('nonveg'), 1); // Deselect 'nonveg' if 'veg' is selected
    }
    if (selectedFilters.includes('introvert') && selectedFilters.includes('extrovert')) {
        selectedFilters.splice(selectedFilters.indexOf('extrovert'), 1); // Deselect 'extrovert' if 'introvert' is selected
    }
    if (selectedFilters.includes('morningbird') && selectedFilters.includes('nightowl')) {
        selectedFilters.splice(selectedFilters.indexOf('nightowl'), 1); // Deselect 'nightowl' if 'morningbird' is selected
    }
    if (selectedFilters.includes('male') && selectedFilters.includes('female')) {
        selectedFilters.splice(selectedFilters.indexOf('female'), 1); // Deselect 'female' if 'male' is selected
    }

    return selectedFilters;
}

// Apply filters and redirect to profiles.html with filters
function applyFilters() {
    const selectedFilters = getSelectedFilters();
    const filtersParam = selectedFilters.join(',');

    // Redirect to profiles.html with selected filters
    window.location.href = `profiles.html?filters=${filtersParam}`;
}

// Automatically populate matching profiles on profiles.html
window.onload = function () {
    const matchingProfilesSection = document.getElementById('matching-profiles');
    
    if (matchingProfilesSection) {
        const urlParams = new URLSearchParams(window.location.search);
        const filters = urlParams.get('filters');
        
        if (filters) {
            const selectedFilters = filters.split(',');
            const matchingUsers = users.filter(user =>
                selectedFilters.every(filter => user.preferences.includes(filter))
            );

            matchingProfilesSection.innerHTML = '';

            if (matchingUsers.length > 0) {
                matchingUsers.forEach(user => {
                    const profileDiv = document.createElement('div');
                    profileDiv.className = 'profile';
                    profileDiv.innerHTML = `
                        <h3>${user.name}</h3>
                        <p><strong>Gender:</strong> ${user.preferences.includes("female") ? "Female  ," : "Male  ,"}
                        <strong>Diet:</strong> ${user.preferences.includes("veg") ? "Vegetarian  ," : "Non-Vegetarian  ,"}
                        <strong>Personality:</strong> ${user.preferences.includes("introvert") ? "Introvert  ," : "Extrovert  ,"}
                        <strong>Activity Time:</strong> ${user.preferences.includes("morningbird") ? "Morning Bird  ," : "Night Owl  ,"}</p>
                        <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                        <p><strong>Budget:</strong> ₹${user.budget}</p>
                        <p><strong>Location:</strong> ${user.location}</p>

                        <div class="preferences"><strong>Preferences:</strong> ${user.preferences.join(", ")}</div>
                    `;
                    matchingProfilesSection.appendChild(profileDiv);
                });
            } else {
                matchingProfilesSection.innerHTML = '<p>No matching profiles found. Try adjusting your filters.</p>';
            }
        } else {
            matchingProfilesSection.innerHTML = '<p>No filters applied. Please select filters to see matching profiles.</p>';
        }
    }
};
