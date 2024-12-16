import {Badge} from "@/components/ui/badge";
import {Calendar, ChevronRight, Heart, MapPin, Share2, Shield, Target, Ticket, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";


export default function LeftColWrapper({children}) {

    return (
        <div className="lg:col-span-2 space-y-8">
            {children}
        </div>
    )
}