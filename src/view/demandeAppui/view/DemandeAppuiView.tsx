import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';

const DemandeAppuiView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.type) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.demandeAppui.fields.type')}
        >
          {i18n(
            `entities.demandeAppui.enumerators.type.${record.type}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.etat) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.demandeAppui.fields.etat')}
        >
          {i18n(
            `entities.demandeAppui.enumerators.etat.${record.etat}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.gouvernorat) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.demandeAppui.fields.gouvernorat')}
        >
          {i18n(
            `entities.demandeAppui.enumerators.gouvernorat.${record.gouvernorat}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.importance) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.demandeAppui.fields.importance')}
        >
          {i18n(
            `entities.demandeAppui.enumerators.importance.${record.importance}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.demandeAppui.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}

      {Boolean(record.supports) &&
        Boolean(record.supports.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.demandeAppui.fields.supports',
            )}
          >
            <FilesViewer value={record.supports} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default DemandeAppuiView;
