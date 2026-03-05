import { voiceEmitter } from "@/lib/eventBus";

export async function GET() {

  const stream = new ReadableStream({
    start(controller) {

      const sendEvent = (data:any) => {
        controller.enqueue(
          `data: ${JSON.stringify(data)}\n\n`
        );
      };

      voiceEmitter.on("voice-update", sendEvent);

    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}