import React from 'react';
import {
    Trophy, Medal, Swords, Scale, Calendar, Star,
    Activity, Award, TrendingUp, CrosshairIcon,
    BookOpen, Flag, Timer, Target, Shield
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FighterSection = () => {
    const fighter = {
        name: "Alexander 'The Python' Silva",
        nickname: "The Python",
        record: { wins: 15, losses: 2, draws: 0, kos: 8 },
        status: "Active",
        weightClass: "Lightweight",
        age: 28,
        height: "5'10\"",
        reach: "72\"",
        stance: "Orthodox",
        origin: "São Paulo, Brazil",
        team: "Elite MMA Academy",
        ranking: 3,
        styles: ["MMA", "Brazilian Jiu-Jitsu", "Muay Thai"],
        achievements: [
            "UFC Lightweight Champion (2022-Present)",
            "BJJ Black Belt",
            "3x Fight of the Night"
        ],
        image: "/api/placeholder/400/400"
    };

    const stats = [
        { label: "Win Rate", value: "88%", icon: TrendingUp },
        { label: "KO Rate", value: "53%", icon: Target },
        { label: "Takedowns", value: "72%", icon: Shield },
        { label: "Submissions", value: "6", icon: CrosshairIcon }
    ];

    const recentFights = [
        {
            event: "Elite FC 155",
            date: "2024-03-15",
            opponent: "Jake Thompson",
            result: "Win",
            method: "Submission (RNC)",
            round: 2,
            time: "3:45",
            image: "/api/placeholder/64/64"
        },
        {
            event: "Elite FC 150",
            date: "2023-12-10",
            opponent: "Mike Johnson",
            result: "Win",
            method: "TKO",
            round: 1,
            time: "4:28",
            image: "/api/placeholder/64/64"
        }
    ];

    return (
        <div className="bg-zinc-900 py-20 px-5 border-t border-b border-t-zinc-900 border-b-zinc-800">
            <div className="max-w-[1800px] mx-auto">
                {/* Hero Section */}
                <div className="relative mb-12 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-transparent z-10" />
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay" />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-900" />
                    </div>

                    <div className="relative z-20 p-8 flex flex-col md:flex-row items-start gap-8">
                        {/* Fighter Image */}
                        <div className="relative">
                            <Avatar className="w-48 h-48 border-4 border-red-500 ring-4 ring-zinc-800">
                                <AvatarImage src={fighter.image} />
                                <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                            </Avatar>
                            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white border-0">
                                #{fighter.ranking}
                            </Badge>
                        </div>

                        {/* Fighter Info */}
                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">{fighter.name}</h1>
                                <div className="flex flex-wrap items-center gap-3">
                                    {fighter.styles.map((style) => (
                                        <Badge key={style} className="bg-red-500/10 text-red-400 border-red-500/20">
                                            {style}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="space-y-1">
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <stat.icon className="w-4 h-4 text-red-500" />
                                            <span className="text-sm">{stat.label}</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <Button className="bg-red-500 hover:bg-red-600">
                                    Challenge Fighter
                                    <Swords className="w-4 h-4 ml-2" />
                                </Button>
                                <Button variant="outline" className="border-zinc-800 text-zinc-100">
                                    View Fight History
                                    <BookOpen className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Fighter Details */}
                    <div className="space-y-6">
                        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Fighter Details</h3>
                            <div className="space-y-4">
                                {[
                                    { label: "Weight Class", value: fighter.weightClass, icon: Scale },
                                    { label: "Height", value: fighter.height, icon: Activity },
                                    { label: "Reach", value: fighter.reach, icon: Target },
                                    { label: "Age", value: fighter.age, icon: Calendar },
                                    { label: "Team", value: fighter.team, icon: Shield },
                                    { label: "Origin", value: fighter.origin, icon: Flag }
                                ].map((detail) => (
                                    <div key={detail.label} className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <detail.icon className="w-4 h-4" />
                                            <span>{detail.label}</span>
                                        </div>
                                        <span className="text-white">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
                            <div className="space-y-4">
                                {fighter.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-yellow-500" />
                                        <span className="text-zinc-100">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recent Fights */}
                    <div className="md:col-span-2">
                        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-white mb-6">Recent Fights</h3>
                            <div className="space-y-4">
                                {recentFights.map((fight, index) => (
                                    <div
                                        key={index}
                                        className="group bg-zinc-800/40 rounded-lg p-4 hover:bg-zinc-800/60 transition-all"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <Avatar className="w-12 h-12 border-2 border-zinc-700">
                                                    <AvatarImage src={fight.image} />
                                                    <AvatarFallback>{fight.opponent[0]}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h4 className="text-white font-medium">{fight.event}</h4>
                                                    <p className="text-sm text-zinc-400">vs. {fight.opponent}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <Badge
                                                    className={
                                                        fight.result === "Win"
                                                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                            : "bg-red-500/10 text-red-400 border-red-500/20"
                                                    }
                                                >
                                                    {fight.result}
                                                </Badge>
                                                <div className="text-sm text-zinc-400 mt-1">
                                                    {fight.method} | R{fight.round} {fight.time}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FighterSection;