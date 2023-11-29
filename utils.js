// utils/magic.js
import { Magic } from 'magic-sdk';

const magic = typeof window !== "undefined" ?new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY):null;
console.log(magic);
console.log(process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY);
export default magic;

// utils/magic.js
export const logout = async () => {
    await magic.user.logout();
    // Handle successful logout (e.g., redirect to login page)
};
