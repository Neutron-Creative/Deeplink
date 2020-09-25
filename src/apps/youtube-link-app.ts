import {LinkApp} from "../link-app";

export class YoutubeLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "www.youtube.com", "vnd.youtube", "com.google.android.youtube");
    }

    getAndroidLink(): string {
        return `intent://${this.appUrl}/${this.pathname}#Intent;package=${this.appPackage};scheme=https;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}