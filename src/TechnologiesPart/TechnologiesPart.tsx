import "./styles/TechnologiesPart.scss";

export const TechnologiesPart: React.FC = () => {
  return (
    <section id="skills" className="technologiesPart">
      <div className="technologiesIntro">
        <h2 className="mainTechnologiesPart">
          I like challenges, so I am always ready to learn new technologies.
        </h2>
        <p className="secondaryTechnologiesPart">
          Front-end and back-end development.
          <br />
          English: Upper-Intermediate (B2).
        </p>
      </div>

      <div className="cvDetails">
        <div>
          <h2>Skills</h2>
          <dl className="skillsList">
            <dt>Languages &amp; core</dt>
            <dd>TypeScript, JavaScript (ES6+), HTML5, CSS3, Sass (SCSS)</dd>
            <dt>Frameworks &amp; libraries</dt>
            <dd>
              React, Redux, Next.js, Monorepo, Material UI, Tailwind CSS,
              TSS-react, Bootstrap
            </dd>
            <dt>AI &amp; agent workflows</dt>
            <dd>
              AI coding assistants for development, debugging, code review and
              documentation. Custom skills for Codex and Claude.
            </dd>
            <dt>Back-end &amp; databases</dt>
            <dd>
              Node.js, Express, REST APIs, Fetch API, WebSockets, SQL, Firebase
            </dd>
            <dt>SEO &amp; analytics</dt>
            <dd>
              Meta tags, structured data, Open Graph, sitemaps, Mixpanel,
              AppsFlyer, A/B testing
            </dd>
            <dt>Tools &amp; workflow</dt>
            <dd>
              Git/GitHub, npm, Webpack, Trello, VS Code, WebStorm, IntelliJ
              IDEA, Chrome DevTools, React DevTools, SDLC, Agile (Scrum, Kanban)
            </dd>
            <dt>Design</dt>
            <dd>Figma, Photoshop</dd>
          </dl>
        </div>

        <div>
          <h2>Experience</h2>
          <article className="experienceEntry">
            <h3>Breeze</h3>
            <p>Frontend Developer · Full-time · Mar 2024–Present</p>
            <p>
              React, Next.js, TypeScript and Sass applications. SEO and
              pre-rendering, Material UI components, Mixpanel and AppsFlyer
              analytics, A/B testing and cross-functional Agile/Scrum delivery.
            </p>
          </article>
          <article className="experienceEntry">
            <h3>WEB DEV &amp; SEO</h3>
            <p>Frontend Developer · Part-time · Sep 2023–Mar 2024</p>
            <p>
              Responsive React interfaces with HTML, CSS, JavaScript and
              TypeScript. Reusable components and collaboration with project
              managers and clients to clarify requirements and deliver projects.
            </p>
          </article>

          <h2>Education</h2>
          <h3>Lviv Polytechnic National University</h3>
          <p>Bachelor&apos;s Degree in International Economics · 2017–2021</p>
          <p>
            Full Stack Developer and Java courses at Mate academy. Frontend
            courses on Udemy. Coding practice on Codewars and LeetCode. English
            course at Englishdom.
          </p>
        </div>
      </div>
    </section>
  );
};
