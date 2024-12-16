import {Bookmark, Calendar, Film} from "lucide-react";
import {Button} from "@/components/ui/button";
import React from "react";

export default function ProfileUpcomingEvents() {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">My Events</h3>
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-500"/>
                    <span className="text-zinc-100">3 events this month</span>
                </div>
                <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-red-500"/>
                    <span className="text-zinc-100">2 watch parties planned</span>
                </div>
                <div className="flex items-center gap-2">
                    <Bookmark className="w-4 h-4 text-red-500"/>
                    <span className="text-zinc-100">5 events bookmarked</span>
                </div>
                <Button variant="outline" className="w-full mt-2 border-zinc-800">
                    View Calendar
                </Button>
            </div>
        </div>
    )
}