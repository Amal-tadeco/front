import React from 'react';
import { i18n } from 'src/i18n';
import DemandeAppuiListFilter from 'src/view/demandeAppui/list/DemandeAppuiListFilter';
import DemandeAppuiListTable from 'src/view/demandeAppui/list/DemandeAppuiListTable';
import DemandeAppuiListToolbar from 'src/view/demandeAppui/list/DemandeAppuiListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DemandeAppuiListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.demandeAppui.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.demandeAppui.list.title')}
        </PageTitle>

        <DemandeAppuiListToolbar />
        <DemandeAppuiListFilter />
        <DemandeAppuiListTable />
      </ContentWrapper>
    </>
  );
};

export default DemandeAppuiListPage;
