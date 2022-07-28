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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import evenementEnumerators from 'src/modules/evenement/evenementEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ThematiqueAutocompleteFormItem from 'src/view/thematique/autocomplete/ThematiqueAutocompleteFormItem';
import CategoryEvenementAutocompleteFormItem from 'src/view/categoryEvenement/autocomplete/CategoryEvenementAutocompleteFormItem';

const schema = yup.object().shape({
  thematique: yupFormSchemas.relationToOne(
    i18n('entities.evenement.fields.thematique'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.evenement.fields.categorie'),
    {
      required: true,
      options: evenementEnumerators.categorie,
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.evenement.fields.type'),
    {
      required: true,
      options: evenementEnumerators.type,
    },
  ),
  supports: yupFormSchemas.files(
    i18n('entities.evenement.fields.supports'),
    {
      required: true,
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.evenement.fields.description'),
    {
      required: true,
    },
  ),
  date: yupFormSchemas.date(
    i18n('entities.evenement.fields.date'),
    {
      required: true,
    },
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.evenement.fields.statut'),
    {
      required: true,
      options: evenementEnumerators.statut,
    },
  ),
  emplacement: yupFormSchemas.string(
    i18n('entities.evenement.fields.emplacement'),
    {
      required: true,
    },
  ),
});

const EvenementForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      thematique: record.thematique,
      category: record.category,
      type: record.type,
      supports: record.supports || [],
      description: record.description,
      date: record.date
        ? moment(record.date, 'YYYY-MM-DD')
        : null,
      statut: record.statut,
      emplacement: record.emplacement,
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
          <ThematiqueAutocompleteFormItem
            name="thematique"
            label={i18n(
              'entities.evenement.fields.thematique',
            )}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <CategoryEvenementAutocompleteFormItem
            name="category"
            label={i18n(
              'entities.evenement.fields.categorie',
            )}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />

          <SelectFormItem
            name="type"
            label={i18n('entities.evenement.fields.type')}
            options={evenementEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.evenement.enumerators.type.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="supports"
            label={i18n(
              'entities.evenement.fields.supports',
            )}
            required={true}
            storage={Storage.values.evenementSupports}
            max={undefined}
            formats={undefined}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.evenement.fields.description',
            )}
            required={true}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="date"
            label={i18n('entities.evenement.fields.date')}
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="statut"
            label={i18n('entities.evenement.fields.statut')}
            options={evenementEnumerators.statut.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.evenement.enumerators.statut.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <InputFormItem
            name="emplacement"
            label={i18n(
              'entities.evenement.fields.emplacement',
            )}
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

export default EvenementForm;
