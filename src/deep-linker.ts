import {UAParser} from "ua-parser-js";
import {DeepLinkGenerator} from "./generator";

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