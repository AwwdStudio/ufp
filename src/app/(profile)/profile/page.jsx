import React from 'react';

import {getLoggedInUser} from "@/app/actions/user/get_user_session";
import {getUserProfile} from "@/app/actions/user/get_user_profile";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import LeftColWrapper from "@/app/(profile)/profile/_ui/LeftColWrapper";
import CenterColWrapper from "@/app/(profile)/profile/_ui/CenterColWrapper";
import ProfileCard from "@/app/(profile)/profile/_ui/ProfileCard";
import ProfileStats from "@/app/(profile)/profile/_ui/ProfileStats";
import ProfileFavouriteFighters from "@/app/(profile)/profile/_ui/ProfileFavouriteFighters";
import ProfileTabs from "@/app/(profile)/profile/_ui/ProfileTabs";
import ProfilePosts from "@/app/(profile)/profile/_ui/ProfilePosts";
import RightColWrapper from "@/app/(profile)/profile/_ui/RightColWrapper";
import ProfileUpcomingEvents from "@/app/(profile)/profile/_ui/ProfileUpcomingEvents";
import ProfileActivityFeed from "@/app/(profile)/profile/_ui/ProfileActivityFeed";
import {redirect} from "next/navigation";

const UserProfilePage = async () => {

    const user = await getLoggedInUser();
    const profile = await getUserProfile();

    console.log(user);
    console.log(profile, "from profile page");

    if (!user) redirect('/')

    return (
        <>
            <HeaderPreLogin user={user}/>
            <div className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Left Column */}
                        <LeftColWrapper>
                            {/* Profile Card */}
                            <ProfileCard user={user}/>
                            {/* Stats Grid */}
                            <ProfileStats/>

                            {/* Favorite Fighters */}
                            <ProfileFavouriteFighters/>
                        </LeftColWrapper>

                        {/* Center Column - Content */}
                        <CenterColWrapper>
                            <div className="space-y-6">
                                {/* Content Tabs */}
                                <ProfileTabs/>

                                {/* Posts */}
                                <ProfilePosts/>
                            </div>
                        </CenterColWrapper>

                        {/* Right Column */}
                        <RightColWrapper>
                            {/* Activity Feed */}
                            <ProfileActivityFeed/>

                            {/* Upcoming Events */}
                            <ProfileUpcomingEvents/>
                        </RightColWrapper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfilePage;