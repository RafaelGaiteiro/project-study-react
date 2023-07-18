import { Grid } from "../components/atoms/Grid";
import { DisplayForm } from "../components/molecules/DisplayForm";
import { InformationForm } from "../components/molecules/InformationForm";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

export const Form = () => {
  return (
    <DefaultTemplate>
      <Grid>
        <InformationForm />
        <DisplayForm />
      </Grid>
    </DefaultTemplate>
  );
};
