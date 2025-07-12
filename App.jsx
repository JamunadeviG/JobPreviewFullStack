import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* ───────── NAVBAR ───────── */}
      <nav className="navbar">
        <div className="nav‑left">
          <span className="logo">Logo</span>

          <ul className="nav‑links">
            <li className="active">Job preview</li>
            <li>Applicants</li>
            <li>Match</li>
            <li>Messages</li>
          </ul>
        </div>

        <div className="nav‑right">
          <span className="link">Payments</span>
          <span className="bell" title="Notifications"></span>
          <div className="avatar">A</div>
        </div>
      </nav>

      {/* ───────── MAIN WRAPPER ───────── */}
      <div className="container">
        {/* ---------- LEFT COLUMN ---------- */}
        <section className="content">
          {/* Header */}
          <header className="job‑header">
            <h1>
              Senior Product Designer
              <span className="posted">· posted 2 days ago</span>
              <span className="status">Open</span>
            </h1>

            <div className="meta">
              <span>📍 Delaware, USA</span>
              <span>💰 $300k‑$400k</span>
            </div>
          </header>

          {/* Tiny info grid */}
          <div className="info‑grid">
            <div>
              <p className="label">Skills Required</p>
              <div className="chips">
                <span>Figma</span>
                <span>Adobe Illustrator</span>
                <span>Adobe XD</span>
              </div>
            </div>

            <div>
              <p className="label">Preferred Language</p>
              <p>English</p>
            </div>

            <div>
              <p className="label">Type</p>
              <p>Full time</p>
            </div>

            <div>
              <p className="label">Years of Experience</p>
              <p>3+ Years</p>
            </div>
          </div>

          {/* Job description */}
          <article className="desc">
            <h2>About the job</h2>
            <ol>
              <li>Handle the UI/UX research design</li>
              <li>Research latest web application design trends</li>
              <li>Conceptualising and visualising ideas</li>
              <li>Create graphics content and related works</li>
            </ol>

            <p><strong>Benefits:</strong></p>
            <ul>
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>

            <p><strong>Schedule:</strong> Day shift</p>

            <p><strong>Supplemental pay types:</strong></p>
            <ul>
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>

            <p><strong>Work Location:</strong> In person</p>
          </article>

          {/* Company card */}
          <section className="company">
            <div>
              <h3>Atlassian</h3>

              <p className="label">Company size</p>
              <p>1k ‑ 2k Employees</p>

              <p className="label">Sector</p>
              <p>Information Technology, Infrastructure</p>

              <p className="label">Founded In</p>
              <p>2019</p>
            </div>

            <div>
              <p className="label">Type</p>
              <p>Private</p>

              <p className="label">Funding</p>
              <p>Bootstrapped</p>

              <p className="label">Founded By</p>
              <p>Scott Farquhar, Mike Cannon‑Brookes</p>
            </div>
          </section>
        </section>

        {/* ---------- RIGHT SIDEBAR ---------- */}
        <aside className="sidebar">
          <button className="btn ghost">Delete job</button>
          <button className="btn danger">Edit job</button>

          <ul className="stats">
            <li><span>Applicants</span><strong>400</strong></li>
            <li><span>Matches</span><strong>100</strong></li>
            <li><span>Messages</span><strong>147</strong></li>
            <li><span>Views</span><strong>800</strong></li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
