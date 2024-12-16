import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import React from "react";

export default function ProfileFavouriteFighters() {

    const favoriteFighters = [
        {
            name: "Sarah Martinez",
            image: "/api/placeholder/64/64",
            record: "12-0-0",
            division: "Bantamweight"
        },
        {
            name: "Alex Silva",
            image: "/api/placeholder/64/64",
            record: "15-2-0",
            division: "Lightweight"
        },
        {
            name: "Mike Johnson",
            image: "/api/placeholder/64/64",
            record: "8-1-0",
            division: "Welterweight"
        }
    ];

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Favorite Fighters</h3>
            <div className="space-y-4">
                {favoriteFighters.map((fighter, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 border-2 border-red-500">
                            <AvatarImage src={fighter.image}/>
                            <AvatarFallback>{fighter.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium text-white">{fighter.name}</p>
                            <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs border-zinc-700">
                                    {fighter.record}
                                </Badge>
                                <span className="text-xs text-zinc-400">{fighter.division}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}