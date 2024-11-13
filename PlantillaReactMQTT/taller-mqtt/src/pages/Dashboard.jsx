import { useMqtt } from "../hooks/UseMqtt";
import DashboardElement from "../components/DashboardElement";

function Dashboard() {
 
  const { messages } = useMqtt();

  let messageData = {};
  try {
    messageData = JSON.parse(messages["/test/message"] || "{}");
  } catch (error) {
    console.error("Error parsing message data:", error);
  }

  // Limites para cambiar de color
  const gasThreshold = 600; 
  const temperatureThreshold = 35; 

  return (
    <main className="min-h-screen h-full bg-gray-50 text-gray-800 flex flex-col justify-center items-center p-8">
      <h1 className="font-bold text-4xl mb-10 text-gray-900">
        Establo - Cantón La Gloria
      </h1>
      <div className="w-full max-w-3xl flex flex-col gap-8 justify-center items-center">
        {/* Elementos para mostrar los datos de los sensores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <DashboardElement 
            title={"Dato"} 
            value={messageData.counter} 
            isAlert={false} 
          />
          <DashboardElement 
            title={"Nivel de Gases"} 
            value={messageData.gases_detected} 
            isAlert={messageData.gases_detected > gasThreshold} 
          />
          <DashboardElement 
            title={"Humo Detectado"} 
            value={messageData.smoke_detected ? "Sí" : "No"} 
            isAlert={messageData.smoke_detected} 
          />
          <DashboardElement 
            title={"Temperatura"} 
            value={`${messageData.temperature} °C`} 
            isAlert={messageData.temperature > temperatureThreshold} 
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;