import React from 'react';
import { i18n } from 'src/i18n';
import CategoryEvenementListFilter from 'src/view/categoryEvenement/list/CategoryEvenementListFilter';
import CategoryEvenementListTable from 'src/view/categoryEvenement/list/CategoryEvenementListTable';
import CategoryEvenementListToolbar from 'src/view/categoryEvenement/list/CategoryEvenementListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const CategoryEvenementListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryEvenement.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.categoryEvenement.list.title')}
        </PageTitle>

        <CategoryEvenementListToolbar />
        <CategoryEvenementListFilter />
        <CategoryEvenementListTable />
      </ContentWrapper>
    </>
  );
};

export default CategoryEvenementListPage;
