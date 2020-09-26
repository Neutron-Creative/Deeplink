import {LinkApp} from "../link-app";

export class FacebookLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "facebook.com", "fb", "com.facebook.katana");
    }

    getAndroidLink(): string {
        return `intent://${this.pathname}#Intent;package=${this.appPackage};scheme=fb;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}