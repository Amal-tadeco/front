import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/forum/list/forumListActions';
import destroyActions from 'src/modules/forum/destroy/forumDestroyActions';
import selectors from 'src/modules/forum/list/forumListSelectors';
import destroySelectors from 'src/modules/forum/destroy/forumDestroySelectors';
import forumSelectors from 'src/modules/forum/forumSelectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';


const ForumListTable = (props) => {
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    forumSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    forumSelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.forum.fields.titre'),
        sorter: true,
        dataIndex: 'titre',
      },
      {
        title: i18n('entities.forum.fields.sujet'),
        sorter: true,
        dataIndex: 'sujet',
      },
      {
        title: i18n('entities.forum.fields.visibilite'),
        sorter: true,
        dataIndex: 'visibilite',
        render: (value) =>
          value
            ? i18n(
                `entities.forum.enumerators.visibilite.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.forum.fields.statut'),
        sorter: true,
        dataIndex: 'statut',
        render: (value) =>
          value
            ? i18n(
                `entities.forum.enumerators.statut.${value}`,
              )
            : null,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/forum/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/forum/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default ForumListTable;
