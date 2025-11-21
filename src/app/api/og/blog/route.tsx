import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const contentType = "image/png";

export const GET = async (request: NextRequest) => {
  const title = request.nextUrl.searchParams.get("title");
  const date = new Date(
    request.nextUrl.searchParams.get("date") ?? new Date().toJSON()
  );
  const author = `${request.nextUrl.protocol}//${request.nextUrl.host}/_next/image?url=${encodeURIComponent(
    "/me.png"
  )}&w=1200&q=75`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={author}
            alt="Nisarg Bhatt"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: 56,
              height: 56,
              borderRadius: "50%",
            }}
          />

          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            nisargbhatt.org
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          <span>{title}</span>
          <span
            style={{
              fontSize: 20,
            }}
          >
            {date.toLocaleDateString("en-us", {
              dateStyle: "long",
            })}{" "}
            | Nisarg Bhatt
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 628 }
  );
};
