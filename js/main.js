/* ============================================================
   FEROZ NAGURU — PORTFOLIO  |  main.js
   ============================================================ */

// ──────────────── DATA ────────────────

const projects = [
  {
    id: 'invoice-tracker',
    name: 'Invoice Tracker',
    category: 'SaaS / FinTech',
    icon: '📄',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tagline: 'Full-stack invoice and payment management platform for freelancers and small businesses.',
    problem: 'Freelancers and small businesses maintain invoices and payment follow-ups manually in spreadsheets. There is no centralized system for tracking what has been paid, what is pending, and what requires follow-up.',
    description: 'Invoice Tracker is a web application designed to help freelancers and small businesses track invoices, clients, payments, outstanding amounts, and payment reminders from one place. It provides a centralized system with production-oriented architecture including authentication, database-level user isolation, reminder APIs, and Vercel Cron integration.',
    features: ['User authentication', 'Invoice creation & management', 'Client management', 'Payment tracking', 'Outstanding balance tracking', 'Invoice status management', 'Payment reminders', 'Scheduled reminder system', 'Dashboard-style financial overview', 'Secure user-specific data access'],
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL', 'Prisma ORM', 'Auth.js / NextAuth', 'Vercel', 'Resend'],
    liveUrl: 'https://invoice.techpick.tech/',
    sourceUrl: 'https://github.com/Feroz723/invoice',
  },
  {
    id: 'techpick',
    name: 'TechPick',
    category: 'Technology / Content Platform',
    icon: '🌐',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    tagline: 'Technology-focused web platform and product ecosystem hub.',
    problem: 'Building a cohesive technology brand requires not just content, but infrastructure for deploying and managing multiple products under one domain.',
    description: 'TechPick is a technology and gadget-focused web platform built around SEO-driven content, product discovery, and an expanding ecosystem of independently deployed web applications. It functions as the domain/brand under which several products are deployed, with a focus on technology and gadget-related content.',
    features: ['Technology/gadget content', 'Product-focused articles', 'SEO-oriented pages', 'Search-engine indexing setup', 'Product discovery structure', 'Subdomain product infrastructure'],
    tech: ['WordPress', 'Elementor', 'RankMath SEO', 'Google Search Console', 'AdSense', 'Vercel', 'Custom domains'],
    liveUrl: 'https://techpick.tech/',
    sourceUrl: null,
  },
  {
    id: 'money-autopsy',
    name: 'Money Autopsy',
    category: 'FinTech / Privacy',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    tagline: 'Privacy-first financial statement analyzer — zero server uploads, 100% in-browser.',
    problem: 'People want to understand their spending patterns but are uncomfortable uploading sensitive financial data to third-party servers.',
    description: 'Money Autopsy is a privacy-first financial statement analysis application. Users provide a bank or UPI statement and get a structured analysis of where their money went — without uploading financial data to a remote server. Privacy is part of the architecture, not just a UI claim. Processing flows: statement → browser → parsing → normalization → validation → analysis. No database, no cloud storage, no telemetry, no remote logging.',
    features: ['CSV, XLSX & text-based PDF support', 'HDFC & ICICI statement support', 'Spending patterns analysis', 'Cash-flow movement tracking', 'Recurring payment detection', 'Spending surge identification', 'Unusual transaction flagging', 'Balance reconciliation', 'In-browser-only processing', 'Integer arithmetic for money'],
    tech: ['JavaScript', 'In-browser processing', 'File parsing libraries', 'Zero-server architecture'],
    liveUrl: 'https://moneyautopsy.techpick.tech/',
    sourceUrl: 'https://github.com/Feroz723/money_autopsy',
  },
  {
    id: 'creatorcash',
    name: 'CreatorCash',
    category: 'Creator SaaS / FinTech',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
    tagline: 'Payment recovery and brand-deal management platform for content creators.',
    problem: 'Creators have brand deals, invoices, payment terms and follow-ups spread across spreadsheets, email and messaging apps.',
    description: 'CreatorCash centralizes brand deals, deliverables, invoices, payment deadlines, and outstanding balances while providing an automated overdue-payment recovery workflow. The distinctive Overdue Recovery Engine moves payments through stages: Payment Due → Reminder 1 → Reminder 2 → Escalation → Legal Notice → Resolved, generating appropriate follow-up messages at each stage.',
    features: ['Deal management (brand, deliverables, terms)', 'Payment tracking', 'Outstanding balance overview', 'Upcoming & overdue payment alerts', 'Overdue Recovery Engine', 'Automated follow-up message generation', 'Payment state automation', 'Authentication & sessions'],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Express', 'SQLite', 'Email generation'],
    liveUrl: 'https://creatorcash.techpick.tech/',
    sourceUrl: null,
  },
  {
    id: 'whoknowsme',
    name: 'WhoKnowsMe',
    category: 'Social / Consumer App',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)',
    tagline: 'Zero-login friendship trivia platform with live leaderboards and shareable scorecards.',
    problem: 'People want a fun way to test how well their friends know them, without the friction of creating accounts.',
    description: 'WhoKnowsMe is a zero-login friendship trivia platform. Create a quiz about yourself, share it with friends, friends answer, and compare results through live leaderboards and shareable 9:16 scorecards. Built with security controls including input sanitization, rate limiting, and protected quiz data.',
    features: ['No account required', 'Custom quiz creation', 'Question bank', 'Shareable quiz URLs', 'Live leaderboard', 'Shareable 9:16 scorecards', 'WhatsApp sharing', 'Mobile-friendly interface', 'Rate limiting', 'Input sanitization'],
    tech: ['Next.js', 'React', 'PostgreSQL', 'Drizzle ORM', 'API Routes', 'Vercel'],
    liveUrl: 'https://whoknowme.techpick.tech/',
    sourceUrl: 'https://github.com/Feroz723/whoknowme',
  },
  {
    id: 'halo',
    name: 'Halo',
    category: 'Android / Productivity',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    tagline: 'Offline-first Android task manager published on the Amazon Appstore.',
    problem: 'Most task management apps are overly complex. Users want simple, frictionless productivity without login walls.',
    description: 'Halo is an Android productivity/task-management application built around a deliberately simpler approach to task management. Published on the Amazon Appstore under the personal developer brand Prism Apps. The project demonstrates end-to-end product shipping: Android development, release preparation, app-store submission, privacy requirements, screenshots/listing preparation, testing, and actual distribution.',
    features: ['Five handcrafted themes', 'Swipe-to-complete', 'Swipe-to-delete', 'Daily streak tracking', 'Priority levels', 'Subtasks', 'Offline-first operation', 'No login required', 'Ad monetization via AdMob'],
    tech: ['Android', 'Google AdMob', 'Amazon Appstore'],
    liveUrl: 'https://www.linkedin.com/posts/feroz-web-developer_android-amazonappstore-productivity-activity-7474110520779005952-1ql9',
    sourceUrl: null,
  },
  {
    id: 'task-steel-nine',
    name: 'Task Steel Nine',
    category: 'Web Application',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)',
    tagline: 'A deployed web application built as part of product-focused full-stack development work.',
    problem: null,
    description: 'Task Steel Nine is a Vercel-hosted web application developed as part of product-focused full-stack development work. It represents one of several independently shipped products demonstrating deployment, hosting, and production readiness.',
    features: ['Full-stack architecture', 'Vercel deployment', 'Production-ready', 'Modern web technologies'],
    tech: ['Vercel', 'Modern Web Stack'],
    liveUrl: 'https://task-steel-nine-65.vercel.app/landing',
    sourceUrl: null,
  },
  {
    id: 'code-review',
    name: 'Code Review',
    category: 'Developer Tool',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #6441a5 0%, #2a0845 100%)',
    tagline: 'Web-based developer tool for automated and structured code-review workflows.',
    problem: 'Developers need streamlined tools for conducting thorough and structured code reviews.',
    description: 'Code Review is a web-based developer tool deployed on Vercel, built to explore automated and structured software code-review workflows. It targets the developer productivity space with tooling for analyzing and reviewing code.',
    features: ['Code review workflows', 'Structured analysis', 'Developer-focused UX', 'Web-based interface'],
    tech: ['Vercel', 'Web Technologies'],
    liveUrl: 'https://code-review-xi-five.vercel.app/',
    sourceUrl: null,
  },
  {
    id: 'emoji-merge',
    name: 'Emoji Merge Game',
    category: 'Android / Game',
    icon: '🎮',
    gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)',
    tagline: 'Casual Android merging game distributed via APKPure.',
    problem: null,
    description: 'Emoji Merge Game is a casual Android merging game built around combining emoji elements to progressively create higher-level objects. The project involved mobile game development, gameplay logic, touch interaction, progression mechanics, and Android distribution through APKPure.',
    features: ['Emoji merging mechanic', 'Progressive levels', 'Touch interaction', 'Gameplay progression', 'Android distribution'],
    tech: ['Android', 'Game development', 'APKPure distribution'],
    liveUrl: 'https://apkpure.com/p/com.emojimerge.game',
    sourceUrl: null,
  },
];

