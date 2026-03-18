let currentCountry = '';

// Page Navigation
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageName).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });

    if(currentCountry && countryData[currentCountry]) {
        updatePageContent(pageName);
    }

    window.scrollTo(0, 0);
}

// Country Selection
function selectCountry(country) {
    currentCountry = country;

    document.querySelectorAll('.country-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.classList.add('selected');

    document.getElementById('selectedCountryDisplay').innerText = 
        'Selected: ' + country + ' ✈️';

    resetChecklist();

    ['banking', 'sim', 'housing', 'transport', 'healthcare'].forEach(page => {
        updatePageContent(page);
    });
}

// Update Page Content
function updatePageContent(page) {
    if(!currentCountry || !countryData[currentCountry]) return;

    const data = countryData[currentCountry];

    if(page === 'banking') {
        const bankingHTML = `
            <div class="content-card">
                <h3>🏦 ${data.banks.title}</h3>
                <p>${data.banks.notes}</p>
                <div class="provider-box">
                    <h4>Popular Banks</h4>
                    <div class="provider-list">
                        ${data.banks.providers.map(p => `<span class="provider-tag">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h3>📋 What You Need</h3>
                <ul>
                    <li>Passport and visa</li>
                    <li>University enrollment letter</li>
                    <li>Proof of address</li>
                    <li>Initial deposit (usually $50-100)</li>
                    <li>Tax ID number (if required)</li>
                </ul>
            </div>
        `;
        document.getElementById('bankingContent').innerHTML = bankingHTML;
        document.getElementById('bankingSubtitle').innerText = 'Banking options for ' + currentCountry;
    }

    if(page === 'sim') {
        const simHTML = `
            <div class="content-card">
                <h3>📱 ${data.sim.title}</h3>
                <p>${data.sim.notes}</p>
                <div class="provider-box">
                    <h4>Mobile Providers</h4>
                    <div class="provider-list">
                        ${data.sim.providers.map(p => `<span class="provider-tag">${p}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h3>💡 Tips</h3>
                <ul>
                    <li>Compare prepaid vs contract plans</li>
                    <li>Check coverage in your university area</li>
                    <li>Ask about student discounts</li>
                    <li>Consider international calling needs</li>
                </ul>
            </div>
        `;
        document.getElementById('simContent').innerHTML = simHTML;
        document.getElementById('simSubtitle').innerText = 'Mobile plans for ' + currentCountry;
    }

    if(page === 'housing') {
        const housingHTML = `
            <div class="content-card">
                <h3>🏠 ${data.housing.title}</h3>
                <p>${data.housing.notes}</p>
                <div class="provider-box">
                    <h4>Where to Look</h4>
                    <div class="provider-list">
                        ${data.housing.types.map(t => `<span class="provider-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h3>⚠️ Watch Out For</h3>
                <ul>
                    <li>Scams - Never pay before seeing the place</li>
                    <li>Hidden costs - Utilities, internet, deposits</li>
                    <li>Contracts - Read carefully before signing</li>
                    <li>Location - Check transport links to university</li>
                </ul>
            </div>
        `;
        document.getElementById('housingContent').innerHTML = housingHTML;
        document.getElementById('housingSubtitle').innerText = 'Housing in ' + currentCountry;
    }

    if(page === 'transport') {
        const transportHTML = `
            <div class="content-card">
                <h3>🚌 ${data.transport.title}</h3>
                <p>${data.transport.notes}</p>
                <div class="provider-box">
                    <h4>Essential Apps</h4>
                    <div class="provider-list">
                        ${data.transport.apps.map(a => `<span class="provider-tag">${a}</span>`).join('')}
                    </div>
                </div>
                <div class="provider-box" style="margin-top:15px;">
                    <h4>Ticket Options</h4>
                    <div class="provider-list">
                        ${data.transport.tickets.map(t => `<span class="provider-tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h3>💰 Student Discounts</h3>
                <ul>
                    <li>Always carry your student ID</li>
                    <li>Ask about semester/annual passes</li>
                    <li>Check if included in university fees</li>
                    <li>Some cities offer free transport for students</li>
                </ul>
            </div>
        `;
        document.getElementById('transportContent').innerHTML = transportHTML;
        document.getElementById('transportSubtitle').innerText = 'Getting around ' + currentCountry;
    }

    if(page === 'healthcare') {
        const healthcareHTML = `
            <div class="content-card">
                <h3>🏥 ${data.healthcare.title}</h3>
                <p>${data.healthcare.notes}</p>
                <div class="provider-box">
                    <h4>Insurance Providers</h4>
                    <div class="provider-list">
                        ${data.healthcare.public.map(p => `<span class="provider-tag" style="background:#e8f5e9;border-color:#4caf50;">${p}</span>`).join('')}
                        ${data.healthcare.private ? data.healthcare.private.map(p => `<span class="provider-tag">${p}</span>`).join('') : ''}
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h3>🩺 What to Do</h3>
                <ul>
                    <li>Register with a local doctor/GP</li>
                    <li>Know your nearest hospital</li>
                    <li>Download health insurance app</li>
                    <li>Bring prescriptions from home if needed</li>
                </ul>
            </div>
        `;
        document.getElementById('healthcareContent').innerHTML = healthcareHTML;
        document.getElementById('healthcareSubtitle').innerText = 'Healthcare in ' + currentCountry;
    }
}

// Checklist Functions
function toggleChecklist(element) {
    element.classList.toggle('checked');
    updateProgress();
}

function updateProgress() {
    const total = document.querySelectorAll('.checklist-item').length;
    const checked = document.querySelectorAll('.checklist-item.checked').length;
    const percent = Math.round((checked / total) * 100);

    document.getElementById('progressText').innerText = checked + '/' + total;
    document.getElementById('progressBar').style.width = percent + '%';
}

function resetChecklist() {
    document.querySelectorAll('.checklist-item').forEach(item => {
        item.classList.remove('checked');
    });
    updateProgress();
}

// Location Function
function getLocation() {
    const btn = document.querySelector('.get-location-btn');
    const text = document.getElementById('locationText');

    btn.innerText = 'Locating...';
    btn.disabled = true;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude.toFixed(4);
                const lon = position.coords.longitude.toFixed(4);
                text.innerHTML = `Found: ${lat}, ${lon}<br><a href="[maps.google.com](https://maps.google.com/?q=${lat},${lon})" target="_blank" style="color:white;">View on Map</a>`;
                btn.innerText = 'Update Location';
                btn.disabled = false;
            },
            function(error) {
                text.innerText = 'Unable to get location. Please enable GPS.';
                btn.innerText = 'Try Again';
                btn.disabled = false;
            }
        );
    } else {
        text.innerText = 'Geolocation not supported by this browser.';
        btn.innerText = 'Try Again';
        btn.disabled = false;
    }
}

// Buddy System Functions
function selectBuddyType(type) {
    document.getElementById('findBuddy').classList.remove('active');
    document.getElementById('becomeBuddy').classList.remove('active');
    document.getElementById('findBuddyForm').classList.remove('active');
    document.getElementById('becomeBuddyForm').classList.remove('active');
    
    if(type === 'find') {
        document.getElementById('findBuddy').classList.add('active');
        document.getElementById('findBuddyForm').classList.add('active');
    } else {
        document.getElementById('becomeBuddy').classList.add('active');
        document.getElementById('becomeBuddyForm').classList.add('active');
    }
}

function showBuddyForm(helpType) {
    showPage('buddy');
    selectBuddyType('find');
    setTimeout(() => {
        document.getElementById('helpType').value = helpType;
        document.getElementById('findBuddyForm').scrollIntoView({behavior: 'smooth'});
    }, 100);
}

function scrollToForm() {
    selectBuddyType('find');
    document.getElementById('findBuddyForm').scrollIntoView({behavior: 'smooth'});
}

function submitBuddyRequest(event, type) {
    event.preventDefault();
    
    const successMsg = document.getElementById('buddySuccess');
    successMsg.classList.add('show');
    
    event.target.reset();
    
    if(type === 'find') {
        document.getElementById('findBuddyForm').classList.remove('active');
        document.getElementById('findBuddy').classList.remove('active');
    } else {
        document.getElementById('becomeBuddyForm').classList.remove('active');
        document.getElementById('becomeBuddy').classList.remove('active');
    }
    
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
    
    window.scrollTo(0, 0);
}

function contactBuddy(name) {
    alert(`📧 Contact request sent to ${name}!\n\nThey will receive an email notification and can respond to you directly.\n\nTypical response time: 2-4 hours.`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    if(!currentCountry) {
        document.getElementById('buddyCountry').value = 'Germany';
    }
});
