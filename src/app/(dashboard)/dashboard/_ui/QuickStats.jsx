import {Badge} from "@/components/ui/badge";
import React from "react";


export default function QuickStats() {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => {
                const StatIcon = stat.Icon;
                return (
                    <div
                        key={index}
                        className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-800/40 transition-all"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                                    <StatIcon className="w-4 h-4"/>
                                    <span>{stat.label}</span>
                                </div>
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                            </div>
                            <Badge
                                className="bg-zinc-800 text-zinc-300 border-zinc-700"
                            >
                                {stat.trend}
                            </Badge>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}