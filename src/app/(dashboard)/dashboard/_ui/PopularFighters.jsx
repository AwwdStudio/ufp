import {Button} from "@/components/ui/button";
import {TrendingUp} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import React from "react";


export default function PopularFighters({popularFighters}) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Trending Fighters</h2>
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                    View Rankings
                    <TrendingUp className="w-4 h-4 ml-2"/>
                </Button>
            </div>
            <div className="space-y-4">
                {popularFighters.map((fighter, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg hover:bg-zinc-800/60 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12 border-2 border-zinc-700">
                                <AvatarImage src={fighter.image}/>
                                <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="font-medium text-white">{fighter.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-zinc-400">
                                    <span>{fighter.weightClass}</span>
                                    <span>•</span>
                                    <span>{fighter.record}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-zinc-200 font-medium">{fighter.followers}</div>
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                                {fighter.engagement}
                            </Badge>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}