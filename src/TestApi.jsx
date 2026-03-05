import { useEffect, useState } from "react";

export default function TestApi() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      try {
        setLoading(true);
        setError("");

        // IMPORTANT: if your Next runs on 3001, change 3000 -> 3001
        const res = await fetch("http://localhost:3000/api/hello");
        if (!res.ok) throw new Error("HTTP " + res.status);

        const data = await res.json();
        setMessage(data.message);
      } catch (e) {
        setError(String(e));
      } finally {
        setLoading(false);
      }
    }
    run();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h2>/test_api</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && (
        <p style={{ color: "red" }}>
          Error: {error}
          <br />
          ✅ Check Next API tab: http://localhost:3000/api/hello
        </p>
      )}

      {!loading && !error && (
        <p>
          Message from API: <b>{message}</b>
        </p>
      )}
    </div>
  );
}