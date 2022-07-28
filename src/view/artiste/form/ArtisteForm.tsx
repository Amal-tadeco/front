import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import EspaceArtistiqueAutocompleteFormItem from 'src/view/espaceArtistique/autocomplete/EspaceArtistiqueAutocompleteFormItem';
import DomaineAutocompleteFormItem from 'src/view/domaine/autocomplete/DomaineAutocompleteFormItem';

const schema = yup.object().shape({
  nom: yupFormSchemas.string(
    i18n('entities.artiste.fields.nom'),
    {
      required: true,
    },
  ),
  prenom: yupFormSchemas.string(
    i18n('entities.artiste.fields.prenom'),
    {
      required: true,
    },
  ),
  domaine: yupFormSchemas.relationToOne(
    i18n('entities.artiste.fields.domaine'),
    {
      required: false,
    },
  ),
  adresse: yupFormSchemas.string(
    i18n('entities.artiste.fields.adresse'),
    {
      required: true,
    },
  ),
  email: yupFormSchemas.string(
    i18n('entities.artiste.fields.email'),
    {
      required: true,
    },
  ),
  phoneNumber: yupFormSchemas.integer(
    i18n('entities.artiste.fields.phoneNumber'),
    {},
  ),
  espaceArtistique: yupFormSchemas.relationToOne(
    i18n('entities.artiste.fields.espaceArtistique'),
    {},
  ),
});

const ArtisteForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      nom: record.nom,
      prenom: record.prenom,
      domaine: record.domaine,
      adresse: record.adresse,
      email: record.email,
      phoneNumber: record.phoneNumber,
      espaceArtistique: record.espaceArtistique,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="nom"
            label={i18n('entities.artiste.fields.nom')}
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="prenom"
            label={i18n('entities.artiste.fields.prenom')}
            required={true}
            layout={formItemLayout}
          />

          <InputFormItem
            name="adresse"
            label={i18n('entities.artiste.fields.adresse')}
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="email"
            label={i18n('entities.artiste.fields.email')}
            required={true}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="phoneNumber"
            label={i18n(
              'entities.artiste.fields.phoneNumber',
            )}
            required={false}
            layout={formItemLayout}
          />
          <DomaineAutocompleteFormItem
            name="domaine"
            label={i18n('entities.artiste.fields.domaine')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <EspaceArtistiqueAutocompleteFormItem
            name="espaceArtistique"
            label={i18n(
              'entities.artiste.fields.espaceArtistique',
            )}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ArtisteForm;
