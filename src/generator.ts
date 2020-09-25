import {LinkApp} from "./apps/link-app";
import {TwitterLinkApp} from "./apps/twitter-link-app";
import {InstagramLinkApp} from "./apps/instagram-link-app";
import {FacebookLinkApp} from "./apps/facebook-link-app";

export class DeepLinkGenerator {

    static createAndroidDeepLink(url: string): string {
        return this.findApp(url)?.getAndroidLink() ?? url;
    }

    static createiOSDeepLink(url: string): string {
        return this.findApp(url)?.getiOSLink() ?? url;
    }

    private static findApp(url: string): LinkApp | undefined {
        if (url.includes("twitter.com")) {
            return new TwitterLinkApp(url);
        }

        if (url.includes("instagram.com")) {
            return new InstagramLinkApp(url);
        }

        if (url.includes("facebook.com")) {
            return new FacebookLinkApp(url);
        }

        if (url.includes("reddit.com")) {

        }

        if (url.includes("tiktok.com")) {

        }

        if (url.includes("snapchat.com")) {

        }

        if (url.includes("youtube.com")) {

        }

        if (url.includes("reddit.com")) {

        }

        return undefined;
    }
}