const certificates = [
  // ── Offline Internships (root folder) ──
  { name: 'YOZORA Technologies Internship', issuer: 'YOZORA Technologies Pvt Ltd', category: 'offline-internship', file: 'Internship Certificate_YZ-004.pdf', type: 'pdf', icon: '🏢', color: '#10b981' },
  { name: 'Enkonix Software Services Internship', issuer: 'Enkonix Software Services', category: 'offline-internship', file: 'NAGURU FEROZ .pdf.pdf', type: 'pdf', icon: '🏢', color: '#10b981' },

  // ── Online Internships (Achievements folder) ──
  { name: 'Data Analytics Internship', issuer: 'Slashmark IT Startup (AICTE)', category: 'online-internship', file: 'Achievements/Slashmark Internship Certificate.jpg', type: 'image', icon: '💼', color: '#06b6d4' },
  { name: 'Cognifyz Technologies Internship', issuer: 'Cognifyz Technologies', category: 'online-internship', file: 'Achievements/Cognifyz Technologies Internship certificate.pdf', type: 'pdf', icon: '💼', color: '#06b6d4' },
  { name: 'SmartInternz AI Internship', issuer: 'SmartInternz', category: 'online-internship', file: 'Achievements/SmartInternz.pdf', type: 'pdf', icon: '💼', color: '#06b6d4' },
  { name: 'SmartInternz Web Development', issuer: 'SmartInternz', category: 'online-internship', file: 'Achievements/certificate - smartinternz.pdf', type: 'pdf', icon: '💼', color: '#06b6d4' },
  { name: 'Edutantra Certificate', issuer: 'Edutantra', category: 'online-internship', file: 'Achievements/Edutantr Certificate.pdf', type: 'pdf', icon: '💼', color: '#06b6d4' },

  // ── Cloud & DevOps ──
  { name: 'AWS Cloud Practitioner (Gold — 74%)', issuer: 'Amazon Web Services', category: 'cloud', file: 'Achievements/AWS.pdf', type: 'pdf', icon: '☁️', color: '#f59e0b' },
  { name: 'Google Cloud Certification', issuer: 'Google Cloud', category: 'cloud', file: 'Achievements/Google Cloud.pdf', type: 'pdf', icon: '☁️', color: '#f59e0b' },
  { name: 'Docker Fundamentals', issuer: 'Simplilearn', category: 'cloud', file: 'Achievements/Docker_Simplilearn.pdf', type: 'pdf', icon: '🐳', color: '#f59e0b' },

  // ── Data & Analytics ──
  { name: 'Foundations of Data, Data Everywhere', issuer: 'Google (Coursera)', category: 'data', file: 'Achievements/Foundations of Data, Data Everywhere - Google.pdf', type: 'pdf', icon: '📊', color: '#7c3aed' },
  { name: 'Data Analysis with Python', issuer: 'IBM (Cognitive Class)', category: 'data', file: 'Achievements/Data Analysis Python - Cognitive Class.pdf', type: 'pdf', icon: '📊', color: '#7c3aed' },
  { name: 'Data Analytics & Visualization', issuer: 'Accenture (Forage)', category: 'data', file: 'Achievements/Data Analytics and Visualization - Accenture - Forage.pdf', type: 'pdf', icon: '📊', color: '#7c3aed' },
  { name: 'Data Visualization', issuer: 'Tata (Forage)', category: 'data', file: 'Achievements/Data Visualization - Tata - Forage.pdf', type: 'pdf', icon: '📈', color: '#7c3aed' },
  { name: 'Excel Skills', issuer: 'JP Morgan (Forage)', category: 'data', file: 'Achievements/Forage-JPMorgan-Excel.pdf', type: 'pdf', icon: '📈', color: '#7c3aed' },
  { name: 'Introduction to Analytics', issuer: 'Great Learning', category: 'data', file: 'Achievements/Introduction to Analytics - Great Learning.jpg', type: 'image', icon: '📈', color: '#7c3aed' },
  { name: 'SQL for Data Science', issuer: 'Great Learning', category: 'data', file: 'Achievements/SQL for Data Science - great Leaning.jpg', type: 'image', icon: '📈', color: '#7c3aed' },
  { name: 'Data Analysis with Excel', issuer: 'Online Course', category: 'data', file: 'Achievements/Data Analysis - Excel.jpg', type: 'image', icon: '📈', color: '#7c3aed' },
  { name: 'Introduction to Microsoft Excel', issuer: 'Coursera', category: 'data', file: 'Achievements/Introduction to Microsoft Excel - Coursera.pdf', type: 'pdf', icon: '📈', color: '#7c3aed' },
  { name: 'ML and DS Real Life Projects', issuer: 'Udemy', category: 'data', file: 'Achievements/Udemy - ML AND DS Real Life Projects.pdf', type: 'pdf', icon: '🤖', color: '#7c3aed' },

  // ── Programming ──
  { name: 'SQL Basic Certificate', issuer: 'HackerRank', category: 'programming', file: 'Achievements/SQL Basic - Hackerrank.png', type: 'image', icon: '💻', color: '#ec4899' },
  { name: 'Digital Fluency', issuer: 'FutureSkills Prime (NASSCOM)', category: 'programming', file: 'Achievements/ChatGPT using excel - FutureskillsPrime.png', type: 'image', icon: '💻', color: '#ec4899' },
  { name: 'GeeksforGeeks Certificate', issuer: 'GeeksforGeeks', category: 'programming', file: 'Achievements/gfg/5c236c92ae82ed611a6a27e77988bd4e.pdf', type: 'pdf', icon: '💻', color: '#ec4899' },
  { name: 'edX Certification', issuer: 'edX', category: 'programming', file: 'Achievements/edx.pdf', type: 'pdf', icon: '💻', color: '#ec4899' },

  // ── Coursera Specialization Certificates ──
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera 1IBGWJ5ECKGA.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera 3GPUMG3R5PDO.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera H8VQYY5MWJ99.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera PZGJ4PR4H9ML.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera RAVC1657Z58G.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
  { name: 'Coursera Professional Certificate', issuer: 'Coursera', category: 'data', file: 'Achievements/Coursera W8EUG4QQA75F.pdf', type: 'pdf', icon: '🎓', color: '#7c3aed' },
];

