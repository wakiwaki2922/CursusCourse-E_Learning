import { useRouter } from "next/navigation";

export const isAdmin = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
        return false;
    }

    const userData = JSON.parse(userDataString);

    return userData.roles.includes('ROLE_ADMIN');
};