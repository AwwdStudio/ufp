import {Button} from "@/components/ui/button";
import React from "react";


export default function ProfileActivityFeed() {

    const recentActivity = [
        {
            type: "Event Review",
            description: "Posted analysis of Elite FC 159",
            time: "2 days ago",
            link: "View Analysis"
        },
        {
            type: "Prediction",
            description: "8/10 correct predictions for Fight Night",
            time: "1 week ago",
            link: "View Predictions"
        },
        {
            type: "Discussion",
            description: "Started thread about new weight class rules",
            time: "2 weeks ago",
            link: "Join Discussion"
        }
    ];

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-6">
                {recentActivity.map((activity, index) => (
                    <div key={index} className="group">
                        <div className="flex items-start gap-4">
                            <div>
                                <p className="text-zinc-100">{activity.description}</p>
                                <p className="text-sm text-zinc-400 mt-1">{activity.time}</p>
                                <Button
                                    variant="link"
                                    className="text-red-400 hover:text-red-300 p-0 h-auto mt-1"
                                >
                                    {activity.link}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}