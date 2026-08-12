// Complete Service Database
const servicesData = [
    {
        id: 1,
        title: "MIDC Plot Allotment Assistance",
        icon: "map-pin",
        short: "End-to-end guidance for securing industrial land allotments in Maharashtra Industrial Development Corporation (MIDC) zones.",
        description: "Navigating MIDC land application processes requires clear documentation, eligibility compliance, and continuous administrative follow-ups. We handle everything from land selection to final possession.",
        process: ["Land availability identification across Maharashtra MIDC areas", "Online Application submission via Single Window Portal", "Project profile & justification preparation", "Representation before MIDC Allotment Committee", "Possession letter and lease agreement documentation"],
        documents: ["Company Registration / Partnership Deed", "Detailed Project Report (DPR)", "Block Plan & Layout Strategy", "Net Worth Certificate & Bank Statements"]
    },
    {
        id: 2,
        title: "Detailed Project Report (DPR) Preparation",
        icon: "file-text",
        short: "Bankable and regulatory-compliant DPRs tailored for MIDC allocations, government subsidies, and bank funding.",
        description: "A Detailed Project Report (DPR) is the cornerstone of industrial setups. Our DPRs cover complete financial feasibility, technical specifications, and market analysis structured to meet bank and official standards.",
        process: ["Technical capacity analysis and machinery planning", "Financial projections (P&L, Cash Flow, Balance Sheet for 5-10 yrs)", "Break-even and ROI calculation", "Market demand assessment and raw material sourcing analysis"],
        documents: ["Promoter KYC & Profile", "Machinery Quotes & Building Estimates", "Land details (Owned or Proposed MIDC plot)", "Target market scope"]
    },
    {
        id: 3,
        title: "Industrial Project Consultancy",
        icon: "briefcase",
        short: "Strategic advisory services for setting up new manufacturing units or expanding existing industrial plants.",
        description: "From concept to commissioning, we offer technical and management consultancy to optimize your plant layout, regulatory timeline, and overall capital expenditure.",
        process: ["Feasibility study & capacity planning", "Regulatory roadmap creation", "Architectural and engineering coordination", "Government incentive & subsidy consulting"],
        documents: ["Initial project vision draft", "Financial budget estimate", "Land documents (if acquired)"]
    },
    {
        id: 4,
        title: "Fire NOC Assistance",
        icon: "flame",
        short: "Provisional and Final Fire NOC approvals from MIDC Fire Department and local municipal fire services.",
        description: "Fire safety approval is mandatory for starting construction and operations. We ensure your facility layout complies with National Building Code (NBC) standards for fast-track Fire NOC clearance.",
        process: ["Architectural plan review for fire safety compliance", "Submission of Provisional Fire NOC application", "On-site fire equipment installation guidance", "Final inspection coordination and Final Fire NOC issuance"],
        documents: ["Approved Building Blueprint", "Fire Fighting System Layout Plan", "Architect Certification", "Property Ownership Documents"]
    },
    {
        id: 5,
        title: "Factory License & Approvals",
        icon: "building",
        short: "Turnkey licensing solutions under the Factories Act, 1948 for industrial operations in Maharashtra.",
        description: "Operating a factory without a valid license attracts steep penalties. We assist with factory plan approvals, horsepower registration, and full licensing compliance.",
        process: ["Factory plan approval from Directorate of Industrial Safety & Health (DISH)", "Stability Certificate coordination from Chartered Engineer", "Factory License application submission", "Annual safety return filings"],
        documents: ["Approved Building Plans", "Process Flow Diagram", "List of Plant Machinery & Electrical Load (HP)", "Pollution & Fire Approvals"]
    },
    {
        id: 6,
        title: "Pollution Control Board NOC (MPCB)",
        icon: "shield-check",
        short: "Consent to Establish (CTE) and Consent to Operate (CTO) approvals from Maharashtra Pollution Control Board.",
        description: "Environmental compliance is mandatory for manufacturing. We categorise your unit (Red/Orange/Green/White) and ensure rapid approval for MPCB consents.",
        process: ["Industry categorization and effluent check", "Consent to Establish (CTE) filing before construction", "Effluent / Sewage Treatment Plant (ETP/STP) planning", "Consent to Operate (CTO) approval prior to trial production"],
        documents: ["Manufacturing Process Flowchart", "Water Balance & Waste Generation Details", "DPR / Capital Investment Certificate", "MIDC Land Allotment Letter"]
    },
    {
        id: 7,
        title: "Building Plan Approval (MIDC / Local)",
        icon: "layout",
        short: "Architectural plan sanctions and building permits from MIDC Special Planning Authority or local Municipal Corporations.",
        description: "Sanctioning your building blueprint requires compliance with MIDC Development Control Rules (DCR). We coordinate with certified architects and MIDC authorities for swift blueprint approvals.",
        process: ["Drafting building layout per MIDC DCR guidelines", "Submission through AutoDCR / MIDC online portal", "Scrutiny fee processing & NOC clearances", "Sanctioned Plan issuance & Commencement Certificate"],
        documents: ["MIDC Plot Allotment / Possession Letter", "Architect Structural Drawings", "Boundary Demarcation Certificate", "Provisional Fire NOC"]
    },
    {
        id: 8,
        title: "Udyam Registration / MSME Guidance",
        icon: "award",
        short: "Government MSME registration assistance to unlock interest subsidies, priority lending, and tender benefits.",
        description: "Registering under Udyam grants your enterprise access to government subsidies, collateral-free bank loans (CGTMSE), and protection against delayed payments.",
        process: ["Aadhaar & PAN verification", "Enterprise classification (Micro, Small, Medium)", "Udyam portal filing & Instant certificate generation", "Guidance on MSME subsidy schemes in Maharashtra"],
        documents: ["Aadhaar Card of Proprietor/Partner/Director", "PAN Card of Enterprise", "Bank Account Details", "GSTIN (if applicable)"]
    },
    {
        id: 9,
        title: "Bank Loan Project Reports & Land Guidance",
        icon: "landmark",
        short: "Bankable financial project reports and strategic industrial land location advisory in and around Nagpur.",
        description: "We prepare credit-ready financial reports for Term Loans and Working Capital requirements, combined with expert advice on acquiring private or MIDC industrial land.",
        process: ["Detailed financial modeling & Debt-Equity structure design", "Preparation of CMA Data and Ratio Analysis", "Land suitability comparison & connectivity evaluation", "Bank liaison & query resolution"],
        documents: ["3 Years Tax Returns (if existing entity)", "Promoter Net Worth statements", "Machinery quotations", "Land agreement / MIDC allotment papers"]
    },
    {
        id: 10,
        title: "PESO License & Approval",
        icon: "zap",
        short: "Statutory licensing from Petroleum and Explosives Safety Organisation for fuel, chemical, and gas storage.",
        description: "Industries handling petroleum products, compressed gases, or hazardous chemicals require strict safety compliance and clearances from PESO, Headquartered in Nagpur.",
        process: ["Site layout plan safety approval", "Risk Assessment & Hazardous Area Classification", "PESO online application & technical documentation", "Final site inspection and License grant"],
        documents: ["Site Layout and P&ID Diagrams", "Safety Audit Report", "District Magistrate (NOC)", "Equipment Manufacturer Certificates"]
    }
];