const skills = [
  { icon: '🐍', title: 'Languages', tags: ['Python', 'SQL', 'JavaScript', 'TypeScript'] },
  { icon: '🤖', title: 'AI & Machine Learning', tags: ['Machine Learning', 'NLP', 'Supervised Learning', 'Unsupervised Learning'] },
  { icon: '📊', title: 'Data Science', tags: ['Data Analysis', 'Model Evaluation', 'EDA', 'Pandas'] },
  { icon: '⚛️', title: 'Web Development', tags: ['Next.js', 'React', 'Flask', 'Tailwind CSS', 'REST APIs', 'Node.js'] },
  { icon: '🗄️', title: 'Databases', tags: ['PostgreSQL', 'SQLite', 'MySQL', 'Prisma', 'Drizzle ORM'] },
  { icon: '🛠️', title: 'Tools & DevOps', tags: ['Git', 'GitHub Actions', 'Vercel', 'Docker', 'n8n', 'WordPress'] },
];

const experience = [
  {
    date: 'Feb 2026 — Jun 2026',
    title: 'Web Development Intern',
    company: 'YOZORA Technologies Pvt Ltd · Hyderabad',
    points: [
      'Developed an ELearning platform for streaming online courses and internships, including integration of a payment gateway for course enrollments.',
      'Collaborated with cross-functional teams using React.js and Node.js to build user-friendly interfaces and back-end APIs.'
    ]
  },
  {
    date: 'Jun 2025 — Sep 2025',
    title: 'Web Development Intern',
    company: 'Enkonix Software Services · Bengaluru',
    points: [
      'Built full-stack web projects using WordPress, React, Node.js, and Python, creating dynamic front-end interfaces and robust back-end APIs.',
      'Developed automation scripts to deliver efficient, scalable, and user-friendly applications across multiple platforms.'
    ]
  },
];

