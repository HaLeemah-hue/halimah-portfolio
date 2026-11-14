import './App.css'
import NotFound from './NotFound'
import centrixLogin from './assets/centrix-login.jpg'
import centrixDashboard from './assets/centrix-dashboard.jpg'
import emalyticsLogo from './assets/creative/branding/emalytics-logo.jpg'

import amazingEnergy from './assets/creative/promotional/amazing-energy.jpg'
import leemahCreates from './assets/creative/promotional/leemah-creates.jpg'

import centrixIndependence from './assets/creative/social-media/centrix-independence.jpg'
import centrixJummah from './assets/creative/social-media/centrix-jummah.jpg'
import centrixNewWeek from './assets/creative/social-media/centrix-new-week.jpg'
import centrixAdVideo from './assets/creative/videos/centrix ad.mp4'
import emalyticsVideo from './assets/creative/videos/emalytics.mp4'
function App() {
  if (window.location.pathname !== '/') {
    return <NotFound />
  }

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand">HU<span>.</span></a>

      <div className="nav-links">
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#creative">Creative</a>
  <a href="#experience">Experience</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</div>

        <a href="#contact" className="nav-button">Let's Connect ↗</a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES & COLLABORATIONS
          </p>

          <h1>
            Hello, I'm <br />
            <span>Halimah Ubaji.</span>
          </h1>

          <h2>
            Science. Technology. <span>Creativity.</span>
          </h2>

          <p className="hero-description">
            A multidisciplinary professional exploring the intersection
            of science, technology, research and creative innovation.
            I enjoy transforming ideas into meaningful solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#about" className="secondary-button">
              More About Me
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-monogram">
            <span>H</span>
            <span>U</span>
          </div>

          <p className="side-caption">CURIOUS MIND. CREATIVE SPIRIT.</p>
        </div>

        <div className="hero-footer">
          <span>PORT HARCOURT, NIGERIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>© 2026 HALIMAH UBAJI</span>
        </div>
      </section>

      <section className="intro-section" id="about">
  <p className="section-label">01 / ABOUT ME</p>

  <h2>
    A background in science. <br />
    <span>A mind open to possibilities.</span>
  </h2>

  <p>
    I am Halimah Ubaji, a Human Physiology graduate from
    Rivers State University, Nigeria. My academic background
    introduced me to scientific thinking, human biology,
    research and evidence-based approaches to understanding
    complex problems.
  </p>

  <p>
    My professional journey has taken me beyond the sciences.
    Through teaching, creative direction and technology,
    I have developed an interest in finding practical ways
    to communicate ideas, solve problems and create useful
    solutions.
  </p>

  <p>
    I currently work in creative direction at Renewable
    Centrix Energy and Tech, where I explore branding,
    digital media and technology-driven initiatives.
    I have also developed the Centrix Solar Management
    System, a web application designed to improve business
    operations and record management.
  </p>

  <p>
    I am particularly interested in opportunities that
    allow me to combine analytical thinking, creativity,
    technology and continuous learning.
  </p>
</section>

      <section className="projects-section" id="projects">
  <p className="section-label">02 / SELECTED WORK</p>

  <h2>
    Ideas into <span>action.</span>
  </h2>

  <p>
    A selection of projects and experiences reflecting my
    interests in technology, creativity and scientific thinking.
  </p>

  <div className="project-grid">
    <article className="project-card">
      <span className="project-number">01</span>
            <div className="project-images">
  <div className="project-image">
    <img
      src={centrixLogin}
      alt="Centrix Solar Management System login page"
    />
  </div>

  <div className="project-image">
    <img
      src={centrixDashboard}
      alt="Centrix Solar Management System dashboard"
    />
  </div>
</div>
      <p className="project-category">TECHNOLOGY / SOFTWARE</p>
      <h3>Centrix Solar Management System</h3>
      <p>
        A web-based management application developed to
        streamline inventory, purchases, customers, invoices
        and installation records for a solar energy business.
      </p>
      <a href="#centrix-details" className="project-link">
  VIEW PROJECT DETAILS ↗
</a>
    </article>

    <article className="project-card">
      <span className="project-number">02</span>
      <p className="project-category">CREATIVE / BRANDING</p>
      <h3>Creative Direction & Branding</h3>
      <p>
        Creative and digital initiatives involving visual
        identity, graphic design, video content and brand
        communication at Renewable Centrix Energy and Tech.
      </p>
      <a href="#creative" className="project-link">
  EXPLORE CREATIVE WORK ↗
</a>
    </article>

    <article className="project-card">
      <span className="project-number">03</span>
      <p className="project-category">SCIENCE / RESEARCH</p>
      <h3>Human Physiology & Research</h3>
      <p>
        An academic foundation in human physiology, scientific
        reasoning and research, supported by clinical
        internship exposure at Rivers State University
        Teaching Hospital.
      </p>
     <a href="#experience" className="project-link">
  EXPLORE BACKGROUND ↗
</a>
    </article>
  </div>
</section>
<section className="project-details-section" id="centrix-details">
  <p className="section-label">PROJECT CASE STUDY / 01</p>

  <h2>
    Centrix Solar <span>Management System.</span>
  </h2>

  <p className="project-intro">
    A web-based business management application developed
    to digitise operational records and improve how a solar
    energy business manages its daily activities.
  </p>

  <div className="case-study-grid">

   <div className="case-study-item">
  <h3>The Challenge</h3>
  <p>
    Business records were traditionally maintained manually. This created a need for a more organised digital approach to managing inventory, purchases, customers and business transactions.
  </p>
</div>

    <div className="case-study-item">
      <h3>The Solution</h3>
      <p>
        I developed a centralised web application designed
        to manage business operations, maintain records
        and make important business information easier
        to access.
      </p>
    </div>

    <div className="case-study-item">
      <h3>Core Modules</h3>
      <p>
        Inventory, Purchases, Stock Out, Customers,
        Quotations, Invoices, Payments, Installations,
        Technicians and Reports.
      </p>
    </div>

    <div className="case-study-item">
      <h3>Technology Stack</h3>
      <p>
        React · Vite · JavaScript · Node.js · Express ·
        Prisma · PostgreSQL
      </p>
    </div>

   </div>
</section>
<section className="creative-section" id="creative">
  <p className="section-label">03 / CREATIVE PORTFOLIO</p>

  <h2>
    Creativity with <span>purpose.</span>
  </h2>

  <p className="creative-intro">
    A collection of branding, promotional designs, video
    productions and digital content created for different
    brands and initiatives.
  </p>

  <div className="creative-grid">

    <article className="creative-card">
      <img src={emalyticsLogo} alt="Emalytics Hub brand identity" />
      <h3>Emalytics Hub</h3>
      <p>Brand Identity</p>
    </article>

    <article className="creative-card">
      <img src={amazingEnergy} alt="Amazing Energy promotional design" />
      <h3>Amazing Energy & Tech</h3>
      <p>Promotional Design</p>
    </article>

    <article className="creative-card">
      <img src={leemahCreates} alt="Leemah Creates promotional design" />
      <h3>Leemah Creates</h3>
      <p>Brand Promotion</p>
    </article>

    <article className="creative-card">
      <img src={centrixIndependence} alt="Centrix Independence Day design" />
      <h3>Independence Day</h3>
      <p>Social Media Design</p>
    </article>

    <article className="creative-card">
      <img src={centrixJummah} alt="Centrix Jummah Mubarak design" />
      <h3>Jummah Mubarak</h3>
      <p>Social Media Design</p>
    </article>

    <article className="creative-card">
      <img src={centrixNewWeek} alt="Centrix New Week design" />
      <h3>New Week Campaign</h3>
      <p>Social Media Design</p>
    </article>

    <article className="creative-card">
      <video controls preload="metadata" playsInline>
        <source src={centrixAdVideo} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <h3>Centrix Advertisement</h3>
      <p>Video Production & Promotion</p>
    </article>

    <article className="creative-card">
      <video controls preload="metadata" playsInline>
        <source src={emalyticsVideo} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      <h3>Emalytics Hub</h3>
      <p>Brand Animation</p>
    </article>

  </div>
</section>
<section className="experience-section" id="experience">
  <p className="section-label">04 / PROFESSIONAL EXPERIENCE</p>

  <h2>
    Experience that <span>shapes perspective.</span>
  </h2>

  <div className="experience-list">

    <article className="experience-item">
      <span className="experience-date">JAN 2026 — PRESENT</span>
      <div>
        <h3>Creative Director</h3>
        <p className="experience-company">
          Renewable Centrix Energy and Tech
        </p>
        <p>
          Working across branding, creative direction, graphic design,
          video content, digital media and technology-driven initiatives.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <span className="experience-date">JUL 2024 — DEC 2025</span>
      <div>
        <h3>Teacher & Technology Representative</h3>
        <p className="experience-company">Stronghold Academy</p>
        <p>
          Combined teaching responsibilities with technology-related
          support and the use of digital tools in the educational environment.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <span className="experience-date">JAN 2024 — JUL 2024</span>
      <div>
        <h3>Teacher & Technology Representative</h3>
        <p className="experience-company">Divine Blueprint Academy</p>
        <p>
          Supported teaching activities and technology-related
          responsibilities within the school environment.
        </p>
      </div>
    </article>

    <article className="experience-item">
      <span className="experience-date">JUN 2023 — JAN 2024</span>
      <div>
        <h3>Clinical Intern</h3>
        <p className="experience-company">
          Rivers State University Teaching Hospital
        </p>
        <p>
          Gained supervised clinical exposure through rotations in
          Internal Medicine, Ophthalmology, Family Medicine,
          ENT and Haematology.
        </p>
      </div>
    </article>

  </div>
</section>
<section className="skills-section" id="skills">
  <p className="section-label">05 / SKILLS & EXPERTISE</p>

  <h2>
    What I bring <span>to the table.</span>
  </h2>

  <div className="skills-grid">
    <div className="skill-group">
      <h3>Technology</h3>
      <p>React · Vite · JavaScript · Node.js · Express · PostgreSQL · Prisma</p>
    </div>

    <div className="skill-group">
      <h3>Creative & Digital</h3>
      <p>Graphic Design · Branding · Video Editing · Canva · Photoshop · CapCut · Desygner</p>
    </div>

    <div className="skill-group">
      <h3>Science & Research</h3>
      <p>Human Physiology · Scientific Reasoning · Research Awareness · Evidence-Based Thinking</p>
    </div>

    <div className="skill-group">
      <h3>Professional</h3>
      <p>Teaching · Communication · Problem-Solving · Creative Direction · Collaboration</p>
    </div>
  </div>
</section>
<section className="contact-section" id="contact">
  <p className="section-label">06 / GET IN TOUCH</p>

  <h2>
    Let's create something <span>meaningful.</span>
  </h2>

  <p>
    I'm open to professional opportunities, collaborations,
    meaningful projects and conversations.
  </p>

  <div className="hero-buttons">
    <a href="mailto:halimahubaji@gmail.com" className="primary-button">
      Send Me an Email ↗
    </a>

    <a
      href="https://www.linkedin.com/in/halimah-ubaji-53538b273"
      target="_blank"
      rel="noreferrer"
      className="secondary-button"
    >
      Connect on LinkedIn ↗
    </a>

    <a
  href="https://wa.me/2349152395565?text=Hello%20Halimah%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  target="_blank"
  rel="noreferrer"
  className="secondary-button"
>
  Chat on WhatsApp ↗
</a>
  </div>
</section>

    </main>
  )
}

export default App