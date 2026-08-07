import React, { useState, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaArrowLeft, FaArrowRight, FaXmark } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

interface Project {
  id: string;
  title: string;
  category: string;
  tools: string[];
  image: string;
  description: string;
  liveDemoUrl: string;
  caseStudyUrl: string;
  overview: string;
  problem: string;
  solution: string;
  challenges: string;
  outcome: string;
  details: string[];
}

const projectsData: Project[] = [
  {
    id: "01",
    title: "Student Data Analysis Dashboard",
    category: "Data Analytics",
    tools: ["Excel", "SQL", "Data Cleaning", "Data Visualization", "Spreadsheets"],
    image: "/images/student_analysis.png",
    description: "An in-depth performance analysis platform aggregating academic metrics. Uses SQL queries for robust data cleaning and Excel for interactive dashboard designs, exposing grade distributions, class averages, and student performance tracking.",
    liveDemoUrl: "https://github.com/sahilsah645/student-data-analysis",
    caseStudyUrl: "#",
    overview: "An academic analysis platform designed to process, aggregate, and visualize student performance records.",
    problem: "Classroom metrics and grade histories were scattered across multiple spreadsheets, making it difficult for educators to track performance trends or find students needing support.",
    solution: "Built a centralized analysis framework using SQL database queries for ingestion and Excel for high-fidelity interactive dashboard visualizations.",
    challenges: "Handling missing/dirty student data records and resolving data types between term periods.",
    outcome: "Class averages and performance metrics are updated automatically, saving hours of manual calculation and exposing actionable grade distributions.",
    details: [
      "Aggregated multi-term student grades and attendance metrics.",
      "Conducted extensive data cleaning and structuring using SQL.",
      "Designed dynamic dashboards with Excel formulas, Pivot tables, and Slicers."
    ]
  },
  {
    id: "02",
    title: "Sales Data Visualization Project",
    category: "Data Visualization",
    tools: ["Excel", "SQL", "Charts & Dashboards", "Growth Metrics", "Sales Analytics"],
    image: "/images/sales_visualization.png",
    description: "An executive-level sales tracking and growth performance visualizer. Integrates relational sales databases using SQL aggregation to display month-over-year revenue velocity, regional trends, and store-wise growth metrics.",
    liveDemoUrl: "https://github.com/sahilsah645/sales-visualization",
    caseStudyUrl: "#",
    overview: "A retail business analytics system tracking revenue velocity and store performance metrics.",
    problem: "Relational database sales histories were too large to query manually for business reports, hiding month-over-month growth trends.",
    solution: "Implemented SQL query aggregation scripts and built a premium executive dashboard in Excel with custom slicers and growth velocity charts.",
    challenges: "Optimizing SQL query speeds over hundreds of thousands of sales entries.",
    outcome: "Enabled executives to monitor store-wise growth velocity in real-time, highlighting underperforming regions instantly.",
    details: [
      "Consolidated retail sales histories using complex SQL JOINs and GROUP BY queries.",
      "Developed high-impact charts and KPI gauges in Excel for executive review.",
      "Highlighted regional trends and store growth velocities in clean, readable reports."
    ]
  },
  {
    id: "03",
    title: "Interactive 3D Portfolio",
    category: "Web Development",
    tools: ["React", "TypeScript", "Three.js", "GSAP Animations", "CSS", "Rapier Physics"],
    image: "/images/3d_portfolio.png",
    description: "A highly customized web showcase featuring advanced 3D elements and physics. Built on React Three Fiber and Rapier physics for interactive falling tech stack spheres, with smooth GSAP animations and responsive layout mechanics.",
    liveDemoUrl: "http://localhost:5173",
    caseStudyUrl: "#",
    overview: "An interactive digital showroom featuring 3D physics and rigid-body calculations.",
    problem: "Traditional developer portfolios are flat text pages that fail to engage modern recruiters or showcase advanced WebGL skills.",
    solution: "Built a React-based Three.js interface using React Three Fiber, GSAP ScrollTrigger timelines, and Rapier rigid-body physics for falling spheres.",
    challenges: "Ensuring 3D scene loading performance and handling viewport scaling across mobile devices.",
    outcome: "A high-performance interactive portfolio that renders at a smooth 60fps and has a stunning visual impact on visitors.",
    details: [
      "Loaded and rendered a customized 3D character using React Three Fiber.",
      "Added real-time rigid body physics and collisions via Rapier.",
      "Engineered scroll-based timeline animations using GSAP ScrollTrigger."
    ]
  },
  {
    id: "04",
    title: "Online Loan Management System",
    category: "Web Application",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design", "Data Tracking"],
    image: "/images/loan_management.png",
    description: "A fully responsive Online Loan Application and Management portal. Designed with HTML5, CSS3, and Bootstrap, enabling users to register and apply for digital loans while allowing system administrators to search, track, and approve/reject applications in real-time.",
    liveDemoUrl: "https://sahilsah645.github.io/Loan-Management-System/",
    caseStudyUrl: "https://github.com/sahilsah645/Loan-Management-System",
    overview: "A responsive online application portal managing debtor applications and administrative reviews.",
    problem: "Manual loan processes involve complex paper trails, slow turnaround times, and lack transparency for both applicants and lenders.",
    solution: "Developed a Bootstrap-powered frontend application enabling debtors to register, calculate interest, and submit loans, with an admin control dashboard to search and review.",
    challenges: "Managing client-side database states securely and designing a clean double-panel dashboard layout.",
    outcome: "A fully digital, responsive flow that processes mock applications instantly and lets admins review records dynamically.",
    details: [
      "Designed clean login and registration interfaces for debtors and system administrators.",
      "Created dynamic data-driven admin tables to review, search, and approve/reject pending loans.",
      "Utilized modern Bootstrap grids to ensure a seamless layout across desktop and mobile devices."
    ]
  }
];

const Work = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [demoIdx, setDemoIdx] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // States for Student Dashboard Demo
  const [studentSearch, setStudentSearch] = useState("");
  const [studentClass, setStudentClass] = useState("All");
  const [studentMinAttendance, setStudentMinAttendance] = useState(0);

  // States for Sales Dashboard Demo
  const [salesRegion, setSalesRegion] = useState("All");
  const [salesCategory, setSalesCategory] = useState("All");

  // States for 3D Portfolio Control Demo
  const [renderMode, setRenderMode] = useState("Textured");
  const [lightTheme, setLightTheme] = useState("Cyberpunk");
  const [animSpeed, setAnimSpeed] = useState(1.0);

  // States for Loan Management Demo
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanInterest, setLoanInterest] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(24);
  const [applicantName, setApplicantName] = useState("");
  const [applicantIncome, setApplicantIncome] = useState("");
  const [loanStatus, setLoanStatus] = useState<string | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -640, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 640, behavior: "smooth" });
    }
  };

  const openModal = (idx: number) => {
    setSelectedIdx(idx);
  };

  const closeModal = () => {
    setSelectedIdx(null);
  };

  const openDemo = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setDemoIdx(idx);
    // Reset states
    setStudentSearch("");
    setStudentClass("All");
    setStudentMinAttendance(0);
    setSalesRegion("All");
    setSalesCategory("All");
    setRenderMode("Textured");
    setLightTheme("Cyberpunk");
    setAnimSpeed(1.0);
    setLoanAmount(15000);
    setLoanInterest(8.5);
    setLoanTenure(24);
    setApplicantName("");
    setApplicantIncome("");
    setLoanStatus(null);
  };

  const closeDemo = () => {
    setDemoIdx(null);
  };

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % projectsData.length);
    }
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + projectsData.length) % projectsData.length);
    }
  };

  const currentProject = selectedIdx !== null ? projectsData[selectedIdx] : null;
  const currentDemoProject = demoIdx !== null ? projectsData[demoIdx] : null;

  // 1. Render Student Dashboard Demo Data & Logic
  const renderStudentDemo = () => {
    const students = [
      { id: 1, name: "Sahil Kumar", class: "Class A", grade: 88, attendance: 92, status: "Pass" },
      { id: 2, name: "Rahul Singh", class: "Class A", grade: 42, attendance: 65, status: "Fail" },
      { id: 3, name: "Aman Gupta", class: "Class B", grade: 76, attendance: 88, status: "Pass" },
      { id: 4, name: "Nisha Kumari", class: "Class B", grade: 91, attendance: 95, status: "Pass" },
      { id: 5, name: "Vikram Raj", class: "Class C", grade: 54, attendance: 78, status: "Pass" },
      { id: 6, name: "Pooja Sharma", class: "Class C", grade: 38, attendance: 50, status: "Fail" },
      { id: 7, name: "Sumit Verma", class: "Class A", grade: 67, attendance: 80, status: "Pass" },
      { id: 8, name: "Kiran Oraon", class: "Class B", grade: 82, attendance: 87, status: "Pass" },
    ];

    const filtered = students.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase());
      const matchClass = studentClass === "All" || s.class === studentClass;
      const matchAttendance = s.attendance >= studentMinAttendance;
      return matchSearch && matchClass && matchAttendance;
    });

    const averageGrade = filtered.length > 0 
      ? Math.round(filtered.reduce((acc, curr) => acc + curr.grade, 0) / filtered.length)
      : 0;

    const passingRate = filtered.length > 0
      ? Math.round((filtered.filter(s => s.grade >= 50).length / filtered.length) * 100)
      : 0;

    return (
      <div className="demo-app student-app">
        {/* Controls */}
        <div className="demo-filters">
          <div className="filter-group">
            <label>Search Student</label>
            <input 
              type="text" 
              placeholder="e.g. Sahil" 
              value={studentSearch} 
              onChange={e => setStudentSearch(e.target.value)} 
            />
          </div>
          <div className="filter-group">
            <label>Class Filter</label>
            <select value={studentClass} onChange={e => setStudentClass(e.target.value)}>
              <option value="All">All Classes</option>
              <option value="Class A">Class A</option>
              <option value="Class B">Class B</option>
              <option value="Class C">Class C</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Min Attendance: {studentMinAttendance}%</label>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={studentMinAttendance} 
              onChange={e => setStudentMinAttendance(Number(e.target.value))} 
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="demo-stats">
          <div className="stat-card">
            <h5>Class Average</h5>
            <h3>{averageGrade}%</h3>
          </div>
          <div className="stat-card">
            <h5>Passing Rate</h5>
            <h3>{passingRate}%</h3>
          </div>
          <div className="stat-card">
            <h5>Total Students</h5>
            <h3>{filtered.length}</h3>
          </div>
        </div>

        {/* Results Table */}
        <div className="demo-table-wrapper">
          <table className="demo-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Grade</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td>0{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td><span className={`grade-badge ${s.grade >= 50 ? 'grade-pass' : 'grade-fail'}`}>{s.grade}%</span></td>
                  <td>{s.attendance}%</td>
                  <td><span className={`status-tag ${s.status === 'Pass' ? 'status-pass' : 'status-fail'}`}>{s.status}</span></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ textAlign: "center", color: "#8c8394" }}>No records match your filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // 2. Render Sales Visualization Demo Data & Logic
  const renderSalesDemo = () => {
    // Mock regional monthly sales data
    const rawSales = [
      { month: "Jan", region: "North", category: "Electronics", amount: 12000 },
      { month: "Jan", region: "South", category: "Apparel", amount: 8000 },
      { month: "Feb", region: "North", category: "Electronics", amount: 15000 },
      { month: "Feb", region: "South", category: "Apparel", amount: 9500 },
      { month: "Mar", region: "East", category: "Home", amount: 11000 },
      { month: "Mar", region: "West", category: "Electronics", amount: 13000 },
      { month: "Apr", region: "East", category: "Apparel", amount: 14000 },
      { month: "Apr", region: "West", category: "Home", amount: 10500 },
      { month: "May", region: "North", category: "Home", amount: 16500 },
      { month: "May", region: "South", category: "Electronics", amount: 18000 },
      { month: "Jun", region: "East", category: "Electronics", amount: 19000 },
      { month: "Jun", region: "West", category: "Apparel", amount: 15500 },
    ];

    const filteredSales = rawSales.filter(s => {
      const matchRegion = salesRegion === "All" || s.region === salesRegion;
      const matchCategory = salesCategory === "All" || s.category === salesCategory;
      return matchRegion && matchCategory;
    });

    const totalRevenue = filteredSales.reduce((acc, curr) => acc + curr.amount, 0);
    const avgSales = filteredSales.length > 0 ? Math.round(totalRevenue / filteredSales.length) : 0;

    // Monthly aggregates for custom SVG chart
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    const monthlyAmounts = months.map(m => {
      return filteredSales.filter(s => s.month === m).reduce((acc, curr) => acc + curr.amount, 0);
    });
    const maxAmount = Math.max(...monthlyAmounts, 1000);

    return (
      <div className="demo-app sales-app">
        {/* Filters */}
        <div className="demo-filters">
          <div className="filter-group">
            <label>Store Region</label>
            <select value={salesRegion} onChange={e => setSalesRegion(e.target.value)}>
              <option value="All">All Regions</option>
              <option value="North">North Store</option>
              <option value="South">South Store</option>
              <option value="East">East Store</option>
              <option value="West">West Store</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Product Category</label>
            <select value={salesCategory} onChange={e => setSalesCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Home">Home & Living</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="demo-stats">
          <div className="stat-card">
            <h5>Total Revenue</h5>
            <h3 style={{ color: "#ff5500" }}>${totalRevenue.toLocaleString()}</h3>
          </div>
          <div className="stat-card">
            <h5>Average Order Vol.</h5>
            <h3>${avgSales.toLocaleString()}</h3>
          </div>
          <div className="stat-card">
            <h5>Reporting Periods</h5>
            <h3>{months.length} Months</h3>
          </div>
        </div>

        {/* Dynamic SVG Bar Chart */}
        <div className="chart-wrapper">
          <h4 className="chart-title">Revenue Visualization Dashboard (H1 Sales Trends)</h4>
          <div className="svg-chart-container">
            <svg viewBox="0 0 500 200" className="sales-svg-chart">
              {/* Y Axis Guides */}
              <line x1="40" y1="20" x2="40" y2="170" stroke="#322b3d" strokeWidth="1" />
              <line x1="40" y1="170" x2="480" y2="170" stroke="#322b3d" strokeWidth="1" />

              {/* Draw Bars */}
              {monthlyAmounts.map((amount, idx) => {
                const barHeight = (amount / maxAmount) * 120;
                const xPos = 60 + idx * 70;
                const yPos = 170 - barHeight;

                return (
                  <g key={idx} className="chart-bar-group">
                    {/* Bar */}
                    <rect 
                      x={xPos} 
                      y={yPos} 
                      width="40" 
                      height={barHeight} 
                      fill="url(#barGradient)" 
                      rx="4"
                      className="chart-bar-rect"
                    />
                    {/* Tooltip value */}
                    <text x={xPos + 20} y={yPos - 8} textAnchor="middle" fill="#c4bdcb" fontSize="10">
                      ${amount.toLocaleString()}
                    </text>
                    {/* X Label */}
                    <text x={xPos + 20} y="185" textAnchor="middle" fill="#8c8394" fontSize="11" fontWeight="500">
                      {months[idx]}
                    </text>
                  </g>
                );
              })}

              {/* Define Gradients */}
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff7733" />
                  <stop offset="100%" stopColor="#ff5500" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // 3. Render 3D Portfolio Control Demo Data & Logic
  const renderPortfolioDemo = () => {
    return (
      <div className="demo-app portfolio-app">
        <p className="demo-tip">
          💡 This portfolio runs on WebGL. Below is the interactive 3D character inspector console. Try toggling controls to see character rendering states:
        </p>

        {/* Control grid */}
        <div className="portfolio-controls-grid">
          {/* Wireframe vs Textured */}
          <div className="console-option">
            <h5>Rendering Mesh Style</h5>
            <div className="option-buttons">
              {["Textured", "Wireframe", "Solid Color"].map(mode => (
                <button 
                  key={mode} 
                  className={`console-btn ${renderMode === mode ? 'active' : ''}`}
                  onClick={() => setRenderMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Color Schemes */}
          <div className="console-option">
            <h5>Stage Lighting Theme</h5>
            <div className="option-buttons">
              {["Cyberpunk", "Warm Studio", "Minimalist"].map(theme => (
                <button 
                  key={theme} 
                  className={`console-btn ${lightTheme === theme ? 'active' : ''}`}
                  onClick={() => setLightTheme(theme)}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Animation speed slider */}
          <div className="console-option font-slider">
            <h5>Character Animation Speed: {animSpeed}x</h5>
            <input 
              type="range" 
              min="0.2" 
              max="2.0" 
              step="0.1" 
              value={animSpeed} 
              onChange={e => setAnimSpeed(Number(e.target.value))} 
            />
          </div>
        </div>

        {/* Canvas Visualizer Simulator */}
        <div className="canvas-simulator-box">
          <div className={`viewport-display theme-${lightTheme.toLowerCase().replace(" ", "-")}`}>
            {/* Visual simulation based on selections */}
            <div className={`simulator-character ${renderMode.toLowerCase().replace(" ", "-")}`}>
              {renderMode === "Wireframe" && (
                <div className="wireframe-grid"></div>
              )}
              {renderMode === "Solid Color" && (
                <div className="solid-dummy"></div>
              )}
              {renderMode === "Textured" && (
                <div className="textured-dummy"></div>
              )}
              
              {/* Spinner simulating animation */}
              <div 
                className="animation-skeleton" 
                style={{ animationDuration: `${1.5 / animSpeed}s` }}
              ></div>
            </div>

            <div className="viewport-overlay">
              <span>RENDER: {renderMode.toUpperCase()}</span>
              <span>LIGHTS: {lightTheme.toUpperCase()}</span>
              <span>FPS: 60.0</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 4. Render Online Loan Management System Demo
  const renderLoanDemo = () => {
    // Interest formula
    const r = (loanInterest / 12) / 100;
    const emi = loanTenure > 0 
      ? Math.round((loanAmount * r * Math.pow(1 + r, loanTenure)) / (Math.pow(1 + r, loanTenure) - 1))
      : 0;
    const totalRepayment = emi * loanTenure;
    const totalInterest = totalRepayment - loanAmount;

    const handleApply = (e: React.FormEvent) => {
      e.preventDefault();
      if (!applicantName || !applicantIncome) {
        alert("Please fill out all fields.");
        return;
      }
      
      const incomeNum = Number(applicantIncome);
      if (isNaN(incomeNum) || incomeNum <= 0) {
        alert("Please enter a valid monthly income.");
        return;
      }

      // Logic: If monthly payment (EMI) is less than 35% of monthly income, approve instantly!
      if (emi < (incomeNum * 0.35)) {
        setLoanStatus("APPROVED");
      } else if (emi < (incomeNum * 0.55)) {
        setLoanStatus("PENDING_REVIEW");
      } else {
        setLoanStatus("REJECTED");
      }
    };

    return (
      <div className="demo-app loan-app">
        <div className="loan-calculator-grid">
          {/* Calculator Inputs */}
          <div className="loan-inputs">
            <h4>Loan Terms</h4>
            
            <div className="loan-input-group">
              <div className="input-labels">
                <label>Principal Amount</label>
                <span>${loanAmount.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="100000" 
                step="1000" 
                value={loanAmount} 
                onChange={e => setLoanAmount(Number(e.target.value))} 
              />
            </div>

            <div className="loan-input-group">
              <div className="input-labels">
                <label>Annual Interest Rate</label>
                <span>{loanInterest}%</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="20" 
                step="0.1" 
                value={loanInterest} 
                onChange={e => setLoanInterest(Number(e.target.value))} 
              />
            </div>

            <div className="loan-input-group">
              <div className="input-labels">
                <label>Tenure (Months)</label>
                <span>{loanTenure} Mos</span>
              </div>
              <input 
                type="range" 
                min="6" 
                max="60" 
                step="6" 
                value={loanTenure} 
                onChange={e => setLoanTenure(Number(e.target.value))} 
              />
            </div>
          </div>

          {/* Calculator Output */}
          <div className="loan-outputs">
            <h4>Payment Breakdown</h4>
            <div className="output-card">
              <h5>Monthly EMI</h5>
              <h2>${emi.toLocaleString()}</h2>
            </div>
            <div className="output-split">
              <div>
                <h5>Principal</h5>
                <p>${loanAmount.toLocaleString()}</p>
              </div>
              <div>
                <h5>Total Interest</h5>
                <p style={{ color: "#ff5500" }}>${totalInterest.toLocaleString()}</p>
              </div>
            </div>
            <div className="output-total">
              <h5>Total Repayment</h5>
              <h4>${totalRepayment.toLocaleString()}</h4>
            </div>
          </div>
        </div>

        {/* Interactive Apply Form */}
        <div className="loan-apply-section">
          <h4>Digital Loan Application</h4>
          
          {loanStatus === null ? (
            <form onSubmit={handleApply} className="loan-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Applicant Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Sahil Kumar" 
                    value={applicantName} 
                    onChange={e => setApplicantName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Monthly Income ($)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 5000" 
                    value={applicantIncome} 
                    onChange={e => setApplicantIncome(e.target.value)} 
                    required 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Purpose of Loan</label>
                <select required>
                  <option value="Education">Education & Learning</option>
                  <option value="Business">Business Expansion</option>
                  <option value="Personal">Debt Consolidation</option>
                  <option value="Home">Home Renovation</option>
                </select>
              </div>
              <button type="submit" className="loan-submit-btn">SUBMIT LOAN APPLICATION</button>
            </form>
          ) : (
            <div className="loan-result-box">
              {loanStatus === "APPROVED" && (
                <div className="loan-alert alert-approved">
                  <h3>🎉 Loan Approved Instantly!</h3>
                  <p>Congratulations <strong>{applicantName}</strong>! Your monthly payment of <strong>${emi}</strong> fits your budget. Your application ID <strong>#LA-09472</strong> is approved for processing.</p>
                </div>
              )}
              {loanStatus === "PENDING_REVIEW" && (
                <div className="loan-alert alert-pending">
                  <h3>⌛ Verification in Progress</h3>
                  <p>Hi <strong>{applicantName}</strong>, your monthly repayment accounts for a moderate ratio of your income. Our team will review your application ID <strong>#LA-09472</strong> shortly.</p>
                </div>
              )}
              {loanStatus === "REJECTED" && (
                <div className="loan-alert alert-rejected">
                  <h3>⚠️ Action Required</h3>
                  <p>Sorry <strong>{applicantName}</strong>, the calculated monthly payment of <strong>${emi}</strong> exceeds our risk profile based on your monthly income. Please adjust your principal amount or tenure.</p>
                </div>
              )}
              <button onClick={() => setLoanStatus(null)} className="loan-reset-btn">Calculate / Apply Again</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-slider-arrows">
            <button className="slider-arrow" onClick={scrollLeft} aria-label="Scroll left">
              <FaArrowLeft />
            </button>
            <button className="slider-arrow" onClick={scrollRight} aria-label="Scroll right">
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="work-scroll-container" ref={scrollContainerRef}>
          <div className="work-flex">
            {projectsData.map((project, idx) => (
              <div 
                className="work-box" 
                key={project.id} 
                onClick={() => openModal(idx)}
                style={{ cursor: "pointer" }}
              >
                <div className="work-info">
                  <div className="work-title">
                    <h3>{project.id}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <h4>Tools and features</h4>
                  <p>{project.tools.slice(0, 4).join(", ")}</p>

                  {/* Buttons on the project card itself */}
                  <div className="work-card-actions">
                    <button 
                      className="work-card-btn live-btn"
                      onClick={(e) => openDemo(idx, e)}
                    >
                      Live Demo <MdArrowOutward />
                    </button>
                    <button 
                      className="work-card-btn case-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(idx);
                      }}
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
                <WorkImage image={project.image} alt={project.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal - Structured Case Study */}
      {selectedIdx !== null && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <FaXmark />
            </button>

            {/* Top Showcase Image */}
            <div className="modal-showcase">
              <img src={currentProject.image} alt={currentProject.title} />
              
              {/* Slideshow dots / Carousel indicator */}
              <div className="modal-carousel-dots">
                {projectsData.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`carousel-dot ${idx === selectedIdx ? "active" : ""}`}
                    onClick={() => setSelectedIdx(idx)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Modal Body Info - Structured Case Study Sections */}
            <div className="modal-body">
              <h2 className="modal-title">{currentProject.title}</h2>
              <p className="modal-category">{currentProject.category}</p>
              
              {/* Case Study Sections */}
              <div className="case-study-content">
                <div className="case-study-section">
                  <h3>Project Overview</h3>
                  <p>{currentProject.overview}</p>
                </div>

                <div className="case-study-section">
                  <h3>Problem / Goal</h3>
                  <p>{currentProject.problem}</p>
                </div>

                <div className="case-study-section">
                  <h3>My Solution</h3>
                  <p>{currentProject.solution}</p>
                </div>

                {/* Tech Stack Heading & Badges */}
                <div className="modal-tech-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-tech-tags">
                    {currentProject.tools.map((tool, idx) => (
                      <span key={idx} className="tech-tag">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="case-study-section">
                  <h3>Key Accomplishments</h3>
                  <ul className="accomplishments-list">
                    {currentProject.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-section">
                  <h3>Challenges faced</h3>
                  <p>{currentProject.challenges}</p>
                </div>

                <div className="case-study-section">
                  <h3>Results / Outcome</h3>
                  <p>{currentProject.outcome}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="modal-footer">
              <div className="footer-links">
                <button 
                  onClick={() => {
                    closeModal();
                    openDemo(selectedIdx);
                  }}
                  className="modal-btn live-demo-btn"
                >
                  LIVE DEMO <MdArrowOutward />
                </button>
                <a 
                  href={currentProject.caseStudyUrl} 
                  className="modal-btn case-study-link"
                >
                  VIEW CASE STUDY &gt;
                </a>
              </div>

              {/* Next/Prev Nav ("Project Slide Option") */}
              <div className="modal-navigation">
                <button className="nav-arrow" onClick={prevProject} aria-label="Previous project">
                  <FaArrowLeft />
                </button>
                <button className="nav-arrow" onClick={nextProject} aria-label="Next project">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Live Demo Modal */}
      {demoIdx !== null && currentDemoProject && (
        <div className="modal-overlay" onClick={closeDemo}>
          <div className="modal-wrapper demo-modal-wrapper" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDemo} aria-label="Close demo">
              <FaXmark />
            </button>
            <div className="modal-body demo-modal-body">
              <h2 className="modal-title">Live Demo: {currentDemoProject.title}</h2>
              <p className="modal-category">{currentDemoProject.category} Simulator</p>

              {/* Render specific app based on selection */}
              {demoIdx === 0 && renderStudentDemo()}
              {demoIdx === 1 && renderSalesDemo()}
              {demoIdx === 2 && renderPortfolioDemo()}
              {demoIdx === 3 && renderLoanDemo()}
            </div>
            <div className="modal-footer demo-modal-footer">
              <button onClick={closeDemo} className="modal-btn live-demo-btn">
                Close Active Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
