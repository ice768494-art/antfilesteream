# Anime Streaming Vercel

## Deploy
1. Push this folder to GitHub.
2. Import into Vercel.
3. Set `NEXT_PUBLIC_FILETOLINK_API` to your public FileToLink-Go server URL.
4. Deploy.

The frontend uses `/dl/{token}` for the HTML5 video player. Replace the demo catalog with your real database/API and episode tokens.

Keep Telegram credentials, database secrets, and encryption keys on the FileToLink-Go backend, never in `NEXT_PUBLIC_*`.

Only distribute media you are authorized to stream.
