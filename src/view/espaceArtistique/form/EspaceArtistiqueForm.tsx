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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ArtisteAutocompleteFormItem from 'src/view/artiste/autocomplete/ArtisteAutocompleteFormItem';

const schema = yup.object().shape({
  artiste: yupFormSchemas.relationToOne(
    i18n('entities.espaceArtistique.fields.artiste'),
    {
      "required": true
    },
  ),
  supports: yupFormSchemas.files(
    i18n('entities.espaceArtistique.fields.supports'),
    {},
  ),
  titre: yupFormSchemas.string(
    i18n('entities.espaceArtistique.fields.titre'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.espaceArtistique.fields.description'),
    {
      "required": true
    },
  ),
});

const EspaceArtistiqueForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      artiste: record.artiste,
      supports: record.supports || [],
      titre: record.titre,
      description: record.description,
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
          <ArtisteAutocompleteFormItem  
            name="artiste"
            label={i18n('entities.espaceArtistique.fields.artiste')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="supports"
            label={i18n('entities.espaceArtistique.fields.supports')}
            required={false}
            storage={Storage.values.espaceArtistiqueSupports}
            max={undefined}
            formats={undefined}
            layout={formItemLayout}
          />
          <InputFormItem
            name="titre"
            label={i18n('entities.espaceArtistique.fields.titre')}  
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="description"
            label={i18n('entities.espaceArtistique.fields.description')}  
            required={true}
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

export default EspaceArtistiqueForm;