const contacts = [
  { icon: '📧', title: 'Email', value: 'fferoz112233@gmail.com', link: 'mailto:fferoz112233@gmail.com' },
  { icon: '📱', title: 'Phone', value: '+91-8096729581', link: 'tel:+918096729581' },
  { icon: '💻', title: 'GitHub', value: 'github.com/Feroz723', link: 'https://github.com/Feroz723' },
  { icon: '🔗', title: 'LinkedIn', value: 'feroz-web-developer', link: 'https://linkedin.com/in/feroz-web-developer' },
  { icon: '🌐', title: 'Portfolio', value: 'portfolio-mine-pied.vercel.app', link: 'https://portfolio-mine-pied.vercel.app' },
  { icon: '🚀', title: 'TechPick', value: 'techpick.tech', link: 'https://techpick.tech' },
];


// ──────────────── THREE.JS 3D SCENE ────────────────

let threeScene, threeCamera, threeRenderer, shapes = [], particles;
let mouse = { x: 0, y: 0 };

function initThreeJS() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  threeScene = new THREE.Scene();
  threeCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  threeCamera.position.z = 20;

  threeRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  threeRenderer.setSize(window.innerWidth, window.innerHeight);
  threeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  threeRenderer.setClearColor(0x000000, 0);

  // Colors for the shapes
  const colors = [0x7c3aed, 0x06b6d4, 0xec4899, 0xa855f7, 0x3b82f6];
  const geometries = [
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.OctahedronGeometry(1, 0),
    new THREE.TorusGeometry(0.7, 0.25, 8, 16),
    new THREE.DodecahedronGeometry(0.8, 0),
    new THREE.TetrahedronGeometry(0.9, 0),
  ];

  // Create floating wireframe shapes
  for (let i = 0; i < 18; i++) {
    const geo = geometries[Math.floor(Math.random() * geometries.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const scale = Math.random() * 1.2 + 0.4;

    const mat = new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true,
      transparent: true,
      opacity: Math.random() * 0.1 + 0.04,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 35,
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 15 - 5
    );
    mesh.scale.set(scale, scale, scale);
    mesh.userData = {
      rotSpeedX: (Math.random() - 0.5) * 0.004,
      rotSpeedY: (Math.random() - 0.5) * 0.004,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: Math.random() * 0.3 + 0.2,
      floatAmplitude: Math.random() * 0.5 + 0.3,
      baseY: mesh.position.y,
    };
    threeScene.add(mesh);
    shapes.push(mesh);
  }

  // Particle field
  const particleCount = 400;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 60;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x7c3aed,
    size: 0.06,
    transparent: true,
    opacity: 0.35,
  });
  particles = new THREE.Points(particleGeo, particleMat);
  threeScene.add(particles);

  // Mouse parallax
  document.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Resize
  window.addEventListener('resize', () => {
    threeCamera.aspect = window.innerWidth / window.innerHeight;
    threeCamera.updateProjectionMatrix();
    threeRenderer.setSize(window.innerWidth, window.innerHeight);
  });

  animateThree();
}

