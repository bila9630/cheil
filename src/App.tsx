import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { AdminModeProvider } from "@/contexts/AdminModeContext";
import { useIsMobile } from "@/hooks/use-mobile";
import Homepage from "./pages/Homepage";
import Duell from "./pages/Duell";
import Profile from "./pages/Profile";
import CourseLessons from "./pages/CourseLessons";
import Clan from "./pages/Clan";
import Shop from "./pages/Shop";
import Daily from "./pages/Daily";
import Analytics from "./pages/Analytics";
import Insights from "./pages/Insights";
import Performance from "./pages/Performance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {!isMobile && <AppSidebar />}
        <main className="flex-1 overflow-auto pb-20 md:pb-0">
          <Header />
          {children}
        </main>
        <BottomNav />
      </div>
    </SidebarProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AdminModeProvider>
          <Routes>
            <Route path="/" element={<Layout><Homepage /></Layout>} />
            <Route path="/duell" element={<Layout><Duell /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            <Route path="/course/:courseId" element={<Layout><CourseLessons /></Layout>} />
            <Route path="/clan" element={<Layout><Clan /></Layout>} />
            <Route path="/shop" element={<Layout><Shop /></Layout>} />
            <Route path="/daily" element={<Layout><Daily /></Layout>} />
            <Route path="/analytics" element={<Layout><Analytics /></Layout>} />
            <Route path="/insights" element={<Layout><Insights /></Layout>} />
            <Route path="/performance" element={<Layout><Performance /></Layout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AdminModeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
