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