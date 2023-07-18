import { useEffect } from "react";
import * as yup from "yup"; // Importa tudo do Yup
import { object, string, date } from "yup"; // Aqui estou importando apenas para usar de forma desestruturada
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { Label } from "../../atoms/Label";
import { MainBox } from "../../atoms/MainBox";
import { MessageAlert } from "../../atoms/MessageAlert";
import { viaCep } from "../../../services/viaCep";
import { useInformationForm } from "../../../context/FormContext";
import { is18OrOlder } from "../../../utils/is18OrOlder";
import { Topic } from "../../atoms/Topic";
import { InputGroup } from "../../atoms/InputGroup";

const schema = object({
  name: string().required("Você precisa informar o seu nome."),
  surname: string().required("Você precisa informar o seu sobrenome."),
  cpf: string()
    .required("Você precisa informar o seu CPF.")
    .max(11, "O CPF não pode conter mais de 11 dígitos."),
  rg: string()
    .required("Você precisa informar o seu RG.")
    .max(11, "O CPF não pode conter mais de 11 dígitos."),
  birth: date()
    .required("Você precisa informar a sua data de nascimento.")
    .min(new Date(1900, 0, 1), "A data de nascimento informada não é aceita.")
    .max(new Date(), "A data de nascimento informada não é aceita.")
    .typeError("A data de nascimento não está preenchida.")
    .test("Validação +18", "Você precisa ter pelo menos 18 anos.", is18OrOlder),
  fathersName: string().required("Você precisa informar o nome do seu pai."),
  mothersName: string().required("Você precisa informar o nome da sua mãe."),
  telephone: string()
    .required("Você precisa informar o seu telefone.")
    .max(13, "O telefone não pode conter mais de 13 dígitos."),
  secondaryPhone: string().max(
    13,
    "O telefone secundário não pode conter mais de 13 dígitos."
  ),
  password: string()
    .required("Você precisa informar a sua senha.")
    .min(4, "A senha deve conter ao mínimo 4 dígitos.")
    .max(20, "A senha não pode conter mais de 20 dígitos."),
  passwordConfirmation: string()
    .required("Você precisa informar a sua senha novamente.")
    .oneOf([yup.ref("password")], "As senhas não se coincidem."),
  cep: string()
    .required("Você precisa informar o seu CEP.")
    .max(8, "O CEP não pode conter mais de 8 dígitos."),
  street: string().required("Você precisa informar a sua rua."),
  neighborhood: string().required("Você precisa informar a seu bairro."),
  city: string().required("Você precisa informar a sua cidade."),
  state: string().required("Você precisa informar o seu estado."),
  country: string().required("Você precisa informar o seu país."),
});

export const InformationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });
  const { setFormState } = useInformationForm();

  const cep = watch("cep");

  useEffect(() => {
    if (cep && cep.length === 8) {
      viaCep(cep).then((data) => {
        if (data) {
          setValue("street", data.logradouro);
          setValue("neighborhood", data.bairro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
          setValue("country", "Brasil");
        }
      });
    }
  }, [cep]);

  function handleForm(data: any) {
    console.log("Dados enviados!");
    console.log(data);

    // Verifica se setFormState existe antes de chamá-lo
    if (setFormState) {
      setFormState(data);
    } else {
      console.error("setFormState is undefined!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)} noValidate>
        <MainBox title="Formulário" width="100%">
          <Box>
            <Topic title="Informações Pessoais">
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
                <Label htmlFor="surname">Sobrenome</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu sobrenome"
                  {...register("surname")}
                />
                {errors?.surname && (
                  <MessageAlert>{errors?.surname?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu CPF"
                  {...register("cpf")}
                />
                {errors?.cpf && (
                  <MessageAlert>{errors?.cpf?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="rg">RG</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu RG"
                  {...register("rg")}
                />
                {errors?.rg && (
                  <MessageAlert>{errors?.rg?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="birth">Data de Nascimento</Label>
                <Input type="date" {...register("birth")} />
                {errors?.birth && (
                  <MessageAlert>{errors?.birth?.message}</MessageAlert>
                )}
              </InputGroup>
            </Topic>
            <Topic title="Filiação">
              <InputGroup>
                <Label htmlFor="fathersName">Nome do Pai</Label>
                <Input
                  type="text"
                  placeholder="Digite o nome do seu pai"
                  {...register("fathersName")}
                />
                {errors?.fathersName && (
                  <MessageAlert>{errors?.fathersName?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
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
            </Topic>
            <Topic title="Contato">
              <InputGroup>
                <Label htmlFor="telephone">Telefone (Celular)</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu telefone"
                  {...register("telephone")}
                />
                {errors?.telephone && (
                  <MessageAlert>{errors?.telephone?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
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
            </Topic>
            <Topic title="Dados de Acesso">
              <InputGroup>
                <Label htmlFor="password">Senha</Label>
                <Input
                  type="password"
                  placeholder="Digite a sua senha"
                  {...register("password")}
                />
                {errors?.password && (
                  <MessageAlert>{errors?.password?.message}</MessageAlert>
                )}
              </InputGroup>{" "}
              <InputGroup>
                <Label htmlFor="passwordConfirmation">
                  Confirmação de Senha
                </Label>
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
            </Topic>
            <Topic title="Endereço">
              <InputGroup>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu CEP"
                  {...register("cep")}
                />
                {errors?.cep && (
                  <MessageAlert>{errors?.cep?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu bairro"
                  {...register("neighborhood")}
                />
                {errors?.neighborhood && (
                  <MessageAlert>{errors?.neighborhood?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  type="text"
                  placeholder="Digite o sua cidade"
                  {...register("city")}
                />
                {errors?.city && (
                  <MessageAlert>{errors?.city?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="state">Estado</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu estado"
                  {...register("state")}
                />
                {errors?.state && (
                  <MessageAlert>{errors?.state?.message}</MessageAlert>
                )}
              </InputGroup>
              <InputGroup>
                <Label htmlFor="country">País</Label>
                <Input
                  type="text"
                  placeholder="Digite o seu país"
                  {...register("country")}
                />
                {errors?.country && (
                  <MessageAlert>{errors?.country?.message}</MessageAlert>
                )}
              </InputGroup>
              <Button type="submit" width="100%">
                Enviar
              </Button>
            </Topic>
          </Box>
        </MainBox>
      </form>
    </>
  );
};
