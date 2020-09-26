import {LinkApp} from "../link-app";

export class RedditLinkApp extends LinkApp {
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