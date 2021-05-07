# **Gulp Shopify**

Shopify is deprecating SCSS so now we need to compile it ourselves. 

I've seen other solutions for workflows when starting a project from scratch, but I was more interested in something that I could easily drop in to **existing sites** with legacy code. 

Using this gulp workflow all I need to do when starting work on an existing site is:

1. Create a folder called `src` which is mostly for sass files 
2. Create a file called `variables.css.liquid` in the `src` folder. 
3. Create a gulpfile.js and copy the contents
4. `npm install`
5. Create a new output css file (e.g. custom-style.css.liquid) and add it to theme.liquid
6. Run `gulp watch`

## TODO:

- [ ]  Make variables.css.liquid optional. If the file doesn't exist the task should just ignore it.