# hello-gatsby

Gatsby構成のテストです。

## How to Get Started

```console
docker compose up -d --build
docker compose exec gatsby npx pnpm install
docker compose exec gatsby npx pnpm run develop
```

## Making

```console
touch README.md
touch .pre-commit-config.yml
pre-commit install
touch Dockerfile
touch .dockerignore
touch docker-compose.yaml
docker-compose up -d --build
docker-compose exec gatsby ./node_modules/gatsby/cli.js new
What would you like to call your site?
✔ · My Gatsby Site
What would you like to name the folder where your site will be created?
✔ hello-gatsby/ my-gatsby-site
✔ Will you be using JavaScript or TypeScript?
· TypeScript
✔ Will you be using a CMS?
· No (or I'll add it later)
✔ Would you like to install a styling system?
· No (or I'll add it later)
? Would you like to install additional features with other plugins?
(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"
❯◉ Add the Google gtag script for e.g. Google Analytics
 ◯ Add responsive images
 ◯ Add an automatic sitemap
 ◯ Generate a manifest file
 ◉ Add Markdown and MDX support
 ◯ Add Markdown support (without MDX)
  ─────
  Done
? Shall we do this? (Y/n) ‣ Yes
rm my-gatsby-site/README.md
mv my-gatsby-site/* ./
vi package.json # replace scripts "gatsby develop" to "gatsby develop -H 0.0.0.0"
docker-compose exec gatsby npm run develop
```
