import React from 'react';
import { i18n } from 'src/i18n';
import PublicationListFilter from 'src/view/publication/list/PublicationListFilter';
import PublicationListTable from 'src/view/publication/list/PublicationListTable';
import PublicationListToolbar from 'src/view/publication/list/PublicationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PublicationListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.publication.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.publication.list.title')}
        </PageTitle>

        <PublicationListToolbar />
        <PublicationListFilter />
        <PublicationListTable />
      </ContentWrapper>
    </>
  );
};

export default PublicationListPage;
