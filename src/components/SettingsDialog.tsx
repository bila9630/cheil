import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "@/contexts/ThemeContext";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const { colorPalette, setColorPalette } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Color Palette</Label>
            <RadioGroup
              value={colorPalette}
              onValueChange={(value) => setColorPalette(value as "modern" | "classic")}
              className="grid gap-3"
            >
              <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="modern" id="modern" />
                <Label htmlFor="modern" className="flex-1 cursor-pointer">
                  <div className="font-medium">Modern</div>
                  <div className="text-sm text-muted-foreground">Deep blue, teal & amber palette</div>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(224, 56%, 39%)" }} />
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(176, 42%, 39%)" }} />
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(38, 62%, 56%)" }} />
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border border-border p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="classic" id="classic" />
                <Label htmlFor="classic" className="flex-1 cursor-pointer">
                  <div className="font-medium">Classic</div>
                  <div className="text-sm text-muted-foreground">Purple, violet & pink palette</div>
                  <div className="flex gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(262, 83%, 58%)" }} />
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(280, 65%, 60%)" }} />
                    <div className="w-6 h-6 rounded-full" style={{ background: "hsl(330, 80%, 60%)" }} />
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
