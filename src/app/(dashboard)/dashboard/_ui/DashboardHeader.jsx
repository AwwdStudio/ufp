import React from "react";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {BookMarked, Ticket} from "lucide-react";
import {redirect} from "next/navigation";


export default function DashboardHeader({user}) {

    if(!user) redirect('/login')

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-red-500 font-bold">
                    <AvatarImage src={user.avatar}/>
                    <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}</h1>
                    <div className="text-zinc-400">
                        {user.joinDate}
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <Button variant="outline" className="border-zinc-800 text-zinc-100">
                    <BookMarked className="w-4 h-4 mr-2"/>
                    Saved
                </Button>
                <Button className="bg-red-500 hover:bg-red-600">
                    <Ticket className="w-4 h-4 mr-2"/>
                    Get Tickets
                </Button>
            </div>
        </div>
    )
}