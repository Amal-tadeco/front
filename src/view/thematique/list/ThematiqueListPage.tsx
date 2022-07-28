import React from 'react';
import { i18n } from 'src/i18n';
import ThematiqueListFilter from 'src/view/thematique/list/ThematiqueListFilter';
import ThematiqueListTable from 'src/view/thematique/list/ThematiqueListTable';
import ThematiqueListToolbar from 'src/view/thematique/list/ThematiqueListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ThematiqueListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.thematique.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.thematique.list.title')}
        </PageTitle>

        <ThematiqueListToolbar />
        <ThematiqueListFilter />
        <ThematiqueListTable />
      </ContentWrapper>
    </>
  );
};

export default ThematiqueListPage;
