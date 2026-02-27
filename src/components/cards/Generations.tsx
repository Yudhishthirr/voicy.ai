import { FileAudio, Play } from "lucide-react";

export const GenerationsTable = () => (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">File Name</th>
            <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Voice Model</th>
            <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Length</th>
            <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[
            { name: 'marketing_vlog_01.mp3', model: 'Ethan (American)', length: '03:42' },
            { name: 'podcast_intro_final.wav', model: 'Sophia (British)', length: '00:54' },
            { name: 'explainer_video_draft.mp3', model: 'Liam (Deep)', length: '05:12' },
          ].map((file, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 bg-slate-100 rounded flex items-center justify-center">
                    <FileAudio className="text-primary" size={16} />
                  </div>
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-slate-500">{file.model}</td>
              <td className="px-6 py-4 text-sm text-slate-500">{file.length}</td>
              <td className="px-6 py-4 text-right">
                <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Play size={14} fill="currentColor" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
);
  