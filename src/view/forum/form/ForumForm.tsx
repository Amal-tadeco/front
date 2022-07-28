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
import forumEnumerators from 'src/modules/forum/forumEnumerators';

const schema = yup.object().shape({
  titre: yupFormSchemas.string(
    i18n('entities.forum.fields.titre'),
    {
      "required": true
    },
  ),
  sujet: yupFormSchemas.string(
    i18n('entities.forum.fields.sujet'),
    {
      "required": true
    },
  ),
  visibilite: yupFormSchemas.enumerator(
    i18n('entities.forum.fields.visibilite'),
    {
      "required": true,
      "options": forumEnumerators.visibilite
    },
  ),
  statut: yupFormSchemas.enumerator(
    i18n('entities.forum.fields.statut'),
    {
      "required": true,
      "options": forumEnumerators.statut
    },
  ),
});

const ForumForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      titre: record.titre,
      sujet: record.sujet,
      visibilite: record.visibilite,
      statut: record.statut,
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
            name="titre"
            label={i18n('entities.forum.fields.titre')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <TextAreaFormItem
            name="sujet"
            label={i18n('entities.forum.fields.sujet')}  
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="visibilite"
            label={i18n('entities.forum.fields.visibilite')}
            options={forumEnumerators.visibilite.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.forum.enumerators.visibilite.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="statut"
            label={i18n('entities.forum.fields.statut')}
            options={forumEnumerators.statut.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.forum.enumerators.statut.${value}`,
                ),
              }),
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

export default ForumForm;
