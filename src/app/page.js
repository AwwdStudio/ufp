import {Suspense} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {getLoggedInUser} from "@/app/actions/user/get_user_session";
import {detectUserLocation} from "@/app/actions/geo/geo";
import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import SocialFeedSection from "@/app/_ui/home/SocialFeedSection";
import HeroSection from "@/app/_ui/home/HeroSection";
import {redirect} from "next/navigation";

export default async function Home() {
    try {
        const user = await getLoggedInUser();
        const location_data = await detectUserLocation(user);

        // Only redirect if we're sure we have a valid user session
        if (user?.userId) {
            redirect('/profile');
            return null; // Important to return null after redirect
        }

        return (
            <div>
                <HeaderPreLogin user={user} location_data={location_data}/>
                <Suspense fallback={
                    <Card className="w-full max-w-7xl mx-auto">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"/>
                                <div className="space-y-3">
                                    <div className="h-4 bg-muted rounded animate-pulse"/>
                                    <div className="h-4 bg-muted rounded animate-pulse"/>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                }>
                    <HeroSection/>
                    <SocialFeedSection/>
                </Suspense>
            </div>
        );
    } catch (error) {
        console.error("Home page error:", error);
        // If there's an error, show the default home page
        return (
            <div>
                <HeaderPreLogin user={null} location_data={null}/>
                <Suspense fallback={
                    <Card className="w-full max-w-7xl mx-auto">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                <div className="h-4 bg-muted rounded w-3/4 animate-pulse"/>
                                <div className="space-y-3">
                                    <div className="h-4 bg-muted rounded animate-pulse"/>
                                    <div className="h-4 bg-muted rounded animate-pulse"/>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                }>
                    <HeroSection/>
                    <SocialFeedSection/>
                </Suspense>
            </div>
        );
    }
}