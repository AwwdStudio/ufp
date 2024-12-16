import {Button} from "@/components/ui/button";
import React from "react";

export default function CommunityActivity({communityActivity}) {
    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Trending Now</h2>
            <div className="space-y-6">
                {communityActivity.map((activity, index) => {
                    const ActivityIcon = activity.Icon;
                    return (
                        <div key={index} className="flex items-start gap-4">
                            <div className="p-2 bg-zinc-800/60 rounded-lg">
                                {/*<ActivityIcon className="w-4 h-4 text-red-500"/>*/}
                            </div>
                            <div>
                                <p className="text-zinc-100">{activity.description}</p>
                                <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1">
                                    <span>{activity.time}</span>
                                    <span>•</span>
                                    <span>{activity.engagement}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Button className="w-full mt-6 bg-zinc-800 hover:bg-zinc-700">
                View All Trending Topics
            </Button>
        </div>
    )
}