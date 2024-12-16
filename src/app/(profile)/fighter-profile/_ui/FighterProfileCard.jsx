import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Flag, Verified} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import React from "react";

export default function FighterProfileCard({fighter}) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 border-4 border-red-500 mb-4">
                    <AvatarImage src={fighter.image}/>
                    <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                        <h2 className="text-xl font-bold text-white">{fighter.name}</h2>
                        {fighter.verified && <Verified className="w-5 h-5 text-red-500"/>}
                    </div>
                    <p className="text-zinc-400">{fighter.handle}</p>
                    <div className="flex justify-center gap-2">
                        <Badge className="bg-red-500/10 text-red-400 border-red-500/20">
                            {fighter.type}
                        </Badge>
                        <Badge variant="outline" className="border-zinc-700">
                            {fighter.stats}
                        </Badge>
                    </div>
                    <p className="text-zinc-300 text-sm">{fighter.bio}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
                        <span>{fighter.team}</span>
                        <span>•</span>
                        <span>{fighter.location}</span>
                    </div>
                    <div className="pt-4 flex gap-2">
                        <Button className="w-full bg-red-500 hover:bg-red-600">
                            {fighter.following ? 'Following' : 'Follow'}
                        </Button>
                        <Button variant="outline" className="border-zinc-800">
                            <Flag className="w-4 h-4"/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}