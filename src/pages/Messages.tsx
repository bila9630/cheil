import { ArrowLeft, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router-dom";

interface Profile {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  online: boolean;
}

const mockProfiles: Profile[] = [
  { id: "1", name: "Alex Johnson", lastMessage: "Hey, how are you?", timestamp: "2m ago", online: true },
  { id: "2", name: "Sarah Miller", lastMessage: "Let's practice together!", timestamp: "1h ago", online: true },
  { id: "3", name: "Mike Chen", lastMessage: "Great match!", timestamp: "3h ago", online: false },
  { id: "4", name: "Emma Davis", lastMessage: "Thanks for the tips", timestamp: "1d ago", online: false },
  { id: "5", name: "James Wilson", lastMessage: "See you tomorrow", timestamp: "2d ago", online: false },
];

export default function Messages() {
  const location = useLocation();
  const [selectedChat, setSelectedChat] = useState<Profile | null>(null);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    // Check if we have a profileId from navigation state
    if (location.state?.profileId) {
      const profile = mockProfiles.find(p => p.id === location.state.profileId);
      if (profile) {
        setSelectedChat(profile);
      }
    }
  }, [location.state]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile List */}
        {!selectedChat && (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Messages</h1>
            {mockProfiles.map((profile) => (
              <Card
                key={profile.id}
                className="p-4 hover:bg-accent cursor-pointer transition-colors"
                onClick={() => setSelectedChat(profile)}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="" alt={profile.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    {profile.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-lg truncate">{profile.name}</h3>
                      <span className="text-xs text-muted-foreground">{profile.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{profile.lastMessage}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Chat Room */}
        {selectedChat && (
          <div className="space-y-4">
            {/* Chat Header */}
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedChat(null)}
                >
                  <ArrowLeft className="h-6 w-6" />
                </Button>
                <Avatar className="w-12 h-12">
                  <AvatarImage src="" alt={selectedChat.name} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {selectedChat.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="font-semibold text-xl">{selectedChat.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedChat.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </Card>

            {/* Messages Area */}
            <Card className="h-[500px] flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                      <p className="text-sm">{selectedChat.lastMessage}</p>
                      <span className="text-xs text-muted-foreground mt-1 block">
                        {selectedChat.timestamp}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%]">
                      <p className="text-sm">That sounds great!</p>
                      <span className="text-xs opacity-70 mt-1 block">Just now</span>
                    </div>
                  </div>
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
