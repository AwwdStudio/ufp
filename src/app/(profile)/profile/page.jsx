import React from 'react';
import {getLoggedInUser} from "@/app/actions/user/get_user_session";
// import {getUserProfile} from "@/app/actions/user/get_user_profile";
import {redirect} from "next/navigation";
import {Suspense} from "react";
import {Card, CardContent} from "@/components/ui/card";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import LeftColWrapper from "@/app/(profile)/profile/_ui/LeftColWrapper";
import RightColWrapper from "@/app/(profile)/profile/_ui/RightColWrapper";
import CenterColWrapper from "@/app/(profile)/profile/_ui/CenterColWrapper";
import ProfileActivityFeed from "@/app/(profile)/profile/_ui/ProfileActivityFeed";
import ProfileCard from "@/app/(profile)/profile/_ui/ProfileCard";
import ProfileStats from "@/app/(profile)/profile/_ui/ProfileStats";
import ProfileFavouriteFighters from "@/app/(profile)/profile/_ui/ProfileFavouriteFighters";
import ProfileTabs from "@/app/(profile)/profile/_ui/ProfileTabs";
import ProfilePosts from "@/app/(profile)/profile/_ui/ProfilePosts";
import ProfileUpcomingEvents from "@/app/(profile)/profile/_ui/ProfileUpcomingEvents";

// Loading skeleton component
const ProfileSkeleton = () => (
    <Card className="w-full">
        <CardContent className="pt-6">
            <div className="space-y-4">
                <div className="h-4 bg-zinc-800 rounded w-3/4 animate-pulse"/>
                <div className="space-y-3">
                    <div className="h-4 bg-zinc-800 rounded animate-pulse"/>
                    <div className="h-4 bg-zinc-800 rounded animate-pulse"/>
                </div>
            </div>
        </CardContent>
    </Card>
);

const UserProfilePage = async () => {
    try {
        const user = await getLoggedInUser();


        return (
            <>
                <HeaderPreLogin user={user}/>
                <div className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">
                    <div className="max-w-[1800px] mx-auto">
                        <div className="grid lg:grid-cols-12 gap-8">
                            {/* Left Column */}
                            <LeftColWrapper>
                                <Suspense fallback={<ProfileSkeleton />}>
                                    <ProfileCard user={user}/>
                                    <ProfileStats/>
                                    <ProfileFavouriteFighters/>
                                </Suspense>
                            </LeftColWrapper>

                            {/* Center Column */}
                            <CenterColWrapper>
                                <div className="space-y-6">
                                    <Suspense fallback={<ProfileSkeleton />}>
                                        <ProfileTabs/>
                                        <ProfilePosts/>
                                    </Suspense>
                                </div>
                            </CenterColWrapper>

                            {/* Right Column */}
                            <RightColWrapper>
                                <Suspense fallback={<ProfileSkeleton />}>
                                    <ProfileActivityFeed/>
                                    <ProfileUpcomingEvents/>
                                </Suspense>
                            </RightColWrapper>
                        </div>
                    </div>
                </div>
            </>
        );
    } catch (error) {
        console.error("Profile page error:", error);
        // Handle error state appropriately
        redirect('/login');
        return null;
    }
};

export default UserProfilePage;