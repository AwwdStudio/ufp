import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";

export default function ProfileTabs() {


    return (
        <Tabs defaultValue="posts" className="w-full">
            <TabsList className="bg-zinc-800/50 w-full">
                {['Posts', 'Analysis', 'Predictions', 'Bookmarks'].map((tab) => (
                    <TabsTrigger
                        key={tab}
                        value={tab.toLowerCase()}
                        className="flex-1 data-[state=active]:bg-red-500 data-[state=active]:text-white"
                    >
                        {tab}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}