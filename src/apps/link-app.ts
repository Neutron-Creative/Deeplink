export abstract class LinkApp {
    originalUrl: string;
    pathname: string;

    /**
     * Base URL of the application.
     */
    appUrl: string;

    /**
     * Protocol prefix of the application.
     */
    protocolPrefix: string;

    /**
     * Android app package for android intents.
     */
    appPackage: string;

    /**
     *
     * @param url The url that needs to be parsed
     * @param appUrl The base url of the application
     * @param protocolName
     * @param appPackage Android app package
     * @protected
     */
    protected constructor(url: string, appUrl: string, protocolName: string, appPackage: string) {
        this.originalUrl = url;
        this.appUrl = appUrl;
        this.protocolPrefix = protocolName;
        this.appPackage = appPackage;

        let urlObject = new URL(url);
        this.pathname = urlObject.pathname.slice(1, urlObject.pathname.length)
    }

    abstract getAndroidLink(): string;

    abstract getiOSLink(): string;
}