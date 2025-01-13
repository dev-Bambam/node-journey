import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

// Read files
let landingPage, homePage, movieJSONData, moviesHtml, descriptionHtml;
try {
  landingPage = fs.readFileSync("./templates/index.html", "utf-8");
  homePage = fs.readFileSync("./templates/home.html", "utf-8");
  movieJSONData = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));
  moviesHtml = fs.readFileSync("./templates/movie.html", "utf-8");
  descriptionHtml = fs.readFileSync("./templates/description.html", "utf-8");
} catch (err) {
  console.error("error reading files", err);
  process.exit(1);
}

// Map movie data to HTML
const movies = movieJSONData.map((movie) => {
  return moviesHtml
    .replace("{{%MOVIETITLE%}}", movie.title)
    .replace("{{%GENRE%}}", movie.genre[0] || "Unknown")
    .replace("{{%POSTER%}}", movie.image_url)
    .replace("{{%YEAR%}}", movie.release_date)
    .replace("{{%ID%}}", movie.id);
});

// Create the server
const server = http.createServer();
// listen to request event
server.on('request', (request, response) => {
  let { query, pathname } = url.parse(request.url.toLocaleLowerCase(), true);

  // Serve static files
  if (pathname.startsWith("/asset/")) {
    const filePath = `.${pathname}`;
    fs.readFile(filePath, (err, data) => {
      if (err) {
        response.writeHead(404, { "content-type": "text/plain" });
        response.end("File not found");
      } else {
        const ext = path.extname(filePath).toLowerCase();
        const mimeType =
          {
            ".jpg": "image/jpg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".gif": "image/gif",
            ".css": "text/css",
          }[ext] || "application/octet-stream";

        response.writeHead(200, { "content-type": mimeType });
        response.end(data);
      }
    });
    return;
  }

  // Serve home page or description
  if (pathname === "/" || pathname === "/home") {
    if (query.id) {
      const movie = movieJSONData.find((m) => m.id === Number(query.id));
      if (movie) {
        const movieDescription = descriptionHtml
          .replace("{{%POSTER%}}", movie.image_url)
          .replace("{{%TITLE%}}", movie.title)
          .replace("{{%GENRE%}}", movie.genre[0] || "Unknown")
          .replace("{{%YEAR%}}", movie.release_date)
          .replace("{{%RATING%}}", movie.rating)
          .replace("{{%DESCRIPTION%}}", movie.synopsis);
        response.writeHead(200, { "content-type": "text/html" });
        response.end(landingPage.replace("{{%CONTENT%}}", movieDescription));
      } else {
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>Movie not found</h1>");
        // console.log(.id);
      }
    } else {
      const updatedHomePage = homePage.replace(
        "{{%CONTENT%}}",
        movies.join("")
      );
      response.writeHead(200, { "content-type": "text/html" });
      response.end(landingPage.replace("{{%CONTENT%}}", updatedHomePage));
    }
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end("<h1>Page not found</h1>");
  }
});

// Start the server
server.listen(8888, "localhost", () => {
  console.log("Server is running at http://localhost:8888");
});
