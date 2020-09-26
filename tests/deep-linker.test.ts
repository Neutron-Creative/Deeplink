/**
 * User Agents come from https://www.whatismybrowser.com/guides/the-latest-user-agent
 */

import {DeepLinker} from "../src/deep-linker";
import {DeepLinkGenerator} from "../src/generator";
import {UAParser} from "ua-parser-js";

let testData = [
    "https://twitter.com/NeutronCreative",
    "https://www.instagram.com/NeutronCreative",
    "https://www.facebook.com/NeutronCreative",
    "https://reddit.com/u/NeutronCreative",
    "https://tiktok.com/NeutronCreative",
    "https://snapchat.com/NeutronCreative",
    "https://youtube.com/NeutronCreative",
    "asdasdasda",
    "asdasddas.com/asdasd",
]


test("invalid user agents", () => {
    let agents = [
        "asdasdasd",
        "",
        "1234512",
        "!*()*DJJ!8812jd*J)#*((",
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});


test("test chrome useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPod; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; SM-A102U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; SM-N960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; LM-Q720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; LM-X420) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36",
        "Mozilla/5.0 (Linux; Android 10; LM-Q710(FGN)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test firefox useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (X11; Linux i686; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:81.0) Gecko/20100101 Firefox/81.0",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 10_15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/28.0 Mobile/15E148 Safari/605.1.15",
        "Mozilla/5.0 (iPad; CPU OS 10_15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/28.0 Mobile/15E148 Safari/605.1.15",
        "Mozilla/5.0 (iPod touch; CPU iPhone OS 10_15_7 like Mac OS X) AppleWebKit/604.5.6 (KHTML, like Gecko) FxiOS/28.0 Mobile/15E148 Safari/605.1.15",
        "Mozilla/5.0 (Android 11; Mobile; rv:68.0) Gecko/68.0 Firefox/81.0",
        "Mozilla/5.0 (Android 11; Mobile; LG-M255; rv:81.0) Gecko/81.0 Firefox/81.0",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (X11; Linux i686; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
        "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test safari useragents", () => {
    let agents = [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPod; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/85.0.4183.92 Mobile/15E148 Safari/604.1"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test internet explorer useragents", () => {
    let agents = [
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)",
        "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0;)",
        "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)",
        "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)",
        "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)",
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
        "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)",
        "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 6.2; Trident/7.0; rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko",
        "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test edge useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Edg/85.0.564.51",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Edg/85.0.564.51",
        "Mozilla/5.0 (Linux; Android 10; HD1913) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 EdgA/45.7.4.5059",
        "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 EdgA/45.7.4.5059",
        "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 EdgA/45.7.4.5059",
        "Mozilla/5.0 (Linux; Android 10; ONEPLUS A6003) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 EdgA/45.7.4.5059",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 EdgiOS/45.8.10 Mobile/15E148 Safari/605.1.15",
        "Mozilla/5.0 (Windows Mobile 10; Android 10.0; Microsoft; Lumia 950XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Mobile Safari/537.36 Edge/40.15254.603",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Edge/44.18363.8131"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test opera useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.148",
        "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.148",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.148",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.148",
        "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 OPR/59.1.2926.54067",
        "Mozilla/5.0 (Linux; Android 10; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 OPR/59.1.2926.54067",
        "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 Mobile Safari/537.36 OPR/59.1.2926.54067"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test vivaldi useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Vivaldi/3.3",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Vivaldi/3.3",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Vivaldi/3.3",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Vivaldi/3.3",
        "Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 Vivaldi/3.3"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});

test("test yandex useragents", () => {
    let agents = [
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 YaBrowser/20.8.0 Yowser/2.5 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 YaBrowser/20.8.0 Yowser/2.5 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 YaBrowser/20.8.0 Yowser/2.5 Safari/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 YaBrowser/20.8.2.271 Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (iPad; CPU OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 YaBrowser/20.8.2.271 Mobile/15E148 Safari/605.1",
        "Mozilla/5.0 (iPod touch; CPU iPhone 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 YaBrowser/20.8.2.271 Mobile/15E148 Safari/605.1",
        "Mozilla/5.0 (Linux; arm_64; Android 11; SM-G965F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.127 YaBrowser/20.6.3.54 Mobile Safari/537.36"
    ]

    for (let agent of agents) {
        for (let url of testData) {
            let deepLink = DeepLinker.parseDeepLink(url, agent);
            let parser = new UAParser(agent);
            let os = parser.getOS().name;

            switch (os) {
                case "Android":
                    expect(deepLink).toBe(DeepLinkGenerator.createAndroidDeepLink(deepLink));
                    break;
                case "iOS":
                    expect(deepLink).toBe(DeepLinkGenerator.createiOSDeepLink(deepLink));
                    break;
                default:
                    expect(deepLink).toBe(url);
                    break;
            }
        }
    }

});