//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const AnswersTitle = () => {
  const record = useRecordContext();
  return <span>Answers {record ? `"${record.content}"` : ''}</span>;
};

export const AnswersList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="answerId" />
      <ReferenceField source="questionId" reference="Questions" />
      <TextField source="content" />
      <TextField source="explanation" />
      <DateField source="dateCreated" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const AnswersEdit = () => (
  <Edit title={<AnswersTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="answerId" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="questionId" reference="Questions" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="explanation" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateCreated" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const AnswersCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="answerId" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="questionId" reference="Questions" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="explanation" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="dateCreated" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="questionId"
    label="questionId"
    reference="Questions"
    alwaysOn
  />,
  ,
  ,
  ,
];