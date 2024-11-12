import { useMqtt } from "../hooks/UseMqtt";
import DashboardElement from "../components/DashboardElement";

function Dashboard() {
  // Obtener los mensajes de los topics suscritos
  const { messages } = useMqtt();

  let messageData = {};
  try {
    messageData = JSON.parse(messages["/test/message"] || "{}");
  } catch (error) {
    console.error("Error parsing message data:", error);
  }

  return (
    <main className="min-h-screen h-full bg-gray-50 text-gray-800 flex flex-col justify-center items-center p-8">
      <h1 className="font-bold text-4xl mb-10 text-gray-900">
        Monitoreo - Establo Cantón La Gloria
      </h1>
      <div className="w-full max-w-3xl flex flex-col gap-8 justify-center items-center">
        {/* Elementos para mostrar los mensajes de los topics suscritos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <DashboardElement title={"Dato"} value={messageData.counter} />
          <DashboardElement title={"Nivel de Gases"} value={messageData.gases_detected} />
          <DashboardElement title={"Humo Detectado"} value={messageData.smoke_detected ? "Sí" : "No"} />
          <DashboardElement title={"Temperatura"} value={`${messageData.temperature} °C`} />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;