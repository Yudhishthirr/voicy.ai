"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type AudioPreviewDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  audioUrl: string | null;
  title?: string;
};

export function AudioPreviewDialog({
  open,
  onOpenChange,
  audioUrl,
  title = "Audio Preview",
}: AudioPreviewDialogProps) {
  if (!audioUrl) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>

        <DialogTitle>{title}</DialogTitle>

        <audio
          key={audioUrl} // ✅ reload when audio changes
          src={audioUrl}
          controls
          autoPlay
          preload="auto"
          className="w-full"
        />

      </DialogContent>
    </Dialog>
  );
}