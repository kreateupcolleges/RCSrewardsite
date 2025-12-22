
import React, { useState, useMemo } from 'react';
import { ActivityRow } from '../types';
import { ChevronLeft, ChevronRight, Activity, CheckCircle2 } from 'lucide-react';
import { THEME } from '../theme';

interface Props {
  rows: ActivityRow[];
  totalAvailable?: number; // Total activities in the scope
}

const ActivityTable: React.FC<Props> = ({ rows, totalAvailable }) => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(rows.length / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const visibleRows = rows.slice(startIndex, startIndex + pageSize);
  const totalPoints = rows.reduce((acc, r) => acc + r.points, 0);

  // Statistics
  const stats = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    rows.forEach(r => {
      categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
    });
    return {
      participatedCount: rows.length,
      categories: Object.keys(categoryCounts).length
    };
  }, [rows]);

  // Reset page if data changes
  React.useEffect(() => setCurrentPage(1), [rows]);

  return (
    <div className="space-y-4 mb-8">
      {/* Participation Summary Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400">
            <Activity size={24} />
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Activities Count</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {stats.participatedCount} <span className="text-sm font-normal text-gray-400">Participated</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Reward Points</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{totalPoints}</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
            <Activity size={24} />
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Categories Explored</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{stats.categories}</div>
          </div>
        </div>
      </div>

      <div className={THEME.card.base + " overflow-hidden"}>
        <div className="overflow-x-auto p-6">
          <table className="min-w-full table-auto border border-gray-200 divide-y divide-gray-200 rounded-xl shadow-sm">
            <thead className={THEME.table.header}>
              <tr>
                <th className="px-4 py-3 text-left">S.No</th>
                <th className="px-4 py-3 text-left">Activity Name</th>
                <th className="px-4 py-3 text-left">Date Start</th>
                <th className="px-4 py-3 text-left">Date End</th>
                <th className="px-4 py-3 text-left">For Who</th>
                <th className="px-4 py-3 text-left">Year</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Max Points</th>
                <th className="px-4 py-3 text-left">Your Points</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visibleRows.length > 0 ? (
                visibleRows.map((row, idx) => (
                  <tr key={idx} className={THEME.table.rowHover}>
                    <td className="px-4 py-3 text-gray-500">{startIndex + idx + 1}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.displayName}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">{row.dateStart}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-gray-600">{row.dateEnd}</td>
                    <td className="px-4 py-3 text-gray-600">{row.forWho}</td>
                    <td className="px-4 py-3 text-gray-600">{row.year}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 text-[10px] font-bold bg-gray-100 text-gray-600 rounded uppercase">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{row.maxPoints}</td>
                    <td className={"px-4 py-3 font-bold " + THEME.primaryText}>{row.points}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-gray-500">
                    No activity records found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot className="bg-gray-50 font-bold text-indigo-900 border-t-2 border-indigo-100">
               <tr>
                 <td colSpan={8} className="px-4 py-3 text-right text-gray-600 uppercase tracking-wider text-xs">Total Reward Points Accumulated:</td>
                 <td className={"px-4 py-3 text-lg " + THEME.primaryText}>{totalPoints}</td>
               </tr>
            </tfoot>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className={THEME.textMuted + " text-sm"}>Rows per page:</span>
              <select
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}
                className="border border-gray-300 rounded px-2 py-1 bg-white text-gray-900"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>

            <span className={THEME.textMuted + " text-sm"}>
              Showing {rows.length === 0 ? 0 : startIndex + 1}-{Math.min(startIndex + pageSize, rows.length)} of {rows.length}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={THEME.button.pagination}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={THEME.button.pagination}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTable;
