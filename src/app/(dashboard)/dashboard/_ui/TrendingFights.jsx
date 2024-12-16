import {Button} from "@/components/ui/button";
import {Calendar, ChevronRight, Eye, Target} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import React from "react";

export default function TrendingFights({trendingFights}) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Trending Fight Cards</h2>
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1"/>
                </Button>
            </div>
            <div className="space-y-4">
                {trendingFights.map((event, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg hover:bg-zinc-800/60 transition-all"
                    >
                        <div>
                            <h3 className="font-medium text-white">{event.title}</h3>
                            <p className="text-red-400 text-sm mb-2">{event.mainEvent}</p>
                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                <Calendar className="w-4 h-4"/>
                                <span>{event.date}</span>
                                <span>•</span>
                                <span>{event.location}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <Badge
                                className="bg-red-500/10 text-red-400 border-red-500/20"
                            >
                                {event.status}
                            </Badge>
                            <div
                                className="flex items-center justify-end gap-4 text-sm text-zinc-400 mt-2">
                                <div className="flex items-center gap-1">
                                    <Eye className="w-4 h-4"/>
                                    <span>{event.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Target className="w-4 h-4"/>
                                    <span>{event.predictions}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}