import {LinkApp} from "./link-app";

/**
 * Provides a mapping between an "includes" search string, and a LinkApp.
 * Allows Deep Link It to find a Link App based on the pattern.
 */
export class LinkAppMapping {
    searchString: string;
    linkApp: LinkApp;

    constructor(searchString: string, linkApp: LinkApp) {
        this.searchString = searchString;
        this.linkApp = linkApp;
    }
}