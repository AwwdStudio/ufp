import React from "react";

export default function FighterAchievements({achievements}) {

    return (
        <div className="bg-zinc-800/20 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Career Highlights</h3>
            <div className="space-y-4">
                {achievements.map((achievement, index) => {
                    const AchievementIcon = achievement.icon;
                    return (
                        <div key={index} className="flex items-center gap-3">
                            <div className="p-2 bg-red-500/10 rounded-lg">
                                {/*<AchievementIcon className="w-4 h-4 text-red-500" />*/}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">{achievement.title}</p>
                                <p className="text-xs text-zinc-400">{achievement.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}