import React from 'react';
import { i18n } from 'src/i18n';
import ArtisteListFilter from 'src/view/artiste/list/ArtisteListFilter';
import ArtisteListTable from 'src/view/artiste/list/ArtisteListTable';
import ArtisteListToolbar from 'src/view/artiste/list/ArtisteListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ArtisteListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.artiste.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.artiste.list.title')}
        </PageTitle>

        <ArtisteListToolbar />
        <ArtisteListFilter />
        <ArtisteListTable />
      </ContentWrapper>
    </>
  );
};

export default ArtisteListPage;