const steps = [
    { step: '01', title: 'Planning', desc: 'Initial requirement gathering, site feasibility study, and project roadmapping.' },
    { step: '02', title: 'DPR Preparation', desc: 'Drafting Detailed Project Report tailored for bank financing and authority reviews.' },
    { step: '03', title: 'MIDC Application', desc: 'Online submission and filing for industrial plot acquisition.' },
    { step: '04', title: 'Allotment', desc: 'Securing the MIDC plot allotment order and completing land formalities.' },
    { step: '05', title: 'Plan Approval', desc: 'Architectural and engineering building plan approvals from MIDC/Local body.' },
    { step: '06', title: 'Fire NOC', desc: 'Provisional Fire NOC approval and safety system design checks.' },
    { step: '07', title: 'Pollution NOC', desc: 'Consent to Establish (CTE) filing with Maharashtra Pollution Control Board.' },
    { step: '08', title: 'License Acquisition', desc: 'Securing Factory License, Udyam Registration, and specialized approvals.' },
    { step: '09', title: 'Production Start', desc: 'Final Consent to Operate (CTO) and commencement of industrial operations.' }
];

// Render Services Grid with Hover Effects
function renderServices() {
    const container = document.getElementById('services-grid-container');
    if (!container) return;

    container.innerHTML = servicesData.map((s, index) => `
        <div class="service-card fade-in-up bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 flex flex-col justify-between group" style="transition-delay: ${index * 50}ms">
            <div>
                <div class="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                    <i data-lucide="${s.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">${s.title}</h3>
                <p class="text-slate-600 text-sm mb-6 leading-relaxed font-light">${s.short}</p>
            </div>
            <button onclick="openServiceModal(${s.id})" class="text-orange-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:gap-2.5 transition-all">
                <span>View Full Page</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
        </div>
    `).join('');
}

// Render Timeline
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    container.innerHTML = steps.map(s => `
        <div class="relative pl-8 pb-8 fade-in-up">
            <div class="absolute -left-[17px] top-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
                ${s.step}
            </div>
            <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h4 class="font-bold text-slate-900 text-base">${s.title}</h4>
                <p class="text-xs text-slate-500 mt-1">${s.desc}</p>
            </div>
        </div>
    `).join('');
}

// Modal System
function openServiceModal(id) {
    const service = servicesData.find(s => s.id === id);
    if (!service) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <i data-lucide="${service.icon}" class="w-5 h-5"></i>
            </div>
            <h2 class="text-2xl font-bold text-slate-900">${service.title}</h2>
        </div>
        <p class="text-slate-600 text-sm leading-relaxed mb-6 font-normal">${service.description}</p>
        
        <div class="mb-6">
            <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Workflow Execution</h4>
            <ul class="space-y-2">
                ${service.process.map(item => `
                    <li class="flex items-start gap-2.5 text-xs text-slate-700">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                        <span>${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="mb-6">
            <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Required Documents</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${service.documents.map(doc => `
                    <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-700 flex items-center gap-2">
                        <i data-lucide="file-text" class="w-4 h-4 text-blue-900"></i> ${doc}
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <a href="https://wa.me/919876543210?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(service.title)}" target="_blank" class="bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 hover:bg-emerald-700 shadow-sm transition-colors">
                <i data-lucide="message-circle" class="w-4 h-4"></i> Inquire via WhatsApp
            </a>
            <button onclick="closeServiceModal()" class="bg-slate-100 text-slate-700 font-semibold px-5 py-2.5 rounded-xl text-xs hover:bg-slate-200 transition-colors">
                Close View
            </button>
        </div>
    `;
    
    document.getElementById('service-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.add('hidden');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting Diwan Consultancy! We will respond to your query shortly.');
    e.target.reset();
}

// Intersection Observer for Smooth Scroll Animations
function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// Global Execution
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderTimeline();
    lucide.createIcons();
    initScrollObserver();
});