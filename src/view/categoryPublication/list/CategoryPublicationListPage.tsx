import React from 'react';
import { i18n } from 'src/i18n';
import CategoryPublicationListFilter from 'src/view/categoryPublication/list/CategoryPublicationListFilter';
import CategoryPublicationListTable from 'src/view/categoryPublication/list/CategoryPublicationListTable';
import CategoryPublicationListToolbar from 'src/view/categoryPublication/list/CategoryPublicationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryPublicationListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryPublication.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categoryPublication.list.title')}
        </PageTitle>

        <CategoryPublicationListToolbar />
        <CategoryPublicationListFilter />
        <CategoryPublicationListTable />
      </ContentWrapper>
    </>
  );
};

export default CategoryPublicationListPage;
