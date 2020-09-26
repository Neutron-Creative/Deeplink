# deeplink
 
<p align="center" style="font-style: italic;color:rgba(0,0,0,.65);font-size: 12px !important;">
A library to convert your links to deep links.
</p>

<p align="center">
    <img src="https://img.shields.io/badge/license-LGPL v2.1-green?style=flat" />
    <img src="https://img.shields.io/badge/Release-v1.0.0-orange?style=flat" />
</p>

<p align="center">
    <a href="https://twitter.com/neutroncreative">
        <img src="https://img.shields.io/twitter/follow/neutroncreative?style=flat" />
    </a>
    <a href="https://www.instagram.com/neutroncreative/">
        <img src="https://img.shields.io/badge/Instagram-Follow%20Us-blue?style=flat" />
    </a>
    <a href="https://www.youtube.com/channel/UCRLlabj3ZUgpx-ArKKHF8TQ">
        <img src="https://img.shields.io/badge/YouTube-Subscribe%20-red?style=flat" />
    </a>
</p>

<p align="center">
    <a href="https://discord.gg/BUbmgV4">
        <img width="200" height="64" src="https://i.imgur.com/JtoQm1v.png">
    </a>
</p>

## Key Features
- Convert links into deep links
- Pass a user agent to correctly determine which link to provide
- Automatically fallback to default URL if a type can't be determined
- Support for many platforms
    - Twitter
    - Instagram
    - Facebook
    - Reddit
    - TikTok
    - SnapChat
    - YouTube
    - ...and more coming soon!
- 100% free and open-source

## Installation

##### npm
```bash
npm i nc-deeplink
```

##### yarn
```bash
yarn add nc-deeplink
```

## Compiling
```sh
# install dependencies
npm install

# (optional) install typescript globally
npm install typescript -g

# build the library (automatically copies important files and compiles typescript)
npm run build
```

## Documentation
### Prerequisites
DeepLink uses user agents to determine a valid destination for a link.  
You can grab this user agent any way you need to.  

### Import
```ts
import {DeepLinker} from "nc-deeplink";

// or

const DeepLinker  = require("nc-deeplink");
```

### Creating Deep Links
#### Parse a Deep Link
```ts
import {DeepLinker} from "nc-deeplink";

let userAgent = navigator.userAgent;
let deepLink = DeepLinker.parseDeepLink(url, userAgent);

console.log(deepLink);
```

#### Create an OS specific Deep Link (no user agent needed)
```ts
import {DeepLinker} from "nc-deeplink";

let deepLink = DeepLinker.convertToDeepLink(url, "Android");
console.log(deepLink);

deepLink = DeepLinker.convertToDeepLink(url, "iOS");
console.log(deepLink);

```

#### Check if a user agent is mobile
```ts
import {DeepLinker} from "nc-deeplink";

let userAgent = navigator.userAgent;
let isMobile = DeepLinker.isMobile(url, userAgent);
console.log(isMobile)
```

### Deep Link Mapping with Link Apps
Link Apps are how DeepLink figures out how to convert a link into a deep link.  
DeepLink provides a number of mappings by default, but if you wish to add more, you may do so.

#### Add a mapping
```ts
import {DeepLinkGenerator} from "nc-deeplink";
import {LinkApp} from "nc-deeplink";

class RedditLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "reddit.com", undefined, "com.reddit.frontpage");
    }

    getAndroidLink(): string {
        return `intent://${this.appUrl}/${this.pathname}#Intent;package=${this.appPackage};scheme=https;end`;
    }

    getiOSLink(): string {
        return this.originalUrl;
    }
}

DeepLinkGenerator.mappings.push(new RedditLinkApp());
```

### Check These Out
[Our contribution guidelines 🚀](https://github.com/Neutron-Creative/deeplink/blob/master/.github/CONTRIBUTING.md) to see how you can contribute to this project!  
[Our Discord 💬](https://discord.gg/BUbmgV4) if you just want to chat with us! 😃