import { Box } from "../components/atoms/Box";
import { Button } from "../components/atoms/Button";
import { Input } from "../components/atoms/Input";
import { InputGroup } from "../components/atoms/InputGroup";
import { Label } from "../components/atoms/Label";
import { MainBox } from "../components/atoms/MainBox";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Form = () => {
  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <DefaultTemplate>
      <form onSubmit={(e) => handleForm(e)}>
        <MainBox title="Formulário" width="50%">
          <Box>
            <InputGroup title="Informações Pessoais">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                required
                type="text"
                placeholder="Digite o seu nome"
              />
              <Label htmlFor="sobrenome">Sobrenome</Label>
              <Input
                id="sobrenome"
                type="text"
                placeholder="Digite o seu sobrenome"
              />
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" type="text" placeholder="Digite o seu CPF" />
              <Label htmlFor="rg">RG</Label>
              <Input id="rg" type="text" placeholder="Digite o seu RG" />
              <Label htmlFor="dataDeNascimento">Data de Nascimento</Label>
              <Input id="dataDeNascimento" type="date" />
            </InputGroup>
            <InputGroup title="Filiação">
              <Label htmlFor="nomeDoPai">Nome do Pai</Label>
              <Input
                id="nomeDoPai"
                type="text"
                placeholder="Digite o nome do seu pai"
              />
              <Label htmlFor="nomeDaMae">Nome da Mãe</Label>
              <Input
                id="nomeDaMae"
                type="text"
                placeholder="Digite o nome da sua mãe"
              />
            </InputGroup>
            <InputGroup title="Contato">
              <Label htmlFor="telefone">Telefone (Celular)</Label>
              <Input
                id="telefone"
                type="text"
                placeholder="Digite o seu telefone"
              />
              <Label htmlFor="telefoneSecundario">Telefone Secundário</Label>
              <Input
                id="telefoneSecundario"
                type="text"
                placeholder="Digite o seu telefone secundário"
              />
            </InputGroup>
            <InputGroup title="Dados de Acesso">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="text" placeholder="Digite a sua senha" />
              <Label htmlFor="confirmacaoDeSenha">Confirmação de Senha</Label>
              <Input
                id="confirmacaoDeSenha"
                type="text"
                placeholder="Digite a sua senha novamente"
              />
            </InputGroup>
            <InputGroup title="Endereço">
              <Label htmlFor="cep">CEP</Label>
              <Input id="cep" type="text" placeholder="Digite o seu CEP" />
              <Label htmlFor="rua">Rua</Label>
              <Input id="rua" type="text" placeholder="Digite a sua rua" />
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                type="text"
                placeholder="Digite o seu bairro"
              />
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                type="text"
                placeholder="Digite o sua cidade"
              />
              <Label htmlFor="estado">Estado</Label>
              <Input
                id="estado"
                type="text"
                placeholder="Digite o seu estado"
              />
              <Label htmlFor="pais">País</Label>
              <Input id="pais" type="text" placeholder="Digite o seu país" />
            </InputGroup>
            <Button type="submit">Enviar</Button>
          </Box>
        </MainBox>
      </form>
    </DefaultTemplate>
  );
};
