# StatIQ

Lightweight Markdown static-site generator with built-in search & WebSocket reload.

[Licence](./LICENSE.md)

## Features

- HTTP Server with WebSocket LiveReload 
- Search generated from Titles, Tags, Dates, Excepts & Markdown content
- Front Matter for customizing layouts & documents _(posts & pages)_
- Markdown documents exported to static HTML
- Markdown support for: Anchors, MathJax, LightBox, Emojis, Tasks & Lazy Loaded Images 
- SASS Style Support

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

## Pages

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

## Site Settings

```json
{
    "site": {
        "title": "F1LT3R.me",
        "excerpt": "My Developer Blog",
        "description": "My Developer Blog",
        "keywords": ["F1LT3R", "blog", "developer", "JavaScript", "web", "mobile"],
        "permalink": "https://f1lt3r.me",
        "baseurl": "https://f1lt3r.me",
        "ogtype": "website",
        "site_name": "F1LT3R.me",
        "twitter_site": "@AlGMacD",
        "twitter_creator": "@AlGMacD",
        "thumbnail": "https://f1lt3r.me/assets/f1lt3r.me.png",
        "logo": "assets/img/F1LT3R-logo.png",
        "author_nickname": "F1LT3R",
        "author_name": "Alistair G MacDonald",
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
        "auto_clean": true,

        "watch_dir": "src",

        "template_dir": "src/templates/",

        "dist_dir": "_site",

        "home_dir": {
            "src": "src/home",
            "dest": "_site"
        },

        "pages_dir": {
            "src": "src/pages",
            "dest": "_site/pages"
        },

        "posts_dir": {
            "src": "src/posts",
            "dest": "_site/posts"
        },

        "copy_files": [
            {
                "src": "src/assets",
                "dest": "_site/assets",
            },
            {
                "src": "src/vendor/",
                "dest": "_site/vendor"
            }
        ],

        "templates": {
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
        }
    }
}
```