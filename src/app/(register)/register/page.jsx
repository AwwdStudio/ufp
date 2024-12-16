"use client";
import React, { useState } from 'react';
import { User, Swords, Building2, Briefcase, Trophy, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import RegisterForm from "@/app/(register)/register/_ui/UserRegisterForm";
import FighterRegisterForm from "@/app/(register)/register/_ui/FighterRegisterForm";
import ClubRegisterForm from "@/app/(register)/register/_ui/ClubRegisterForm";
import OrganisationRegisterForm from "@/app/(register)/register/_ui/OrganisationRegisterForm";
import SponsorRegisterForm from "@/app/(register)/register/_ui/SponsorRegisterForm";

const accountTypes = [
    {
        id: 'user',
        label: 'User Account',
        description: 'Perfect for fans and enthusiasts',
        icon: User,
        component: RegisterForm
    },
    {
        id: 'fighter',
        label: 'Fighter Account',
        description: 'For professional and amateur fighters',
        icon: Swords,
        component: FighterRegisterForm
    },
    {
        id: 'club',
        label: 'Club Account',
        description: 'For gyms and training facilities',
        icon: Building2,
        component: ClubRegisterForm
    },
    {
        id: 'organisation',
        label: 'Organisation Account',
        description: 'For event organizers and promoters',
        icon: Briefcase,
        component: OrganisationRegisterForm
    },
    {
        id: 'sponsor',
        label: 'Sponsor Account',
        description: 'For brands and sponsors',
        icon: Trophy,
        component: SponsorRegisterForm
    }
];

export default function RegisterPage() {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState('user');

    // Get the current component based on selection
    const CurrentForm = accountTypes.find(type => type.id === selectedType)?.component || RegisterForm;

    return (
        <div className="min-h-screen bg-zinc-900 relative overflow-hidden pt-28">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900"/>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-950/20 rounded-full blur-[120px]"/>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px]"/>
            </div>

            {/* Home Button */}
            <div className="absolute top-8 right-8">
                <button
                    onClick={() => router.push('/')}
                    className="p-3 rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700
                    hover:bg-zinc-700/50 transition-all duration-200 group"
                >
                    <Home className="h-5 w-5 text-zinc-400 group-hover:text-zinc-300" />
                </button>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Join Our Community
                    </h1>
                    <p className="text-lg text-zinc-400">
                        Choose the type of account that best suits your needs
                    </p>
                </div>

                {/* Account Type Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
                    {accountTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = selectedType === type.id;

                        return (
                            <button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                className={`
                                    relative p-6 rounded-xl text-left transition-all duration-200
                                    ${isSelected
                                    ? 'bg-red-500 text-white shadow-lg scale-105 z-10'
                                    : 'bg-zinc-800/20 backdrop-blur-sm border border-zinc-800 text-zinc-100 hover:bg-zinc-800/40 hover:border-red-500/20'
                                }
                                `}
                            >
                                <div className={`
                                    inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4
                                    ${isSelected ? 'bg-red-600' : 'bg-red-500/10'}
                                `}>
                                    <Icon
                                        className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-red-500'}`}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className={`font-semibold ${isSelected ? 'text-white' : 'text-zinc-100'}`}>
                                        {type.label}
                                    </h3>
                                    <p className={`text-sm ${isSelected ? 'text-red-100' : 'text-zinc-400'}`}>
                                        {type.description}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Registration Form */}
                <div className="pb-12">
                    <CurrentForm />
                </div>
            </div>
        </div>
    );
}