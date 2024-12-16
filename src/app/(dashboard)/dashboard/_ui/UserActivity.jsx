import {Badge} from "@/components/ui/badge";
import {Bell, MessageSquare} from "lucide-react";
import React from "react";

export default function UserActivity({user}) {

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Your Activity</h2>
                <Badge className="bg-red-500 text-white border-0">
                    {user.notifications} new
                </Badge>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Bell className="w-4 h-4 text-zinc-400"/>
                        <span className="text-zinc-100">Notifications</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                        {user.notifications}
                    </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-zinc-400"/>
                        <span className="text-zinc-100">Messages</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                        {user.messages}
                    </Badge>
                </div>
            </div>
        </div>
    )
}