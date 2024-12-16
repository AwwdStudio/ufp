import {Button} from "@/components/ui/button";
import {Filter, Ticket} from "lucide-react";
import React from "react";


export default function PageHeader() {

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
                <h1 className="text-2xl font-bold text-white">Fight Events</h1>
                <p className="text-zinc-400">Discover and follow upcoming fight cards</p>
            </div>
            <div className="flex gap-3">
                <Button variant="outline" className="border-zinc-800 text-zinc-100">
                    <Filter className="w-4 h-4 mr-2"/>
                    Filters
                </Button>
                <Button className="bg-red-500 hover:bg-red-600">
                    <Ticket className="w-4 h-4 mr-2"/>
                    Find Tickets
                </Button>
            </div>
        </div>
    )
}