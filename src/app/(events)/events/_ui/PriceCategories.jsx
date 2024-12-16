import {Star, Ticket, Trophy} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import React from "react";

export default function PriceCategories(props) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Ticket Categories</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-red-500"/>
                        <span className="text-zinc-100">VIP Experience</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                        From $299
                    </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-red-500"/>
                        <span className="text-zinc-100">Premium Seating</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                        From $199
                    </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                    <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-red-500"/>
                        <span className="text-zinc-100">General Admission</span>
                    </div>
                    <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                        From $99
                    </Badge>
                </div>
            </div>
            <Button className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700">
                Compare All Options
            </Button>
        </div>
    )
}