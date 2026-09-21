"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

const animeList = [
  "Naruto",
  "One Piece",
  "Demon Slayer",
  "Solo Leveling",
  "Jujutsu Kaisen",
  "Attack on Titan",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = animeList.filter((anime) =>
    anime.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="section">
        <h1>🔎 Search Anime</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search anime..."
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
          />

          <button type="button">
            Search
          </button>
        </div>

        {results.length === 0 ? (
          <p className="muted">
            No anime found for "{query}".
          </p>
        ) : (
          <div className="grid">
            {results.map((anime) => {
              const slug = anime
                .toLowerCase()
                .replaceAll(" ", "-");

              return (
                <Link
                  className="card"
                  href={`/anime/${slug}`}
                  key={anime}
                >
                  <div className="poster">
                    <span>POSTER</span>
                  </div>

                  <div className="cardbody">
                    <b>{anime}</b>

                    <div className="muted">
                      Anime Series
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    </>
  );
}
