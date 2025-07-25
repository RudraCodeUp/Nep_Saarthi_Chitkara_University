export interface ChatbotFAQ {
  id: string;
  question: string;
  answer: string;
}

export const chatbotFAQs: ChatbotFAQ[] = [
  // NEP 2020 BASICS
  {
    id: "nep-2020-overview",
    question: "What is the National Education Policy (NEP) 2020?",
    answer: "The National Education Policy (NEP) 2020 is India's comprehensive education framework launched on July 29, 2020, replacing the 1986 policy. It aims to transform India's education system through holistic, flexible, multidisciplinary education that emphasizes critical thinking and creativity. NEP 2020 covers early childhood to higher education with key reforms including flexible degree structures, academic credit banks, multidisciplinary institutions, and integration of vocational education."
  },
  {
    id: "nep-2020-objectives",
    question: "What are the main objectives of NEP 2020?",
    answer: "NEP 2020's main objectives include: 1) Achieving 100% Gross Enrollment Ratio in school education by 2030, 2) Establishing a 5+3+3+4 curricular structure aligned with developmental stages, 3) Increasing higher education GER to 50% by 2035, 4) Creating multidisciplinary education universities and colleges, 5) Enhancing research capabilities and investment, 6) Transforming assessment systems to promote holistic development, 7) Achieving universal foundational literacy and numeracy by grade 3, 8) Integrating vocational education from grade 6, and 9) Promoting multilingualism and Indian knowledge systems."
  },
  {
    id: "nep-2020-school-structure",
    question: "What is the new school education structure under NEP 2020?",
    answer: "NEP 2020 introduces a 5+3+3+4 curricular structure that corresponds to ages 3-8, 8-11, 11-14, and 14-18 years respectively. This includes: 1) Foundational Stage (3 years of pre-school + Grades 1-2), 2) Preparatory Stage (Grades 3-5), 3) Middle Stage (Grades 6-8), and 4) Secondary Stage (Grades 9-12). This structure replaces the old 10+2 system and includes early childhood education as part of formal schooling."
  },
  {
    id: "nep-2020-higher-ed",
    question: "How does NEP 2020 change higher education?",
    answer: "NEP 2020 transforms higher education with multiple entry-exit options and academic credit banks allowing students to leave and return to programs while retaining credits. It introduces 4-year undergraduate programs with research components, replaces MPhil, promotes multidisciplinary education, allows flexible curricula, and shifts toward competency-based learning. The policy aims to increase GER to 50% by 2035 through digital education, open distance learning, and vocational integration."
  },
  {
    id: "nep-mother-tongue",
    question: "What does NEP 2020 say about language education?",
    answer: "NEP 2020 emphasizes mother tongue/regional language as medium of instruction up to at least Grade 5, preferably till Grade 8 and beyond. It adopts a three-language formula (two native Indian languages plus English) with flexibility in choice. Sanskrit and other classical languages are promoted alongside foreign language options at the secondary level. The policy emphasizes preserving India's linguistic diversity while ensuring students develop multilingual proficiency."
  },

  // NEP 2020 IMPLEMENTATION
  {
    id: "nep-implementation-timeline",
    question: "What is the implementation timeline for NEP 2020?",
    answer: "NEP 2020 is being implemented in phases with key milestones: By 2025: Foundational literacy and numeracy mission, new school curriculum framework, vocational education integration, and Academic Bank of Credits establishment. By 2030: Universal access to education at all levels, implementation of new higher education governance system, and transformation of higher education institutions into multidisciplinary universities. By 2035: 50% gross enrollment ratio in higher education, internationalization of education, and full implementation of all NEP initiatives."
  },
  {
    id: "nep-challenges",
    question: "What are the challenges in implementing NEP 2020?",
    answer: "Key challenges in implementing NEP 2020 include: 1) Securing adequate funding (6% of GDP as targeted), 2) Building infrastructure and resources for digital education, 3) Training teachers and faculty for new pedagogical approaches, 4) Restructuring educational institutions into multidisciplinary entities, 5) Ensuring equity and inclusivity across socioeconomic backgrounds, 6) Transitioning to mother tongue instruction while maintaining quality, 7) Creating multiple pathways between vocational and academic streams, and 8) Developing high-quality learning materials in Indian languages."
  },
  {
    id: "nep-2020-governance",
    question: "How does NEP 2020 change educational governance?",
    answer: "NEP 2020 restructures educational governance through: 1) Creation of a Higher Education Commission of India (HECI) with four verticals: National Higher Education Regulatory Council, National Accreditation Council, Higher Education Grants Council, and General Education Council, 2) Establishing a single regulatory system replacing multiple bodies like UGC and AICTE, 3) Granting academic, administrative and financial autonomy to well-performing institutions, 4) Creating a State School Standards Authority in each state, and 5) Promoting a 'light but tight' regulatory approach emphasizing outcomes rather than inputs."
  },
  {
    id: "nep-budget-allocation",
    question: "What is the budget allocation for NEP 2020?",
    answer: "NEP 2020 targets increasing public investment in education to 6% of GDP, a significant increase from the current 4.43%. The policy emphasizes that education is a public good and requires adequate funding from both central and state governments. The National Education Technology Forum (NETF) and National Research Foundation (NRF) have separate allocations for educational technology and research respectively. The policy also encourages philanthropic private funding through CSR initiatives and fee-waivers for disadvantaged students."
  },
  
  // ACADEMIC BANK OF CREDITS
  {
    id: "abc-explained",
    question: "What is the Academic Bank of Credits (ABC) system?",
    answer: "The Academic Bank of Credits (ABC) is a digital repository that securely stores academic credits earned by students from various higher education courses. Established under NEP 2020, ABC allows students to transfer credits between institutions, create customized learning paths, and accumulate credits over time. Students can redeem these credits for certificates, diplomas, or degrees based on credit thresholds. ABC facilitates multiple entry-exit points, lifelong learning, and student mobility across institutions."
  },
  {
    id: "abc-benefits",
    question: "What are the benefits of the Academic Bank of Credits?",
    answer: "Benefits of the Academic Bank of Credits include: 1) Flexibility to pursue education across institutions and time periods, 2) Recognition of prior learning and work experience, 3) Customized degree paths tailored to student interests, 4) Ability to take breaks in education without losing credits, 5) Easier credit transfers between universities including international transfers, 6) Promotion of lifelong learning through continuous accumulation of credits, and 7) Support for interdisciplinary and multidisciplinary education by combining credits from different subject areas."
  },
  {
    id: "abc-registration",
    question: "How do I register for the Academic Bank of Credits?",
    answer: "To register for the Academic Bank of Credits: 1) Visit the official ABC portal (abc.gov.in), 2) Create an account using your Aadhaar number, mobile number, and email ID, 3) Complete the verification process, 4) Link your DigiLocker account for storing academic documents, and 5) Once registered, you'll receive a unique ABC ID that can be used to track and transfer credits across participating institutions. Your educational institution can also help facilitate the registration process."
  },
  {
    id: "abc-credit-system",
    question: "How do credits work in the Academic Bank of Credits system?",
    answer: "In the Academic Bank of Credits system: 1) One credit typically represents 15 hours of classroom teaching or 30 hours of laboratory work/field work, 2) A full-time semester usually comprises 20 credits (approximately 600 learning hours), 3) A 3-year bachelor's degree requires 120 credits, while a 4-year degree with research requires 160 credits, 4) Certificate courses equal 40 credits (1 year), diplomas equal 80 credits (2 years), 5) Credits have a 7-year validity period for most programs, and 6) Credits earned through SWAYAM, NPTEL, and other recognized online platforms are also eligible for deposit in the ABC."
  },
  
  // MULTIPLE ENTRY-EXIT
  {
    id: "multiple-entry-exit",
    question: "What is the multiple entry-exit system under NEP 2020?",
    answer: "The multiple entry-exit system under NEP 2020 allows students to pause and resume their education based on personal circumstances. Students can exit a program with appropriate certification: after 1 year with a certificate, after 2 years with a diploma, after 3 years with a bachelor's degree, and after 4 years with a bachelor's degree with research. Credits earned are stored in the Academic Bank of Credits and can be redeemed later. This system provides flexibility while recognizing completed education milestones."
  },
  {
    id: "entry-exit-advantages",
    question: "What are the advantages of multiple entry-exit options?",
    answer: "Advantages of multiple entry-exit options include: 1) Flexibility for students facing financial constraints or personal circumstances to pause studies without penalty, 2) Recognition of partial completion through certificates and diplomas, enhancing employability even without completing a full degree, 3) Opportunity to gain work experience between academic periods, 4) Reduced dropout rates as students can return to complete degrees, 5) Greater inclusivity for working professionals, women after marriage/childbirth, and those from disadvantaged backgrounds, and 6) Alignment with global education systems facilitating international mobility."
  },
  
  // NEP SAARTHI
  {
    id: "nep-saarthi-purpose",
    question: "What is NEP Saarthi?",
    answer: "NEP Saarthi is an initiative designed to guide educational institutions, educators, and students through the implementation of the National Education Policy 2020. As the name suggests ('Saarthi' meaning charioteer or guide), it serves as a navigator for the NEP journey, providing resources, training, mentorship, and support systems to facilitate effective adoption of NEP principles. NEP Saarthi creates bridges between policy makers and implementers to ensure smooth transition to the new educational framework."
  },
  {
    id: "nep-saarthi-services",
    question: "What services does NEP Saarthi provide?",
    answer: "NEP Saarthi provides a comprehensive suite of services including: 1) Training workshops for teachers and administrators on NEP implementation, 2) Curriculum redesign support aligned with NEP frameworks, 3) Technology integration assistance for digital education initiatives, 4) Consultation on establishing Academic Bank of Credits systems, 5) Guidance on multidisciplinary education approaches, 6) Resources for implementing mother tongue-based multilingual education, 7) Assessment reform strategies, and 8) Networking opportunities with experts and peer institutions implementing NEP successfully."
  },
  {
    id: "nep-saarthi-eligibility",
    question: "Who can benefit from NEP Saarthi?",
    answer: "NEP Saarthi's services are available to: 1) K-12 schools transitioning to the 5+3+3+4 structure, 2) Higher education institutions implementing multidisciplinary approaches, 3) Educational administrators planning NEP implementation strategies, 4) Teachers requiring professional development aligned with NEP pedagogies, 5) Parents seeking to understand NEP changes, 6) Students navigating new educational pathways, and 7) EdTech companies developing solutions for NEP implementation. Both public and private educational institutions across India are eligible for support."
  },
  {
    id: "nep-saarthi-resources",
    question: "What resources does NEP Saarthi offer?",
    answer: "NEP Saarthi offers diverse resources including: 1) Digital repositories of implementation guidelines and best practices, 2) Webinar series featuring education experts and successful implementers, 3) Toolkit for institutional NEP readiness assessment, 4) Templates for curriculum redesign aligned with NEP principles, 5) Training modules for faculty development, 6) Case studies of successful NEP implementation, 7) Networking platform connecting institutions for knowledge sharing, and 8) Consultation services for specific implementation challenges."
  },
  {
    id: "nep-saarthi-contact",
    question: "How can I contact NEP Saarthi?",
    answer: "You can contact NEP Saarthi through multiple channels: 1) Official website: www.nepsaarthi.org, 2) Email: info@nepsaarthi.org, 3) Helpline: +91-XXX-XXX-XXXX (available Monday to Friday, 9 AM to 5 PM), 4) The contact form on our website, 5) Social media platforms (@NEPSaarthi), or 6) Through physical workshops and events announced on our platform. Our team typically responds to queries within 48 hours."
  },
  
  // CHITKARA UNIVERSITY
  {
    id: "chitkara-nep-implementation",
    question: "How is Chitkara University implementing NEP 2020?",
    answer: "Chitkara University is implementing NEP 2020 through comprehensive reforms including: 1) Redesigned curricula offering multidisciplinary education with major-minor combinations, 2) Multiple entry-exit options at all program levels with appropriate certification, 3) Academic Bank of Credits integration for credit mobility and transfer, 4) Focus on experiential learning with 40% practical components in curricula, 5) Industry-academic partnerships for real-world skills development, 6) Integration of vocational education and certification, 7) Choice-based credit system with flexible course selection, and 8) Emphasis on research at undergraduate level through special research tracks."
  },
  {
    id: "chitkara-multidisciplinary",
    question: "What multidisciplinary programs does Chitkara University offer under NEP?",
    answer: "Chitkara University offers various multidisciplinary combinations under NEP including: 1) Engineering with Management, Design, or Liberal Arts minors, 2) Business studies with Computer Applications, Data Analytics, or Psychology minors, 3) Computer Science with specializations in AI, Gaming, or Healthcare Informatics, 4) Hotel Management with options in Entrepreneurship or Digital Marketing, 5) Health Sciences combined with Hospital Administration or Nutrition, 6) Pharmacy with Biotechnology or Business Management components, and 7) Architecture with Smart Cities or Sustainable Design focuses. Students can customize their education by choosing majors and minors across disciplines."
  },
  {
    id: "chitkara-abc-implementation",
    question: "How is the Academic Bank of Credits implemented at Chitkara University?",
    answer: "Chitkara University has fully integrated the Academic Bank of Credits (ABC) by: 1) Registering as an ABC-participating institution with the National Academic Depository, 2) Converting all courses to a standardized credit system aligned with UGC guidelines, 3) Creating a dedicated portal for students to track and transfer credits, 4) Establishing credit equivalency mechanisms with partner institutions nationally and internationally, 5) Implementing digital infrastructure for seamless credit deposit and redemption, 6) Training academic staff on ABC procedures, and 7) Providing student support services to navigate credit transfers and multiple entry-exit options."
  },
  {
    id: "chitkara-entry-exit",
    question: "What multiple entry-exit options are available at Chitkara University?",
    answer: "Chitkara University offers multiple entry-exit options across programs: 1) After 1 year: Certificate in the chosen discipline, 2) After 2 years: Diploma with specialization focus, 3) After 3 years: Bachelor's degree (General), 4) After 4 years: Bachelor's degree with Research or Bachelor's (Honours), 5) Credits earned remain valid for 7 years in the Academic Bank of Credits, 6) Students can exit and re-enter the same program or switch to related programs, and 7) Bridge courses are available for students returning after gaps or changing specializations."
  },
  {
    id: "chitkara-research-opportunities",
    question: "What research opportunities are available for students at Chitkara University under NEP?",
    answer: "Chitkara University offers extensive research opportunities aligned with NEP 2020: 1) Undergraduate Research Project tracks in the 4-year degree programs, 2) Research mentorship programs pairing students with faculty researchers, 3) Innovation and incubation centers supporting student startups, 4) Industry-sponsored research projects with real-world applications, 5) Research internships with partner organizations and R&D labs, 6) Annual research conferences and journals for student publications, 7) Interdisciplinary research groups tackling complex societal challenges, and 8) Research grants and travel support for presenting at national and international conferences."
  },
  {
    id: "chitkara-skill-development",
    question: "What skill development initiatives has Chitkara University implemented under NEP?",
    answer: "Chitkara University has implemented comprehensive skill development initiatives including: 1) Integration of 21st-century skills across curricula, 2) Industry certification courses embedded within degree programs, 3) Entrepreneurship development cells and startup incubators, 4) Dedicated skill labs for hands-on training, 5) Apprenticeship and internship programs with over 700 industry partners, 6) Soft skills and personality development courses, 7) Language proficiency programs in English and regional languages, and 8) Digital literacy and technology proficiency modules covering emerging technologies like AI, blockchain, and data analytics."
  },
  {
    id: "chitkara-international",
    question: "What international collaborations does Chitkara University have under NEP?",
    answer: "Chitkara University has established extensive international collaborations aligned with NEP's global outlook: 1) Academic partnerships with over 140 universities across 35 countries, 2) Dual degree programs with universities in USA, UK, Australia, and Canada, 3) Student and faculty exchange programs, 4) Joint research initiatives on global challenges, 5) International internship opportunities, 6) Global immersion programs for cultural exposure, 7) Visiting faculty arrangements bringing international expertise to campus, and 8) Credit transfer mechanisms with international universities aligned with the Academic Bank of Credits system."
  },
  {
    id: "chitkara-assessment",
    question: "How has Chitkara University reformed its assessment system under NEP?",
    answer: "Chitkara University has transformed its assessment approach under NEP through: 1) Continuous evaluation replacing heavy end-term examination focus, 2) Competency-based assessment measuring learning outcomes rather than memorization, 3) Project-based assessments simulating real-world challenges, 4) Portfolio development tracking student growth over time, 5) Peer assessment and self-assessment components developing critical thinking, 6) Industry participation in evaluation of practical skills, 7) Comprehensive grading considering cognitive and non-cognitive aspects, and 8) Digital assessment tools providing immediate feedback for improvement."
  },
  {
    id: "chitkara-faculty-development",
    question: "How is Chitkara University preparing faculty for NEP implementation?",
    answer: "Chitkara University prepares faculty for NEP implementation through: 1) Comprehensive Faculty Development Programs on NEP philosophy and practices, 2) Training in technology-enhanced teaching methodologies, 3) Workshops on developing multidisciplinary curricula, 4) Mentorship programs pairing experienced NEP practitioners with new faculty, 5) Research opportunities to contribute to NEP knowledge base, 6) Industry immersion for practical knowledge integration, 7) International exposure through collaborations with global institutions, and 8) Communities of practice where faculty share successful NEP implementation strategies."
  },
  {
    id: "chitkara-digital",
    question: "What digital infrastructure has Chitkara University developed for NEP implementation?",
    answer: "Chitkara University has established robust digital infrastructure including: 1) Learning Management System integrated with the Academic Bank of Credits, 2) Digital libraries with access to global repositories, 3) Virtual labs for remote experiential learning, 4) AI-powered personalized learning pathways, 5) Blockchain-based credential verification system, 6) Interactive virtual classrooms with advanced collaboration tools, 7) Student performance analytics dashboard for early intervention, and 8) Mobile applications for seamless access to educational resources and administrative services."
  },
  {
    id: "chitkara-nep-courses",
    question: "What new courses has Chitkara University introduced under NEP 2020?",
    answer: "Chitkara University has introduced several innovative courses aligned with NEP 2020: 1) B.Tech with specialization in Emerging Technologies (AI, IoT, Blockchain), 2) 4-year integrated BBA-MBA with research component, 3) B.Sc in Data Science with multiple exit options, 4) Bachelor's in Design Thinking and Innovation, 5) Integrated Health Sciences programs with interdisciplinary approaches, 6) Sustainable Development and Climate Action studies, 7) Digital Humanities integrating technology with liberal arts, and 8) Specialized programs in Gaming, Animation and Extended Reality aligned with industry requirements."
  },
  {
    id: "chitkara-admissions",
    question: "How can I apply to Chitkara University's NEP-aligned programs?",
    answer: "To apply to Chitkara University's NEP-aligned programs: 1) Visit the official website (www.chitkara.edu.in) and navigate to Admissions, 2) Select your preferred program and review the eligibility criteria, 3) Complete the online application form, 4) Pay the application fee online, 5) Schedule and appear for the entrance test or interview as applicable, 6) Merit lists are published on the website and communicated via email/SMS, 7) Selected candidates need to complete admission formalities including document verification and fee payment, 8) Orientation programs introduce students to the NEP framework and multiple pathways available."
  },
  
  // BENEFITS & OPPORTUNITIES
  {
    id: "nep-student-benefits",
    question: "How do students benefit from NEP 2020?",
    answer: "Students benefit from NEP 2020 through: 1) Flexible learning paths with multiple entry-exit options, 2) Holistic education developing cognitive and non-cognitive skills, 3) Credit-based system allowing customized degree structures, 4) Reduced exam stress with continuous assessment, 5) Enhanced employability through vocational integration and industry exposure, 6) Opportunity to pursue passion areas alongside core subjects, 7) Recognition of extracurricular activities in academic progression, 8) Mother tongue instruction improving conceptual understanding, 9) Digital literacy preparing for future workforce needs, and 10) Global competitiveness through internationalized curricula."
  },
  {
    id: "nep-career-opportunities",
    question: "What new career opportunities are emerging due to NEP 2020?",
    answer: "NEP 2020 is creating emerging career opportunities in: 1) Educational technology development and implementation, 2) Curriculum design for multidisciplinary approaches, 3) Assessment and evaluation specialists for competency-based models, 4) Vernacular content creation for mother tongue instruction, 5) Teacher training and professional development, 6) Educational administration with NEP expertise, 7) Academic counseling for flexible learning paths, 8) Research support for undergraduate research initiatives, 9) Industry-academia liaison roles, and 10) Specialized teaching positions in emerging interdisciplinary fields."
  },
  {
    id: "nep-vs-old-system",
    question: "How is education under NEP different from the previous system?",
    answer: "Education under NEP differs from the previous system in several key ways: 1) Shift from rigid structures to flexible pathways with multiple entry-exit options, 2) Move from single-discipline focus to multidisciplinary and holistic education, 3) Change from rote learning to critical thinking and creativity, 4) Transition from examination-centered to continuous assessment approaches, 5) Evolution from theory-heavy to experiential learning models, 6) Transformation from degree-focused to skills and competency orientation, 7) Shift from English-dominated to multilingual education, and 8) Change from institutional silos to collaborative education ecosystems."
  },
  
  // SPECIFIC NEP FEATURES
  {
    id: "nep-vocational",
    question: "How is vocational education integrated into NEP 2020?",
    answer: "NEP 2020 integrates vocational education through: 1) Introduction of vocational exposure from grade 6 onwards with hands-on experiences, 2) Vocational courses offered alongside academic subjects at secondary level, 3) Elimination of hard separation between academic and vocational streams, 4) Credit-based recognition of vocational skills in higher education, 5) Partnership with industry and local craftspeople for training, 6) Developing National Skills Qualifications Framework aligned with international standards, 7) Creation of dedicated vocational education centers in higher education institutions, and 8) Pathways for vocational students to transition to higher education."
  },
  {
    id: "nep-technology",
    question: "How does NEP 2020 incorporate technology in education?",
    answer: "NEP 2020 incorporates technology through: 1) Establishing the National Educational Technology Forum (NETF) for innovation exchange, 2) Developing digital infrastructure like the Digital India e-Learning platform, 3) Creating virtual labs and simulation-based learning environments, 4) Training teachers in effective technology use for pedagogy, 5) Promoting computational thinking and coding from middle school, 6) Supporting development of high-quality digital content in multiple languages, 7) Using AI for personalized learning and reducing dropout rates, and 8) Leveraging technology for improved educational planning, administration and assessment."
  },
  {
    id: "nep-teacher-education",
    question: "How does NEP 2020 improve teacher education?",
    answer: "NEP 2020 transforms teacher education through: 1) 4-year integrated B.Ed. programs with multidisciplinary exposure, 2) Mandatory continuous professional development for all teachers, 3) National Professional Standards for Teachers (NPST) defining career progression, 4) Performance assessment for tenure and promotion decisions, 5) Technology-based platforms for teacher training at scale, 6) Peer learning communities for sharing best practices, 7) Specialized teacher education for foundational literacy and numeracy, special education, and vocational education, and 8) Merit-based scholarships to attract talented individuals to teaching profession."
  },
  
  // OTHER QUESTIONS
  {
    id: "nep-covid-adaptation",
    question: "How has NEP 2020 adapted to post-COVID education needs?",
    answer: "NEP 2020 addresses post-COVID education needs through: 1) Emphasis on blended learning models combining online and offline approaches, 2) Development of digital infrastructure to bridge the digital divide, 3) Focus on socio-emotional learning addressing pandemic-related psychological impacts, 4) Flexibility in academic calendar and credit accumulation for learning disruptions, 5) Open and distance learning expansion for continued education during disruptions, 6) Alternative assessment strategies reducing dependence on physical examinations, 7) Teacher training for effective digital pedagogy, and 8) Resilience-building in educational institutions through technological preparedness."
  },
  {
    id: "nep-parents-role",
    question: "What is the role of parents under NEP 2020?",
    answer: "Parents play crucial roles under NEP 2020 including: 1) Active involvement in school governance through School Management Committees, 2) Supporting mother tongue education and linguistic diversity, 3) Facilitating holistic development by encouraging co-curricular activities, 4) Participating in parent-teacher partnerships for continuous assessment, 5) Contributing to community knowledge resources for local context teaching, 6) Supporting children's autonomous learning and critical thinking development, 7) Engaging with foundational literacy and numeracy initiatives at home, and 8) Participating in adult education programs to support intergenerational learning."
  },
  {
    id: "chitkara-scholarships",
    question: "What scholarships are available at Chitkara University under NEP programs?",
    answer: "Chitkara University offers several scholarships for NEP-aligned programs: 1) Merit-based Academic Excellence Scholarships covering 10-100% tuition fees, 2) Research Aptitude Scholarships for students pursuing 4-year research-focused degrees, 3) Sports and Cultural Achievement Scholarships for talented students, 4) Economically Disadvantaged Student Support with income-based fee waivers, 5) Girls in STEM Scholarships promoting gender diversity, 6) Rural Education Empowerment Scholarships for students from underserved regions, 7) Industry-sponsored Scholarships for specific skill development areas, and 8) Alumni Continuation Scholarships for students pursuing multiple degrees."
  },
  {
    id: "chitkara-placement",
    question: "What placement support does Chitkara University provide for NEP program graduates?",
    answer: "Chitkara University provides comprehensive placement support including: 1) Dedicated Career Development Center aligned with NEP's employability focus, 2) Industry-specific preparation through pre-placement training, 3) Multiple internship opportunities integrated into program structure, 4) Over 1500 recruiting companies visiting campus annually, 5) Specialized placement drives for interdisciplinary program graduates, 6) Entrepreneurship support for students pursuing startup ventures, 7) Alumni network connecting students with industry professionals, and 8) International placement opportunities through global university partners and multinational corporations."
  },
  {
    id: "nep-saarthi-workshops",
    question: "What workshops does NEP Saarthi conduct?",
    answer: "NEP Saarthi conducts various workshops including: 1) NEP Implementation Roadmap Planning for institutional leaders, 2) Curriculum Redesign for Multidisciplinary Education for faculty, 3) Technology Integration for NEP-aligned Teaching for educators, 4) Academic Bank of Credits Implementation for registrars and academic administrators, 5) Assessment Reform for Holistic Development for examination boards, 6) Mother Tongue Based Multilingual Education approaches, 7) Research Integration in Undergraduate Education for research mentors, and 8) NEP Awareness Sessions for parents and students navigating the new education landscape."
  },
  {
    id: "future-nep-developments",
    question: "What future developments are expected in NEP implementation?",
    answer: "Future NEP implementation developments include: 1) Full rollout of the National Higher Education Qualification Framework by 2025, 2) Comprehensive digital learning ecosystem through the National Digital Educational Architecture, 3) Expansion of the Academic Bank of Credits to include skill-based credits from non-traditional sources, 4) Further internationalization through Study in India programs and global partnerships, 5) Integration of emerging technologies like AR/VR, AI and blockchain in educational delivery, 6) Evolution of specialized multidisciplinary research universities, 7) Development of the National Education Technology Forum into a vibrant innovation hub, and 8) Continued transformation of single-stream colleges into multidisciplinary institutions."
  }
];