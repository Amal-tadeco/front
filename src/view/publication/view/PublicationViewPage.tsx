import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/publication/view/publicationViewActions';
import selectors from 'src/modules/publication/view/publicationViewSelectors';
import PublicationView from 'src/view/publication/view/PublicationView';
import PublicationViewToolbar from 'src/view/publication/view/PublicationViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const PublicationPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.publication.menu'), '/publication'],
          [i18n('entities.publication.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.publication.view.title')}
        </PageTitle>

        <PublicationViewToolbar match={match} />

        <PublicationView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default PublicationPage;
