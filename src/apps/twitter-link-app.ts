import {LinkApp} from "../index";

export class TwitterLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "twitter.com", "twitter", "com.twitter.android");
    }

    getAndroidLink(): string {
        return `intent://${this.appUrl}/${this.pathname}#Intent;package=${this.appPackage};scheme=https;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}