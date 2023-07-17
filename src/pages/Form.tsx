import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { Box } from "../components/atoms/Box";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import { InputGroup } from "../components/atoms/InputGroup";
import { Label } from "../components/atoms/Label";
import { MainBox } from "../components/atoms/MainBox";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { Alert } from "../components/atoms/Alert";
import { MessageAlert } from "../components/atoms/MessageAlert";

const schema = object({
  name: string().required("Você precisa informar o seu nome."),
  surname: string().required("Você precisa informar o seu sobrenome."),
  cpf: string().required("Você precisa informar o seu CPF."),
  rg: string().required("Você precisa informar o seu RG."),
  birth: string().required("Você precisa informar a sua data de nascimento."),
  fathersName: string().required("Você precisa informar o nome do seu pai."),
  mothersName: string().required("Você precisa informar o nome da sua mãe."),
  telephone: string().required("Você precisa informar o seu telefone."),
  secondaryPhone: string().required(
    "Você precisa informar o seu telefone secundário."
  ),
  password: string().required("Você precisa informar a sua senha."),
  passwordConfirmation: string().required(
    "Você precisa informar a sua senha novamente."
  ),
  cep: string().required("Você precisa informar o seu CEP."),
  street: string().required("Você precisa informar a sua rua."),
  neighborhood: string().required("Você precisa informar a seu bairro."),
  city: string().required("Você precisa informar a sua cidade."),
  state: string().required("Você precisa informar o seu estado."),
  country: string().required("Você precisa informar o seu país."),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleForm(data: any) {
    console.log("Fui chamado!");
    console.log(data);
  }

  return (
    <DefaultTemplate>
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <MainBox title="Formulário" width="50%">
          <Box>
            <InputGroup title="Informações Pessoais" leftspacing="true">
              <Label htmlFor="name">Nome</Label>
              <Input
                required
                type="text"
                placeholder="Digite o seu nome"
                {...register("name")}
              />
              {errors?.name && (
                <MessageAlert>{errors?.name?.message}</MessageAlert>
              )}
              <Label htmlFor="surname">Sobrenome</Label>
              <Input
                type="text"
                placeholder="Digite o seu sobrenome"
                {...register("surname")}
              />
              {errors?.surname && (
                <MessageAlert>{errors?.surname?.message}</MessageAlert>
              )}
              <Label htmlFor="cpf">CPF</Label>
              <Input
                type="text"
                placeholder="Digite o seu CPF"
                {...register("cpf")}
              />
              {errors?.cpf && (
                <MessageAlert>{errors?.cpf?.message}</MessageAlert>
              )}
              <Label htmlFor="rg">RG</Label>
              <Input
                type="text"
                placeholder="Digite o seu RG"
                {...register("rg")}
              />
              {errors?.rg && <MessageAlert>{errors?.rg?.message}</MessageAlert>}
              <Label htmlFor="birth">Data de Nascimento</Label>
              <Input type="date" {...register("birth")} />
              {errors?.birth && (
                <MessageAlert>{errors?.birth?.message}</MessageAlert>
              )}
            </InputGroup>
            <InputGroup title="Filiação" leftspacing="true">
              <Label htmlFor="fathersName">Nome do Pai</Label>
              <Input
                type="text"
                placeholder="Digite o nome do seu pai"
                {...register("fathersName")}
              />
              {errors?.fathersName && (
                <MessageAlert>{errors?.fathersName?.message}</MessageAlert>
              )}
              <Label htmlFor="mothersName">Nome da Mãe</Label>
              <Input
                type="text"
                placeholder="Digite o nome da sua mãe"
                {...register("mothersName")}
              />
              {errors?.mothersName && (
                <MessageAlert>{errors?.mothersName?.message}</MessageAlert>
              )}
            </InputGroup>
            <InputGroup title="Contato" leftspacing="true">
              <Label htmlFor="telephone">Telefone (Celular)</Label>
              <Input
                type="text"
                placeholder="Digite o seu telefone"
                {...register("telephone")}
              />
              {errors?.telephone && (
                <MessageAlert>{errors?.telephone?.message}</MessageAlert>
              )}
              <Label htmlFor="secondaryPhone">Telefone Secundário</Label>
              <Input
                type="text"
                placeholder="Digite o seu telefone secundário"
                {...register("secondaryPhone")}
              />
              {errors?.secondaryPhone && (
                <MessageAlert>{errors?.secondaryPhone?.message}</MessageAlert>
              )}
            </InputGroup>
            <InputGroup title="Dados de Acesso" leftspacing="true">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                placeholder="Digite a sua senha"
                {...register("password")}
              />
              {errors?.password && (
                <MessageAlert>{errors?.password?.message}</MessageAlert>
              )}
              <Label htmlFor="passwordConfirmation">Confirmação de Senha</Label>
              <Input
                type="password"
                placeholder="Digite a sua senha novamente"
                {...register("passwordConfirmation")}
              />
              {errors?.passwordConfirmation && (
                <MessageAlert>
                  {errors?.passwordConfirmation?.message}
                </MessageAlert>
              )}
            </InputGroup>
            <InputGroup title="Endereço" leftspacing="true">
              <Label htmlFor="cep">CEP</Label>
              <Input
                type="text"
                placeholder="Digite o seu CEP"
                {...register("cep")}
              />
              {errors?.cep && (
                <MessageAlert>{errors?.cep?.message}</MessageAlert>
              )}
              <Label htmlFor="street">Rua</Label>
              <Input
                id="rua"
                type="text"
                placeholder="Digite a sua rua"
                {...register("street")}
              />
              {errors?.street && (
                <MessageAlert>{errors?.street?.message}</MessageAlert>
              )}
              <Label htmlFor="neighborhood">Bairro</Label>
              <Input
                type="text"
                placeholder="Digite o seu bairro"
                {...register("neighborhood")}
              />
              {errors?.neighborhood && (
                <MessageAlert>{errors?.neighborhood?.message}</MessageAlert>
              )}
              <Label htmlFor="city">Cidade</Label>
              <Input
                type="text"
                placeholder="Digite o sua cidade"
                {...register("city")}
              />
              {errors?.city && (
                <MessageAlert>{errors?.city?.message}</MessageAlert>
              )}
              <Label htmlFor="state">Estado</Label>
              <Input
                type="text"
                placeholder="Digite o seu estado"
                {...register("state")}
              />
              {errors?.state && (
                <MessageAlert>{errors?.state?.message}</MessageAlert>
              )}
              <Label htmlFor="country">País</Label>
              <Input
                type="text"
                placeholder="Digite o seu país"
                {...register("country")}
              />
              {errors?.country && (
                <MessageAlert>{errors?.country?.message}</MessageAlert>
              )}
              <Button type="submit" width="100%">
                Enviar
              </Button>
            </InputGroup>
          </Box>
        </MainBox>
      </form>
    </DefaultTemplate>
  );
};
