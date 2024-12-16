import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";
import React from "react";

export default function ProfileCard({user}) {


    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 border-4 border-red-500 mb-4 capitalize">
                    <AvatarImage src={user.image}/>
                    <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-white">{user.name}</h2>
                    <p className="text-zinc-400">{user.handle}</p>
                    <p className="text-zinc-300 text-sm">{user.bio}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-zinc-400">
                        <span>{user.location}</span>
                        <span>•</span>
                        <span>{user.registration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="text-center">
                            <div className="text-white font-semibold">{user.following}</div>
                            <div className="text-zinc-400">Following</div>
                        </div>
                        <div className="text-center">
                            <div className="text-white font-semibold">{user.followers}</div>
                            <div className="text-zinc-400">Followers</div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Button variant="outline" className="w-full border-zinc-800">
                            <Settings className="w-4 h-4 mr-2"/>
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}