# StatIQ

Lightweight Markdown static-site generator with built-in search & WebSocket reload.

[Licence](./LICENSE.md)

## Features

- Markdown documents exported to HTML pages _(static-site)_
- HTTP Server with auto-reload on file change _(Web Sockets)_
- Search generated from Titles, Tags, Dates, Excepts & Markdown content
- Front Matter for customizing layouts & documents _(posts & pages)_
- Markdown support for: Anchors, MathJax, LightBox, Emojis, Tasks & Lazy Loaded Images
- Simple Templating System for Building Custom Layouts
- Integrations:
    - SASS to CSS Support for Styling
    - ESBuild for JavaScript Minification
    - Image Compression w/ Sharp & ImageMin
    - GitHub Workflow for GitHub-Pages Deployment
    - OpenGraph Tags for Meta & LinkedIn
    - Twitter Card Tags for X/Twitter
    - SEO Meta Tags, Canonical URLs & Robots.txt
    - Open Search & SiteMap XML Generation

## Document Types

1. Home
2. Pages
3. Posts

## Front Matter

### Posts

```yaml
---
template: post
title: 'Creating a Static Site Generator'
permalink: creating-a-static-site-generator
thumbnail: creating-a-static-site-generator.jpg
tags: [static-site, Node.js, Markdown]
excerpt: 'Presenting StatIQ - A lightweight Markdown static-site generator with built-in search & WebSocket reload.'
authors: [F1LT3R]
featured: true
layout: default
date: '2025/02/29 13:59'
updated: [
	'2025/03/01 15:00',
	'2025/04/01 16:00'
]
---
```

### Pages

```yaml
---
template: page
title: 'My Portfolio'
permalink: portfolio
tags: [projects, showcase, resume, video]
excerpt: 'Welcome to my portfolio where you can see examples of my work.'
authors: [F1LT3R]
layout: full-width
date: '2025/02/29 13:59'
updated: [
	'2025/03/01 15:00',
	'2025/04/01 16:00'
]
---
```

### Front Matter Fields

#### `permalink`

If the `permalink` is missing from front-matter, the output `index.html` will mirror the src directory structure. If the `permalink` is present, the `index.html` will be output to a `dist/{permalink}"` directory.

##### Example

With the following front-matter and `statiq.settings.json`, the location of the output HTML would be `_site_/about-permalinks/index.html`.

```yaml
# src/posts/2025-02-12_About-Permalinks/About-Permalinks.md
---
template: post
permalink: about-permalinks
title: 'Learning About Permalinks'
---
```

```js
{
	"build": {
		"document": [
			{
				"src": "src/**/*.md",
				"dist": "_site"
			},
		]
	}
}
```

Only markdown documents use the permalink structure. All other files are written to mirror the directory structure of your `src` directory, for example:

```
_site/posts/2025-02-12_About-Permalinks/data.zip
```

Any references to other assets in the output HTML file, will be linked the mirror of your `src` directory structure.

```html
<!-- _site_/about-permalinks/index.html -->
<a href="/posts/2025-02-12_About-Permalinks/data.zip">data.zip</a>
```

This approach allows for greater flexibility. You can use multiple permalinks for various markdown documents in the same directory, without having to copy the linked resources twice. This also allows you to change your permalinks, without changing the search engine indexes of other files references in the document.

## Site Settings

s

```json
{
	"site": {
		"title": "F1LT3R",
		"excerpt": "My Developer Blog",
		"keywords": [
			"F1LT3R",
			"blog",
			"development",
			"JavaScript",
			"web",
			"mobile"
		],
		"permalink": "https://f1lt3r.me",
		"baseurl": "https://f1lt3r.me",
		"ogtype": "website",
		"site_name": "F1LT3R.me",
		"twitter_site": "@AlGMacD",
		"twitter_creator": "@AlGMacD",
		"thumbnail": "https://f1lt3r.me/assets/f1lt3r.me.png",
		"logo": "/assets/img/F1LT3R-logo.png",
		"author_nickname": "F1LT3R",
		"author_name": "Alistair MacDonald",
		"author_avatar": "/assets/img/F1LT3R-avatar.jfif",
		"author_email": "no@contact.com"
	},

	"social": [
		{
			"type": "GitHub",
			"url": "https://github.com/F1LT3R",
			"logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
		},
		{
			"type": "NPM",
			"url": "https://www.npmjs.com/~f1lt3r",
			"logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
		},
		{
			"type": "LinkedIn",
			"url": "https://linked.in/F1LT3R",
			"logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
		},
		{
			"type": "DEV.to",
			"url": "https://dev.to/F1LT3R",
			"logo": "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
		},
		{
			"type": "Medium",
			"url": "https://medium/F1LT3R",
			"logo": "/assets/logo/social-medium.svg"
		}
	],

	"build": {
		"site": {
			"src": "src",
			"dist": "_site"
		},

		"document": [
			{
				"src": "src/**/*.md",
				"dist": "_site"
			}
		],

		"image": [
			{
				"src": "src/**/*.{gif,png,jpg,svg}",
				"dist": "_site"
			}
		],

		"script": [
			{
				"src": "src/**/*.{mjs}",
				"dist": "_site"
			}
		],

		"style": [
			{
				"src": "src/**/*.{less}",
				"dist": "_site"
			}
		],

		"copy": [
			{
				"src": "src/vendor/*/",
				"dist": "_site/vendor"
			},
			{
				"src": "src/assets/**/!(*.md|*.less|*.gif|*.png|*.jpg|*.svg)",
				"dist": "_site/assets"
			},
			{
				"src": "src/**/!({vendor,templates})/!(*.md|*.less|*.gif|*.png|*.jpg|*.svg)",
				"dist": "_site"
			}
		],

		"templates": {
			"src": "src/templates",

			"index": {
				"base_template": "src/templates/index.html",
				"head_template": "src/templates/head.html",
				"header_template": "src/templates/header.html",
				"nav_template": "src/templates/nav.html",
				"main_template": "src/templates/posts.html",
				"footer_template": "src/templates/footer.html"
			},

			"post": {
				"main_template": "src/templates/post.html"
			},

			"page": {
				"main_template": "src/templates/page.html"
			}
		},

		"image_compression": {
			"scale": 1024,
			"compression": 768
		}
	}
}
```
