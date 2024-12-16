
import {Skeleton} from "@/components/ui/skeleton";



export function DashboardHeaderLoading() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
                <Skeleton className="w-16 h-16 rounded-full" />
                <div>
                    <Skeleton className="h-8 w-64 mb-2" />
                    <Skeleton className="h-4 w-32" />
                </div>
            </div>
            <div className="flex gap-3">
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-28" />
            </div>
        </div>
    );
}

export function QuickStatsLoading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((index) => (
                <div
                    key={index}
                    className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <Skeleton className="h-4 w-24 mb-2" />
                            <Skeleton className="h-8 w-16" />
                        </div>
                        <Skeleton className="h-6 w-24" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function TrendingFightsLoading() {
    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-9 w-24" />
            </div>
            <div className="space-y-4">
                {[1, 2].map((index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg"
                    >
                        <div>
                            <Skeleton className="h-5 w-32 mb-2" />
                            <Skeleton className="h-4 w-48 mb-2" />
                            <Skeleton className="h-4 w-36" />
                        </div>
                        <div className="text-right">
                            <Skeleton className="h-6 w-24 mb-2" />
                            <div className="flex items-center justify-end gap-4">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function PopularFightersLoading() {
    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-9 w-32" />
            </div>
            <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-zinc-800/40 rounded-lg"
                    >
                        <div className="flex items-center gap-4">
                            <Skeleton className="w-12 h-12 rounded-full" />
                            <div>
                                <Skeleton className="h-5 w-32 mb-2" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        </div>
                        <div className="text-right">
                            <Skeleton className="h-5 w-16 mb-2" />
                            <Skeleton className="h-6 w-16" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function CommunityActivityLoading() {
    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <Skeleton className="h-6 w-40 mb-6" />
            <div className="space-y-6">
                {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-start gap-4">
                        <Skeleton className="w-8 h-8 rounded-lg" />
                        <div className="flex-1">
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                    </div>
                ))}
            </div>
            <Skeleton className="h-10 w-full mt-6" />
        </div>
    );
}

export function UserActivityLoading() {
    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-12" />
            </div>
            <div className="space-y-4">
                {[1, 2].map((index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-zinc-800/40 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-4 h-4" />
                            <Skeleton className="h-4 w-24" />
                        </div>
                        <Skeleton className="h-6 w-12" />
                    </div>
                ))}
            </div>
        </div>
    );
}