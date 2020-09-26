import {UAParser} from "ua-parser-js";
import {TwitterLinkApp} from "./apps/twitter-link-app";
import {InstagramLinkApp} from "./apps/instagram-link-app";
import {FacebookLinkApp} from "./apps/facebook-link-app";
import {RedditLinkApp} from "./apps/reddit-link-app";
import {TikTokLinkApp} from "./apps/tiktok-link-app";
import {SnapchatLinkApp} from "./apps/snapchat-link-app";
import {YoutubeLinkApp} from "./apps/youtube-link-app";

/**
 * The base LinkApp class. You can use this to make a new LinkApp type, which is how the deep link is generated.
 */
export abstract class LinkApp {
    originalUrl: string = "";
    pathname: string = "";

    /**
     * Base URL of the application.
     */
    appUrl: string = "";

    /**
     * Protocol prefix of the application.
     */
    protocolPrefix: string = "";

    /**
     * Android app package for android intents.
     */
    appPackage: string = "";

    /**
     *
     * @param url The url that needs to be parsed
     * @param appUrl The base url of the application
     * @param protocolPrefix
     * @param appPackage Android app package
     * @protected
     */
    protected constructor(url?: string, appUrl?: string, protocolPrefix?: string, appPackage?: string) {
        if (url) this.setUrl(url);
        if (appUrl) this.setAppUrl(appUrl);
        if (protocolPrefix) this.setProtocolPrefix(protocolPrefix);
        if (appPackage) this.setAppPackage(appPackage);
    }

    setUrl(url: string) {
        this.originalUrl = url;

        let urlObject = new URL(url);
        this.pathname = urlObject.pathname.slice(1, urlObject.pathname.length)
    }

    setAppUrl(appUrl: string) {
        this.appUrl = appUrl;
    }

    setProtocolPrefix(protocolPrefix: string) {
        this.protocolPrefix = protocolPrefix;
    }

    setAppPackage(appPackage: string) {
        this.appPackage = appPackage;
    }

    /**
     * Should return the most basic Android deep link strategy possible,
     * which is appending the URL parameters to the deep link url.
     */
    abstract getAndroidLink(): string;

    /**
     * Should return the most basic iOS deep link strategy possible,
     * which is appending the URL parameters to the deep link url.
     */
    abstract getiOSLink(): string;
}

/**
 * Provides a mapping between an "includes" search string, and a LinkApp.
 * Allows DeepLink to find a Link App based on the pattern.
 */
export class LinkAppMapping {
    searchString: string;
    linkApp: LinkApp;

    constructor(searchString: string, linkApp: LinkApp) {
        this.searchString = searchString;
        this.linkApp = linkApp;
    }
}

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

export class DeepLinker {
    /**
     * Parses a url and returns a deep link if the user agent represents a mobile device.
     * If it doesn't, it returns the url as is.
     *
     * @param url The url to potentially turn into a deep link
     * @param userAgent The user agent to be parsed
     */
    static parseDeepLink(url: string, userAgent: string): string {
        if (this.isMobile(userAgent)) {
            let parser = new UAParser(userAgent);
            let os = parser.getOS().name;

            if (os) {
                let deepLink = this.convertToDeepLink(url, os);

                if (deepLink)
                    return deepLink;
            }

            return url;
        }

        return url;
    }

    /**
     * Converts a link to a deep link. If the OS is not supported, it returns the url as unchanged.
     *
     * @param url The url to convert.
     * @param os The operating system that is being targeted.
     */
    static convertToDeepLink(url: string, os: string): string {
        switch (os) {
            case "Android":
                return DeepLinkGenerator.createAndroidDeepLink(url);
            case "iOS":
                return DeepLinkGenerator.createiOSDeepLink(url);
            default:
                return url;
        }
    }

    /**
     * Determines if a UserAgent is a mobile device or not.
     * @param userAgent
     */
    static isMobile(userAgent: string): boolean {
        let parser = new UAParser(userAgent);

        switch (parser.getDevice().type) {
            case "mobile":
                return true;
            case "tablet":
                return true;
            default:
                return false;
        }
    }
}