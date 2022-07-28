import React from 'react';
import { i18n } from 'src/i18n';
import EspaceArtistiqueListFilter from 'src/view/espaceArtistique/list/EspaceArtistiqueListFilter';
import EspaceArtistiqueListTable from 'src/view/espaceArtistique/list/EspaceArtistiqueListTable';
import EspaceArtistiqueListToolbar from 'src/view/espaceArtistique/list/EspaceArtistiqueListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const EspaceArtistiqueListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.espaceArtistique.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.espaceArtistique.list.title')}
        </PageTitle>

        <EspaceArtistiqueListToolbar />
        <EspaceArtistiqueListFilter />
        <EspaceArtistiqueListTable />
      </ContentWrapper>
    </>
  );
};

export default EspaceArtistiqueListPage;
