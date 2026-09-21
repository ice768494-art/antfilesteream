import Link from "next/link";
import Header from "@/components/Header";

export default async function Anime({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");

  const episodes = Array.from(
    { length: 12 },
    (_, index) => index + 1
  );

  return (
    <>
      <Header />

      <main className="section">
        <span className="pill">ANIME</span>

        <h1>{title}</h1>

        <p className="muted">
          Select an episode to start watching.
        </p>

        <h2>Episodes</h2>

        <div className="episodes">
          {episodes.map((episode) => (
            <Link
              href={`/watch/${slug}-ep-${episode}`}
              key={episode}
            >
              EP {episode}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
