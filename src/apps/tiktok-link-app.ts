import {LinkApp} from "../link-app";

export class TikTokLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, "tiktok.com", "snssdk1233", "com.zhiliaoapp.musically");
    }

    getAndroidLink(): string {
        return `intent://${this.appUrl}/${this.pathname}#Intent;package=${this.appPackage};scheme=snssdk1233;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}