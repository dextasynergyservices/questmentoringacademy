export default function ComingSoonPage({ title }: { title: string }) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{title}</h1>
      <p>This page is coming soon. Stay tuned!</p>
    </div>
  );
}
