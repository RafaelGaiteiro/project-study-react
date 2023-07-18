import { ReactNode, createContext, useContext, useState } from "react";

// Interface
interface IFormContext {
  name: string;
  surname: string;
  cpf: string;
  rg: string;
  birth: string;
  fathersName: string;
  mothersName: string;
  telephone: string;
  secondaryPhone: string;
  password: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  setFormState?: React.Dispatch<React.SetStateAction<IFormContext>>;
}

// Criação do Contexto
const FormContext = createContext<IFormContext>({} as IFormContext);

type FormProps = {
  children: ReactNode;
};

// Provedor: Componente com funcionalidades
const FormProvider = ({ children }: FormProps) => {
  const [formState, setFormState] = useState<IFormContext>({
    name: "",
    surname: "",
    cpf: "",
    rg: "",
    birth: "",
    fathersName: "",
    mothersName: "",
    telephone: "",
    secondaryPhone: "",
    password: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
  });

  return (
    <FormContext.Provider
      value={{
        ...formState,
        setFormState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Hook para acesso ao contexto
const useInformationForm = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useForm deve ser usado dentro de um FormProvider");
  }

  return context;
};

export { FormProvider, useInformationForm };
