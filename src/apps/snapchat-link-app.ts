import {LinkApp} from "../index";

export class SnapchatLinkApp extends LinkApp {
    constructor(url?: string) {
        super(url, undefined, "snapchat", "com.snapchat.android");
    }

    getAndroidLink(): string {
        return `intent://${this.pathname}#Intent;package=${this.appPackage};scheme=snapchat;end`;
    }

    getiOSLink(): string {
        return `${this.protocolPrefix}://${this.pathname}`
    }
}