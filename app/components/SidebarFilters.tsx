"use client";

import React from "react";

type Props = {
  title?: string;
  searchLabel?: string;
  locationLabel?: string;
  searchValue: string;
  onSearchChange: (v: string) => void;
  locationValue: string;
  onLocationChange: (v: string) => void;
  count: number;
  accent?: "blue" | "indigo" | "green";
};

const accentMap: Record<string, { ring: string; badgeBg: string; badgeText: string }> = {
  blue: { ring: "focus:ring-2 focus:ring-blue-600", badgeBg: "bg-blue-50", badgeText: "text-blue-600" },
  indigo: { ring: "focus:ring-2 focus:ring-indigo-600", badgeBg: "bg-indigo-50", badgeText: "text-indigo-600" },
  green: { ring: "focus:ring-2 focus:ring-green-600", badgeBg: "bg-green-50", badgeText: "text-green-600" },
};

export default function SidebarFilters({
  title = "Filters",
  searchLabel = "Search",
  locationLabel = "Location",
  searchValue,
  onSearchChange,
  locationValue,
  onLocationChange,
  count,
  accent = "blue",
}: Props) {
  const accentClasses = accentMap[accent] || accentMap.blue;

  return (
    <div className="lg:col-span-1">
      <aside className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-slate-800 p-6 sticky top-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">{title}</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{searchLabel}</label>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none ${accentClasses.ring}`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{locationLabel}</label>
            <input
              type="text"
              placeholder="City or Remote"
              value={locationValue}
              onChange={(e) => onLocationChange(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:outline-none ${accentClasses.ring}`}
            />
          </div>

          <div className={`${accentClasses.badgeBg} dark:bg-opacity-10 rounded-lg p-4`}>
            <p className="text-sm text-gray-600 dark:text-gray-400">Showing <span className={`font-bold ${accentClasses.badgeText} dark:text-opacity-90`}>{count}</span></p>
          </div>
        </div>
      </aside>
    </div>
  );
}
