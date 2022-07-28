import React from 'react';
import { i18n } from 'src/i18n';
import EvenementListFilter from 'src/view/evenement/list/EvenementListFilter';
import EvenementListTable from 'src/view/evenement/list/EvenementListTable';
import EvenementListToolbar from 'src/view/evenement/list/EvenementListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EvenementListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.evenement.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.evenement.list.title')}
        </PageTitle>

        <EvenementListToolbar />
        <EvenementListFilter />
        <EvenementListTable />
      </ContentWrapper>
    </>
  );
};

export default EvenementListPage;
