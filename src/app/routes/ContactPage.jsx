export default function ContactPage() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        Email:{" "}
        <a href="mailto:example@email.com">
          example@email.com
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          yourusername
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          yourusername
        </a>
      </p>
    </section>
  );
}
