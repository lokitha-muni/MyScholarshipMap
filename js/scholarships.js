// Scholarship data for MyScholarshipMap

const scholarships = [
    {
        id: 1,
        name: "National Scholarship Portal (NSP)",
        provider: "Ministry of Electronics & IT, Government of India",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "Variable based on course and category",
            deadline: "October-November (Annual)",
            education: "Class 9 onwards to Post-Graduation",
            documents: "Income certificate, caste certificate, previous marksheets"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 2,
        name: "Post Matric Scholarship for SC Students",
        provider: "Ministry of Social Justice and Empowerment",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["sc"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "Course fees + maintenance allowance",
            deadline: "October 31 (Annual)",
            education: "Class 11 onwards to Post-Graduation",
            documents: "SC certificate, income certificate, institution verification"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 3,
        name: "Prime Minister's Scholarship Scheme for Central Armed Police Forces",
        provider: "Ministry of Home Affairs",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh", "above6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹3,000 per month for boys and ₹3,500 per month for girls",
            deadline: "September 30 (Annual)",
            education: "Professional degree courses",
            documents: "Dependent certificate, previous academic records"
        },
        website: "https://www.warwelfare.nic.in/"
    },
    {
        id: 4,
        name: "PRAGATI Scholarship for Girl Students",
        provider: "AICTE",
        eligibility: {
            gender: ["female"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹50,000 per annum",
            deadline: "October-November (Annual)",
            education: "First year of Technical Diploma/Degree",
            documents: "Income certificate, admission letter, previous marksheets"
        },
        website: "https://www.aicte-india.org/schemes/students-development-schemes"
    },
    {
        id: 5,
        name: "Central Sector Scheme of Scholarship",
        provider: "Ministry of Education",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹12,000 per annum",
            deadline: "October 31 (Annual)",
            education: "Undergraduate and Postgraduate studies",
            documents: "Income certificate, previous academic records"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 6,
        name: "Post-Matric Scholarship for ST Students",
        provider: "Ministry of Tribal Affairs",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["st"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["all"]
        },
        details: {
            amount: "Course fees + maintenance allowance",
            deadline: "October 31 (Annual)",
            education: "Class 11 onwards to Post-Graduation",
            documents: "ST certificate, income certificate, institution verification"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 7,
        name: "Minority Scholarship (Pre-Matric)",
        provider: "Ministry of Minority Affairs",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹1,000 per annum + admission & tuition fees",
            deadline: "September 30 (Annual)",
            education: "Class 1 to 10",
            documents: "Minority community certificate, income certificate"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 8,
        name: "Minority Scholarship (Post-Matric)",
        provider: "Ministry of Minority Affairs",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹3,000 to ₹10,000 per annum",
            deadline: "October 31 (Annual)",
            education: "Class 11 onwards to Ph.D",
            documents: "Minority community certificate, income certificate"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 9,
        name: "INSPIRE Scholarship",
        provider: "Department of Science & Technology",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh", "above6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹80,000 per annum",
            deadline: "October-December (Annual)",
            education: "Science stream in higher secondary and undergraduate",
            documents: "Class 12 marksheet, admission proof in science course"
        },
        website: "https://www.online-inspire.gov.in/"
    },
    {
        id: 10,
        name: "Ishan Uday Scholarship for North East Region",
        provider: "University Grants Commission (UGC)",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["assam", "arunachal", "manipur", "meghalaya", "mizoram", "nagaland", "tripura", "sikkim"]
        },
        details: {
            amount: "₹5,400 per month for technical courses, ₹3,500 for general courses",
            deadline: "October (Annual)",
            education: "Undergraduate studies",
            documents: "Domicile certificate of North Eastern states, income certificate"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 11,
        name: "Maharashtra State Scholarship",
        provider: "Government of Maharashtra",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["maharashtra"]
        },
        details: {
            amount: "Variable based on course and category",
            deadline: "September-October (Annual)",
            education: "Class 5 to Post-Graduation",
            documents: "Domicile certificate, income certificate, previous marksheets"
        },
        website: "https://mahadbt.maharashtra.gov.in/"
    },
    {
        id: 12,
        name: "e-Kalyan Scholarship (Bihar)",
        provider: "Government of Bihar",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["bihar"]
        },
        details: {
            amount: "Variable based on course and category",
            deadline: "As per notification",
            education: "Class 10 onwards",
            documents: "Domicile certificate, caste certificate, income certificate"
        },
        website: "https://www.7nishchay-yuvaupmission.bihar.gov.in/"
    },
    {
        id: 13,
        name: "Chief Minister's Scholarship Scheme (Delhi)",
        provider: "Government of Delhi",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["delhi"]
        },
        details: {
            amount: "₹40,000 to ₹1,00,000 per annum",
            deadline: "October-November (Annual)",
            education: "Undergraduate and Postgraduate studies",
            documents: "Delhi resident proof, income certificate, previous marksheets"
        },
        website: "http://tte.delhigovt.nic.in/"
    },
    {
        id: 14,
        name: "Mukhyamantri Yuva Nestam (Andhra Pradesh)",
        provider: "Government of Andhra Pradesh",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["andhra"]
        },
        details: {
            amount: "₹10,000 to ₹20,000 per annum",
            deadline: "As per notification",
            education: "Undergraduate and above",
            documents: "Andhra Pradesh resident proof, income certificate"
        },
        website: "https://ap.gov.in/"
    },
    {
        id: 15,
        name: "Swami Vivekananda Merit-cum-Means Scholarship (West Bengal)",
        provider: "Government of West Bengal",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["west"]
        },
        details: {
            amount: "₹1,000 to ₹5,000 per month",
            deadline: "As per notification",
            education: "Higher education",
            documents: "West Bengal resident proof, income certificate, merit certificates"
        },
        website: "https://svmcm.wbhed.gov.in/"
    },
    {
        id: 16,
        name: "Pragati Scholarship for Technical Education",
        provider: "AICTE",
        eligibility: {
            gender: ["female"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹50,000 per annum",
            deadline: "As per notification",
            education: "Technical education (Diploma/Degree)",
            documents: "Income certificate, admission proof in AICTE approved institution"
        },
        website: "https://www.aicte-india.org/"
    },
    {
        id: 17,
        name: "Saksham Scholarship for Differently Abled Students",
        provider: "AICTE",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh", "3to6lakh"],
            state: ["all"]
        },
        details: {
            amount: "₹50,000 per annum",
            deadline: "As per notification",
            education: "Technical education",
            documents: "Disability certificate, income certificate"
        },
        website: "https://www.aicte-india.org/"
    },
    {
        id: 18,
        name: "Vidyasiri Scholarship (Karnataka)",
        provider: "Government of Karnataka",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["karnataka"]
        },
        details: {
            amount: "₹1,500 to ₹5,000 per month",
            deadline: "As per notification",
            education: "Higher education",
            documents: "Karnataka domicile, income certificate"
        },
        website: "https://karepass.cgg.gov.in/"
    },
    {
        id: 19,
        name: "Dr. Ambedkar Post-Matric Scholarship for Economically Backward Classes",
        provider: "Ministry of Social Justice and Empowerment",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "Course fees + maintenance allowance",
            deadline: "October 31 (Annual)",
            education: "Class 11 onwards to Post-Graduation",
            documents: "Income certificate, previous academic records"
        },
        website: "https://scholarships.gov.in/"
    },
    {
        id: 20,
        name: "HDFC Bank Educational Crisis Scholarship Support",
        provider: "HDFC Bank",
        eligibility: {
            gender: ["male", "female", "other"],
            caste: ["general", "sc", "st", "obc", "minority"],
            income: ["below1lakh", "1to3lakh"],
            state: ["all"]
        },
        details: {
            amount: "Up to ₹75,000",
            deadline: "Varies",
            education: "Class 6 to Graduation",
            documents: "Income proof, crisis situation proof, academic records"
        },
        website: "https://www.hdfcbank.com/csr/education/educational-crisis"
    }
];
