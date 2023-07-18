import { useInformationForm } from "../../../context/FormContext";
import { Box } from "../../atoms/Box";
import { MainBox } from "../../atoms/MainBox";
import { Text } from "../../atoms/Text";
import { Title } from "../../atoms/Title";

export const DisplayForm = () => {
  const {
    name,
    surname,
    cpf,
    rg,
    birth,
    fathersName,
    mothersName,
    telephone,
    secondaryPhone,
    cep,
    street,
    neighborhood,
    city,
    state,
    country,
  } = useInformationForm();

  const birthDate = new Date(birth);
  const formattedBirthDate = birthDate.toLocaleDateString("pt-BR");

  return (
    <MainBox title="Dados Cadastrados" width="100%">
      <Box>
        <Title>Informações pessoais</Title>
        <Text size="3">
          Nome completo: {name} {surname}
        </Text>
        <Text size="3">CPF: {cpf}</Text>
        <Text size="3">RG: {rg}</Text>
        <Text size="3">Data de Nascimento: {formattedBirthDate}</Text>
        <Title>Filiação</Title>
        <Text size="3">Nome do Pai: {fathersName}</Text>
        <Text size="3">Nome da Mãe: {mothersName}</Text>
        <Title>Contato</Title>
        <Text size="3">Telefone: {telephone}</Text>
        <Text size="3">Telefone Secundário: {secondaryPhone}</Text>
        <Title>Endereço</Title>
        <Text size="3">CEP: {cep}</Text>
        <Text size="3">Rua: {street}</Text>
        <Text size="3">Bairro: {neighborhood}</Text>
        <Text size="3">Cidade: {city}</Text>
        <Text size="3">Estado: {state}</Text>
        <Text size="3">País: {country}</Text>
      </Box>
    </MainBox>
  );
};
