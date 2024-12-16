import React from "react";
import {Eye, Star, Users} from "lucide-react";

export default function FighterFanStats({fighter}) {

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Fan Engagement</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zinc-400"/>
                        <span className="text-zinc-100">Followers</span>
                    </div>
                    <span className="text-zinc-100">{fighter.followers}</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-zinc-400"/>
                        <span className="text-zinc-100">Profile Views</span>
                    </div>
                    <span className="text-zinc-100">142.8K</span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-zinc-400"/>
                        <span className="text-zinc-100">Fan Rating</span>
                    </div>
                    <span className="text-zinc-100">4.9/5</span>
                </div>
            </div>
        </div>
    )
}