'use client';

import React from 'react';
import {
    Heart, MessageCircle, Share2,
    Verified, Trophy,
    Calendar, Swords, Medal, Users, Target, Activity, Clock,
    Eye, Flag, Star
} from 'lucide-react';

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

import HeaderPreLogin from "@/app/_ui/HeaderPreLogin";
import LeftColWrapper from "@/app/(profile)/fighter-profile/_ui/LeftColWrapper";
import FighterProfileCard from "@/app/(profile)/fighter-profile/_ui/FighterProfileCard";
import FighterSection from "@/app/_ui/home/FighterSection";
import FighterStats from "@/app/(profile)/fighter-profile/_ui/FighterStats";
import CenterColWrapper from "@/app/(profile)/fighter-profile/_ui/CenterColWrapper";
import FighterAchievements from "@/app/(profile)/fighter-profile/_ui/FighterAchievements";
import FighterProfileTabs from "@/app/(profile)/fighter-profile/_ui/FighterProfileTabs";
import FighterPosts from "@/app/(profile)/fighter-profile/_ui/FighterPosts";
import RightColWrapper from "@/app/(profile)/fighter-profile/_ui/RightColWrapper";
import FighterHighlights from "@/app/(profile)/fighter-profile/_ui/FighterHighlights";
import FighterFanStats from "@/app/(profile)/fighter-profile/_ui/FighterFanStats";

const FighterProfileView = () => {

    const fighter = {
        name: "Sarah Martinez",
        handle: "@sarahmartinez",
        image: "/api/placeholder/64/64",
        verified: true,
        type: "Fighter",
        stats: "12-0-0",
        bio: "Professional MMA Fighter | Bantamweight Division | Undefeated",
        team: "Elite Fight Management",
        location: "Las Vegas, NV",
        followers: "25.4K",
        following: false
    };
    const fighterStats = [
        {
            label: "Total Fights",
            value: "12",
            icon: Swords,
            subtext: "Last fight: 2 months ago"
        },
        {
            label: "Win Rate",
            value: "100%",
            icon: Target,
            subtext: "8 KO/TKO • 4 Decision"
        },
        {
            label: "Fight Time",
            value: "4.2",
            icon: Clock,
            subtext: "Avg. rounds per fight"
        }
    ];
    const achievements = [
        {title: "Undefeated Streak", icon: Trophy, value: "12 Fights"},
        {title: "Championship Belt", icon: Trophy, value: "2x Winner"},
        {title: "Performance Bonus", icon: Medal, value: "4x Earned"}
    ];
    const posts = [
        {
            id: 1,
            content: "Fight camp week 6 complete! Feeling stronger and sharper than ever. Big thanks to my team for pushing me to new limits. The countdown to fight night begins! 🥊 #MMA #Training",
            timestamp: "2h ago",
            engagement: {
                likes: 2456,
                comments: 182,
                shares: 64,
                isLiked: false
            },
            tags: ["Training", "MMA"]
        },
        {
            id: 2,
            content: "Getting ready for the biggest announcement of my career! Stay tuned - this one's going to be special. 👊 Thanks to everyone who's been part of this journey. #UndefeatedRecord #NewChapter",
            timestamp: "6h ago",
            engagement: {
                likes: 3267,
                comments: 428,
                shares: 189,
                isLiked: true
            },
            tags: ["Announcement", "Boxing"]
        }
    ];
    const fighterHighlights = [
        {
            type: "Upcoming Fight",
            description: "vs. Jessica Thompson at Elite FC 160",
            time: "Dec 20, 2024",
            icon: Calendar,
            link: "View Event Details"
        },
        {
            type: "Latest Victory",
            description: "TKO victory against Maria Rodriguez",
            time: "2 months ago",
            icon: Trophy,
            link: "Watch Highlights"
        },
        {
            type: "Training Camp",
            description: "6-week fight camp at Elite MMA Academy",
            time: "In Progress",
            icon: Activity,
            link: "View Updates"
        }
    ];

    return (
        <>
            <HeaderPreLogin/>
            <div className="bg-zinc-900 min-h-screen pt-40 pb-20 px-5">
                <div className="max-w-[1800px] mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Left Column */}
                        <LeftColWrapper>
                            {/* Profile Card */}
                            <FighterProfileCard fighter={fighter}/>

                            {/* Stats Grid */}
                            <FighterStats fighterStats={fighterStats}/>

                            {/* Achievements */}
                            <FighterAchievements achievements={achievements}/>
                        </LeftColWrapper>

                        {/* Center Column - Feed */}
                        <CenterColWrapper className="lg:col-span-6">
                            <div className="space-y-6">
                                {/* Feed Tabs */}
                                <FighterProfileTabs/>

                                {/* Posts */}
                                <FighterPosts posts={posts}/>
                            </div>
                        </CenterColWrapper>

                        {/* Right Column */}
                        <RightColWrapper>
                            {/* Fighter Highlights */}
                            <FighterHighlights fighterHighlights={fighterHighlights}/>

                            {/* Fan Stats */}
                            <FighterFanStats fighter={fighter}/>
                        </RightColWrapper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FighterProfileView;