import {Suspense} from "react";
import {Card, CardContent} from "@/components/ui/card";

import {getLoggedInUser} from "@/app/actions/user/get_user_session";
import {detectUserLocation} from "@/app/actions/geo/geo";
import {validateSecurityStatus} from "@/utils/security_validation";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import SocialFeedSection from "@/app/_ui/home/SocialFeedSection";
import HeroSection from "@/app/_ui/home/HeroSection";
import {redirect} from "next/navigation";

export default async function Home() {

    const user = await getLoggedInUser();
    const location_data = await detectUserLocation(user);

    if (user) redirect('/profile');

    // if (location_data?.ipRegistry?.security) {
    //     const security_validation = validateSecurityStatus(location_data.ipRegistry.security);
    //
    //     if (!security_validation.allowed) {
    //         return (
    //             <div>
    //                 <Card className="w-full max-w-7xl mx-auto">
    //                     <CardContent className="pt-6">
    //                         <div className="space-y-4">
    //                             <div className="h-4 bg-muted rounded w-3/4 animate-pulse"/>
    //                             <div className="space-y-3">
    //                                 <div className="h-4 bg-muted rounded animate-pulse"/>
    //                                 <div className="h-4 bg-muted rounded animate-pulse"/>
    //                             </div>
    //                         </div>
    //                     </CardContent>
    //                 </Card>
    //             </div>
    //         )
    //     }
    // }

    console.log("User from home", user,);
    console.log("Location from home", location_data);

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
                {/*<FighterSection/>*/}
                <SocialFeedSection/>
                {/*<MediaSection/>*/}
            </Suspense>
        </div>
    );
}
