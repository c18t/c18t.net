# c18t.net

The source of c18t.net

## How to Get Started

```
docker-compose up -d --build
docker-compose exec gatsby npm run develop
```

## Making

```
touch README.md
touch Dockerfile
touch .dockerignore
touch docker-compose.yml
docker-compose up -d --build
docker-compose exec gatsby ./node_modules/gatsby/cli.js new
What would you like to call your site?
? ‣ My Gatsby Site
What would you like to name the folder where your site will be created?
? app/ my-gatsby-site
? Will you be using a CMS?
(Single choice) Arrow keys to move, enter to confirm
▸ No (or I'll add it later)
? Would you like to install a styling system?
(Single choice) Arrow keys to move, enter to confirm
▸ No (or I'll add it later)
? Would you like to install additional features with other plugins?
(Multiple choice) Use arrow keys to move, spacebar to select, and confirm with an enter on "Done"
---
Done
? Shall we do this? (Y/n) ‣ Yes
rm my-gatsby-site/README.md
mv my-gatsby-site/* ./
vi package.json # replace scripts "gatsby develop" to "gatsby develop -H 0.0.0.0"
docker-compose exec gatsby npm run develop
```
