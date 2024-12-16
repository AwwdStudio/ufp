
import React, { Suspense } from 'react';
import {getLoggedInUser} from "@/app/actions/user/get_user_session";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import DashboardHeader from "@/app/(dashboard)/dashboard/_ui/DashboardHeader";
import QuickStats from "@/app/(events)/events/_ui/QuickStats";
import LeftColWrapper from "@/app/(dashboard)/dashboard/_ui/LeftColWrapper";
import RightColWrapper from "@/app/(dashboard)/dashboard/_ui/RightColWrapper";
import TrendingFights from "@/app/(dashboard)/dashboard/_ui/TrendingFights";
import PopularFighters from "@/app/(dashboard)/dashboard/_ui/PopularFighters";
import CommunityActivity from "@/app/(dashboard)/dashboard/_ui/CommunityActivity";
import UserActivity from "@/app/(dashboard)/dashboard/_ui/UserActivity";

import {
    DashboardHeaderLoading,
    QuickStatsLoading,
    TrendingFightsLoading,
    PopularFightersLoading,
    CommunityActivityLoading,
    UserActivityLoading
} from '@//loading/Loading';

import { Trophy, Users, Calendar, Bell, TrendingUp, Fire, Target, Play, Flame } from 'lucide-react';

const ExploreDashboard = async () => {
    const user = await getLoggedInUser()

    const quickStats = [
        {
            label: "Live Events",
            value: "3",
            trend: "Starting Soon",
            trendUp: true,
            Icon: Play
        },
        {
            label: "Active Fighters",
            value: "186",
            trend: "+12 this week",
            trendUp: true,
            Icon: Users
        },
        {
            label: "Predictions Open",
            value: "8",
            trend: "4 closing soon",
            trendUp: true,
            Icon: Target
        },
        {
            label: "Fight Cards",
            value: "12",
            trend: "Next 30 days",
            trendUp: true,
            Icon: Calendar
        }
    ];

    const trendingFights = [
        {
            title: "Elite FC 160",
            mainEvent: "Martinez vs. Thompson",
            date: "Dec 20, 2024",
            location: "Miami, FL",
            status: "Upcoming",
            views: "142K",
            predictions: "23K"
        },
        {
            title: "Fight Night Series",
            mainEvent: "Silva vs. Johnson",
            date: "Dec 28, 2024",
            location: "Las Vegas, NV",
            status: "Predictions Open",
            views: "98K",
            predictions: "15K"
        }
    ];

    const popularFighters = [
        {
            name: "Sarah Martinez",
            status: "Next Fight: Dec 20",
            followers: "256K",
            engagement: "+24%",
            record: "12-0-0",
            image: "/api/placeholder/64/64",
            weightClass: "Bantamweight"
        },
        {
            name: "Alex Silva",
            status: "Last Won: Nov 15",
            followers: "198K",
            engagement: "+18%",
            record: "15-2-0",
            image: "/api/placeholder/64/64",
            weightClass: "Lightweight"
        },
        {
            name: "Mike Johnson",
            status: "Training Camp",
            followers: "145K",
            engagement: "+15%",
            record: "8-1-0",
            image: "/api/placeholder/64/64",
            weightClass: "Welterweight"
        }
    ];

    const communityActivity = [
        {
            type: "Trending",
            description: "Fight breakdown: Martinez's winning streak",
            time: "2 hours ago",
            engagement: "1.2K comments",
            Icon: Flame
        },
        {
            type: "Event",
            description: "Elite FC 160 predictions are now open",
            time: "5 hours ago",
            engagement: "5.6K predictions",
            Icon: Target
        },
        {
            type: "Analysis",
            description: "Top 10 submissions of the month",
            time: "1 day ago",
            engagement: "856 reactions",
            Icon: Trophy
        }
    ];

    return (
        <>
            <HeaderPreLogin user={user}/>
            <div className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">
                <div className="max-w-[1800px] mx-auto">
                    <Suspense fallback={<DashboardHeaderLoading />}>
                        <DashboardHeader user={user} />
                    </Suspense>

                    <Suspense fallback={<QuickStatsLoading />}>
                        <QuickStats quickStats={quickStats} />
                    </Suspense>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <LeftColWrapper>
                            <Suspense fallback={<TrendingFightsLoading />}>
                                <TrendingFights trendingFights={trendingFights} />
                            </Suspense>

                            <Suspense fallback={<PopularFightersLoading />}>
                                <PopularFighters popularFighters={popularFighters} />
                            </Suspense>
                        </LeftColWrapper>

                        <RightColWrapper>
                            <Suspense fallback={<CommunityActivityLoading />}>
                                <CommunityActivity communityActivity={communityActivity} />
                            </Suspense>

                            <Suspense fallback={<UserActivityLoading />}>
                                <UserActivity user={user} />
                            </Suspense>
                        </RightColWrapper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExploreDashboard;