import { useState } from "react";

function App() {
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const useCases = [
    "Automate EHR Data Migration for NHS Trust to Cloud with HIPAA compliance",
    "Build Patient Data Analysis pipeline from Oracle to Azure",
    "Compliance Audit for NHS Trust clinical data warehouse",
  ];

  const runEngine = async () => {
    if (!goal) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("https://Akinkunmi1-kyntro-engine.hf.space/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to connect to Kyntro Engine API.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>🏥 Kyntro Engine</h1>
        <p style={styles.subtitle}>
          Healthcare AI Multi-Agent System
        </p>
        <p style={styles.valueStatement}>
          Transforms healthcare goals into automated execution plans.
        </p>
      </div>

      {/* Agent Status */}
      <div style={styles.agentRow}>
        <div style={styles.agentCard}>
          <span>🧠</span>
          <p>Kyntro-Feyi</p>
          <small>Strategist</small>
        </div>
        <div style={styles.arrow}>→</div>
        <div style={styles.agentCard}>
          <span>⚙️</span>
          <p>Kyntro-Kunmi</p>
          <small>ETL Engineer</small>
        </div>
        <div style={styles.arrow}>→</div>
        <div style={styles.agentCard}>
          <span>🔒</span>
          <p>Kyntro-Quell</p>
          <small>Compliance</small>
        </div>
      </div>

      {/* Use Case Buttons */}
      <div style={styles.useCaseSection}>
        <p style={styles.useCaseTitle}>Quick Start:</p>
        <div style={styles.useCaseRow}>
          <button
            style={styles.useCaseButton}
            onClick={() => setGoal(useCases[0])}
          >
            🏥 EHR Migration
          </button>
          <button
            style={styles.useCaseButton}
            onClick={() => setGoal(useCases[1])}
          >
            📊 Patient Data Analysis
          </button>
          <button
            style={styles.useCaseButton}
            onClick={() => setGoal(useCases[2])}
          >
            🔒 Compliance Audit
          </button>
        </div>
      </div>

      {/* Input */}
      <div style={styles.inputSection}>
        <textarea
          style={styles.textarea}
          placeholder="Enter your healthcare project goal here...
Example: Automate Oracle to Cloud migration for NHS Trust"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          rows={4}
        />
        <button
          style={loading ? styles.buttonLoading : styles.button}
          onClick={runEngine}
          disabled={loading}
        >
          {loading ? "⏳ Kyntro Engine Running..." : "🚀 Run Kyntro Engine"}
        </button>
      </div>

      {/* Sample Output */}
      {!result && !loading && (
        <div style={styles.sampleBox}>
          <h3 style={styles.sampleTitle}>📋 Execution Plan Preview</h3>
          <p style={styles.sampleGoal}>
            Project Goal: Automate EHR Data Migration for NHS Trust
          </p>
          <div style={styles.sampleContent}>
            <p>🧠 <strong>Kyntro-Feyi:</strong> Identified legacy Oracle system and defined migration strategy</p>
            <p>⚙️ <strong>Kyntro-Kunmi:</strong> Designed ETL pipeline (Oracle → Cloud via staging layer)</p>
            <p>🔒 <strong>Kyntro-Quell:</strong> Applied HIPAA & FHIR compliance checks</p>
            <p>📄 <strong>Final Output:</strong> 4-week execution roadmap with risk checkpoints</p>
          </div>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={styles.loadingBox}>
          <p>🧠 Feyi is planning...</p>
          <p>⚙️ Kunmi is building ETL pipeline...</p>
          <p>🔒 Quell is auditing compliance...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={styles.errorBox}>
          <p>❌ {error}</p>
          <small>Make sure kyntro_api.py is running!</small>
        </div>
      )}

      {/* Result */}
      {result && (
        <div style={styles.resultBox}>
          <h2 style={styles.resultTitle}>
            ✅ Kyntro Engine Complete!
          </h2>
          <div style={styles.statusRow}>
            <span style={styles.badge}>
              Status: {result.status}
            </span>
          </div>
          <div style={styles.resultContent}>
            <h3>📄 Result:</h3>
            <pre style={styles.pre}>
              {result.result}
            </pre>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={styles.footer}>
        <p>Built by Healthcare Data Scientist & AI Engineering Lead</p>
        <p>Powered by CrewAI + Groq + React + FastAPI</p><p style={{color: "#00ff88", marginTop: "8px"}}>Built for real-world healthcare data workflows and AI-driven decision automation.</p><p style={{color: "#00ff88", marginTop: "8px"}}>Built for real-world healthcare data workflows and AI-driven decision automation.</p><p style={{color: "#00ff88", marginTop: "8px"}}>Built for real-world healthcare data workflows and AI-driven decision automation.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0a0a0a",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    padding: "30px 0",
    borderBottom: "1px solid #333",
    marginBottom: "30px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#00ff88",
    margin: 0,
  },
  subtitle: {
    color: "#888",
    fontSize: "1rem",
    marginTop: "10px",
  },
  valueStatement: {
    color: "#00ff88",
    fontSize: "1rem",
    marginTop: "8px",
    fontStyle: "italic",
  },
  agentRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  agentCard: {
    backgroundColor: "#1a1a1a",
    border: "1px solid #00ff88",
    borderRadius: "10px",
    padding: "15px 20px",
    textAlign: "center",
    minWidth: "120px",
  },
  arrow: {
    color: "#00ff88",
    fontSize: "1.5rem",
  },
  useCaseSection: {
    marginBottom: "20px",
  },
  useCaseTitle: {
    color: "#888",
    marginBottom: "10px",
  },
  useCaseRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  useCaseButton: {
    backgroundColor: "#1a1a1a",
    color: "#00ff88",
    border: "1px solid #00ff88",
    borderRadius: "20px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  inputSection: {
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    color: "#ffffff",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "15px",
    fontSize: "1rem",
    resize: "vertical",
    marginBottom: "10px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    backgroundColor: "#00ff88",
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    padding: "15px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
  buttonLoading: {
    width: "100%",
    backgroundColor: "#333",
    color: "#888",
    border: "none",
    borderRadius: "8px",
    padding: "15px",
    fontSize: "1.1rem",
    cursor: "not-allowed",
  },
  sampleBox: {
    backgroundColor: "#0d1f16",
    border: "1px solid #00ff88",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  },
  sampleTitle: {
    color: "#00ff88",
    marginTop: 0,
  },
  sampleGoal: {
    color: "#888",
    fontStyle: "italic",
  },
  sampleContent: {
    lineHeight: "2",
  },
  loadingBox: {
    backgroundColor: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    lineHeight: "2",
  },
  errorBox: {
    backgroundColor: "#2a0000",
    border: "1px solid #ff0000",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    color: "#ff6666",
  },
  resultBox: {
    backgroundColor: "#001a0d",
    border: "1px solid #00ff88",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  },
  resultTitle: {
    color: "#00ff88",
    marginTop: 0,
  },
  statusRow: {
    marginBottom: "15px",
  },
  badge: {
    backgroundColor: "#00ff88",
    color: "#000",
    padding: "5px 10px",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  resultContent: {
    marginTop: "15px",
  },
  pre: {
    backgroundColor: "#0a0a0a",
    padding: "15px",
    borderRadius: "5px",
    overflow: "auto",
    fontSize: "0.8rem",
    color: "#00ff88",
    whiteSpace: "pre-wrap",
  },
  footer: {
    textAlign: "center",
    color: "#555",
    fontSize: "0.8rem",
    borderTop: "1px solid #333",
    paddingTop: "20px",
    marginTop: "20px",
  },
};

export default App;