import { useMqtt } from "../hooks/UseMqtt";
import DashboardElement from "../components/DashboardElement";
import DashboardForm from "../components/DashboardPublishForm";

function Dashboard() {
  // Obtener los mensajes de los topics suscritos
  const { messages } = useMqtt();

  let messageData = {};
  try {
    messageData = JSON.parse(messages["/test/message"] || "{}");
  } catch (error) {
    console.error("Error parsing message data:", error);
  }

  console.log("Mensajes recibidos:", messages); // Agregar este log para depuración

  return (
    <main className="min-h-[100dvh] h-full bg-slate-900 text-slate-100 flex flex-col justify-center items-center gap-6 p-4">
      <h1 className="font-bold text-xl">Taller MQTT</h1>
      <div className="w-full max-w-2xl flex flex-col gap-10 justify-center items-center">
        {/* Formulario para publicar mensajes */}
        <DashboardForm topic="/test/message" label="Message"/>

        {/* Elementos para mostrar los mensajes de los topics suscritos */}
        <div className="flex flex-wrap gap-6 w-full justify-center items-center">
          <DashboardElement title={"Contador"} value={messageData.counter} />
          <DashboardElement title={"Nivel de Gases"} value={messageData.gases_detected} />
          <DashboardElement title={"Humo Detectado"} value={messageData.smoke_detected ? "Sí" : "No"} />
          <DashboardElement title={"Temperatura"} value={`${messageData.temperature} °C`} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;