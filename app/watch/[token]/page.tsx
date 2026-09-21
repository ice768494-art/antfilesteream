import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import { streamUrl } from "@/lib/config";

export default async function Watch({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  const src = streamUrl(token);

  return (
    <>
      <Header />

      <main className="watch">
        <VideoPlayer src={src} />

        <div className="episodebar">
          <div>
            <h2 style={{ margin: "0 0 5px" }}>
              Episode Player
            </h2>

            <span className="muted">
              Token: {token}
            </span>
          </div>

          <a
            className="btn"
            href={src}
            target="_blank"
            rel="noreferrer"
          >
            Open Stream
          </a>
        </div>

        <p className="muted">
          Streaming through your FileToLink-Go server.
        </p>
      </main>
    </>
  );
}
