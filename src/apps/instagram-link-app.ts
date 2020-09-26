import {LinkApp} from "../index";

export class InstagramLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "instagram.com", "instagram", "com.instagram.android");
    }

    getAndroidLink(): string {
        return `intent://${this.appUrl}/${this.pathname}#Intent;package=${this.appPackage};scheme=https;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}