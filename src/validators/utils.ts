import emailParser, {ParsedMailbox} from "email-addresses";

export const getDomain = (emailAddress: string): string => {
    const parsedAddress = emailParser.parseOneAddress(emailAddress);
    if (parsedAddress === null) {
        return null;
    }
    return (parsedAddress as ParsedMailbox).domain;
};