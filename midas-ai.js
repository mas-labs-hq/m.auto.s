/**
 * ═════════════════════════════════════════════════════
 * MIDASAI — Local AI Assistant for Midas Auto Services
 * 100% Client-Side | Zero API Calls | Zero Dependencies
 * Built by MortApps Studios
 * ═══════════════════════════════════════════════════
 */

function generateMidasResponse(message) {
    var msg = message.toLowerCase().trim();
    var words = msg.split(/\s+/);

    // ── GREETINGS ──
    if (/^(hi|hello|hey|howdy|greetings|good\s?(morning|afternoon|evening)|jambo|vipi|habari|sup|yo|what'?s\s?up)/i.test(msg)) {
        var greetings = [
            "Hello! Welcome to Midas Auto Services. How can I help you today? You can ask about our services, pricing, or coverage areas.",
            "Hi there! I'm MidasAI, your 24/7 assistant. What would you like to know about our road rescue and towing services?",
            "Hey! Great to have you here. I can help with service information, pricing, registration, or coverage areas. What do you need?",
            "Jambo! Karibu Midas Auto Services. Ask me anything about our services and I'll do my best to help."
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // ── THANKS ──
    if (/^(thanks|thank\s?you|thx|asante|cheers|appreciate)/i.test(msg)) {
        var thanks = [
            "You're welcome! If you need anything else, don't hesitate to ask. You can also reach us at +254 722 870 527.",
            "Happy to help! Remember, we're available 24/7 for any road rescue or towing needs. Stay safe on the road!",
            "Anytime! Feel free to ask if you have more questions. You can also sign up for our Road Rescue service on our website."
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }

    // ── GOODBYE ──
    if (/^(bye|goodbye|see\s?ya|later|good\s?night|tata|kwaheri)/i.test(msg)) {
        return "Goodbye! Drive safe. Remember, Midas Auto Services is available 24/7 for road rescue and towing. Call us anytime at +254 722 870 527.";
    }

    // ── ROAD RESCUE / PRICING ──
    if (/road\s?rescue|rescue|roadside|road\s?side|breakdown\s?assist/i.test(msg)) {
        return "Our <strong>Road Rescue Service</strong> is available 24/7 across all 47 counties in Kenya. The annual subscription is <strong>KES 6,000 per vehicle per year</strong>.<br><br>What's covered:<br>&#8226; Flat tire change<br>&#8226; Fuel delivery<br>&#8226; Battery jumpstart<br>&#8226; Mechanical breakdown towing<br>&#8226; Post-accident scene management<br>&#8226; Towing and recovery<br><br>Service applies to the <strong>vehicle</strong>, not the driver. To register, visit the Road Rescue page or call <strong>+254 722 870 527</strong>.";
    }

    // ── PRICING / COST / FEE ──
    if (/pric|cost|fee|how\s?much|charge|rate|afford|cheap|expensive|ksh|kes|shilling/i.test(msg)) {
        return "Here's a quick overview of our key service pricing:<br><br><strong>Road Rescue Subscription:</strong> KES 6,000 per vehicle per year (24/7 coverage)<br><strong>Towing &amp; Breakdown:</strong> Contact us for a quote based on distance and vehicle type<br><strong>Forklift &amp; Crane Hire:</strong> Flexible rates — short and long-term options available<br><strong>Mobile Car Wash:</strong> Weekly, fortnightly, or monthly plans — contact us for pricing<br><strong>Car Carrier:</strong> Affordable vehicle delivery — quotes based on route<br><br>For detailed pricing on any service, call us at <strong>+254 722 870 527</strong> or WhatsApp us. We offer fair and reasonable rates!";
    }

    // ── TOWING ──
    if (/tow|towing|recover|recovery|salvage/i.test(msg)) {
        return "Midas Auto Services provides <strong>professional towing and breakdown recovery</strong> across Kenya. We have the equipment and expertise to handle all vehicle types.<br><br>Our towing services include:<br>&#8226; Accident scene towing and recovery<br>&#8226; Mechanical breakdown recovery<br>&#8226; Salvage towing<br>&#8226; Long-distance vehicle transport<br>&#8226; Countrywide coverage across 47 counties<br><br>We're dependable — we perform and deliver at the quoted time and price. Call <strong>+254 722 870 527</strong> for immediate towing assistance.";
    }

    // ── FORKLIFT / CRANE ──
    if (/fork\s?lift|forklift|crane|heavy\s?equip|lifting/i.test(msg)) {
        return "We offer <strong>Forklift and Crane hire</strong> services for industrial and commercial operations. Our equipment is well-maintained and operated by experienced professionals.<br><br>Features:<br>&#8226; Industrial forklift hire<br>&#8226; Crane hire for construction and logistics<br>&#8226; Certified experienced operators<br>&#8226; Flexible short and long-term hire periods<br><br>Contact us at <strong>+254 722 870 527</strong> to discuss your specific requirements and get a quote.";
    }

    // ── CAR WASH ──
    if (/car\s?wash|wash|cleaning|clean/i.test(msg)) {
        return "Our <strong>Mobile Car Wash</strong> service comes directly to you — at home, office, or business premises!<br><br>Options available:<br>&#8226; Weekly visits<br>&#8226; Fortnightly visits<br>&#8226; Monthly visits<br>&#8226; One-time wash requests<br><br>We use professional-grade cleaning products and equipment. Perfect for busy professionals and businesses that want to maintain their fleet's appearance. WhatsApp us at <strong>+254 722 870 527</strong> to schedule a wash.";
    }

    // ── CAR CARRIER ──
    if (/car\s?carrier|carrier|vehicle\s?deliver|deliver\s?car|transport\s?car|car\s?transport/i.test(msg)) {
        return "Our <strong>Car Carrier Service</strong> provides safe and affordable vehicle delivery across Kenya.<br><br>We handle:<br>&#8226; New vehicle delivery from Port of Mombasa to Nairobi<br>&#8226; Upcountry vehicle transport<br>&#8226; Single vehicle and fleet delivery<br>&#8226; Fully insured transport for peace of mind<br><br>For delivery quotes and scheduling, call <strong>+254 722 870 527</strong> or WhatsApp us.";
    }

    // ── FIRST AID KITS ──
    if (/first\s?aid|aid\s?kit|safety\s?kit|medical\s?kit/i.test(msg)) {
        return "We supply <strong>DOSHS/OSHA 2007 compliant First Aid Kits</strong> — personalized for your specific needs.<br><br>Each kit includes:<br>&#8226; First Aid Manual<br>&#8226; Notebook and pen<br>&#8226; Essential medical supplies<br><br>We also offer a convenient <strong>refill service</strong> to keep your kits stocked. Contact us at <strong>+254 722 870 527</strong> to place an order.";
    }

    // ── DRIVERS ──
    if (/driver|driving|chauffeur|hire\s?driver/i.test(msg)) {
        return "We provide <strong>competent, experienced drivers</strong> available for short-term hire.<br><br>All our drivers:<br>&#8226; Hold certificates of good conduct<br>&#8226; Have extensive experience on Kenyan roads<br>&#8226; Are professional and reliable<br>&#8226; Available at competitive rates<br><br>Perfect for businesses needing temporary drivers or individuals who need a professional driver for a specific trip. Call <strong>+254 722 870 527</strong> to hire a driver.";
    }

    // ── TRANSPORT / TRUCK / CARGO ──
    if (/transport|truck\s?hire|cargo|fmcg|goods|freight|delivery|logistics/i.test(msg)) {
        return "Midas Auto Services offers <strong>general transport and truck hire</strong> for various cargo needs.<br><br>Our transport services:<br>&#8226; FMCG cargo transportation<br>&#8226; Sensitive cargo handling with care<br>&#8226; Port of Mombasa to Nairobi delivery<br>&#8226; Upcountry distribution<br>&#8226; Specialized trucks for different cargo types<br><br>We're your reliable logistics partner! Contact <strong>+254 722 870 527</strong> for transport inquiries.";
    }

    // ── REGISTER / SIGN UP ──
    if (/register|sign\s?up|signup|enroll|join|member|membership|subscribe/i.test(msg)) {
        return "To register for our <strong>Road Rescue Service</strong>, you can:<br><br><strong>1.</strong> Visit the Road Rescue registration page on our main website<br><strong>2.</strong> Call us at <strong>+254 722 870 527</strong><br><strong>3.</strong> Email us at <strong>service@midasautoservices.com</strong><br><br>The registration process is simple:<br>&#8226; Fill in the membership form<br>&#8226; Complete your registration<br>&#8226; Our representative will respond to your service request<br><br>The annual fee is <strong>KES 6,000 per vehicle</strong>. If you're already a member, you can log in through the Member Portal on our main website.";
    }

    // ── LOGIN / PORTAL ──
    if (/login|log\s?in|portal|account|dashboard|profile/i.test(msg)) {
        return "You can access the <strong>Member Portal</strong> through our main website. The portal allows registered members to:<br><br>&#8226; View your membership status<br>&#8226; Submit service requests<br>&#8226; Update your profile<br>&#8226; Track service history<br><br>If you need help with your account, contact us at <strong>+254 722 870 527</strong> or email <strong>service@midasautoservices.com</strong>.";
    }

    // ── COVERAGE / AREAS / LOCATIONS ──
    if (/coverage|area|location|where|cover|counties|cities|region|presence|branches/i.test(msg)) {
        return "Midas Auto Services provides <strong>countrywide coverage</strong> across all 47 counties in Kenya.<br><br>Our physical offices and operational bases are in:<br><br>&#8226; <strong>Nairobi</strong> — Head Office (Repen Complex, Katani Road)<br>&#8226; <strong>Nakuru</strong><br>&#8226; <strong>Kisumu</strong><br>&#8226; <strong>Eldoret</strong><br>&#8226; <strong>Nyeri</strong><br>&#8226; <strong>Mombasa</strong><br>&#8226; <strong>Voi</strong><br>&#8226; <strong>Tsavo / Manyani / Maungu</strong><br><br>No matter where you are in Kenya, help is never far away!";
    }

    // ── CONTACT / PHONE / EMAIL / WHATSAPP ──
    if (/contact|phone|email|call|reach|whatsapp|number|address/i.test(msg)) {
        return "You can reach Midas Auto Services through:<br><br><strong>Phone:</strong> +254 722 870 527<br><strong>Email:</strong> service@midasautoservices.com<br><strong>Address:</strong> Repen Complex, Katani Road, Off Mombasa Road, Nairobi<br><strong>PO Box:</strong> 52206-00200 Nairobi<br><br><strong>Office Hours:</strong><br>Monday – Friday: 8:00 AM – 6:00 PM<br>Saturday: 9:00 AM – 4:00 PM<br><br>For <strong>emergencies</strong>, we're available <strong>24/7</strong> — just call us!";
    }

    // ── HOURS / TIME / AVAILABILITY ──
    if (/hour|time|open|close|available|when|schedule|operating/i.test(msg)) {
        return "Our <strong>office hours</strong> are:<br><br>Monday – Friday: 8:00 AM – 6:00 PM<br>Saturday: 9:00 AM – 4:00 PM<br>Sunday: Closed<br><br>However, our <strong>Road Rescue and Towing services</strong> operate <strong>24 hours a day, 7 days a week, 365 days a year</strong>. Emergencies don't wait, and neither do we! Call <strong>+254 722 870 527</strong> anytime.";
    }

    // ── ABOUT / COMPANY / HISTORY ──
    if (/about|company|history|who|founded|established|started|background|midas/i.test(msg)) {
        return "<strong>Midas Auto Services Centre Limited</strong> was founded in <strong>2008</strong> and has grown to become one of Kenya's leading road rescue and towing service providers.<br><br>Key highlights:<br>&#8226; Over 18 years of experience<br>&#8226; Automotive Industry Excellence Award Winner (2019 &amp; 2020)<br>&#8226; Pioneer provider for the GOK Fleet Leasing Program (2014)<br>&#8226; Founder Member of ATRA (Automobile Towing &amp; Recovery Association)<br>&#8226; Member of Motorist Association of Kenya<br>&#8226; 37+ corporate partners including Toyota, Isuzu, DHL, G4S<br><br>Our core values: Reliability, Commitment, Respect, Responsibility, Honesty, and Integrity.";
    }

    // ── AWARDS / CERTIFICATIONS ──
    if (/award|certif|accredit|achievement|trophy|recognition|atraf?|motorist/i.test(msg)) {
        return "Midas Auto Services has earned significant industry recognition:<br><br>&#8226; <strong>Automotive Industry Excellence Award</strong> — Road Rescue Services (2019 &amp; 2020)<br>&#8226; <strong>Founder Member</strong> of ATRA (Automobile Towing and Recovery Association)<br>&#8226; <strong>Member</strong> of the Motorist Association of Kenya<br>&#8226; <strong>Pioneer</strong> in road rescue for the Government of Kenya fleet leasing program (2014)<br><br>These credentials reflect our commitment to excellence, safety, and professional service delivery.";
    }

    // ── PARTNERS / CLIENTS ──
    if (/partner|client|corporate|work\s?with|trusted\s?by/i.test(msg)) {
        return "Midas Auto Services is trusted by <strong>37+ corporate partners</strong> including:<br><br><strong>Automotive:</strong> Toyota, Isuzu, Nissan, Hino, CMC, DT Dobie<br><strong>Insurance:</strong> Britam, Jubilee, Sanlam, Zamara, Minet<br><strong>Logistics:</strong> DHL, G4S, KK Security<br><strong>Government:</strong> KETRACO, KEBS<br><strong>Other:</strong> Heifer, Philips, ICAp, Compassion, Blue Industries, Mayfair<br><br>Our diverse client base spans automotive, insurance, logistics, government, and humanitarian sectors — a testament to the quality and reliability of our services.";
    }

    // ── SERVICES LIST ──
    if (/service|what\s?do\s?you|offer|provide|what\s?can/i.test(msg)) {
        return "Midas Auto Services offers a comprehensive range of automotive and logistics services:<br><br><strong>1.</strong> Road Rescue (24/7 subscription)<br><strong>2.</strong> Towing &amp; Breakdown Recovery<br><strong>3.</strong> Forklift &amp; Crane Hire<br><strong>4.</strong> Mobile Car Wash<br><strong>5.</strong> Car Carrier Services<br><strong>6.</strong> First Aid Kits (DOSHS/OSHA compliant)<br><strong>7.</strong> Competent Drivers for Hire<br><strong>8.</strong> General Transport &amp; Truck Hire<br><br>Which service would you like to know more about?";
    }

    // ── PDF / DOWNLOAD / BROCHURE ──
    if (/pdf|download|brochure|flyer|profile|document/i.test(msg)) {
        return "You can download our company materials:<br><br><strong>Company Profile (PDF):</strong> Available on our main website<br><strong>Road Rescue Flyer (PDF):</strong> Available on our main website<br><br>You can also request these documents by emailing <strong>service@midasautoservices.com</strong> or calling <strong>+254 722 870 527</strong>.";
    }

    // ── HELP / SUPPORT ──
    if (/help|support|assist|problem|complaint|emergency/i.test(msg)) {
        if (/emergency|urgent|stranded|stuck|accident|crash/i.test(msg)) {
            return "This sounds like an <strong>emergency</strong>! Please call us immediately:<br><br><strong>EMERGENCY LINE: +254 722 870 527</strong><br><br>We operate 24/7 and will dispatch help to your location right away. Stay safe and keep your hazard lights on if you're on the roadside.";
        }
        return "How can I help you? I can assist with information about:<br><br>&#8226; Our services and pricing<br>&#8226; Registration for Road Rescue<br>&#8226; Coverage areas<br>&#8226; Contact information<br>&#8226; Company background and credentials<br><br>For urgent matters, call us directly at <strong>+254 722 870 527</strong>.";
    }

    // ── META / BOT QUESTIONS ──
    if (/who\s?are\s?you|what\s?are\s?you|are\s?you\s?(real|human|a\s?bot|ai)|your\s?name/i.test(msg)) {
        return "I'm <strong>MidasAI</strong>, the virtual assistant for Midas Auto Services. I'm here to help you with information about our road rescue, towing, and logistics services 24/7.<br><br>While I'm an AI assistant, all the information I provide is based on Midas Auto Services' actual services and operations. For complex inquiries, I'll connect you with our team at <strong>+254 722 870 527</strong>.";
    }

    // ── SWAHILI RESPONSES ──
    if (/habari|jambo|vipi|asante|sawa|ndiyo|hapana/i.test(msg)) {
        if (/asante/i.test(msg)) {
            return "Karibu sana! Ukihitaji msaada zaidi, tafadhali uliza. Midas Auto Services inapatikana masaa 24 kwa siku. Nambari yetu ni +254 722 870 527.";
        }
        return "Karibu Midas Auto Services! Ninaweza kukusaidia kwa taarifa kuhusu huduma zetu za uokoaji barabarani, usafirishaji, na vinginevyo. Uliza chochote utakacho kujua!";
    }

    // ── JOKES / FUN ──
    if (/joke|funny|laugh|humor/i.test(msg)) {
        var jokes = [
            "Why did the car break down near the bank? Because it lost its balance! But seriously, if you need towing, we're just a call away at +254 722 870 527.",
            "What do you call a Midas tow truck at the North Pole? A snow-tow! Bad jokes aside, we handle all weather conditions. Call us anytime!",
            "I'd tell you a towing joke, but I don't want to drag it out. Get it? Anyway, MidasAI is here for all your service questions!"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // ── M-PESA / PAYMENT ──
    if (/mpesa|pay|payment|lipa|m\u00f3n|money|invoice/i.test(msg)) {
        return "For payment and billing inquiries, please contact our office directly:<br><br><strong>Phone:</strong> +254 722 870 527<br><strong>Email:</strong> service@midasautoservices.com<br><br>Our team will provide you with payment details and options available for the service you need.";
    }

    // ── gallery / photos ──
    if (/gallery|photo|image|picture|video/i.test(msg)) {
        return "We have a <strong>gallery</strong> showcasing our work — including photos of towing operations, road rescues, mobile car wash, and forklift services. You can view it on our main website's Gallery page.<br><br>We also have a <strong>YouTube video</strong> showcasing our road rescue operations. Visit our main website to check it out!";
    }

    // ── CONDITIONS / NOT COVERED ──
    if (/condition|not\s?covered|exclude|limitation|restrict/i.test(msg)) {
        return "Our Road Rescue subscription does not cover:<br><br>&#8226; Vehicles left unattended at the scene<br>&#8226; Vehicles not within easy access of a public road<br>&#8226; Extreme conditions (e.g., flooding, insecurity areas)<br>&#8226; Incidents outside the <strong>30-kilometer municipality radius</strong><br><br>For full terms and conditions, please contact us at <strong>+254 722 870 527</strong> or visit the Road Rescue page on our main website.";
    }

    // ── SOCIAL MEDIA ──
    if (/social|facebook|linkedin|instagram|twitter|follow/i.test(msg)) {
        return "Connect with Midas Auto Services on social media:<br><br><strong>Facebook:</strong> Midas Auto Services Centre<br><strong>LinkedIn:</strong> Midas Auto Services<br><br>Follow us for updates, service tips, and company news!";
    }

    // ── FALLBACK ──
    var fallbacks = [
        "I'm not sure I fully understand that question. Could you try rephrasing it? I can help with information about our <strong>road rescue</strong>, <strong>towing</strong>, <strong>forklift/crane hire</strong>, <strong>mobile car wash</strong>, and other services.",
        "I didn't quite catch that. Here are some things I can help with:<br><br>&#8226; Service details and pricing<br>&#8226; Registration for Road Rescue<br>&#8226; Coverage areas<br>&#8226; Contact information<br>&#8226; Company background<br><br>For complex inquiries, call <strong>+254 722 870 527</strong>.",
        "Hmm, I'm not sure about that one. But I'd love to help! Try asking about our services, pricing, coverage, or how to register for Road Rescue. You can also reach our team directly at <strong>+254 722 870 527</strong>."
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
