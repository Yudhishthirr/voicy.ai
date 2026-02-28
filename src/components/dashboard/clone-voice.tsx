
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent } from "@/components/ui/card";


export function CloneVoice() {
  return (
    <div className="lg:col-span-1">
    <Card className="border-slate-200 shadow-sm rounded-2xl bg-white flex flex-col h-full">
      
      <div className="p-6 pb-4 flex items-center justify-between border-b border-transparent">
        <h2 className="text-lg font-bold text-slate-900">Cloned Voice List</h2>
        <Badge variant="secondary" className="bg-violet-100 text-violet-700 hover:bg-violet-100 font-bold px-2.5 py-0.5 rounded-md text-xs">
          3 Models
        </Badge>
      </div>
      
      <CardContent className="p-6 pt-0 flex-1 flex flex-col">
        
        <div className="flex flex-col gap-6">
          
          {/* Voice Model Item 1 */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border border-slate-100 shadow-sm shrink-0">
              {/* Using Pravatar for realistic demo images like your screenshot */}
              <AvatarImage src="https://i.pravatar.cc/150?u=saipallavi" alt="Sai Pallavi" className="object-cover" />
              <AvatarFallback className="bg-slate-100 font-bold text-slate-600">SP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm">Sai Pallavi</h4>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase">Ready</span>
                </div>
                <span className="text-xs text-slate-400">Created 2d ago</span>
              </div>
            </div>
          </div>

          {/* Voice Model Item 2 */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border border-slate-100 shadow-sm shrink-0">
              <AvatarImage src="https://i.pravatar.cc/150?u=rashmika" alt="Rashmika Mandanna" className="object-cover" />
              <AvatarFallback className="bg-slate-100 font-bold text-slate-600">RM</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm">Rashmika Mandanna</h4>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span className="text-[10px] font-bold tracking-wider text-amber-600 uppercase">Processing</span>
                </div>
                <span className="text-xs text-slate-400">Created 1h ago</span>
              </div>
            </div>
          </div>

          {/* Voice Model Item 3 */}
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border border-slate-100 shadow-sm shrink-0">
              <AvatarImage src="https://i.pravatar.cc/150?u=robert" alt="Robert Downey Jr." className="object-cover" />
              <AvatarFallback className="bg-slate-100 font-bold text-slate-600">RD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-sm">Robert Downey Jr.</h4>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold tracking-wider text-emerald-600 uppercase">Ready</span>
                </div>
                <span className="text-xs text-slate-400">Created 5d ago</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer text pinned to bottom */}
        <div className="mt-auto pt-8">
          <div className="border-t border-slate-100 pt-5 text-center">
            <p className="text-xs text-slate-400 font-medium">
              You have 2 voice clone slots remaining.{' '}
              <a href="#" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                Go Unlimited
              </a>
            </p>
          </div>
        </div>

      </CardContent>
    </Card>
  </div>
  )
}