function animateThree() {
  requestAnimationFrame(animateThree);
  const time = performance.now() * 0.001;

  shapes.forEach((shape) => {
    shape.rotation.x += shape.userData.rotSpeedX;
    shape.rotation.y += shape.userData.rotSpeedY;
    shape.position.y = shape.userData.baseY + Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * shape.userData.floatAmplitude;
  });

  if (particles) {
    particles.rotation.y += 0.0002;
    particles.rotation.x += 0.0001;
  }

  // Mouse parallax
  threeCamera.position.x += (mouse.x * 1.5 - threeCamera.position.x) * 0.02;
  threeCamera.position.y += (-mouse.y * 1.0 - threeCamera.position.y) * 0.02;
  threeCamera.lookAt(threeScene.position);

  threeRenderer.render(threeScene, threeCamera);
}


// ──────────────── DOM GENERATION ────────────────

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = skills.map((s, i) => `
    <div class="skill-card reveal reveal-delay-${(i % 3) + 1}">
      <span class="skill-icon">${s.icon}</span>
      <h3>${s.title}</h3>
      <div class="skill-tags">
        ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = experience.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${exp.date}</div>
      <h3>${exp.title}</h3>
      <div class="timeline-company">${exp.company}</div>
      <ul>${exp.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = projects.map((p, i) => `
    <div class="project-card reveal reveal-delay-${(i % 3) + 1}" data-project="${p.id}">
      <div class="project-preview" style="background: ${p.gradient}">
        <span class="project-preview-icon">${p.icon}</span>
        <span class="project-category-badge">${p.category}</span>
        <div class="project-preview-overlay"></div>
      </div>
      <div class="project-info">
        <h3>${p.name}</h3>
        <p>${p.tagline}</p>
        <div class="project-tech-mini">
          ${p.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}
          ${p.tech.length > 4 ? `<span>+${p.tech.length - 4}</span>` : ''}
        </div>
        <div class="project-actions">
          <a href="${p.liveUrl}" target="_blank" class="btn btn-primary btn-sm" onclick="event.stopPropagation()">Live ↗</a>
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${p.id}')">Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertificates() {
  const filterContainer = document.getElementById('cert-filters');
  const grid = document.getElementById('certs-grid');

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'offline-internship', label: 'Offline Internships' },
    { key: 'online-internship', label: 'Online Internships' },
    { key: 'cloud', label: 'Cloud & DevOps' },
    { key: 'data', label: 'Data & Analytics' },
    { key: 'programming', label: 'Programming' },
  ];

  filterContainer.innerHTML = categories.map((c, i) => `
    <button class="cert-filter-btn${i === 0 ? ' active' : ''}" data-filter="${c.key}">${c.label}</button>
  `).join('');

  grid.innerHTML = certificates.map((cert, i) => {
    const badgeClass = cert.category.includes('internship') ? (cert.category === 'offline-internship' ? 'offline' : 'online') : 'certification';
    const badgeText = cert.category === 'offline-internship' ? 'Offline Internship' :
                      cert.category === 'online-internship' ? 'Online Internship' :
                      cert.category === 'cloud' ? 'Cloud & DevOps' :
                      cert.category === 'data' ? 'Data & Analytics' : 'Programming';
    return `
      <div class="cert-card reveal" data-category="${cert.category}" data-index="${i}">
        <div class="cert-icon" style="background: ${cert.color}22; color: ${cert.color}">${cert.icon}</div>
        <div class="cert-info">
          <h4>${cert.name}</h4>
          <p>${cert.issuer}</p>
          <span class="cert-badge ${badgeClass}">${badgeText}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderContacts() {
  const grid = document.getElementById('contact-grid');
  grid.innerHTML = contacts.map(c => `
    <a href="${c.link}" target="_blank" class="contact-card reveal">
      <span class="contact-icon">${c.icon}</span>
      <h3>${c.title}</h3>
      <p>${c.value}</p>
    </a>
  `).join('');
}


// ──────────────── MODALS ────────────────

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');

  body.innerHTML = `
    <div class="modal-hero" style="background: ${project.gradient}">
      <span class="modal-hero-icon">${project.icon}</span>
      <div class="modal-hero-overlay"></div>
    </div>
    <h2 class="modal-project-title">${project.name}</h2>
    <div class="modal-project-category">${project.category}</div>

    ${project.problem ? `
    <div class="modal-section">
      <h4>🎯 The Problem</h4>
      <p>${project.problem}</p>
    </div>` : ''}

    <div class="modal-section">
      <h4>📋 Overview</h4>
      <p>${project.description}</p>
    </div>

    <div class="modal-section">
      <h4>✨ Key Features</h4>
      <ul class="modal-features">
        ${project.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4>🛠️ Technology Stack</h4>
      <div class="modal-tech">
        ${project.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>

    <div class="modal-links">
      <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">View Live ↗</a>
      ${project.sourceUrl ? `<a href="${project.sourceUrl}" target="_blank" class="btn btn-outline">Source Code</a>` : ''}
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openCertModal(index) {
  const cert = certificates[index];
  if (!cert) return;

  if (cert.type === 'pdf') {
    // PDFs open in new tab
    window.open(cert.file, '_blank');
    return;
  }

  // Images show in lightbox
  const modal = document.getElementById('cert-modal');
  const body = document.getElementById('cert-modal-body');

  body.innerHTML = `
    <img src="${cert.file}" alt="${cert.name}" class="cert-preview-img" loading="lazy">
    <h3 class="cert-preview-title">${cert.name}</h3>
    <p class="cert-preview-issuer">${cert.issuer}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}


// ──────────────── CERTIFICATE FILTERS ────────────────

function initCertFilters() {
  document.getElementById('cert-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.cert-filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // Update active button
    document.querySelectorAll('.cert-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    document.querySelectorAll('.cert-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });

  // Click to view certificate
  document.getElementById('certs-grid').addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (!card) return;
    openCertModal(parseInt(card.dataset.index));
  });
}


// ──────────────── NAVIGATION ────────────────

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close menu on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}


// ──────────────── SCROLL REVEAL ────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}


// ──────────────── 3D CARD TILT ────────────────

function initCardTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = (y - cy) / cy * -4;
      const rotateY = (x - cx) / cx * 4;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}


// ──────────────── MODAL CLOSE HANDLERS ────────────────

function initModals() {
  // Close on overlay/button click
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeModals);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModals();
  });
}


// ──────────────── LOADING SCREEN ────────────────

function hideLoader() {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 800);
}


// ──────────────── INIT ────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Render all dynamic content
  renderSkills();
  renderExperience();
  renderProjects();
  renderCertificates();
  renderContacts();

  // Initialize features
  initThreeJS();
  initNavigation();
  initModals();
  initCertFilters();

  // Wait for DOM to settle then init reveal + tilt
  requestAnimationFrame(() => {
    initScrollReveal();
    initCardTilt();
  });

  // Hide loader
  hideLoader();
});
