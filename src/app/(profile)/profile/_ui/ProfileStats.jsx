import React from "react";
import {Eye, MessageSquare, Target} from "lucide-react";


export default function ProfileStats() {

    const userStats = [
        {
            label: "Posts",
            value: "156",
            icon: MessageSquare,
            subtext: "Last posted 2h ago"
        },
        {
            label: "Fight Predictions",
            value: "82%",
            icon: Target,
            subtext: "124 correct of 151"
        },
        {
            label: "Events Watched",
            value: "48",
            icon: Eye,
            subtext: "Last 12 months"
        }
    ];

    return (
        <div className="grid grid-cols-1 gap-4">
            {userStats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                    <div
                        key={index}
                        className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-4 hover:bg-zinc-800/40 transition-all"
                    >
                        <div className="flex items-center gap-2 text-zinc-400 mb-2">
                            <StatIcon className="w-4 h-4"/>
                            <span>{stat.label}</span>
                        </div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-zinc-400 mt-1">{stat.subtext}</div>
                    </div>
                );
            })}
        </div>
    )
}