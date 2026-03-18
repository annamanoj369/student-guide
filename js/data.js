const countryData = {
    Germany: {
        banks: {
            title: "German Banks",
            providers: ["Sparkasse", "Commerzbank", "Deutsche Bank", "N26", "DKB", "ING"],
            notes: "N26 and DKB are popular among international students for their English support and no fees."
        },
        sim: {
            title: "German Mobile Providers",
            providers: ["Vodafone", "O2", "Telekom", "Aldi Talk", "Lidl Connect", "Lebara"],
            notes: "Aldi Talk and Lidl Connect offer cheap prepaid options. Lebara is good for international calls."
        },
        housing: {
            title: "Housing Options",
            types: ["Studentenwerk (University Dorms)", "WG-gesucht (Shared Flats)", "Immobilienscout24", "Ebay Kleinanzeigen"],
            notes: "Start looking early! Student housing is limited. WG (Wohngemeinschaft) is most common."
        },
        transport: {
            title: "Transport in Germany",
            apps: ["DB Navigator (Deutsche Bahn)", "BVG (Berlin)", "MVV (Munich)", "RMV (Frankfurt)"],
            tickets: ["Semesterticket (Student Semester Pass)", "Deutschlandticket (€49/month)", "Monthly Passes"],
            notes: "Semesterticket is usually included in university fees and covers regional transport."
        },
        healthcare: {
            title: "Health Insurance",
            public: ["Techniker Krankenkasse (TK)", "AOK", "Barmer", "DAK"],
            private: ["Mawista", "Care Concept", "Allianz Care"],
            notes: "Under 30 and in degree program: Must have public insurance. Over 30 or preparatory course: Can choose private."
        }
    },
    USA: {
        banks: {
            title: "US Banks",
            providers: ["Chase", "Bank of America", "Wells Fargo", "Citibank", "Capital One", "PNC"],
            notes: "Chase and Bank of America have the most ATMs. Many offer student accounts with no fees."
        },
        sim: {
            title: "US Mobile Providers",
            providers: ["T-Mobile", "AT&T", "Verizon", "Mint Mobile", "Cricket", "Metro by T-Mobile"],
            notes: "Mint Mobile is affordable ($15/month). T-Mobile has good international roaming."
        },
        housing: {
            title: "Housing Options",
            types: ["On-Campus Dorms", "Off-Campus Apartments", "University Housing Portal", "Apartments.com", "Zillow"],
            notes: "On-campus is safest for first year. Off-campus is cheaper but requires more paperwork."
        },
        transport: {
            title: "Transport in USA",
            apps: ["Uber", "Lyft", "Transit", "Citymapper", "Amtrak"],
            tickets: ["Student Transit Pass", "Monthly Pass", "University Shuttle"],
            notes: "Most US cities require a car. Check if your university has free shuttle services."
        },
        healthcare: {
            title: "Health Insurance",
            public: ["University Health Plan", "Medicaid (if eligible)"],
            private: ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "ISO"],
            notes: "Most universities require health insurance. University plans are convenient but expensive."
        }
    },
    UK: {
        banks: {
            title: "UK Banks",
            providers: ["HSBC", "Barclays", "Lloyds", "NatWest", "Santander", "Monzo", "Starling"],
            notes: "Monzo and Starling are digital banks popular with students. Santander has good student accounts."
        },
        sim: {
            title: "UK Mobile Providers",
            providers: ["EE", "O2", "Vodafone", "Three", "Giffgaff", "Lebara", "Lycamobile"],
            notes: "Giffgaff is cheap and flexible. Three offers good data packages."
        },
        housing: {
            title: "Housing Options",
            types: ["University Halls", "Private Halls", "Rightmove", "Zoopla", "SpareRoom"],
            notes: "University halls for first year. SpareRoom is best for finding flatmates."
        },
        transport: {
            title: "Transport in UK",
            apps: ["Trainline", "Citymapper", "TfL Go (London)", "Uber"],
            tickets: ["16-25 Railcard", "Oyster Card", "Contactless Payment", "Student Bus Pass"],
            notes: "16-25 Railcard gives 1/3 off train travel. Oyster card for London transport."
        },
        healthcare: {
            title: "Health Insurance (NHS)",
            public: ["NHS (National Health Service) - Free with IHS payment"],
            private: ["Bupa", "AXA Health", "Vitality", "WPA"],
            notes: "International students pay Immigration Health Surcharge (IHS) for NHS access."
        }
    },
    Canada: {
        banks: {
            title: "Canadian Banks",
            providers: ["RBC", "TD", "Scotiabank", "BMO", "CIBC", "Tangerine", "Simplii"],
            notes: "Big 5 banks all offer student accounts. Tangerine and Simplii are online-only with no fees."
        },
        sim: {
            title: "Canadian Mobile Providers",
            providers: ["Rogers", "Bell", "Telus", "Fido", "Koodo", "Public Mobile", "Freedom Mobile"],
            notes: "Public Mobile is cheapest. Freedom Mobile has good city coverage but limited rural."
        },
        housing: {
            title: "Housing Options",
            types: ["On-Campus Residence", "Off-Campus Housing", "Kijiji", "Facebook Marketplace", "PadMapper"],
            notes: "On-campus guaranteed for first years. Off-campus cheaper but start searching early."
        },
        transport: {
            title: "Transport in Canada",
            apps: ["Transit", "Uber", "Lyft", "PRESTO (Ontario)", "Compass Card (Vancouver)"],
            tickets: ["U-Pass (Student Transit Pass)", "Monthly Pass", "PRESTO Card"],
            notes: "U-Pass often included in student fees. PRESTO works across Ontario transit systems."
        },
        healthcare: {
            title: "Health Insurance",
            public: ["Provincial Health Care (OHIP, MSP, etc.)"],
            private: ["Sun Life", "Manulife", "Blue Cross", "Greenshield"],
            notes: "Each province has different rules. Some require 3-month wait for provincial coverage."
        }
    },
    Australia: {
        banks: {
            title: "Australian Banks",
            providers: ["Commonwealth Bank", "Westpac", "ANZ", "NAB", "ING", "Macquarie"],
            notes: "Commonwealth Bank has most ATMs. ING has no fees and good savings rates."
        },
        sim: {
            title: "Australian Mobile Providers",
            providers: ["Telstra", "Optus", "Vodafone", "Boost", "Amaysim", "Kogan Mobile"],
            notes: "Telstra has best coverage in rural areas. Amaysim and Kogan are cheaper alternatives."
        },
        housing: {
            title: "Housing Options",
            types: ["On-Campus", "Off-Campus", "Realestate.com.au", "Domain", "Flatmates.com.au"],
            notes: "On-campus fills up fast. Flatmates.com.au is best for share houses."
        },
        transport: {
            title: "Transport in Australia",
            apps: ["Opal Travel (Sydney)", "PTV (Melbourne)", "Translink (Brisbane)", "Uber", "Didi"],
            tickets: ["Opal Card", "Myki Card", "Go Card", "Student Concession"],
            notes: "International students usually get concession fares. Apply for student transport card."
        },
        healthcare: {
            title: "Health Insurance (OSHC)",
            providers: ["Allianz Care", "Bupa", "Medibank", "nib", "AHM"],
            notes: "Overseas Student Health Cover (OSHC) is mandatory for student visa."
        }
    }
};
