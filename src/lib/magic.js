import {Magic} from 'magic-sdk';
import {OAuthExtension} from '@magic-ext/oauth';

// Create client-side Magic instance
const createMagic = (key) => {
    return (
        typeof window != 'undefined' &&
        new Magic(key, {
            network: 'mainnet',
            extensions: [new OAuthExtension()],
        })
    );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
const createWeb3Magic = (key) => {
    return (
        typeof window != "undefined" &&
        new Magic(key, {network: "mainnet",})
    )
}
export const web3Magic = createWeb3Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY,);
