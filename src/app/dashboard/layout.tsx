import { Navbar } from "@/components/navbar/navbar";
import { Sidebar } from "@/components/sidebar/sidebar";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen overflow-hidden">
  
        {/* Sidebar */}
        {/* <aside className="w-64 border-r bg-muted/40"> */}
          <Sidebar/>
        {/* </aside> */}
  
        {/* Right Section */}
        <div className="flex flex-1 flex-col">
  
          {/* Top Navbar */}
          {/* <header className="h-16 border-b flex items-center px-6"> */}
          <Navbar/>
          {/* </header> */}
  
          {/* Dynamic Page Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
  
        </div>
      </div>
    );
  }