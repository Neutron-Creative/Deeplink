import {LinkApp} from "./link-app";
import {LinkAppMapping} from "./link-app-mapping";
import {TwitterLinkApp} from "./apps/twitter-link-app";
import {InstagramLinkApp} from "./apps/instagram-link-app";
import {FacebookLinkApp} from "./apps/facebook-link-app";
import {RedditLinkApp} from "./apps/reddit-link-app";
import {TikTokLinkApp} from "./apps/tiktok-link-app";
import {SnapchatLinkApp} from "./apps/snapchat-link-app";
import {YoutubeLinkApp} from "./apps/youtube-link-app";

export class DeepLinkGenerator {
    /**
     * All the mappings available to the Deep Link Generator.
     * More may be added.
     */
    static mappings: LinkAppMapping[] = [
        new LinkAppMapping("twitter.com", new TwitterLinkApp()),
        new LinkAppMapping("instagram.com", new InstagramLinkApp()),
        new LinkAppMapping("facebook.com", new FacebookLinkApp()),
        new LinkAppMapping("reddit.com", new RedditLinkApp()),
        new LinkAppMapping("tiktok.com", new TikTokLinkApp()),
        new LinkAppMapping("snapchat.com", new SnapchatLinkApp()),
        new LinkAppMapping("youtube.com", new YoutubeLinkApp()),
    ];

    /**
     * Creates an Android based Deep Link based on the url provided.
     * Automatically determines the app type based on the url if no LinkApp is provided.
     * @param url
     * @param linkApp
     */

    static createAndroidDeepLink(url: string, linkApp?: LinkApp): string {
        if (linkApp) {
            return linkApp.getAndroidLink() ?? url;
        } else {
            let findApp = this.findApp(url);
            if (!findApp) return url;

            return findApp?.getAndroidLink() ?? url;
        }
    }

    /**
     * Creates an iOS based Deep Link based on the url provided.
     * Automatically determines the app type based on the url if no LinkApp is provided.
     * @param url
     * @param linkApp
     */
    static createiOSDeepLink(url: string, linkApp?: LinkApp): string {
        if (linkApp) {
            return linkApp.getiOSLink() ?? url;
        } else {
            let findApp = this.findApp(url);
            if (!findApp) return url;

            return findApp?.getiOSLink() ?? url;
        }
    }

    private static findApp(url: string): LinkApp | undefined {
        for (let mapping of this.mappings) {
            if (url.includes(mapping.searchString)) {
                let clonedLinkApp: LinkApp = Object.create(mapping.linkApp);
                clonedLinkApp.setUrl(url);

                return clonedLinkApp;
            }
        }

        return undefined;
    }
}

