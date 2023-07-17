import React, { useContext, ReactNode, useState } from "react";

export interface IAlert {
  message: string;
  backgroundColor: string;
}

export const useAlert = () => {
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const showAlert = (alert: IAlert, timeout = 3000) => {
    // Limpar todos os alertas existentes antes de adicionar um novo
    setAlerts([alert]);
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((a) => a !== alert));
    }, timeout);
  };

  return {
    alerts,
    showAlert,
  };
};

interface AlertContextProps {
  alerts: IAlert[];
  showAlert: (alert: IAlert, timeout?: number) => void;
}

const AlertContext = React.createContext<AlertContextProps | undefined>(
  undefined
);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const { alerts, showAlert } = useAlert();

  return (
    <AlertContext.Provider value={{ alerts, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlertContext must be used within a AlertProvider");
  }
  return context;
};
