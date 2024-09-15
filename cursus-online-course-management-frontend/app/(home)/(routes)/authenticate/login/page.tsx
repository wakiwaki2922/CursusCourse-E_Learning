"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast from "react-hot-toast";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { signInWithGooglePopup } from "@/lib/firebase";
import AuthForm from "../_components/auth-form";
import Cookies from 'js-cookie';
import getFullUserDetails from "@/actions/get-full-user-details";
import { isAdmin } from "@/lib/admin";
import { login, loginWithGoogle } from "@/actions/authentication";

// Define the schema using zod
const formSchema = z.object({
    email: z.string().min(1, {
        message: "Email is required",
    }).email("Invalid email address"),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    })
});

const LoginPage = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values);
            // const response = await axios.post(`/api/user/authenticate/login`, values);
            const response = await login(values);
            console.log("Login response:", response);
            Cookies.set('jwtToken', response.token, { expires: 1 });
            Cookies.set('refreshToken', response.refreshToken, { expires: 7 });
            const userData = await getFullUserDetails();
            localStorage.setItem('userData', JSON.stringify(userData));
            if (isAdmin()) {
                router.push(`/admin/dashboard`);
            } else {
                router.push(`/`);
            }
            toast.success("Login successfully!")
        } catch (error) {
            toast.error("Something went wrong")
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            console.log("Initiating Google sign-in popup...");
            const result = await signInWithGooglePopup();
            const user = result.user;
            const token = await user.getIdToken();
            console.log('Google Sign-In Result:', result);
            // const response = await axios.post(`/api/user/authenticate`, { token });
            const response = await loginWithGoogle(token);
            Cookies.set('jwtToken', response.token, { expires: 1 });
            Cookies.set('refreshToken', response.refreshToken, { expires: 7 });
            // const userData = {
            //     uid: user.uid,
            //     fullName: user.displayName,
            //     email: user.email,
            //     avatarImageUrl: user.photoURL,
            //     jwtToken: response.data,
            //     providerData: user.providerData,
            //     metadata: user.metadata
            // };
            const userData = await getFullUserDetails();
            console.log('User Data:', userData);
            localStorage.setItem('userData', JSON.stringify(userData));
            router.push('/');
        } catch (error) {
            console.error('Error during Google sign-in with popup:', error);
            toast.error("Fail to login with Google");
        }
    };

    return (
        <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <a
                href="/authenticate/signup"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1
                    focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
            >
                Register
            </a>
            <div className="relative hidden h-full flex-col bg-muted text-white lg:flex dark:border-r">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 6000,
                        })
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
            
                        </CarouselItem>
                        <CarouselItem></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="lg:p-8 pt-20">
                <h1 className="text-2xl pt-9">
                    Log in to continue your learning journey
                </h1>
                <AuthForm
                    type="login"
                    onSubmit={onSubmit}
                    handleGoogleSignIn={handleGoogleSignIn}
                />
            </div>
        </div>
    );
}

export default LoginPage;