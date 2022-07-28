import React from 'react';
import { i18n } from 'src/i18n';
import DomaineListFilter from 'src/view/domaine/list/DomaineListFilter';
import DomaineListTable from 'src/view/domaine/list/DomaineListTable';
import DomaineListToolbar from 'src/view/domaine/list/DomaineListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DomaineListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.domaine.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.domaine.list.title')}
        </PageTitle>

        <DomaineListToolbar />
        <DomaineListFilter />
        <DomaineListTable />
      </ContentWrapper>
    </>
  );
};

export default DomaineListPage;
